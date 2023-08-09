import { Component } from '@angular/core';
import { ExerciseGroup, ExerciseService } from './exercise.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  groups$ : Observable<ExerciseGroup[]>;

  constructor(private exerciseService: ExerciseService, private _router: Router) {
    this.groups$ = exerciseService.getGroups();
  }

  selectExerciseGroup($event: any) {
    this.exerciseService.readExercises($event.target.value);
    this._router.navigateByUrl('/list');
  }
}


