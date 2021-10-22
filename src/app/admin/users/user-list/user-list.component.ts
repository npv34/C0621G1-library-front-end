import {Component, OnInit} from '@angular/core';
import {IUser} from "../IUser";
import {FormBuilder, FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: IUser[] = []
  pageTitle = "Danh sách người dùng";
  btnClass = "btn btn-danger";
  imageSize = "150";
  message = "";

  user={
    userName:"",
    email:"hung@gmail.com",
    phone:"092841421"
  }

  formCreate?: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    this.formCreate = this.fb.group({
      userName : ['', [Validators.required, Validators.minLength(4)]],
      email : [''],
      phone : [''],
      role: ['']
    })
  }

  delete(id: any) {
    if (confirm('Are you sure?')) {
      this.userService.deleteUser(id);
      this.message = "Delete successfully!"
    }
  }

  resizeImage(event: any) {
    let value = event.target.value;
    this.imageSize = value;
  }

  submit(){
    let data = this.formCreate?.value;
    this.userService.addUser(data);
  }

  get userName() {
    return this.formCreate?.get('userName')
  }
}
