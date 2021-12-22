import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Store, select, ActionsSubject, Action } from '@ngrx/store';
import { 
  invokeServerInfoAPI
} from './store/actions/common.action';
import { selectServerInfo } from './store/reducers/common.reducer';
import { CommonEffect } from './store/effects/common.effect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flex-fill-app';

  constructor(
    private store: Store<{ user: any }>,
    private commonEffect : CommonEffect,
    private actionSubject: ActionsSubject) {

    }

  ngOnInit(): void {
    console.log('app component ts');
    this.store.dispatch(
      invokeServerInfoAPI()
    );
  }
}
