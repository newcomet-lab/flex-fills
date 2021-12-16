import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import { Store, select, ActionsSubject, Action } from '@ngrx/store';
import { 
  invokeLoginAPI,
  loginSuccessAction
} from '../../../store/actions/auth.action';
import { selectLoginInfo } from '../../../store/reducers/auth.reducer';
import { AuthEffect } from '../../../store/effects/auth.effect';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup;
  submitted = false;

  subs: any;
  loginInfo$: any;

  constructor(
    private fb: FormBuilder, 
    private route:Router,
    private store: Store<{ user: any }>,
    private authEffect : AuthEffect,
    private actionSubject: ActionsSubject,
    private tokenStorage: TokenStorageService) {
      this.loginInfo$ = this.store.pipe(select(selectLoginInfo));

      this.subs = actionSubject.subscribe((action: Action) => {
        if (action.type === '[Auth API] Login API Success') {
          route.navigate(['/auth/login/2fa']);
        }

        if (action.type === '[Auth API] Login API Failed') {
          route.navigate(['/auth/login/2fa']);
        }
     });
    }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  get getform() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }

    this.store.dispatch(
      invokeLoginAPI({
        email: this.userForm.value.email,
        password: this.userForm.value.password
      })
    );
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }
}
