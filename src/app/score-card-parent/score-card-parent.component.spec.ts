import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCardParentComponent } from './score-card-parent.component';

describe('ScoreCardParentComponent', () => {
  let component: ScoreCardParentComponent;
  let fixture: ComponentFixture<ScoreCardParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreCardParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCardParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
