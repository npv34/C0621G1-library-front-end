import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  formEdit?: FormGroup

  constructor(private router: ActivatedRoute,
              private userService: UserService,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit(): void {
    let id = parseInt(<string>this.router.snapshot.paramMap.get('id'));
    this.userService.findByID(id).subscribe(res => {
      console.log(res)
      this.formEdit = this.fb.group({
        name: [res.name],
        email: [res.email],
      });
      }
    );

  }

  submit() {
    let index = parseInt(<string>this.router.snapshot.paramMap.get('id'));
    let data = this.formEdit?.value;
    this.userService.update(data, index);
    this.route.navigate(['admin/users'])
  }

}
