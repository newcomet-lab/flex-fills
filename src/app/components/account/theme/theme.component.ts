import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  themeValue = 'Dark';
  themeList = [
    'Dark',
    'Light'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
