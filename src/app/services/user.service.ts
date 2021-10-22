import { Injectable } from '@angular/core';
import {IUser} from "../admin/users/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[] = [
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
  constructor() { }

  getAll() {
    return this.users;
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  addUser(user: IUser) {
    this.users.push(user)
  }

  findByIndex(index: number) {
    return this.users[index];
  }

  update(user: IUser, index: number) {
    this.users[index] = user;
  }
}
