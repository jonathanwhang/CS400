import { Component } from '@angular/core';
import { MOVIES } from './MOVIES-MOCK';
import { MOVIE } from './MOVIE';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movies';
  movies = MOVIES;
}
