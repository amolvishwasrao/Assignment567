import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvellousComp1Component } from './marvellous-comp1/marvellous-comp1.component';
import { MarvellousComp2Component } from './marvellous-comp2/marvellous-comp2.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { FirstCComponent } from './first-c/first-c.component';
import { SecondCComponent } from './second-c/second-c.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousComp1Component,
    MarvellousComp2Component,
    NewCompComponent,
    FirstCComponent,
    SecondCComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FirstCComponent]
})
export class AppModule { }
