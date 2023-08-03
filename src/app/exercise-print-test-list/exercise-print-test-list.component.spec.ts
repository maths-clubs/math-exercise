import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePrintTestListComponent } from './exercise-print-test-list.component';

describe('ExercisePrintTestListComponent', () => {
  let component: ExercisePrintTestListComponent;
  let fixture: ComponentFixture<ExercisePrintTestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercisePrintTestListComponent]
    });
    fixture = TestBed.createComponent(ExercisePrintTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
