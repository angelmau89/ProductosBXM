import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorajeComponent } from './factoraje.component';

describe('FactorajeComponent', () => {
  let component: FactorajeComponent;
  let fixture: ComponentFixture<FactorajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
