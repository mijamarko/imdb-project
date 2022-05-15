import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Review } from 'src/app/domain/models';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() reviews: Review[] = [];
  @Output() addReviewOpened: EventEmitter<boolean> = new EventEmitter();

  displayReviews: boolean = false;
  addReviewOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onReviewAdd(review: Review) {
    this.reviews.unshift(review);
    this.addReviewOpen = !this.addReviewOpen;
  }

  onReviewCancel(value: boolean) {
    this.addReviewOpen = !this.addReviewOpen;
  }

  openAddReview() {
    this.addReviewOpen=!this.addReviewOpen;
    this.addReviewOpened.emit(true);
  }

}
