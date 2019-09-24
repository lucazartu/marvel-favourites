import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../shared/services/favourite.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marvel-my-favourites',
  templateUrl: './marvel-my-favourites.component.html',
  styleUrls: ['./marvel-my-favourites.component.css']
})
export class MarvelMyFavouritesComponent implements OnInit {
  favourites: Observable<any>;

  constructor(private favouriteService: FavouriteService) {}

  ngOnInit() {
    this.favourites = this.favouriteService.getAll();
  }
}
