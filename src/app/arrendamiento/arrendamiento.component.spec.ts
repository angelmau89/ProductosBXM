import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendamientoComponent } from './arrendamiento.component';

describe('ArrendamientoComponent', () => {
  let component: ArrendamientoComponent;
  let fixture: ComponentFixture<ArrendamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrendamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrendamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
