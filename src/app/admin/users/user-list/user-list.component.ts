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
  error = "";
  roles: any[] = [];

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
    //this.users = this.userService.getAll();
    this.getAllUser();
    this.getRoles();
    this.formCreate = this.fb.group({
      name : ['', [Validators.required, Validators.minLength(4)]],
      email : [''],
      password : [''],
      role: ['']
    })
  }

  getRoles() {
    this.userService.getAllRoleUser().subscribe(res => {
      console.log(res)
      this.roles = res;
    })
  }

  getAllUser() {
    this.userService.getAll().subscribe(res => {
      console.log(res)
      this.users = res.users;
    })
  }

  delete(id: any) {
    if (confirm('Are you sure?')) {
      this.userService.deleteUser(id).subscribe(res => {
        if (res.status == 'errors') {
          this.error = res.message
        } else  {
          this.message = res.message;
          this.users = res.users;
        }
      });

    }
  }

  resizeImage(event: any) {
    let value = event.target.value;
    this.imageSize = value;
  }

  submit(){
    let data = this.formCreate?.value;
    console.log(data)
    //this.userService.addUser(data);
  }

  get name() {
    return this.formCreate?.get('name')
  }
}
