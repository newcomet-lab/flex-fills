import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-settings-session',
  templateUrl: './security-settings-session.component.html',
  styleUrls: ['./security-settings-session.component.scss']
})
export class SecuritySettingsSessionComponent implements OnInit {

  sessionList = [
    {
      label: "Keep session alive. If disabled, your session will expire after 30 minutes of inactivity",
      checked: false
    }, {
      label: "Send Email on login",
      checked: false
    }, {
      label: "Detect IP address change",
      checked: false
    }, {
      label: "Login history",
      checked: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSessionChange(index: any) {
    this.sessionList[index].checked = !this.sessionList[index].checked;
  }

}
