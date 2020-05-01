import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logModel = {
    email: '',
    password: ''
  }
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  onLogin() {
    this.userService.login(this.logModel).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/home'])
      }
    )
  }
}
