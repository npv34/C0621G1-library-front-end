import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating-number',
  templateUrl: './rating-number.component.html',
  styleUrls: ['./rating-number.component.css']
})
export class RatingNumberComponent implements OnInit {
  value: number = 0;
  @Output() clickNumberRating = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.clickNumberRating.emit(this.value);
  }

}
