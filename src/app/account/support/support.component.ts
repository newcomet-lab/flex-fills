import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  supportForm!: FormGroup;
  supportFormSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.supportForm = this.fb.group({
      subject: [
        '',
        [
          Validators.required
        ]
      ],
      content: [
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

  get getform() {
    return this.supportForm.controls;
  }

  onSupportFormSubmit() {
    this.supportFormSubmitted = true;
    if (!this.supportForm.valid) {
      return;
    }
    console.log('SUCCESS' + JSON.stringify(this.supportForm.value));
  }

  onAttachmentsChanged(event: any) {
    let formData = new FormData();

    if (event.target.files.length > 0) {
      const files = event.target.files[0];
      formData.append('attachments', files);
    }
  }

}
