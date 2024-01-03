import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookComponent } from './look.component';

describe('LookComponent', () => {
  let component: LookComponent;
  let fixture: ComponentFixture<LookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookComponent]
    });
    fixture = TestBed.createComponent(LookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
