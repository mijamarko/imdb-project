import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/domain/models';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() reviews: Review[] = [];

  displayReviews: boolean = false;
  addReviewOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
