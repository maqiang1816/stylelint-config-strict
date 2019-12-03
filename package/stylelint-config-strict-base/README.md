<!--
 * @author: maqiang
 * @Date: 2019-12-03 14:13:59
 * @LastEditors: maqiang
 * @LastEditTime: 2019-12-03 14:21:50
 * @description: stylelint-config-strict-base 使用指南
 -->

# @xmgh/stylelint-config-strict-base

An shareable strict config for stylelint

## 引入npm依赖包

```bash
yarn add -D stylelint@10.1.0 @xmgh/stylelint-config-strict-base@1.0.0
```

## 添加webpack插件，方便开发时校验

对于 webpack 工程，可以添加 webpack 插件，以方便开发时实时校验

执行下列命令，安装插件

```bash
yarn add -D @xmgh/stylelint-webpack-plugin@1.0.5
```

vue-cli2 工程，需要在/build/webpack.config.base.js 文件里引入插件并进行配置

```javascript
const StyleLintPlugin = require('@xmgh/stylelint-webpack-plugin')
module.exports = {
  plugins: [
    new StyleLintPlugin({
      // 正则匹配想要lint监测的文件
      files: ['src/**/*.vue', 'src/**/*.l?(e|c)ss'],
    }),
  ]
}
```

vue-cli3 工程需要在项目根目录的vue.config.js文件内添加如下内容

```javascript
const StyleLintPlugin = require('@xmgh/stylelint-webpack-plugin')
module.exports = {
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        // 正则匹配想要lint监测的文件
        files: ['src/**/*.vue', 'src/**/*.l?(e|c)ss'],
      }),
    ]
  }
}
```

## 使用规范

对于新工程，直接在项目根目录下，复制如下内容至 .stylelintrc.js 文件内

```javascript
module.exports = {
  extends: ['@xmgh/stylelint-config-strict-base'],
  // 各工程的个性化配置，可以在这里设置覆盖
  rules: {
    // 'declaration-no-important': null,
  }
}
```

还可以对一些文件忽略校验
同样在项目根目录下建立新文件 .stylelintignore  ，文件内加入如下配置

```bash
**/node_modules
**/dist
*.js
*.png
*.eot
*.ttf
*.woff
```

PS: 对于第二项在项目根目录引入规范的方式，会对整个工程的文件进行校验，建议新工程使用，
对于老工程，可以对指定的文件进行校验，在根目录下放置一个空的规则文件，将实际的规范文件 .stylelintrc.js  放到相对应的目录下

空文件格式如下：

```javascript
module.exports = {
  rules: {

  }
}
```

另外对于某些可以自修复的问题，可以通过命令行自动修复，但这种方式可能会引发不可知的问题，慎用。
可以在package.json 文件内的script 字段下添加如下命令：

```bash
"stylelint:fix": "stylelint \"./**/*.{css,less,vue}\" --fix"
```
