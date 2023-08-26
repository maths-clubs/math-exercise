import { Component, OnInit } from '@angular/core';
import { ExerciseGroup, ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-print-test-list',
  templateUrl: './exercise-print-test-list.component.html',
  styleUrls: ['./exercise-print-test-list.component.scss']
})
export class ExercisePrintTestListComponent implements OnInit { 
  constructor(private exerciseService: ExerciseService) {
  }
  
  ngOnInit(): void {
    this.refresh();
  }

  exerciseGroup: ExerciseGroup = this.exerciseService.UNKNOWN_EXERCISEGROUP;

  refresh() {
    this.exerciseService.getNumExercises()
      .subscribe(exerciseGroup => this.exerciseGroup = exerciseGroup);
  }
}
