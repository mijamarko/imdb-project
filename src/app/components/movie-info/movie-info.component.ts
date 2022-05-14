import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/domain/models';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  @Input() movieInfo: Movie | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
