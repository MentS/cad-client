import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.less']
})
export class DepotComponent implements OnInit {
  editCache: { [key: string]: any } = {};
  listOfData: any[] = [];
  isLoading = true;

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  cancelEdit(d_no: string): void {
    const index = this.listOfData.findIndex(item => item.d_no === d_no);
    if (d_no === 'new') {
      this.listOfData = this.listOfData.filter(item => item.d_no !== d_no);
      delete this.editCache[d_no];
      return;
    }

    this.editCache[d_no] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(d_no: string): void {
    const index = this.listOfData.findIndex(item => item.d_no === d_no);
    const data = this.editCache[d_no].data;
    const isNew = this.listOfData[index].d_no === 'new';

    if (isNew) {
      this.isLoading = true;
      this.http.post<any>('api/depot', data).subscribe(res => {
        if (res.code === 10000) {
          this.createMessage('success', '操作成功');
        }
        console.log(res);
        this.selectList();
      });
    } else {
      this.isLoading = true;
      this.http.put<any>(`api/depot/${d_no}`, data).subscribe(res => {
        if (res.code === 10000) {
          this.createMessage('success', '操作成功');
        }
        console.log(res);
        this.selectList();
      });
    }
  }

  addEdit(): void {
    const isClose = Object.keys(this.editCache).includes('new');
    if (isClose) {
      const id = this.editCache.new.d_no;
      this.saveEdit(id);
    }

    const addObj = {
      d_no: 'new',
      d_name: '',
      d_default: 0
    };

    this.listOfData = [...this.listOfData, addObj];
    // const len: number = this.listOfData.length;

    this.editCache.new = {
      edit: true,
      data: { d_no: '', d_name: '', d_default: 0 }
    };
    console.log(this.listOfData);
  }

  delete(d_no: string): void {
    this.isLoading = true;
    this.http.delete(`api/depot/${d_no}`).subscribe(res => {
      console.log(res);
      this.selectList();
    });
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.d_no] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  selectList() {
    this.http.get<any>('api/depot').subscribe(res => {
      this.listOfData = res.data;
      this.isLoading = false;
      // console.log(res.data);
      this.updateEditCache();
      // console.log(this.editCache);
    });
  }

  createMessage(type: string, message: string): void {
    this.message.create(type, message);
  }

  ngOnInit(): void {
    this.selectList();
  }

  constructor(private http: HttpClient, private message: NzMessageService) { }
}
