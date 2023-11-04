import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathjaxModule } from "mathjax-angular";
import { ExerciseComponent } from './exercise/exercise.component';
import { FormsModule } from '@angular/forms';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseTestListComponent } from './exercise-test-list/exercise-test-list.component';
import { StartHelpComponent } from './start-help/start-help.component';
import { ExercisePrintTestListComponent } from './exercise-print-test-list/exercise-print-test-list.component';
import { ExercisesComponent } from './exercises/exercises.component'
import { QRCodeModule } from 'angularx-qrcode';
import { ExercisesSelectionComponent } from './exercises-selection/exercises-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    ExerciseListComponent,
    ExerciseTestListComponent,
    StartHelpComponent,
    ExercisePrintTestListComponent,
    ExercisesComponent,
    ExercisesSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MathjaxModule.forRoot(),
    FormsModule, 
    HttpClientModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
