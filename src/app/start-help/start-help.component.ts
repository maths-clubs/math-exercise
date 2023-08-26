import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExerciseService, Group } from '../exercise.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-start-help',
  templateUrl: './start-help.component.html',
  styleUrls: ['./start-help.component.scss']
})
export class StartHelpComponent implements OnInit, OnDestroy {
  groups : Group[] = [];
  selectedClass : number = 0;
  selectedGroupId : string = '';
  subsink : Subscription[] = [];
  actualurl : string; 

  constructor(private eg: ExerciseService) {
    this.actualurl = window.location.href;
  }

  ngOnInit(): void {
    this.subsink.push(this.eg.getGroups().subscribe(groups => this.groups = groups));
  }

  ngOnDestroy(): void {
    this.subsink.forEach(s => s.unsubscribe());
  }

  getFilteredGroups() : Group[] {
    return this.groups.filter(g => g.class == this.selectedClass || this.selectedClass == 0)
  }

  getSelectedGroup() : Group {
    return this.groups.find(g => g.id === this.selectedGroupId) || this.eg.UNKNOWN_GROUP;
  }

  getClasses() : number[] {
    return this.groups
      .map(g => g.class || 0)
      .filter(c => c > 0)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort();
  }
}
