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
        icon: 'copy',
      },
      {
        name: '一致性检测',
        path: '/dashboard/workplace',
        icon: 'chart-bar',
      },
      {
        name: '查询',
        path: '/dashboard/function1',
        icon: 'calendar',
      },
    ],
  },
];
export { headerMenuConfig, asideMenuConfig };
