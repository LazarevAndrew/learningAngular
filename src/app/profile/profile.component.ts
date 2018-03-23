import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../core/models/user';
import { UserService } from '../core/services/user.service';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { ErrorsService } from '../core/services/errors.service';

@Component({
  selector: 'art-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public user: User = {} as User;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private errorsService: ErrorsService) {
    this.profileForm = this.fb.group({
      image: '',
      username: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      bio: '',
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
    Object.assign(this.user, this.userService.currentUserSubject.value);
    this.profileForm.patchValue(this.user);
  }


  onSubmit() {
    const credentials = this.profileForm.value;
    Object.assign(this.user, credentials);
    this.userService.updateUser(this.user)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorsService.pushError(error);
          return new ErrorObservable(error);
        })
      )
      .subscribe(data => data);
  }

}
