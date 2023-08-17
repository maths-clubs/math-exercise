import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ExerciseComponent, Solution } from '../exercise/exercise.component';
import { Exercise, ExerciseGroup, ExerciseService } from '../exercise.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-test-list',
  templateUrl: './exercise-test-list.component.html',
  styleUrls: ['./exercise-test-list.component.scss']
})
export class ExerciseTestListComponent implements OnInit {
  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute) {
    this.exerciseService.readExercises(route.snapshot.params['id']);
  }
  
  ngOnInit(): void {
    this.refresh();
  }

  exerciseGroup: ExerciseGroup = this.exerciseService.UNKNOWN_GROUP;

  choosenSolutions: Solution[] = [];

  showResults: boolean = false;

  checkResults() {
    this.showResults = !this.showResults;
  }

  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  solutionText(eidx: number): string {
    if (this.choosenSolutions[eidx].value) {
      if (this.exerciseGroup.exercises[eidx].choice) {
        return this.letters[this.choosenSolutions[eidx].value];
      } else return '' + this.choosenSolutions[eidx].value;
    }
    else return '-';
    return this.choosenSolutions[eidx].value ? '' + this.choosenSolutions[eidx].value : '-';
  }

  refresh() {
    this.exerciseService.getNumExercises(4).subscribe(
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

