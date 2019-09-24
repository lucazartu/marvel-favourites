import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Favourite } from '../models/Favourite';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  constructor(private angularFireDatabase: AngularFireDatabase) {}

  insert(favourite: Favourite) {
    return this.angularFireDatabase.list('favourites').push(favourite);
  }

  getAll() {
    return this.angularFireDatabase
      .list('favourites')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(data => ({
            key: data.payload.key,
            ...data.payload.val()
          }));
        })
      );
  }

  delete(key: string) {
    this.angularFireDatabase.object(`favourites/${key}`).remove();
  }
}
