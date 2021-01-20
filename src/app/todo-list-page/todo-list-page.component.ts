import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TaskServiceService } from '../shared/task-service.service';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit {
  @Output() tasks: any;
  selectedId: any;

  constructor(
    public taskService: TaskServiceService,
    private route: ActivatedRoute,
  ) {
    this.route.params.pipe(
      switchMap(params => {
        this.selectedId = params.id;
        return this.taskService.getTasksByListId(params.id)
      })
    ).subscribe(listTasks => this.tasks = listTasks);
  }

  ngOnInit(): void {
  }

  addTodo(object) {
    console.log(object);
    this.taskService.createTask({ ...object, done: false, todoList: { id: this.selectedId } })
      .subscribe();
  }

  deleteTask(id) {
    this.taskService.deleteTask(id).subscribe(data => {
      this.taskService.getTasksByListId(this.selectedId).subscribe(data => { this.tasks = data });
    });
  }
}
