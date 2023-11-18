import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, filter, first, from, map, mergeMap, of, switchMap, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) { 
    this.http.get<Group[]>('assets/exercises/exercises.json')
      .subscribe(groups => this.groups$.next(groups));
  }

  groups$: Subject<Group[]> = new ReplaySubject<Group[]>();

  getGroups() : Observable<Group[]> {
    return this.groups$;
  }
  
  UNKNOWN_GROUP : Group = { id: 'unknown', name: 'unknown' };

  UNKNOWN_EXERCISEGROUP : ExerciseGroup = { group: this.UNKNOWN_GROUP, exercises: [] };

  exercises$ : BehaviorSubject<ExerciseGroup> = new BehaviorSubject<ExerciseGroup>(this.UNKNOWN_EXERCISEGROUP); 

  readExercisesByFilter( groupFilter: (group: Group) => boolean) : Observable<ExerciseGroup> {
    return this.getGroups().pipe(
      first(),
      mergeMap(groups => from(groups)),
      filter(group => groupFilter(group)),
      mergeMap(group => this.http.get<Exercise[]>('assets/exercises/' + group.id + '.json').pipe(
        map(e => <ExerciseGroup>{ group: group, exercises: e})
      )),
    );
  }

  readExercises( groupId: string ) {
    if (groupId) {
      this.readExercisesByFilter ( group => group.id === groupId ).subscribe(
        dataExercises => this.exercises$.next(dataExercises)  
      );
    }
  }

  getExercises() : Observable<ExerciseGroup> {
    return this.exercises$;
  }
  
  getNumExercisesForGroup( exerciseGroup: ExerciseGroup, exercisesPerGroup: number ) : ExerciseGroup {
    return <ExerciseGroup>{ 
          group: exerciseGroup.group, 
          exercises: this.getRandom(exerciseGroup.exercises, exerciseGroup.group.testExercises || exercisesPerGroup) 
    }; 
  }

  getNumExercises() : Observable<ExerciseGroup> {
    return this.getExercises()
    .pipe(
      map( eg => this.getNumExercisesForGroup( eg, 4 ) ), 
      first()
    );
  }

  private getRandom(arr: Exercise[] , n: number) : Exercise[] {
    var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
    if (n > len) {
        return [];
    }
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
}

export interface Exercise {
  topic: string; 
  text: string;
  choice?: string[];
  solution: number;
}

export interface Group {
  class?: number; 
  level?: number; // Anforderungsebene 1 - 3 
  id: string; 
  name: string;
  descr?: string;
  logo?: string;
  testExercises?: number;
}

export interface ExerciseGroup {
  group : Group;
  exercises : Exercise[];  
}