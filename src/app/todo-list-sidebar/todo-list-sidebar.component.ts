import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TaskServiceService } from '../shared/task-service.service';

@Component({
  selector: 'todo-list-sidebar',
  templateUrl: './todo-list-sidebar.component.html',
  styleUrls: ['./todo-list-sidebar.component.scss']
})
export class TodoListSidebarComponent implements OnInit {
  constructor(
    public taskService: TaskServiceService,
  ) { }

  ngOnInit() {
    this.getLists();
  }

  @Input() todoList: any;
  selectedTodo: any;
  @Output() select = new EventEmitter();

  selectTodoList(todo) {
    this.select.emit(todo);
  }

  getLists() {
    this.taskService.getLists().subscribe((data: {}) => {
      this.todoList = data;
    })
  }
}
