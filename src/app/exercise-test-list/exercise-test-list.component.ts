import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ExerciseComponent, Solution } from '../exercise/exercise.component';
import { Exercise, ExerciseService } from '../exercise.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exercise-test-list',
  templateUrl: './exercise-test-list.component.html',
  styleUrls: ['./exercise-test-list.component.scss']
})
export class ExerciseTestListComponent implements OnInit {
  constructor(private exerciseService: ExerciseService) {
  }
  
  ngOnInit(): void {
    this.refresh();
  }

  math_exercises: Exercise[] = [];

  choosenSolutions: Solution[] = [];

  showResults: boolean = false;

  checkResults() {
    this.showResults = !this.showResults;
  }

  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  solutionText(eidx: number): string {
    if (this.choosenSolutions[eidx].value) {
      if (this.math_exercises[eidx].choice) {
        return this.letters[this.choosenSolutions[eidx].value];
      } else return '' + this.choosenSolutions[eidx].value;
    }
    else return '-';
    return this.choosenSolutions[eidx].value ? '' + this.choosenSolutions[eidx].value : '-';
  }

  refresh() {
    this.exerciseService.getNumExercises(4).subscribe(
      exercises => {
        this.math_exercises = exercises;
        this.choosenSolutions = this.initSolutions(4);
        this.showResults = false;
      }
    );
  }

  private initSolutions(count: number): Solution[] {
    let arr: Solution[] = new Array(count);
    for (let i = 0; i < count; i++) {
      arr[i] = { value: NaN };
    }
    return arr;
  }
}

