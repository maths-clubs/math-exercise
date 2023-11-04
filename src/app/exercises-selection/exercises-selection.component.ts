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
  exerciseGroup$ : Observable<ExerciseGroup> = of( this.exerciseService.UNKNOWN_EXERCISEGROUP );

  constructor(private exerciseService: ExerciseService, private route: ActivatedRoute) {
    this.route.params.pipe(
      map( params => <Selection>{ selectedClass: params['selectedClass'], selectedLevel: params['selectedLevel'] } )
    ).subscribe(
      selection => {
        this.exerciseGroup$ = this.exerciseService.readExercisesByFilter( 
            g => g.class == selection.selectedClass 
            && g.level == selection.selectedLevel ).pipe( 
          map ( exerciseGroups => this.exerciseService.getNumExercisesForGroup( exerciseGroups, 2) ),
        );
        this.exerciseGroup$.subscribe({
          next: (v) => console.log(v),
          error: (e) => console.error(e),
          complete: () => console.info('complete') 
        });
      });
  }
}

interface Selection {
  selectedClass: number;
  selectedLevel: number;
}