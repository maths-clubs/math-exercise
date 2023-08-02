import { Component, Input} from '@angular/core';
import { Exercise } from '../exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {
  @Input() exercise: Exercise = {topic:"",text:"",choice:[],solution:0};
  @Input() checkable: boolean = true;

  resultText: string = "";

  choosenSolution: number = NaN;

  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  checkSolution() {
    if (this.choosenSolution == this.exercise.solution ) {
      this.resultText = "Richtig";
    } else {
      this.resultText = "Falsch";
    }
  }
}
