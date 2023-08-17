import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExerciseGroup, ExerciseService, Group } from './exercise.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  groups : Group[] = [];

  choosenGroup : Group = { name: '', id: ''};

  subscriptions : Subscription[] = [];

  queryGroup: string = '';

  constructor(private exerciseService: ExerciseService, private _router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.exerciseService.getGroups()
      .subscribe(groups => {
        if (groups.length == 0) 
          return;
        this.groups = groups;

        this.queryGroup = this.route.snapshot.queryParams['group'] || this.route.snapshot.params["id"];
        this.choosenGroup = groups.find(group => group.id == this.queryGroup) || groups[0];
        
        if (this.queryGroup)
          this.switchExerciseGroup();
        else
          this.exerciseService.readExercises(this.choosenGroup.id);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  selectExerciseGroup($event: any) {
    this.choosenGroup = this.groups.find(group => group.id ===  $event.target.value) 
      || { name: '', id: ''};
    this.switchExerciseGroup();
  }

  switchExerciseGroup() {
    this.exerciseService.readExercises(this.choosenGroup.id);
    this._router.navigateByUrl('/list/' + this.choosenGroup.id);
  }
}


