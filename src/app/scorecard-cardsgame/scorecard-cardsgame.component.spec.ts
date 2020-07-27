import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardCardsgameComponent } from './scorecard-cardsgame.component';

describe('ScorecardCardsgameComponent', () => {
  let component: ScorecardCardsgameComponent;
  let fixture: ComponentFixture<ScorecardCardsgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorecardCardsgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardCardsgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
