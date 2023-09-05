import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent, ListComponent, TaskComponent, AddComponent],
  imports: [CommonModule, ReactiveFormsModule, TodoRoutingModule],
})
export class TodoModule {}
