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
  // {
  //   title: '资料设定',
  //   icon: 'bars',
  //   children: [
  //     {
  //       title: '部门名称',
  //       link: '/basic/cust'
  //     },
  //     {
  //       title: '员工单位',
  //       link: '/basic/cust'
  //     }
  //   ]
  // },
  {
    title: '基本设定',
    icon: 'profile',
    children: [
      {
        title: '客户信息',
        link: '/system/cust'
      },
      {
        title: '厂商信息',
        link: '/system/supply'
      },
      {
        title: '产品管理',
        link: '/system/product'
      },
      {
        title: '资料设定',
        link: '/basic/depot'
      }
    ]
  }
];
