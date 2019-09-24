import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/marvel-api.service';
import { Result } from 'src/app/shared/models/Result';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marvel-grid',
  templateUrl: './marvel-grid.component.html',
  styleUrls: ['./marvel-grid.component.css']
})
export class MarvelGridComponent implements OnInit {
  heroes: Result[];
  offset: number;
  limit: number;
  pageNumber: number;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.offset = 0;
    this.limit = 20;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const pageNumber = +params.get('pageNumber');
      if (pageNumber) {
        console.log(pageNumber);
        this.pageNumber = pageNumber;
        this.offset = this.limit * pageNumber;
      } else {
        this.pageNumber = 0;
      }
      this.GetCharacterList();
    });
  }

  NextPage() {
    this.pageNumber += 1;
    this.router.navigate(['home', this.pageNumber]);
  }

  PreviousPage() {
    this.pageNumber -= 1;
    if (this.pageNumber === 0) {
      this.router.navigate(['home']);
    } else if (this.pageNumber > 0) {
      this.router.navigate(['home', this.pageNumber]);
    }
  }

  GetCharacterList() {
    this.api.getCharactersList(this.limit, this.offset).subscribe(response => {
      this.limit = response.data.limit;
      this.offset = response.data.offset;
      this.heroes = response.data.results.filter(hero => {
        return !hero.thumbnail.path.endsWith('image_not_available');
      });
    });
  }
}
