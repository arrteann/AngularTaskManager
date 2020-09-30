import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ListTaskComponent } from './list-task/list-task.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    ListTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
