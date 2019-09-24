import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as md5 from 'md5';
import { Observable } from 'rxjs';
import { Response } from 'src/app/shared/models/Response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  basePath: string;
  version: string;
  publicKey: string;
  hash: string;
  keyParams: string;

  constructor(private httpClient: HttpClient) {
    this.basePath = environment.basePath;
    this.version = environment.version;
    this.publicKey = environment.publicKey;
    this.keyParams = `?ts=1&apikey=${this.publicKey}&hash=${md5(
      '1' + environment.privateKey + environment.publicKey
    )}`;
  }

  getCharactersList(limit: number, offset: number): Observable<Response> {
    const url = `${this.basePath}/${this.version}/public/characters${this.keyParams}&limit=${limit}&offset=${offset}`;
    return this.httpClient.get<Response>(url);
  }

  getCharacter(id: number): Observable<Response> {
    const url = `${this.basePath}/${this.version}/public/characters/${id}${this.keyParams}`;
    return this.httpClient.get<Response>(url);
  }

  getKeyParams() {
    return this.keyParams;
  }

  getNextPage() {

  }
}
