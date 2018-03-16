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
  selector: 'art-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [`
    .ng-invalid.ng-touched {
      border-color: red;
    }
  `]
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;

  constructor(private userService: UserService,
              private errorsService: ErrorsService,
              private fb: FormBuilder,
              private router: Router) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const credentials = this.signUpForm.value;
    this.userService.registration(credentials)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorsService.pushError(error);
          return new ErrorObservable(error);
        })
      )
      .subscribe(data => this.router.navigate(['/']));
  }

}
