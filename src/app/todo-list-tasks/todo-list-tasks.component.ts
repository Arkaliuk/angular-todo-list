import { Component, Input, Output, EventEmitter } from '@angular/core';

class Todo {
  title: any;
  description: any;
  done: any;
  dueDate: any;
  listId: any;

  constructor(title, description, done, dueDate, listId) {
    this.title = title;
    this.description = description;
    this.done = done;
    this.dueDate = dueDate;
    this.listId = listId;
  }

}
@Component({
  selector: 'todo-list-tasks',
  templateUrl: './todo-list-tasks.component.html',
  styleUrls: ['./todo-list-tasks.component.scss']
})

export class TodoListTasksComponent {
  @Input() selectedList: any;
  newList = [];

  todoList = [
    { title: "Study", description: "Learn CSS", done: false, dueDate: new Date(), listId: { id: 1 } },
    { title: "Relax", description: "Watch TV", done: true, dueDate: new Date(), listId: { id: 1 } },
    { title: "Study", description: "Learn JS", done: false, dueDate: new Date(), listId: { id: 1 } }
  ];
}
