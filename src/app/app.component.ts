import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExerciseGroup, ExerciseService } from './exercise.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  groups : ExerciseGroup[] = [];

  choosenGroup : ExerciseGroup = { name: '', data: ''};

  subscriptions : Subscription[] = [];

  constructor(private exerciseService: ExerciseService, private _router: Router) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.exerciseService.getGroups()
      .subscribe(groups => {
        this.groups = groups;
        this.choosenGroup = groups[0];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  selectExerciseGroup($event: any) {
    this.choosenGroup = this.groups.find(group => group.data ===  $event.target.value) 
      || { name: '', data: ''};
    this.exerciseService.readExercises($event.target.value);
    this._router.navigateByUrl('/list');
  }
}


