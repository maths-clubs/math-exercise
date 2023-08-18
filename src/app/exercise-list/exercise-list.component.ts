import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { Exercise, ExerciseGroup, ExerciseService } from '../exercise.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent {
  
  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute) {
    this.exerciseGroup$ = this.exerciseService.getExercises();
  }

  exerciseGroup$ : Observable<ExerciseGroup>;
}
