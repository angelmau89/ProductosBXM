import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContigenciaComponent } from './contigencia.component';

describe('ContigenciaComponent', () => {
  let component: ContigenciaComponent;
  let fixture: ComponentFixture<ContigenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContigenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContigenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
