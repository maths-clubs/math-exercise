import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartHelpComponent } from './start-help.component';

describe('StartHelpComponent', () => {
  let component: StartHelpComponent;
  let fixture: ComponentFixture<StartHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartHelpComponent]
    });
    fixture = TestBed.createComponent(StartHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
