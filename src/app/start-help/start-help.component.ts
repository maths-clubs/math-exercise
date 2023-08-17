import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExerciseService, Group } from '../exercise.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-start-help',
  templateUrl: './start-help.component.html',
  styleUrls: ['./start-help.component.scss']
})
export class StartHelpComponent implements OnInit, OnDestroy {
  groups : Group[] = [];
  selectedGroup : number = 0;
  subsink : Subscription[] = [];

  constructor(private eg: ExerciseService) {
  }

  ngOnInit(): void {
    this.subsink.push(this.eg.getGroups().subscribe(groups => this.groups = groups));
  }

  ngOnDestroy(): void {
    this.subsink.forEach(s => s.unsubscribe());
  }
}
