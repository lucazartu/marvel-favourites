import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelMyFavouritesComponent } from './marvel-my-favourites.component';

describe('MarvelMyFavouritesComponent', () => {
  let component: MarvelMyFavouritesComponent;
  let fixture: ComponentFixture<MarvelMyFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelMyFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelMyFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
