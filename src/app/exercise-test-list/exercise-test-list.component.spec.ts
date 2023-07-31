import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTestListComponent } from './exercise-test-list.component';

describe('ExerciseTestListComponent', () => {
  let component: ExerciseTestListComponent;
  let fixture: ComponentFixture<ExerciseTestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTestListComponent]
    });
    fixture = TestBed.createComponent(ExerciseTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
