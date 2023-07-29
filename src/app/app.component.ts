import { Component } from '@angular/core';
import { DisplayMathExampleComponent } from './display-math-example/display-math-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'math-exercise';

  math_exercises = [
    "$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$",
    "Das ist eine <b>normale Formel</b>, die wirklich hier drin gerendert wird. $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$ Und das kommt danach. $x = a + b * 5^7$"
  ];
}
