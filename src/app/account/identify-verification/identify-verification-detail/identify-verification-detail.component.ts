import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-identify-verification-detail',
  templateUrl: './identify-verification-detail.component.html',
  styleUrls: ['./identify-verification-detail.component.scss']
})
export class IdentifyVerificationDetailComponent implements OnInit {

  @Input() idInfo: any;
  @Output() editID: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEditID() {
    this.editID.emit();
  }

}
