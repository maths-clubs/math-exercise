import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMathExampleComponent } from './display-math-example.component';

describe('DisplayMathExampleComponent', () => {
  let component: DisplayMathExampleComponent;
  let fixture: ComponentFixture<DisplayMathExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayMathExampleComponent]
    });
    fixture = TestBed.createComponent(DisplayMathExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
