import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import Validation from '../../../utils/validation';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  modalController: bootstrap.Modal | undefined;
  pwChangeForm!: FormGroup;
  pwChangeSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pwChangeForm = this.fb.group({
      currentPassword: [
        '',
        [
          Validators.required
        ]
      ],
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ]
    },
    {
      validators: [Validation.match('newPassword', 'confirmPassword')]
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
    return this.pwChangeForm.controls;
  }

  onPwChange() {
    this.pwChangeSubmitted = true;
    if (!this.pwChangeForm.valid) {
      return;
    }
    alert('SUCCESS' + JSON.stringify(this.pwChangeForm.value));
  }

}
