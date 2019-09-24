import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelHeroCardComponent } from './marvel-hero-card.component';

describe('MarvelHeroCardComponent', () => {
  let component: MarvelHeroCardComponent;
  let fixture: ComponentFixture<MarvelHeroCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelHeroCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelHeroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
