export let menu = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    children: [
      {
        title: '控制台',
        link: '/dashboard/monitor'
      }
    ]
  },
  {
    title: '资料设定',
    icon: 'bars',
    children: [
      {
        title: '部门名称',
        link: '/basic/cust'
      },
      {
        title: '员工单位',
        link: '/basic/cust'
      }
    ]
  },
  {
    title: '基本设定',
    icon: 'profile',
    children: [
      {
        title: '客户信息',
        link: '/system/cust'
      }
    ]
  }
];
