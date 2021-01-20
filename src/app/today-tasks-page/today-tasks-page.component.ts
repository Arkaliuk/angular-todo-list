import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TaskServiceService } from '../shared/task-service.service';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-today-tasks-page',
  templateUrl: './today-tasks-page.component.html',
  styleUrls: ['./today-tasks-page.component.scss']
})
export class TodayTasksPageComponent implements OnInit {

  // tasks: Todo[] = [];

  //   constructor(
  //       private route: ActivatedRoute, 
  //       private taskService: TaskServiceService,
  //   ) {
  //       this.route.params.pipe(
  //           switchMap(params => this.taskService.getTaskByListId(params.id))
  //       ).subscribe(listTasks => this.tasks = listTasks);
  //   }

  todoToday: any;
  // selectedId: number;

  constructor(
    public taskService: TaskServiceService
  ) { }

  ngOnInit(): void {
    this.getTasksForToday();
  }

  getTasksForToday() {
    return this.taskService.getTasksForToday().subscribe((data: {}) => {
      this.todoToday = data;
    })
  }
}
