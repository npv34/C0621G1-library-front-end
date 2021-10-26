import { Injectable } from '@angular/core';
import {IUser} from "../admin/users/IUser";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
  ];
  api_url = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.api_url + '/users');
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.api_url + '/users/' + id)
  }

  addUser(user: IUser) {
    this.users.push(user)
  }

  findByID(id: number): Observable<any> {
    return this.http.get(this.api_url + '/users/' + id);
  }

  update(user: IUser, index: number) {
    this.users[index] = user;
  }

  getAllRoleUser(): Observable<any> {
    return this.http.get(this.api_url + '/roles');
  }
}
