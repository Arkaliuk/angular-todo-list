import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { TaskComponent } from './task/task.component';
import { TodoListSidebarComponent } from './todo-list-sidebar/todo-list-sidebar.component';
import { TodoListTasksComponent } from './todo-list-tasks/todo-list-tasks.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskFormComponent,
    TaskComponent,
    TodoListSidebarComponent,
    TodoListTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
