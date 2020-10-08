import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiaLiquidaComponent } from './garantia-liquida.component';

describe('GarantiaLiquidaComponent', () => {
  let component: GarantiaLiquidaComponent;
  let fixture: ComponentFixture<GarantiaLiquidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarantiaLiquidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantiaLiquidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
