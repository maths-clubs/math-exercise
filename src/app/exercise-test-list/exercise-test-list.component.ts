import { Component, Input } from '@angular/core';
import { ExerciseComponent, Solution } from '../exercise/exercise.component';
import { Exercise, ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-test-list',
  templateUrl: './exercise-test-list.component.html',
  styleUrls: ['./exercise-test-list.component.scss']
})
export class ExerciseTestListComponent {
  constructor(private exerciseService: ExerciseService) {
  }

  math_exercises : Exercise[] = this.exerciseService.getNumExercises(4);

  choosenSolutions : Solution[] = this.initSolutions(4);

  refresh() {
    this.math_exercises = this.exerciseService.getNumExercises(4);
    this.choosenSolutions = this.initSolutions(4);
  }

  private initSolutions(count: number) : Solution[] {
    let arr : Solution[] = new Array(count);
    for (let i=0;i<count;i++) {
      arr[i] = { value: NaN };
    }
    return arr;
  }
}

