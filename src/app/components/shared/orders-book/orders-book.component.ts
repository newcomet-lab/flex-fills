import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orders-book',
  templateUrl: './orders-book.component.html',
  styleUrls: ['./orders-book.component.scss']
})
export class OrdersBookComponent implements OnInit {

  @Input() data: any;
  @Input() type: any;

  constructor() { }

  ngOnInit(): void {
  }

  calcPercentage(item: any) {
    let sumTotals = 0;
    this.data.forEach((o: any) => {
      sumTotals += o.total;
    });

    let percentage = (item.total / sumTotals) * 100;

    if (this.type === 'bid') {
      return `linear-gradient( 
        to right, 
        rgba(0, 0, 0, 0) 0%, 
        rgba(0, 0, 0, 0) ${(100 - percentage)}%, 
        rgba(0, 192, 135, 0.2) ${(100 - percentage)}%, 
        rgba(0, 192, 135, 0.2) 100% )`;
    } else {
      return `linear-gradient( 
        to right, 
        rgba(192, 0, 104, 0.1) 0%, 
        rgba(192, 0, 104, 0.1) ${percentage}%, 
        rgba(0, 0, 0, 0) ${percentage}%, 
        rgba(0, 0, 0, 0) 100% )`;
    }
  }

}
