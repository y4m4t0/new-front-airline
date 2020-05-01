import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public logged: boolean = false
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.refresh.subscribe( () => {
      let token = localStorage.getItem('token')
      if (token) this.logged = true
      console.log('hello')
    })
    let token = localStorage.getItem('token')
      if (token) this.logged = true
  }

  onLogout() {
    localStorage.clear()
    this.logged = false
  }
}
