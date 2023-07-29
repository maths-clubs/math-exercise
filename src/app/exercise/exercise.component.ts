import { Component, Input} from '@angular/core';
import { Exercise } from '../app.component';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {
  @Input() exercise: Exercise = {topic:"",text:"",choice:[],solution:0};

  resultText: string = "";

  choosenSolution: number = -1;

  checkSolution() {
    if (this.choosenSolution == this.exercise.solution ) {
      this.resultText = "Richtig";
    } else {
      this.resultText = "Falsch";
    }
  }
}
