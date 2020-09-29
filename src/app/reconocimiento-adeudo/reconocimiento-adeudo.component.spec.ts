import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoAdeudoComponent } from './reconocimiento-adeudo.component';

describe('ReconocimientoAdeudoComponent', () => {
  let component: ReconocimientoAdeudoComponent;
  let fixture: ComponentFixture<ReconocimientoAdeudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconocimientoAdeudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconocimientoAdeudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
