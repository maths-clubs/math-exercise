import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { Exercise } from '../exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {
  @Input() exercise: Exercise = {topic:"",text:"",choice:[],solution:0};
  @Input() checkable: boolean = true;
  @Input() singleCheck: boolean = true;

  resultText: string = "";

  @Input() 
  choosenSolution: Solution = { value: NaN };

  @Output() 
  choosenSolutionChange = new EventEmitter<Solution>();

  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  checkSolution() {
    if (this.choosenSolution.value == this.exercise.solution ) {
      this.resultText = "Richtig";
    } else {
      this.resultText = "Falsch";
    }
  }
}

export interface Solution {
  value: number;
}
