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
  selectedLevel : number = 0;
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

  compareGroups(g1:Group, g2: Group) : number {
    let result = g1.name.localeCompare(g2.name);
    if (result == 0) {
      if (g1.level && g2.level) {
        result = g1.level - g2.level;
      }
    }
    return result;
  }

  getFilteredGroups() : Group[] {
    return this.groups
      .filter(g => g.class == this.selectedClass || this.selectedClass == 0)
      .filter(g => g.level == this.selectedLevel || this.selectedLevel == 0)
      .sort((g1, g2) => this.compareGroups(g1, g2));
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

  getLevels() : number[] {
    let levels =  this.groups
      .filter(g => g.class == this.selectedClass || this.selectedClass == 0)
      .map(g => g.level || 0)
      .filter(level => level > 0)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort();
    return levels;
  }
}
