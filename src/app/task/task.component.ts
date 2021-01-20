import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskServiceService } from '../shared/task-service.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(
    public taskService: TaskServiceService
  ) { }

  ngOnInit() { }

  @Input() todoList: any;
  @Output() deleteEvent = new EventEmitter();

  checkedTodo(todo) {
    todo.done = !todo.done;
  }

  isDone(todo) {
    return todo.done;
  }

  getTasks() {
    return this.taskService.getTasks().subscribe((data: {}) => {
      this.todoList = data;
    })
  }

  deleteTask(id) {
    this.deleteEvent.emit(id);
  }
}
