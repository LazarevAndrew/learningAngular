import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'art-error-404',
  template: `
    <div class="alert alert-danger text-center" role="alert">
      <h1>404</h1>
    </div>
  `,
  styles: []
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
