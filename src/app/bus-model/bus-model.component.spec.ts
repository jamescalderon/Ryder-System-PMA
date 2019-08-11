import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusModelComponent } from './bus-model.component';

describe('BusModelComponent', () => {
  let component: BusModelComponent;
  let fixture: ComponentFixture<BusModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
