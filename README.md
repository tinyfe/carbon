<h3 align="center">
  <a href="https://github.com/Rain120/lerna-quick-start">Learn Quick Start</a>
</h3>

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/aa1cb15a-9a66-42df-ab3b-6cf8a607c9c4/deploy-status)](https://app.netlify.com/sites/lerna-quick-start/deploys) [![Coverage Status](https://coveralls.io/repos/github/Rain120/lerna-quick-start/badge.svg?branch=master)](https://coveralls.io/github/Rain120/lerna-quick-start?branch=master) [![Build Status](https://travis-ci.org/Rain120/lerna-quick-start.svg?branch=master)](https://travis-ci.org/Rain120/lerna-quick-start)

[![GitHub watchers](https://img.shields.io/github/watchers/rain120/lerna-quick-start?style=social)](https://github.com/Rain120/lerna-quick-start/watchers)
[![STAR](https://img.shields.io/github/stars/rain120/lerna-quick-start?style=social)](https://github.com/Rain120/lerna-quick-start/stargazers) [![FORK](https://img.shields.io/github/forks/rain120/lerna-quick-start?style=social)](https://github.com/Rain120/lerna-quick-start/network/members)

[![ISSUES](https://img.shields.io/github/issues/rain120/lerna-quick-start?style=flat-square)](https://github.com/Rain120/lerna-quick-start/issues) [![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/rain120/lerna-quick-start?style=flat-square)](https://github.com/Rain120/lerna-quick-start/pulls) [![COMMIT](https://img.shields.io/github/last-commit/rain120/lerna-quick-start?style=flat-square)](https://github.com/Rain120/lerna-quick-start/commits/master)

<!-- [![TEST](https://github.com/rain120/lerna-quick-start/workflows/.github/workflows/test.yml/badge.svg)](https://github.com/Rain120/lerna-quick-start/actions) -->

![LANGUAGES](https://img.shields.io/github/languages/top/rain120/lerna-quick-start?style=flat-square)
[![VERSION](https://img.shields.io/github/package-json/v/rain120/lerna-quick-start?style=flat-square)](https://github.com/Rain120/lerna-quick-start/blob/master/package.json) [![LICENSE](https://img.shields.io/github/license/rain120/lerna-quick-start?style=flat-square)](https://github.com/Rain120/lerna-quick-start/blob/master/LICENSE)

</div>

## 😚 Welcome

Welcome to the Lerna Quick Start.

### 🎮 TL;DR

⌨️ To be Continue...

### ✍ Why am I doing this?

- Lerna Quick Start.

### 💻 Plans

⌨️ To be Continue...

### 🔨 Usage

```sh
git clone https://github.com/Rain120/lerna-quick-start.git

# 还在计划写一个 cli
mv lerna-quick-start your-name
```

#### Scripts

- Lerna

  `npm run bootstrap`: 安装所有依赖项并链接任何交叉依赖

  `npm run cleanup`: 从所有包中删除 `node_modules` 目录

  `npm run publish`: 发布

  - `--skip-git`: 发布将发布到 `npm` 而不运行任何 `git` 命令。

  - `--skip-npm`: 跳过 `npm` 发布

  - `--force-publish`: `publish` 将强制发布指定的包(以逗号分隔)或使用的所有包

  **Note: 请先登录你的 [npm](https://www.npmjs.com/) 账号**

- Rollup Watch

  `npm run watch:umd`: 监听自动打包`umd`格式

  `npm run watch:module`: 监听自动打包`es & cjs`格式

  `BUILD_PATH="module1;module2" npm run watch:module`: 监听多个模块自动打包

- Rollup Build

  **Important: 请务必在 `package.json` 中设置下面三个属性(这三个属性的值, 对应着打包输出 `path`)。**

  ```json
  {
    // module cjs
    "main": "lib/index.js",
    // module es
    "module": "lib/index.es.js",
    // umd
    "browser": "lib/browser.js"
  }
  ```

  `npm run build:umd`: 通用模块定义, 以 `amd`, `cjs` 和 `iife` 为一体

  `npm run build:module`:

  - `es`: 将软件包保存为 `ES` 模块文件

  - `cjs`: `CommonJS`, 适用于 `Node` 或 `Browserify / webpack`

  `npm run build:all`: `build umd & build module`。

  **Note: 以上 3 种方式都是将 `packages/src/index.ts` 作为入口，打包所有 `package`。**

  `BUILD_PLAN="module1;module2" npm run build:all`: 制定`package`包进行打包。

### 👨‍🏭 Author

> Front-End development engineer, technology stack: React + Typescript + Mobx, also used Vue + Vuex for a while

- [Github](https://github.com/Rain120)

- [知乎](https://www.zhihu.com/people/yan-yang-nian-hua-120/activities)

- [掘金](https://juejin.im/user/57c616496be3ff00584f54db)

### 📝 License

[MIT](https://github.com/Rain120/lerna-quick-start/blob/master/LICENSE)

Copyright © 2020-present [Rain120](https://github.com/Rain120).

### ☕ Coffee or Tea

![wechat-zhifubao-pay.png](./wechat-zhifubao-pay.png)
