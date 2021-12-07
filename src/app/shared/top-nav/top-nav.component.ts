import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Feather.replace();
  }

  redirect(url: any) {
    this.router.navigate([url]);
  }

}
