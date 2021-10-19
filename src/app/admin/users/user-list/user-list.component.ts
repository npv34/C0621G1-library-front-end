import {Component, OnInit} from '@angular/core';
import {IUser} from "../IUser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: IUser[] = [
    {
      username: "admin",
      email: "admin@gmail.com",
      phone: "0909989898",
      avatar: "https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
    },
    {
      username: "cuong",
      email: "cuong@gmail.com",
      phone: "0909989898",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png"
    },
    {
      username: "hung",
      email: "admin@gmail.com",
      phone: "0909989898",
      avatar: "https://teachingandlearning.schulich.yorku.ca/wp-content/uploads/2019/10/avatar6.png"
    }
  ]
  pageTitle = "Danh sách người dùng";
  btnClass = "btn btn-danger";
  imageSize = "150";
  message = "";

  constructor() {
  }

  ngOnInit(): void {
    console.log('xin chao')
  }

  delete(id: any) {
    if (confirm('Are you sure?')) {
      this.users.splice(id, 1);
      this.message = "Delete successfully!"
    }
  }

  resizeImage(event: any) {
    let value = event.target.value;
    this.imageSize = value;
  }

}
