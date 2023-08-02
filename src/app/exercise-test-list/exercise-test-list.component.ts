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

  getRandom(arr: Exercise[] , n: number) : Exercise[] {
    var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  math_exercises : Exercise[] = this.getRandom(this.exerciseService.getExercises(),4);

  refresh() {
    this.math_exercises = this.getRandom(this.exerciseService.getExercises(),4);
  }
}
