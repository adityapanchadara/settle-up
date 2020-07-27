import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LambsTigerComponentComponent } from './lambs-tiger-component.component';

describe('LambsTigerComponentComponent', () => {
  let component: LambsTigerComponentComponent;
  let fixture: ComponentFixture<LambsTigerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LambsTigerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LambsTigerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
