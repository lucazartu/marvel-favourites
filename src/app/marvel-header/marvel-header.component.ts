import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-marvel-header',
  templateUrl: './marvel-header.component.html',
  styleUrls: ['./marvel-header.component.css']
})
export class MarvelHeaderComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
