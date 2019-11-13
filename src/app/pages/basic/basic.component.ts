import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less']
})
export class BasicComponent implements OnInit {
  list = [
    { name: '仓别', link: 'basic/depot' },
    { name: '部门', link: 'basic/department' },
    { name: '制程', link: '' },
    { name: '职位', link: '' },
    { name: '材质', link: '' },
    { name: '机台', link: '' },
    { name: '物料型式', link: '' },
    { name: '客户地区', link: '' },
    { name: '员工单位', link: '' },
    { name: '业务代号', link: '' },
    { name: '产品单位', link: '' },
    { name: '产品类别', link: '' },
    { name: '客户种类', link: '' },
    { name: '包装方式', link: '' }
  ];

  gridStyle = {
    width: '14.28%',
    textAlign: 'center'
  };
  constructor() {}

  ngOnInit() {}
}
