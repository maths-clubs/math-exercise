import { Component } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { Exercise, ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-test-list',
  templateUrl: './exercise-test-list.component.html',
  styleUrls: ['./exercise-test-list.component.scss']
})
export class ExerciseTestListComponent {
  constructor(private exerciseService: ExerciseService) {

  }

  math_exercises : Exercise[] = this.exerciseService.getExercises().slice(0, 2);
}
