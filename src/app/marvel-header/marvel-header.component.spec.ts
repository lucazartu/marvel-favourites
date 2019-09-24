import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelHeaderComponent } from './marvel-header.component';

describe('MarvelHeaderComponent', () => {
  let component: MarvelHeaderComponent;
  let fixture: ComponentFixture<MarvelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
