import { Component } from '@angular/core';

@Component({
  selector: 'app-display-math-example',
  templateUrl: './display-math-example.component.html',
  styleUrls: ['./display-math-example.component.scss']
})
export class DisplayMathExampleComponent {
  content = `Das ist eine <b>normale Formel</b>, die wirklich hier drin gerendert wird. $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$ Und das kommt danach.
  $x = a + b * 5^7$
  `;

  content2 = "$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$";
}
