import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { Exercise, ExerciseService } from '../exercise.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {
  
  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute) {
    this.exercises$ = this.exerciseService.getExercises();
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params["id"]);
    this.exerciseService.readExercises(this.route.snapshot.params["id"]);
  }

  exercises$ : Observable<Exercise[]>;
}
