import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoSimpleComponent } from './credito-simple.component';

describe('CreditoSimpleComponent', () => {
  let component: CreditoSimpleComponent;
  let fixture: ComponentFixture<CreditoSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
