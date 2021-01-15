import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list-sidebar',
  templateUrl: './todo-list-sidebar.component.html',
  styleUrls: ['./todo-list-sidebar.component.scss']
})
export class TodoListSidebarComponent {
  @Input() todoList: any[];
  selectedTodo: any;
  @Output() select = new EventEmitter();
  selectTodoList(todo) {
    this.select.emit(todo);
  }

  
}
