import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsComponent } from './greetings.component';
import { FormsModule } from '@angular/forms';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreetingsComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
