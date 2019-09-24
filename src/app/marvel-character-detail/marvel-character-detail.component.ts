import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/marvel-api.service';
import { Result } from '../shared/models/Result';
import { ActivatedRoute } from '@angular/router';
import { FavouriteService } from '../shared/services/favourite.service';
import { Favourite } from '../shared/models/Favourite';

@Component({
  selector: 'app-marvel-character-detail',
  templateUrl: './marvel-character-detail.component.html',
  styleUrls: ['./marvel-character-detail.component.css']
})
export class MarvelCharacterDetailComponent implements OnInit {
  hero: Result;
  thumbnailSrc: string;
  key: string;

  constructor(
    public api: ApiService,
    private activatedRoute: ActivatedRoute,
    private favouriteService: FavouriteService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.api.getCharacter(+params.get('id')).subscribe(res => {
        this.hero = res.data.results[0];
        this.thumbnailSrc = `${this.hero.thumbnail.path.replace('http', 'https')}.${
          this.hero.thumbnail.extension
        }${this.api.getKeyParams()}`;
      });
    });
  }

  addFavourite() {
    const favourite = new Favourite(JSON.parse(localStorage.getItem('user')).uid, this.hero);
    this.key = this.favouriteService.insert(favourite).key;
  }

  delFavourite() {
    this.favouriteService.delete(this.key);
    this.key = '';
  }
}
