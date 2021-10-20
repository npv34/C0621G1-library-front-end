import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-rating-number',
  templateUrl: './show-rating-number.component.html',
  styleUrls: ['./show-rating-number.component.css']
})
export class ShowRatingNumberComponent implements OnInit {
  @Input() numberRating: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
