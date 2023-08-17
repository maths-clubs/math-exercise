import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
  @Input('group') 
  groupId : string = '';
  
  constructor(private exerciseService: ExerciseService) {  }

  ngOnInit(): void {
    this.exerciseService.readExercises(this.groupId);
  }
}
