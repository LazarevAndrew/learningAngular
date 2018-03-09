import { Component, OnInit } from '@angular/core';

import { ErrorsService } from '../../core/services/errors.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'art-error-alerts',
  template: `
    <div *ngFor='let error of errors | async'
         class="alert alert-danger" role="alert">
        {{error.error.status}} __ {{error.error.error}}
    </div>
  `,
  styles: []
})
export class ErrorAlertsComponent implements OnInit {

  constructor(private errorsService: ErrorsService) {
  }

  ngOnInit() {
  }

  public get errors(): Observable<HttpErrorResponse[]> {
    return this.errorsService.errors;
  }
}
