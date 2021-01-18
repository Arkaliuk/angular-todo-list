import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'To do list';
  todoList: any;
  todoLists:any;
  // todoLists: any = [{ id: 1, name: "Study" }, { id: 2, name: "Relax" }]
  selectTodoList(todo) {
    this.todoList = todo;
  }
}