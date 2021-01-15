import { Component, Input} from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() todoList: any;

  checkedTodo(todo) {
    todo.done = !todo.done;
  }

  isDone(todo) {
    return todo.done;
  }
}
