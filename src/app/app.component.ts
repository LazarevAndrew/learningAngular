import { Component, OnInit} from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'art-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.populate();
  }
}
