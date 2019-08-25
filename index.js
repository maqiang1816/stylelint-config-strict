"use strict"

module.exports = {
  "rules": {
    'at-rule-blacklist': null, // 不指定一个禁止使用的 @ 规则的黑名单
    "at-rule-empty-line-before": [ "always", {
      except: [
        "blockless-after-same-name-blockless",
        "first-nested",
      ],
      ignore: ["after-comment"],
    } ], // 要求或禁止在 @ 规则之前有空行
    "at-rule-name-case": "lower", // 指定 @ 规则名称为小写
    "at-rule-name-newline-after": "always-multi-line", // 要求在 @ 规则之后有一个换行符
    "at-rule-name-space-after": "always-single-line", // 要求在 @ 规则之后有一个空格
    "at-rule-no-unknown": true, // 禁止使用未知的 @ 规则
    "at-rule-no-vendor-prefix": true, // 禁止 @ 规则使用浏览器引擎前缀
    "at-rule-property-requirelist": null,
    "at-rule-semicolon-newline-after": "always", // 要求在 @ 规则的分号之后有一个换行符
    "at-rule-semicolon-space-before": "never",
    "at-rule-whitelist": null, // 不指定允许使用的 @ 规则的白名单
    "block-closing-brace-empty-line-before": "never", // 禁止在闭括号之前有空行
    "block-closing-brace-newline-after": "always", // 在闭括号之后要求有一个换行符
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-after": 'always',
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-newline-before": null,
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower", // 指定十六进制颜色值为小写
    "color-hex-length": "short", // 指定十六进制颜色使用缩写
    "color-named": [ "never", {
      ignore: ["inside-function"],
    }],
    "color-no-hex": null, // 不禁止使用十六进制颜色
    "color-no-invalid-hex": true, // 禁止使用无效的十六进制颜色
    "comment-empty-line-before": [ "always", {
      except: ["first-nested"],
      ignore: ["stylelint-commands"],
    } ], // 要求在注释之前有空行
    "comment-no-empty": true, // 禁止空注释
    "comment-whitespace-inside": "always", // 要求在注释标签内有空白
    "comment-word-blacklist": null, // 不指定不允许出现在注释中的单词的黑名单
    "custom-media-pattern": null,
    "custom-property-empty-line-before": [ "always", {
      except: [
        "after-custom-property",
        "first-nested",
      ],
      ignore: [
        "after-comment",
        "inside-single-line-block",
      ],
    } ], // 要求在自定义属性之前有一行空行
    "custom-property-pattern": null, // 不为自定义属性指定一个匹配模式
    "declaration-bang-space-after": "never", // 在感叹号之禁止有空白
    "declaration-bang-space-before": "always", // 在感叹号之前要求有一个空格
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates-with-different-values"]
      }
    ], // 在声明的块中中禁止出现重复的属性
    "declaration-block-no-redundant-longhand-properties": true, // 禁止使用可以缩写却不缩写的属性
    "declaration-block-no-shorthand-property-overrides": true, // 禁止缩写属性覆盖相关普通写法属性
    "declaration-block-semicolon-newline-after": "always", // 在声明块的分号之后要求有一个换行符
    "declaration-block-semicolon-newline-before": "never-multi-line", // 在声明块的分号之前禁止有空白
    "declaration-block-semicolon-space-after": "always", // 在声明块的分号之后要求有一个空格
    "declaration-block-semicolon-space-before": "never", // 在声明块的分号之后禁止有空白
    "declaration-block-single-line-max-declarations": 1, // 限制单行声明块中声明的数量为1
    "declaration-block-trailing-semicolon": "always", // 要求在声明块中使用拖尾分号
    "declaration-colon-newline-after": "always-multi-line", // 在冒号之后要求有一个换行符
    "declaration-colon-space-after": "always-single-line", // 在冒号之后要求有一个空格
    "declaration-colon-space-before": "never", // 在冒号之前禁止有空白
    "declaration-empty-line-before": [ "always", {
      except: [
        "after-declaration",
        "first-nested",
      ],
      ignore: [
        "after-comment",
        "inside-single-line-block",
      ],
    } ],
    "declaration-no-important": null, // 不禁止在声明中使用 !important
    "declaration-property-unit-blacklist": null, // 不指定一个在声明中禁止使用的属性和单位的黑名单
    "declaration-property-unit-whitelist": null, // 不指定一个在声明中禁止使用的属性和单位的白名单
    "declaration-property-value-blacklist": null, // 不指定一个在声明中禁止使用的属性和值的黑名单
    "declaration-property-value-whitelist": null, // 不指定一个在声明中禁止使用的属性和值的白名单
    "font-family-name-quotes": "always-where-recommended", // 指定字体名称需要使用引号括起来
    "font-family-no-duplicate-names": true, // 禁止使用重复的字体名称
    "font-family-no-missing-generic-family-keyword": true,
    "font-weight-notation": [ "named-where-possible", {
      ignore: ["relative"],
    }], // 要求使用数字或命名的 (可能的情况下) font-weight 值
    "function-blacklist": null, // 不指定一个禁用的函数的黑名单
    "function-calc-no-invalidr": true,
    "funciton-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "always-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-no-scheme-relative": true,
    'function-url-quotes': 'always',
    "function-url-scheme-blacklist": null,
    "function-url-scheme-whitelist": null,
    'function-whitelist': null,
    "function-whitespace-after": "always",
    "indentation": 2, // 指定缩进为2
    "keyframe-declaration-no-important": true, // 禁止在 keyframe 声明中使用 !important
    'keyframes-name-pattern': '^[a-z]+([a-z0-9]?|[a-z0-9\\-\\_]*[a-z0-9])$', // 指定一个keyframe 的命名模式，限制名称写法
    "length-zero-no-unit": true, // 长度为0时，禁止使用单位
    'linebreaks': 'unix',
    "max-empty-lines": 1, // 限制相邻空行的数量为1
    'max-nesting-depth': [ 3, {
      ignore: ["blockless-at-rules", "pseudo-classes"]
    }], // 限制允许嵌套的深度
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    'media-feature-name-blacklist': null,
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-value-whitelist': null,
    'media-feature-name-whitelist': null,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    'media-query-list-comma-newline-before': 'never-multi-line',
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",
    "no-descending-specificity": true, // 禁止低优先级的选择器出现在高优先级的选择器之后
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true, // 在一个样式表中禁止出现重复的选择器
    'no-empty-first-line': true,
    "no-empty-source": true, // 禁止空源
    "no-eol-whitespace": true, // 禁止行尾空白
    "no-extra-semicolons": true, // 禁止多余的分号
    "no-invalid-double-slash-comments": true, // 禁用 CSS 不支持的双斜线注释 (//...)
    "no-missing-end-of-source-newline": true, // 禁止缺少文件末尾的换行符
    'no-unknown-animations': true, // 禁止动画名称与 @keyframes 声明不符
    "number-leading-zero": "never", // 禁止小于 1 的小数的前导 0
    "number-no-trailing-zeros": true, // 禁止数字中的拖尾 0
    'number-max-precision': 2, // 限制两位小数
    'property-blacklist': null, // 不指定一个禁止使用的属性的白名单
    "property-case": "lower", // 邀请属性为小写
    "property-no-unknown": true, // 禁止使用未知属性
    'property-no-vendor-prefix': true, // 禁止属性使用浏览器引擎前缀
    'property-whitelist': null, // 不指定一个允许使用的属性的白名单
    "rule-empty-line-before": [ "always-multi-line", {
      except: ["first-nested"],
      ignore: ["after-comment"],
    } ],
    "selector-attribute-brackets-space-inside": "never",
    'selector-attribute-operator-blacklist': null,
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    'selector-attribute-operator-whitelist': null,
    'selector-attribute-quotes': 'never',
    'selector-class-pattern': '^[a-z]+([a-z0-9]?|[a-z0-9\\-\\_]*[a-z0-9])$', // 指定一个类选择器的模式，限制选择器名称写法
    'selector-combinator-blacklist': null,
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    'selector-combinator-whitelist': null,
    "selector-descendant-combinator-no-non-space": true,
    'selector-id-pattern': '^[a-z]+([a-z0-9]?|[a-z0-9\\-\\_]*[a-z0-9])$', // 指定一个id选择器的模式，限制选择器名称写法
    'selector-list-comma-newline-before': 'never-multi-line', // 禁止在选择器列表的逗号之前有空白
    "selector-list-comma-newline-after": "always", // 要求选择器列表的逗号之后有一个换行符
    "selector-list-comma-space-before": "never", // 禁止在选择器列表的逗号之前有空白
    'selector-list-comma-space-after': 'always', // 要求在选择器列表的逗号之后有一个空格
    'selector-max-attribute': 2,
    'selector-max-class': 3,
    'selector-max-combinators': 3,
    'selector-max-compound-selectors': 3,
    "selector-max-empty-lines": 0,
    'selector-max-id': 2,
    'selector-max-pseudo-class': 2,
    'selector-max-specificity': '2,3,2',
    'selector-max-type': 3,
    'selector-max-universal': 2,
    'selector-nested-pattern': null, // 不指定嵌套选择器的匹配模式
    'selector-no-qualifying-type': [ true, {
      ignore: ["attribute", "class", "id"]
    }],
    'selector-no-universal': null, // 不禁用通配符选择器
    'selector-no-vendor-prefix': true, // 选择器禁止使用浏览器引擎前缀
    'selector-pseudo-class-blacklist': null, // 不指定允许使用的伪类选择器的黑名单
    "selector-pseudo-class-case": "lower", // 指定伪类选择器为小写
    "selector-pseudo-class-no-unknown": true, // 禁止使用未知的伪类选择器
    "selector-pseudo-class-parentheses-space-inside": "never", // 在伪类选择器的括号内禁止有空白
    'selector-pseudo-class-whitelist': null, // 不指定允许使用的伪类选择器的白名单
    'selector-pseudo-element-blacklis': null, // 不指定允许使用的伪元素选择器的黑名单
    "selector-pseudo-element-case": "lower", // 指定伪元素选择器为小写
    "selector-pseudo-element-colon-notation": "double", // 指定伪元素选择器使用双冒号
    "selector-pseudo-element-no-unknown": true, // 禁止使用未知的伪元素选择器
    'selector-pseudo-element-whitelist': null, // 不指定允许使用的伪元素选择器的白名单
    "selector-type-case": "lower", // 指定类型选择器为小写
    "selector-type-no-unknown": true, // 禁用未知的类型选择器
    'shorthand-property-no-redundant-values': true, // 禁止在简写属性中使用冗余值
    "string-no-newline": true, // 禁止在字符串中使用（非转义的）换行符
    'string-quotes': 'double', // 指定字符串使用双引号
    'time-min-milliseconds': 100, // 禁止 animation 和 transition 小于或等于 100ms
    'unit-blacklist': null, // 不指定禁止使用的单位的黑名单
    "unit-case": "lower", // 要求单位小写
    "unit-no-unknown": true, // 禁止使用未知单位
    'unit-whitelist': null, // 不指定所允许的单位的白名单
    'value-keyword-case': 'lower', // 要求属性的值为小写
    "value-list-comma-newline-after": "always-multi-line", // 要求在值列表的逗号之后有一个换行符
    'value-list-comma-newline-before': 'never-multi-line', // 禁止在值列表的逗号之前有空白
    "value-list-comma-space-after": "always", // 要求在值列表的逗号之后有一个空格
    "value-list-comma-space-before": "never", // 禁止在值列表的逗号之前有空白
    "value-list-max-empty-lines": 0, // 限制值列表中相邻空行数量为0
    'value-no-vendor-prefix': true, // 禁止给值添加浏览器引擎前缀
  },
}
