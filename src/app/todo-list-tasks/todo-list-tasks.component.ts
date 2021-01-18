import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskServiceService } from '../shared/task-service.service';

@Component({
  selector: 'todo-list-tasks',
  templateUrl: './todo-list-tasks.component.html',
  styleUrls: ['./todo-list-tasks.component.scss']
})

export class TodoListTasksComponent {
  constructor(
    public taskService: TaskServiceService
  ) { }
  
  @Input() selectedList: any;
  todoList: any;

  addTodo(object) {
    this.taskService.createTask({ ...object, done: false, todoList: { id: 1 } })
      .subscribe(data => {
        this.taskService.getTasks().subscribe(todos => { this.todoList = todos });
      });
  }
}
