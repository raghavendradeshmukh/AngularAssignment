import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgecalculatorComponent } from './agecalculator.component';

describe('AgecalculatorComponent', () => {
  let component: AgecalculatorComponent;
  let fixture: ComponentFixture<AgecalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgecalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgecalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
