import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  desktopList = [
    {
      label: "Desktop notification",
      checked: true
    }
  ];

  onPageAlertList = [
    {
      label: "Orders",
      checked: false
    }, {
      label: "Trades",
      checked: false
    }, {
      label: "Account",
      checked: true
    }, {
      label: "Security",
      checked: false
    }
  ];

  emailList = [
    {
      label: "A withdrawal completes",
      checked: false
    }, {
      label: "A deposit arrives",
      checked: true
    }, {
      label: "A deposit completes",
      checked: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onNotificationSettingChange(index: any, category: any) {
    switch (category) {
      case 'DESKTOP':
        this.desktopList[index].checked = !this.desktopList[index].checked;
        break;
      case 'ON_PAGE_ALERTS':
        this.onPageAlertList[index].checked = !this.onPageAlertList[index].checked;
        break;
      case 'EMAILS':
        this.emailList[index].checked = !this.emailList[index].checked;
        break;
    
      default:
        break;
    }
  }

  reset() {

  }

  save() {
    
  }

}
