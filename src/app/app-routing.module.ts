import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseTestListComponent } from './exercise-test-list/exercise-test-list.component';
import { StartHelpComponent } from './start-help/start-help.component';

const routes: Routes = [
  { path: 'list', component: ExerciseListComponent },
  { path: 'test', component: ExerciseTestListComponent },
  { path: '', component: StartHelpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
