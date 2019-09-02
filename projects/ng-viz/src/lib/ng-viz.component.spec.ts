import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgVizComponent } from './ng-viz.component';

describe('NgVizComponent', () => {
  let component: NgVizComponent;
  let fixture: ComponentFixture<NgVizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgVizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
