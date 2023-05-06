const headerMenuConfig = [];
const asideMenuConfig = [
  {
    name: '功能',
    path: '/',
    icon: 'chart-pie',
    children: [
      {
        name: '存储开销检测',
        path: '/dashboard/analysis',
      },
      {
        name: '一致性检测',
        path: '/dashboard/workplace',
      },
      {
        name: '查询',
        path: '/dashboard/function1',
      },
    ],
  },
];
export { headerMenuConfig, asideMenuConfig };
