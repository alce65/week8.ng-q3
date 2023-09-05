import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/model/task';

@Component({
  selector: 'isd-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  @Output() add: EventEmitter<Omit<Task, 'id'>>;
  addForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.add = new EventEmitter();
    this.addForm = this.fb.group({
      title: [''],
      owner: [''],
    });
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const data: Omit<Task, 'id'> = {
      ...this.addForm.value,
      isCompleted: false,
    };
    this.add.next(data);
    console.log(data);
  }
}
