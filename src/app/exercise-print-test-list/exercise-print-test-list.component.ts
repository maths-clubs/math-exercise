import { Component } from '@angular/core';
import { Exercise, ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-print-test-list',
  templateUrl: './exercise-print-test-list.component.html',
  styleUrls: ['./exercise-print-test-list.component.scss']
})
export class ExercisePrintTestListComponent { 
  constructor(private exerciseService: ExerciseService) {
  }

  math_exercises : Exercise[] = this.exerciseService.getNumExercises(4);

  refresh() {
    this.math_exercises = this.exerciseService.getNumExercises(4);
  }
}
