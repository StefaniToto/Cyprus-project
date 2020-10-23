import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesLayoutComponent } from './rules-layout.component';

describe('RulesLayoutComponent', () => {
  let component: RulesLayoutComponent;
  let fixture: ComponentFixture<RulesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
