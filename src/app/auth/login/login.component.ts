import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private route:Router) { }

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
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
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
    console.log('SUCCESS' + JSON.stringify(this.userForm.value));

    this.route.navigate(['/auth/login/2fa']);
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }
}
