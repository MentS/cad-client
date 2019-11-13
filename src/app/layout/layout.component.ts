import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';

import { menu } from './menu';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  // isCollapsed = false;
  menuDate = menu;
  breadcrumbs: any = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // 订阅路由事件 当路由发生改变时添加到面包屑数组
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {
        const snapshot = this.router.routerState.snapshot;
        const url = snapshot.url;
        // const routeData = route.snapshot.data;

        // console.log(routeData);
        // const label = routeData.breadcrumb;
        // const params = snapshot.root.params;
        if (!this.breadcrumbs.includes(url)) {
          this.breadcrumbs.push(url);
        }
        // console.log(this.breadcrumbs);
      });
  }
}
