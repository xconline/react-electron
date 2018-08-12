# 一个基于 react 的 Electron 的项目模板

## 使用 create-react-app 创建项目，通过 yarn eject 暴露所有 webpack 配置。UI 使用 antd，配置了 babel-plugin-import 按需加载。项目架构使用 React 全家桶，redux 中间件使用 redux-thunk

### react-electron-antd

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-slider.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-slider
[travis-image]: https://img.shields.io/travis/react-component/slider.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/slider
[codecov-image]: https://img.shields.io/codecov/c/github/react-component/slider/master.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/react-component/slider/branch/master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/slider.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/slider
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-slider.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-slider

## Git

```
https://github.com/xconline/react-electron.git
```

## Usage

### 调试运行

开发模式：package.json 中 DEV 设为 true

```
npm install
npm start
npm e-start
```

### 打包

生产模式：package.json 中 DEV 设为 false
修改 electron-package 命令，调用 electron-packager --helo 查看使用说明

```
npm build
npm electron-package
```
