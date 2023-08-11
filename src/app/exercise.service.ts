import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, first, map, switchMap } from 'rxjs';

/*
this one will eventually load exercises from a server.
*/
@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) { 
    this.http.get<ExerciseGroup[]>('/assets/json/exercises.json')
      //.subscribe(group => this.groups$.next(group));
      .pipe(switchMap( data => {
        this.groups$.next(data);
        // at the moment we starting with the first defined group
        return this.http.get<Exercise[]>('/assets/json/' + data[0].data)
      }))
      .subscribe(dataExercises => this.exercises$.next(dataExercises));
  }

  groups$: BehaviorSubject<ExerciseGroup[]> = new BehaviorSubject<ExerciseGroup[]>([]);

  getGroups() : Observable<ExerciseGroup[]> {
    return this.groups$;
  }
  
  exercises$ : BehaviorSubject<Exercise[]> = new BehaviorSubject<Exercise[]>([]); 

  readExercises( data: string ) {
    this.http.get<Exercise[]>('/assets/json/' + data)
      .subscribe(dataExercises => this.exercises$.next(dataExercises));
  }

  getExercises() : Observable<Exercise[]> {
    return this.exercises$;
  }
  
  getNumExercises(count : number) : Observable<Exercise[]> {
    return this.getExercises()
    .pipe(
      map( exercises => this.getRandom(exercises, count)), 
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

export interface ExerciseGroup {
  name: string;
  data: string; 
}