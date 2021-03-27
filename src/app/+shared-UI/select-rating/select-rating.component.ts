import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-rating',
  templateUrl: './select-rating.component.html',
  styleUrls: ['./select-rating.component.scss']
})
export class SelectRatingComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  constructor() { }

  ngOnInit() {
  }

  countStar(star) {
    this.selectedValue = star;
  }

}
