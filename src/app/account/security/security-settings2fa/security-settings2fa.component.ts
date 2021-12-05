import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-security-settings2fa',
  templateUrl: './security-settings2fa.component.html',
  styleUrls: ['./security-settings2fa.component.scss']
})
export class SecuritySettings2faComponent implements OnInit {

  modalController: bootstrap.Modal | undefined
  auth2FAForm!: FormGroup;
  auth2FAFormSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.auth2FAForm = this.fb.group({
      token: [
        '',
        [
          Validators.required
        ]
      ]
    });
  }

  ngAfterViewInit() {
    Feather.replace();
  }

  closeModal(){
    this.modalController?.toggle()
  }

  openModal(element: any){
    this.modalController = new bootstrap.Modal(element,{} )
    this.modalController?.show()
  }

  get getform() {
    return this.auth2FAForm.controls;
  }

  on2FATokenSubmit() {
    this.auth2FAFormSubmitted = true;
    if (!this.auth2FAForm.valid) {
      return;
    }
    console.log('SUCCESS' + JSON.stringify(this.auth2FAForm.value));
    this.closeModal();
  }

}
