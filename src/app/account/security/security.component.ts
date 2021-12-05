import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  settingHeaders = [
    {
      id: 1,
      title: 'Two-Factor Authentication',
      comment: 'Configure 2FA services',
      disabled: true
    }, {
      id: 2,
      title: 'Withdrawal Address Whitelist',
      comment: 'Withdrawal Address Whitelist',
      disabled: false
    }, {
      id: 3,
      title: 'Session',
      comment: 'Adjust session settings',
      disabled: false
    }, {
      id: 4,
      title: 'Withdrawal Settings',
      comment: 'Tailor your withdrawal settings',
      disabled: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Feather.replace();
  }

}
