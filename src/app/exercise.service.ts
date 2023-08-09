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
      .pipe(switchMap( data => {
        this.groups$.next(data);
        // at the moment we starting with the first defined group
        return this.http.get<Exercise[]>('/assets/json/' + data[0].data)
      }))
      .subscribe(dataExercises => this.exercises$.next(dataExercises));
  }

  /*
  math_exercises : Exercise[] = [
    {topic: "Vereinfache", text:"$x + 6a + 5x + 8a$", choice:[ "$5x^2 + 14a$", "$6x - 2a$", "$6x + 14a$" ], solution:2 },
    {topic: "Vereinfache", text:"$7x + 6a - 2b - 8a - 7x$", choice:[ "$- 2a - 2b$", "$- 2a - 9x$", "$- 2a - 2b - 7x$" ], solution:0 },
    {topic: "Vereinfache", text:"$3x + 6a - 2x - 8a$", choice:[ "$x - 2a$", "$5x - 2a$", "$x + 2a$" ], solution:0 },
    {topic: "Vereinfache", text:"$14y + 6a - 0.5x - 5a + 0.2x$", choice:[ "$14y + a - 0.25x$", "$14y + a - 0.3x$", "$14y + 5.5a - 0.3x$" ], solution:1 },
    {topic: "Vereinfache", text:"$\\frac{3}{4} x + \\frac{2}{3} a - 2x - \\frac{1}{3} a$", choice:[ 
        "$\\frac{5}{4} x + a$", "$-\\frac{5}{4} x + a$", "$-\\frac{5}{4} x + \\frac{1}{3} a$" ], solution:2 },
    {topic: "Vereinfache", text:"$10a + 3b - 7a - 2b$", choice:[ "$3a + 5b$", "$3a + b$", "$17a + 5b$" ], solution:1 },
    {topic: "Löse die Gleichung und gib den Wert von x an.", text:"$15x + 3 = 7x - 5$", solution:-1 },
    {topic: "Löse die Gleichung und gib den Wert von x an.", text:"$4x - 2x = 18 - 12$", solution:3 },
    {topic: "Löse die Gleichung und gib den Wert von x an.", text:"$5(3 - x) = -10$", solution:5 },
    {topic: "Löse die Gleichung und gib den Wert von x an.", text:"$6x + 2 = 4x - 10$", solution:-6 },
    {topic: "Löse die Gleichung und gib den Wert von x an.", text:"$5(x + 11) = 10(x - 3)$", solution:5 },
  ]; */

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