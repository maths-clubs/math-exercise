import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseTestListComponent } from './exercise-test-list/exercise-test-list.component';
import { StartHelpComponent } from './start-help/start-help.component';
import { ExercisePrintTestListComponent } from './exercise-print-test-list/exercise-print-test-list.component';

const routes: Routes = [
  { path: 'list', component: ExerciseListComponent },
  { path: 'print-test', component: ExercisePrintTestListComponent },
  { path: 'test', component: ExerciseTestListComponent, data: { checkable : true} },
  { path: '', component: StartHelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
