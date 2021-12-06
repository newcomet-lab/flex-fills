import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import * as Feather from 'feather-icons';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-identify-verification-edit',
  templateUrl: './identify-verification-edit.component.html',
  styleUrls: ['./identify-verification-edit.component.scss']
})
export class IdentifyVerificationEditComponent implements OnInit {

  @Input() idInfo: any;
  @Output() showDetail: EventEmitter<any> = new EventEmitter();
  modalController: bootstrap.Modal | undefined;

  headers = [
    {
      id: 1,
      title: 'Step 1',
      comment: 'Enter your personal details'
    }, {
      id: 2,
      title: 'Step 2',
      comment: 'Upload scanned copies of documents'
    }, {
      id: 3,
      title: 'Step 3',
      comment: 'Matching address and name'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Feather.replace();
  }

  reset() {
    this.showDetail.emit({
      type: 'reset'
    });
  }

  save() {
    // 
  }

  closeModal(){
    this.modalController?.toggle();
  }

  openModal(element: any){
    this.modalController = new bootstrap.Modal(element,{} );
    this.modalController?.show();

    console.log('idInfo: ', this.idInfo); // call api here  

    setTimeout(() => {
      this.closeModal();
      this.showDetail.emit({
        type: 'save'
      });
    }, 1000);
  }

}
