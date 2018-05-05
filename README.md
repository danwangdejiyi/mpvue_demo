# mpvue_demo

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


<!--
# 记录一下开发问题
mpvue不支持 ';' ，输入 ';' 直接报错（太tmd坑爹了）
mpvue使用制表符tab（缩进使用 tab）时，必须设置为2个空格，非2个空格报错
每个vue，js等编写完之后，必须预留一行（多回车几次就可以了）
例子
let serverPath = 'http://www.abc.com/api/'
function posts (url) {
  let all = serverPath + url
  return all
}
posts('')

export function post (url) {
  let all = serverPath + url
  return all
}

// module.exports = {
//   post: post
// }
-->
