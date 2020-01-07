import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.less']
})
export class MonitorComponent implements OnInit {

  list: any[] = [];
  isLoading =  true;

  selectList() {
    this.http.get<any>('api/orderd/test').subscribe(res => {
      this.list = res.data;
      this.isLoading = false;
      console.log(res.data);
    });
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.selectList();
  }
}
