import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ChildComponent } from './child/child.component';
import { GrandchildComponent } from './grandchild/grandchild.component';
import { SecondChildComponent } from './second-child/second-child.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChildComponent,
    GrandchildComponent,
    SecondChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
