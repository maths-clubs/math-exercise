import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesSelectionComponent } from './exercises-selection.component';

describe('ExercisesSelectionComponent', () => {
  let component: ExercisesSelectionComponent;
  let fixture: ComponentFixture<ExercisesSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercisesSelectionComponent]
    });
    fixture = TestBed.createComponent(ExercisesSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
