import { Component, OnInit } from '@angular/core';
import { Solution } from '../exercise/exercise.component';
import { ExerciseGroup, ExerciseService } from '../exercise.service';


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

  exerciseGroup: ExerciseGroup = this.exerciseService.UNKNOWN_EXERCISEGROUP;

  choosenSolutions: Solution[] = [];

  showResults: boolean = false;

  checkResults() {
    this.showResults = !this.showResults;
  }

  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  solutionText(eidx: number): string {
    if (this.choosenSolutions[eidx].value != undefined && !Number.isNaN(this.choosenSolutions[eidx].value)) {
      if (this.exerciseGroup.exercises[eidx].choice != undefined) {
        return this.letters[this.choosenSolutions[eidx].value];
      } else return '' + this.choosenSolutions[eidx].value;
    }
    else return '-';
  }

  refresh() {
    this.exerciseService.getNumExercises().subscribe(
      exercises => {
        this.exerciseGroup = exercises;
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

