import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayMathExampleComponent } from './display-math-example/display-math-example.component';
import { MathjaxModule } from "mathjax-angular";

@NgModule({
  declarations: [
    AppComponent,
    DisplayMathExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MathjaxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
