import { Component, Input } from '@angular/core';

@Component({
  selector: 'new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss']
})
export class NewTaskFormComponent {


  @Input() todoList: any;
  newTitle: any;
  newDescription: any;
  newDate: any;

  addTodo() {
    if (this.newTitle === '') {
      return alert("You must enter title")
    }
    this.todoList.push({ title: this.newTitle, description: this.newDescription, done: false, dueDate: this.newDate })
    this.newTitle = '';
    this.newDescription = '';
    this.newDate = '';
  }
}
