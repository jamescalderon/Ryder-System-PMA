import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkCardComponent } from './ak-card.component';

describe('AkCardComponent', () => {
  let component: AkCardComponent;
  let fixture: ComponentFixture<AkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
