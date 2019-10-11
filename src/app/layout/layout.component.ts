import { Component, OnInit } from '@angular/core';
import { menu } from './menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  // isCollapsed = false;
  menuDate = menu;

  constructor() {}

  ngOnInit() {}
}
