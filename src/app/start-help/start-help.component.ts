import { Component } from '@angular/core';
import { ExerciseService, Group } from '../exercise.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-start-help',
  templateUrl: './start-help.component.html',
  styleUrls: ['./start-help.component.scss']
})
export class StartHelpComponent {
  groups$ : Observable<Group[]>;
  constructor(private eg: ExerciseService) {
    this.groups$ = this.eg.getGroups();
  }
}
