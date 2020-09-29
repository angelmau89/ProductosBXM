import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrendarioComponent } from './prendario.component';

describe('PrendarioComponent', () => {
  let component: PrendarioComponent;
  let fixture: ComponentFixture<PrendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
