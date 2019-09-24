import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCharacterDetailComponent } from './marvel-character-detail.component';

describe('MarvelCharacterDetailComponent', () => {
  let component: MarvelCharacterDetailComponent;
  let fixture: ComponentFixture<MarvelCharacterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelCharacterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCharacterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
