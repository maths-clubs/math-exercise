import { Component } from '@angular/core';
import { DisplayMathExampleComponent } from './display-math-example/display-math-example.component';
import { ExerciseComponent } from './exercise/exercise.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'math-exercise';

  math_exercises : Exercise[] = [
    {topic: "Vereinfache", text:"$x + 6a + 5x + 8a$", choice:[ "$5x^2 + 14a$", "$6x - 2a$", "$6x + 14a$" ], solution:2 },
    {topic: "Vereinfache", text:"$7x + 6a - 2b - 8a - 7x$", choice:[ "$- 2a - 2b$", "$- 2a - 9x$", "$- 2a - 2b - 7x$" ], solution:0 },
    {topic: "Vereinfache", text:"$3x + 6a - 2x - 8a$", choice:[ "$x - 2a$", "$5x - 2a$", "$x + 2a$" ], solution:0 },
    {topic: "Vereinfache", text:"$\\frac{3}{4} x + \\frac{2}{3} a - 2x - \\frac{1}{3} a$", choice:[ 
        "$\\frac{5}{4} x + a$", "$-\\frac{5}{4} x + a$", "$-\\frac{5}{4} x + \\frac{1}{3} a$" ], solution:2 }
  ];

  /* math_exercises Exercise[] = []
    "$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$",
    "Das ist eine <b>normale Formel</b>, die wirklich hier drin gerendert wird. $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$ Und das kommt danach. $x = a + b * 5^7$"
  ];*/
}


export interface Exercise {
  topic: string; 
  text: string;
  choice: string[];
  solution: number;
}