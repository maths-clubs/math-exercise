import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseTestListComponent } from './exercise-test-list/exercise-test-list.component';
import { StartHelpComponent } from './start-help/start-help.component';
import { ExercisePrintTestListComponent } from './exercise-print-test-list/exercise-print-test-list.component';
import { ExercisesComponent } from './exercises/exercises.component';

const routes: Routes = [
  { path: ':group', component: ExercisesComponent },
  { path: 'list/:id', component: ExerciseListComponent },
  { path: 'print-test/:id', component: ExercisePrintTestListComponent },
  { path: 'test/:id', component: ExerciseTestListComponent, data: { checkable : true} },
  { path: '', component: StartHelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
