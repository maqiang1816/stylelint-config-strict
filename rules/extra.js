"use strict"

module.exports = {
  rules: {
    'at-rule-blacklist': null, // 不指定一个禁止使用的 @ 规则的黑名单
    'at-rule-name-newline-after': 'always-multi-line', // 要求在 @ 规则之后有一个换行符
    'at-rule-no-vendor-prefix': null, // 不禁止 @ 规则使用浏览器引擎前缀
    'at-rule-property-requirelist': null, // 不指定一个@ 规则须包含的属性名单
    'at-rule-semicolon-space-before': 'never', // 禁止在 @ 规则的分号之前有空格
    'at-rule-whitelist': null, // 不指定允许使用的 @ 规则的白名单
    'block-closing-brace-space-after': 'always-single-line', // 在闭括号之后要求有一个空格
    'block-opening-brace-newline-before': 'always-multi-line', // 在括开号之前要求有一个换行符或空白
    'color-named': [ 'never', {
      ignore: ['inside-function'],
    }], // 禁止使用命名的颜色
    'color-no-hex': null, // 不禁止使用十六进制颜色
    'comment-word-blacklist': null, // 不指定不允许出现在注释中的单词的黑名单
    'custom-media-pattern': null, // 不指定一个自定义媒体查询名称的匹配模式
    'custom-property-pattern': null, // 不为自定义属性指定一个匹配模式
    'declaration-block-no-redundant-longhand-properties': true, // 禁止使用可以缩写却不缩写的属性
    'declaration-block-semicolon-newline-before': 'never-multi-line', // 在声明块的分号之前禁止有空白
    'declaration-no-important': null, // 不禁止在声明中使用 !important  ---TODO:待商榷
    'declaration-property-unit-blacklist': null, // 不指定一个在声明中禁止使用的属性和单位的黑名单
    'declaration-property-unit-whitelist': null, // 不指定一个在声明中禁止使用的属性和单位的白名单
    'declaration-property-value-blacklist': null, // 不指定一个在声明中禁止使用的属性和值的黑名单
    'declaration-property-value-whitelist': null, // 不指定一个在声明中禁止使用的属性和值的白名单
    'font-family-name-quotes': 'always-where-recommended', // 指定字体名称需要使用引号括起来
    'font-weight-notation': [ 'named-where-possible', {
      ignore: ['relative'],
    }], // 要求使用数字或命名的 (可能的情况下) font-weight 值
    'function-blacklist': null, // 不指定一个禁用的函数的黑名单
    'function-calc-no-invalid': true, // 禁止无效的 calc 函数
    'function-comma-newline-before': 'never-multi-line', // 在函数的逗号之前禁止有空白
    'function-url-no-scheme-relative': true, // 禁止 url 使用相对协议的链接
    'function-url-quotes': 'always', // 要求 url 使用引号
    'function-url-scheme-blacklist': null, // 不指定一个禁止的 url 协议的黑名单
    'function-url-scheme-whitelist': null, // 不指定一个允许的 url 协议的白名单
    'function-whitelist': null, // 不指定一个允许的函数的白名单
    'keyframes-name-pattern': null, // 不指定一个keyframe 的命名模式
    'linebreaks': 'unix', // 指定使用的换行符
    'max-nesting-depth': [ 5, {
      ignore: [
        'blockless-at-rules',
        'pseudo-classes',
      ],
    }], // 限制允许嵌套的深度 ---TODO:待商榷
    'media-feature-name-blacklist': null, // 不指定禁止使用的 media 特性名称的黑名单
    'media-feature-name-no-vendor-prefix': null, // 不禁止 media 特性名称带有浏览器引擎前缀
    'media-feature-name-value-whitelist': null, // 不指定允许使用的 media 特性属性和值的白名单
    'media-feature-name-whitelist': null, // 不指定允许使用的 media 特性名称的白名单
    'media-query-list-comma-newline-before': 'never-multi-line', // 在媒体查询的逗号之前禁止有空白
    'no-empty-first-line': true, // 第一行禁止为空
    'no-unknown-animations': true, // 禁止未知的动画
    'number-max-precision': 2, // 限制两位小数
    'property-blacklist': null, // 不指定一个禁止使用的属性的白名单
    'property-no-vendor-prefix': null, // 不禁止属性使用浏览器引擎前缀
    'property-whitelist': null, // 不指定一个允许使用的属性的白名单
    'selector-attribute-operator-blacklist': null, // 不指定一个禁止使用的特性(attribute)操作符的黑名单
    'selector-attribute-operator-whitelist': null, // 不指定一个允许使用的特性(attribute)操作符的白名单
    'selector-attribute-quotes': 'never', // 禁止特性值使用引号
    'selector-class-pattern': '^[a-z]+([a-z0-9]?|[a-z0-9\\-\\_]*[a-z0-9])$', // 指定一个类选择器的模式，限制选择器名称写法
    'selector-combinator-blacklist': null, // 不指定一个禁止使用的关系选择符的黑名单
    'selector-combinator-whitelist': null, // 不指定一个允许使用的关系选择符的白名单
    'selector-id-pattern': '^[a-z]+([a-z0-9]?|[a-z0-9\\-\\_]*[a-z0-9])$', // 指定一个id选择器的模式，限制选择器名称写法
    'selector-list-comma-newline-before': 'never-multi-line', // 禁止在选择器列表的逗号之前有空白
    'selector-list-comma-space-after': 'always-single-line', // 要求在同一行的选择器列表的逗号之后有一个空格
    'selector-max-attribute': 3, // 限制同时最多三个属性选择器 ---TODO:待商榷
    'selector-max-class': 5, // 限制同时最多五个类选择器 ---TODO:待商榷
    'selector-max-combinators': 3, // 限制同时最多三个关系选择器 ---TODO:待商榷
    'selector-max-compound-selectors': 5, // 限制同时最多五个选择器 ---TODO:待商榷
    'selector-max-id': 2, // 限制同时最多两个id选择器 ---TODO:待商榷
    'selector-max-pseudo-class': 3, // 限制同时最多三个伪类选择器 ---TODO:待商榷
    'selector-max-specificity': '3,5,3',  // 限制同时存在的id, class, type(标签)选择器的数量 ---TODO:待商榷
    'selector-max-type': 3, // 限制同时最多三个标签选择器 ---TODO:待商榷
    'selector-max-universal': 3, // 限制同时最多三个通用(*)选择器 ---TODO:待商榷
    'selector-nested-pattern': null, // 不指定嵌套选择器的匹配模式
    'selector-no-qualifying-type': [ true, {
      ignore: ['attribute', 'class', 'id'],
    }], // 禁止使用类型对选择器
    'selector-no-vendor-prefix': null, // 选择器禁止使用浏览器引擎前缀
    'selector-pseudo-class-blacklist': null, // 不指定允许使用的伪类选择器的黑名单
    'selector-pseudo-class-whitelist': null, // 不指定允许使用的伪类选择器的白名单
    'selector-pseudo-element-blacklist': null, // 不指定允许使用的伪元素选择器的黑名单
    'selector-pseudo-element-whitelist': null, // 不指定允许使用的伪元素选择器的白名单
    'shorthand-property-no-redundant-values': true, // 禁止在简写属性中使用冗余值
    'string-quotes': 'double', // 指定字符串使用双引号
    'time-min-milliseconds': 100, // 禁止 animation 和 transition 时间小于或等于 100ms
    'unit-blacklist': null, // 不指定禁止使用的单位的黑名单
    'unit-whitelist': null, // 不指定所允许的单位的白名单
    'value-keyword-case': 'lower', // 要求属性的值为小写
    'value-list-comma-newline-before': 'never-multi-line', // 禁止在值列表的逗号之前有空白
    'value-no-vendor-prefix': null, // 不禁止给值添加浏览器引擎前缀
  },
}
