import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskServiceService } from '../shared/task-service.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public taskService: TaskServiceService,
  ) { }

  @Input() todoList: any;
  selectedTodo: any;
  @Output() select = new EventEmitter();

  ngOnInit() {
    this.getLists();
  }

  selectTodoList(todo) {
    this.select.emit(todo);
  }

  getLists() {
    this.taskService.getLists().subscribe((data: {}) => {
      this.todoList = data;
    })
  }
}
