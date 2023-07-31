import { Component } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { Exercise, ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent {
  constructor(private exerciseService: ExerciseService) {

  }

  math_exercises : Exercise[] = this.exerciseService.getExercises();
}
