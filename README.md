# MorphDAG-FrontEnd

## 使用

```bash
# 安装依赖
$ npm install

# 启动服务
$ npm run start  # visit http://localhost:3333
```

## 目录

```md
├── public/
│   ├── index.html                 # 应用入口 HTML
│   └── favicon.png                # Favicon
├── Records-200/                   # 数据库
├── src/                           # 源码路径
│   ├── components/                # 自定义组件
│   │   └── LocalProvider/
│   │   └── PageHeader/
│   ├── layouts/                   # 布局组件
│   │   └── BasicLayout/
│   ├── locales/                   # 语言组件
│   │   └── en-US/
│   │   └── zh-CN/
│   ├── models/                    # 应用级数据状态
│   ├── pages/                     # 页面组件
│   │   └── Analysis/              # 存储开销检测
│   │   └── Function1/             # 一致性检测
│   │   └── Mainpage/              # 主界面
│   │   └── Workplace/             # 查询
│   ├── utils/                     # 具库
│   ├── global.scss                # 全局样式
│   ├── routes.[j,t]s              # 路由配置
│   └── app.[j,t]s[x]              # 应用入口脚本
├── build.json                     # 项目配置
├── README.md
├── package.json
├── .editorconfig
├── .eslintignore
├── .eslintrc.[j,t]s
├── .gitignore
├── .stylelintignore
├── .stylelintrc.[j,t]s
├── .gitignore
└── [j,t]sconfig.json
```
