import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit { 
  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => this.exerciseService.readExercises(params['group'])
    );
  }
}
