import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcrudComponent } from './student-crud.component';

describe('StudentCrudComponent', () => {
  let component: StudentcrudComponent;
  let fixture: ComponentFixture<StudentcrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentcrudComponent],
    });
    fixture = TestBed.createComponent(StudentcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
