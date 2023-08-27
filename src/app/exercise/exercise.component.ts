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
  resultStyle: string = "";

  @Input() 
  choosenSolution: Solution = { value: NaN };

  @Output() 
  choosenSolutionChange = new EventEmitter<Solution>();

  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  checkSolution() {
    if (this.choosenSolution.value == this.exercise.solution ) {
      this.resultText = "Richtig";
      this.resultStyle = "color: green;"
    } else {
      this.resultText = "Falsch";
      this.resultStyle = "color: red;"
    }
  }
}

export interface Solution {
  value: number;
}
