import { Component, Input } from '@angular/core';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent {
  @Input() 
  selectedGroup : string = '';
  
  constructor(private exerciseService: ExerciseService) {  }
}
