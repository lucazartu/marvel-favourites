import { Component, OnInit, Input } from '@angular/core';
import { Result } from 'src/app/shared/models/Result';
import { Favourite } from 'src/app/shared/models/Favourite';
import { ApiService } from '../shared/services/marvel-api.service';
import { FavouriteService } from '../shared/services/favourite.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marvel-hero-card',
  templateUrl: './marvel-hero-card.component.html',
  styleUrls: ['./marvel-hero-card.component.css']
})
export class MarvelHeroCardComponent implements OnInit {
  @Input() hero: Result;
  @Input() key: string;
  thumbnailSrc: string;

  constructor(
    private api: ApiService,
    private favouriteService: FavouriteService
  ) {}

  ngOnInit() {
    this.thumbnailSrc = `${this.hero.thumbnail.path.replace('http', 'https')}.${
      this.hero.thumbnail.extension
    }${this.api.getKeyParams()}`;
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
