import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { Exercise, ExerciseService } from '../exercise.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent {
  constructor(private exerciseService: ExerciseService) {
    this.exercises$ = this.exerciseService.getExercises();
  }

  exercises$ : Observable<Exercise[]>;
}
