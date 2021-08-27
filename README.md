### vant安装以及按需加载
- [vant按需加载](https://juejin.cn/post/6844903829658435591)
```
npm install vant --save
npm i babel-plugin-import -D
npm i vant -S
```
- less版本报错
```
// 删掉以前版本，package.json改成如下版本
  "less": "^3.12.2",
  "less-loader": "^7.0.2"
```
- vant版本报错

```
// 删掉以前vant版本，重装"vant": "^3.0.0-beta.5"
"export 'default' (imported as 'Vue') was not found in 'vue'
```