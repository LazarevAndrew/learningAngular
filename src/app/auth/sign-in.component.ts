import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { ErrorsService } from '../core/services/errors.service';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user';

@Component({
  selector: 'art-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [`
    .ng-invalid.ng-touched {
      border-color: red;
    }
  `]
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;

  constructor(private userService: UserService,
              private errorsService: ErrorsService,
              private fb: FormBuilder,
              private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const credentials = this.signInForm.value;
    this.userService.login(credentials)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorsService.pushError(error);
          return new ErrorObservable(error);
        })
      )
      .subscribe(data => this.router.navigate(['/']));
  }

}
