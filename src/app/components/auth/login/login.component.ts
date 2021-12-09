import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder, 
    private route:Router,
    private authService: AuthService, 
    private tokenStorage: TokenStorageService) { }

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

  get getform() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }

    this.authService.login({
      email: this.userForm.value.email,
      password: this.userForm.value.password
    });
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }
}
