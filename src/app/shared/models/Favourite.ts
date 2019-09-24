import { Result } from './Result';

export class Favourite {
  email: string;
  hero: Result;

  constructor(email: string, hero: Result) {
    this.email = email;
    this.hero = hero;
  }
}
