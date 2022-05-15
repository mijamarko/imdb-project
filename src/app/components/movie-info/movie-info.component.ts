import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movie, Review } from 'src/app/domain/models';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit, OnChanges {

  @Input() movieInfo: Movie = {
    id: '',
    actors: [''],
    avgRating: 3,
    images: [''],
    reviews: [{rating: 5, username: '', review: ''}],
    summary: '',
    title: ''
  }

  title: string = '';
  actors: string = '';
  avgRating: number = 0;
  images: string[] = [];
  reviews: Review[] = [];
  summary: string = '';

  summaryExpanded: boolean = false;
  actorsExpanded: boolean = false;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.title = this.movieInfo.title;
    this.actors = this.movieInfo.actors.join(', ');
    this.avgRating = 0;
    this.images = this.movieInfo.images;
    this.reviews = this.movieInfo.reviews;
    this.summary = this.movieInfo.summary;

    this.title = this.title.charAt(0).toUpperCase().concat(this.title.slice(1));
    this.calculateAvgRating();
  }

  calculateAvgRating() {
    const rating = this.reviews.reduce((prev, curr) => prev + curr.rating, 0);
    this.avgRating = rating / this.reviews.length;
  }

  onAddReviewOpened(value: boolean) {
    //TODO - not working
    const movieContainer = document.getElementById('movie-info-card');
    if(movieContainer !== undefined && movieContainer !== null){
      movieContainer.scrollTop = movieContainer.scrollHeight;
    }
  }

}
