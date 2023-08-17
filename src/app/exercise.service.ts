import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, filter, first, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) { 
    this.http.get<Group[]>('assets/json/exercises.json')
      .subscribe(groups => {
        this.groups$.next(groups);
      });
  }

  groups$: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);

  getGroups() : Observable<Group[]> {
    return this.groups$;
  }
  
  UNKNOWN_GROUP : ExerciseGroup = { group: undefined, exercises: [] };

  exercises$ : BehaviorSubject<ExerciseGroup> = new BehaviorSubject<ExerciseGroup>(this.UNKNOWN_GROUP); 

  readExercises( groupId: string ) {
    if (groupId) {
      this.getGroups().pipe(
        map(groups => groups.find( g => g.id ===groupId ) || { id: '', name: 'unkown'} ),
        mergeMap(g => this.http.get<Exercise[]>('assets/json/' + g.id + ".json")
                      .pipe(map(e => <ExerciseGroup>{ group: g, exercises: e}))),
        first()
      ).subscribe(dataExercises => this.exercises$.next(dataExercises));
    }
  }

  getExercises() : Observable<ExerciseGroup> {
    return this.exercises$;
  }
  
  getNumExercises(count : number) : Observable<ExerciseGroup> {
    return this.getExercises()
    .pipe(
      map( eg => <ExerciseGroup>{ group: eg.group, exercises: this.getRandom(eg.exercises, count) } ), 
      first());
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
  id: string; 
  name: string;
  descr?: string;
}

export interface ExerciseGroup {
  group : Group | undefined;
  exercises : Exercise[];  
}