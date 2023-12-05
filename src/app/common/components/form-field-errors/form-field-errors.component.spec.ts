import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldErrorsComponent } from './form-field-errors.component';

describe('FormFieldErrorsComponent', () => {
  let component: FormFieldErrorsComponent;
  let fixture: ComponentFixture<FormFieldErrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldErrorsComponent]
    });
    fixture = TestBed.createComponent(FormFieldErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
