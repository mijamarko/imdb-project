import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {

  @Input() images: string[] = [];
  image: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  prevImage() {
    let index = this.image-1;
    if(index < 0) {
      this.image = this.images.length - 1;
    } else {
      this.image = index;
    }
    console.log(this.image);
  }

  nextImage() {
    let index = this.image + 1;
    if(index > this.images.length - 1) {
      this.image = 0;
    } else {
      this.image = index;
    }
    console.log(this.image);
  }

}
