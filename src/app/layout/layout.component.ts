import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  // isCollapsed = false;

  menuDate = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      children: [
        {
          title: 'monitor',
          icon: '',
          link: '/monitor'
        }
      ]
    },
    {
      title: '基本设置',
      icon: '',
      children: [
        {
          title: '客户',
          icon: '',
          link: 'layout/cust'
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
