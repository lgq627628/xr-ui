# 快速上手
<!-- {.md} -->

----
<!-- {.md} -->

## 安装
<!-- {.md} -->

```
npm install xr-ui --save
```
<!-- {.md} -->

## 全局组件使用
<!-- {.md} -->

```js
import XrUI from 'xr-ui' // 引入组件库
```
<!-- {.md} -->

引入<!-- {.md} -->`px`或者`vw`布局样式

<!-- import 'vue-cards-demo/lib/theme-chalk/index.px.css' // px单位，适用于pc端布局 -->
```js
import 'xr-ui/lib/xr-ui.css'
```
最后，全局使用组件库<!-- {.md} -->
```js
Vue.use(XrUI)
```
<!-- {.md} -->

## 单个组件按需使用
<!-- {.md} -->

可以局部注册所需的组件，适用于与其他框架组合使用的场景
<!-- {.md} -->

```js

import { XrTest } from 'XrUI'

Vue.use(XrTest)

```
<!-- {.md} -->

在模板中，用<!-- {.md} --> `<xr-test></xr-test>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <xr-test></xr-test>
  </div>
</template>
```
<!-- {.md} -->


