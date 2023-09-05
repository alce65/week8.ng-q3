import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/model/task';

@Component({
  selector: 'isd-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() delete: EventEmitter<Task>;

  constructor() {
    this.delete = new EventEmitter();
  }

  handleClick() {
    this.delete.next(this.task);
  }
}
