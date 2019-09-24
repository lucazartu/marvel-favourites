import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelGridComponent } from './marvel-grid.component';

describe('MarvelGridComponent', () => {
  let component: MarvelGridComponent;
  let fixture: ComponentFixture<MarvelGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
