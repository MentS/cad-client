import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.less']
})
export class CustComponent implements OnInit {
  // option = { params: { page: '2' } };

  data = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.http.get<any>('api/cust').subscribe((res: any) => {
    //   this.data = res.data.records;
    //   console.log(res);
    // });
  }
}
