import { Component, OnInit } from '@angular/core';
import { Exercise, ExerciseGroup, ExerciseService } from '../exercise.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-print-test-list',
  templateUrl: './exercise-print-test-list.component.html',
  styleUrls: ['./exercise-print-test-list.component.scss']
})
export class ExercisePrintTestListComponent implements OnInit { 
  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute) {
    this.exerciseService.readExercises(route.snapshot.params['id']);
  }
  
  ngOnInit(): void {
    this.refresh();
  }

  exerciseGroup: ExerciseGroup = this.exerciseService.UNKNOWN_GROUP;

  refresh() {
    this.exerciseService.getNumExercises(4)
      .subscribe(exerciseGroup => this.exerciseGroup = exerciseGroup);
  }
}
