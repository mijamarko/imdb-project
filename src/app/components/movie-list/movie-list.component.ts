import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/domain/models';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnChanges {

  @Input() movies: Movie[] = [];

  selectedMovies: Movie[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedMovies = [...this.movies];
  }

  ngOnInit(): void {
    this.selectedMovies = [...this.movies];
  }

}
