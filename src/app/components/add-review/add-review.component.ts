import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Review } from 'src/app/domain/models';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  @Output() reviewAdd: EventEmitter<Review> = new EventEmitter();
  review: Review = {
    username: '',
    review: '',
    rating: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  addReview() {
    this.reviewAdd.emit(this.review);
  }

  cancelAddingReview() {

  }

}
