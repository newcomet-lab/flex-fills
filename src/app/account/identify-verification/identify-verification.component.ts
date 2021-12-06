import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identify-verification',
  templateUrl: './identify-verification.component.html',
  styleUrls: ['./identify-verification.component.scss']
})
export class IdentifyVerificationComponent implements OnInit {

  idInfo = {
    address: 'Inna Bisler',
    dateOfBirth: '1991-10-10',
    nationality: 'American',
    countryOfResidence: 'USA',
    passport: {
      link: 'http://xxx.xx',
      status: true
    }, 
    bankStatement: {
      link: '',
      status: false
    }
  }; // comes from backend service
  isEdit = true; // switch between show/edit page, this is false as default

  constructor() { }

  ngOnInit(): void {
  }

  editID(data: any) {
    this.isEdit = true;
  }

  showDetail(data: any) {
    console.log('type: ', data.type);
    this.isEdit = false;
  }

}
