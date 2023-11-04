import { Component, OnInit } from '@angular/core';
import { ExerciseGroup, ExerciseService } from '../exercise.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, concatMap, filter, first, from, map, mergeAll, mergeMap, of, take, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-exercises-selection',
  templateUrl: './exercises-selection.component.html',
  styleUrls: ['./exercises-selection.component.scss']
})
export class ExercisesSelectionComponent {
  exerciseGroup$ : Observable<ExerciseGroup[]>; 

  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute) {
    this.exerciseGroup$ = this.route.params.pipe(
      map( params => <Selection>{ selectedClass: params['selectedClass'], selectedLevel: params['selectedLevel'] } ),
      first(), 
      mergeMap( selection =>  this.exerciseService.readExercisesByFilter( 
        g => g.class == selection.selectedClass 
        && g.level == selection.selectedLevel )),
        map ( exerciseGroups => this.exerciseService.getNumExercisesForGroup( exerciseGroups, 2) ),
        toArray()
    );
  }
}

interface Selection {
  selectedClass: number;
  selectedLevel: number;
}