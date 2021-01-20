import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { TaskComponent } from './task/task.component';
import { TodoListTasksComponent } from './todo-list-tasks/todo-list-tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import { TodayTasksPageComponent } from './today-tasks-page/today-tasks-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTaskFormComponent,
    TaskComponent,
    TodoListTasksComponent,
    DashboardComponent,
    TodoListPageComponent,
    TodayTasksPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: DashboardComponent},
      {path: 'todo-list-page/:id', component: TodoListPageComponent},
      {path: 'today-tasks-page', component: TodayTasksPageComponent},
    ]),
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
