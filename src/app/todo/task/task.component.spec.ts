import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { Task } from 'src/model/task';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent],
    });
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    component.task = {
      title: 'Test title',
      owner: 'Test owner',
    } as Task;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
