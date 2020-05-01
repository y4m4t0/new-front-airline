import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regModel = {
    email: '',
    name: '',
    password: '',
    password1: ''
  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onReg() {
    this.userService.signup(this.regModel).subscribe(res => {
      if(this.regModel.password == this.regModel.password1) {
      localStorage.setItem('token', res.token)
      localStorage.setItem('username', this.regModel.name)
      this.router.navigate(['/home'])
      }
    })
  }

}
