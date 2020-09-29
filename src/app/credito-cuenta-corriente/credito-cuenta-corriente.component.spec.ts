import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoCuentaCorrienteComponent } from './credito-cuenta-corriente.component';

describe('CreditoCuentaCorrienteComponent', () => {
  let component: CreditoCuentaCorrienteComponent;
  let fixture: ComponentFixture<CreditoCuentaCorrienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditoCuentaCorrienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoCuentaCorrienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
