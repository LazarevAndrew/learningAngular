import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'art-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.currentUser
      .subscribe(user => this.user = user);
  }

  public logOut() {
    this.userService.destroyAuth();
  }
}
