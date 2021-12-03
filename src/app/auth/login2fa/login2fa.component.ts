import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login2fa',
  templateUrl: './login2fa.component.html',
  styleUrls: ['./login2fa.component.scss']
})
export class Login2faComponent implements OnInit {

  authForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      token: [
        '',
        [Validators.required]
      ]
    });
  }

  get getform() {
    return this.authForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.authForm.valid) {
      return;
    }
    console.log('SUCCESS' + JSON.stringify(this.authForm.value));

    this.route.navigate(['/account']);
  }

}
