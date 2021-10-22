import {Component, OnInit} from '@angular/core';
import {IRatingUnit} from "./IRatingUnit";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ratingValue: number | undefined;
  ratingUnits: IRatingUnit[] = [
    {
      value: 1,
      active: false
    },
    {
      value: 2,
      active: false
    }
    , {
      value: 3,
      active: false
    },
    {
      value: 4,
      active: false
    }]

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    let users = this.userService.getAll();
    console.log(users);
  }

  ratingEvent(index: number) {
    if (this.ratingUnits[index].active) {

      for (let j = this.ratingUnits.length - 1; j>index; j--) {
        this.ratingUnits[j].active = false;
        this.ratingUnits[j].color = "#3b5998";
      }
    } else  {
      for (let i = 0; i <= index; i++) {
        this.ratingUnits[i].active = true;
        this.ratingUnits[i].color = "red";
      }
    }

    this.ratingValue = this.ratingUnits[index].value;

    console.log(this.ratingUnits)
  }

  getNumberRating(event: any) {
       this.ratingEvent(event - 1);
      console.log(event + "nhann tu component con")
  }
}
