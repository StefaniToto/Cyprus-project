import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSystemModalComponent } from './add-system-modal.component';

describe('AddSystemModalComponent', () => {
  let component: AddSystemModalComponent;
  let fixture: ComponentFixture<AddSystemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSystemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSystemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
