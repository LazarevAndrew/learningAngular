import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'art-root',
  template:  `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
  }
}
