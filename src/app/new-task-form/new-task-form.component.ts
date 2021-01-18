import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskServiceService } from '../shared/task-service.service';

@Component({
  selector: 'new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss']
})
export class NewTaskFormComponent {

  constructor(
    public taskService: TaskServiceService
  ) { }

  @Input() todoList: any;
  @Output() event = new EventEmitter();
  newTitle: any;
  newDescription: any;
  newDate: any;

  onSubmit() {
    this.event.emit(this.getValueForm());
  }

  getValueForm() {
    if (this.newTitle === '') {
      return alert("You must enter title")
    }

    let data = { title: this.newTitle, description: this.newDescription, done: false, dueDate: this.newDate }
    this.newTitle = '';
    this.newDescription = '';
    this.newDate = '';
    return data;


  }
}
