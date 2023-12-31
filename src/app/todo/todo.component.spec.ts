import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent, ListComponent, AddComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
