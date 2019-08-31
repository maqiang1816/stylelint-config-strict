"use strict"

module.exports = {
  "rules": {
    "at-rule-empty-line-before": [ "always", {
      except: [
        "blockless-after-same-name-blockless",
        "first-nested",
      ],
      ignore: ["after-comment"],
    } ], // 要求或禁止在 @ 规则之前有空行
    "at-rule-name-case": "lower", // 指定 @ 规则名称为小写
    "at-rule-name-space-after": "always-single-line",  // 要求在 @ 规则之后有一个空格
    "at-rule-semicolon-newline-after": "always", // 要求在 @ 规则的分号之后有一个换行符
    "block-closing-brace-empty-line-before": "never", // 禁止在闭括号之前有空行
    "block-closing-brace-newline-after": "always", // 在闭括号之后要求有一个换行符
    "block-closing-brace-newline-before": "always-multi-line", // 在闭括号之前要求有一个换行符
    "block-closing-brace-space-before": "always-single-line", // 在闭括号之前要求有一个空格
    "block-opening-brace-newline-after": "always-multi-line", // 在开括号之后要求有一个换行符
    "block-opening-brace-space-after": "always-single-line", //在开括号之后要求有一个空格
    "block-opening-brace-space-before": "always", // 在开括号之前要求有一个空格
    "color-hex-case": "lower", // 指定十六进制颜色值为小写
    "color-hex-length": "short", // 指定十六进制颜色使用缩写
    "comment-empty-line-before": [ "always", {
      except: ["first-nested"],
      ignore: ["stylelint-commands"],
    } ], // 要求在注释之前有空行
    "comment-whitespace-inside": "always", // 要求在注释标签内有空白
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
    "declaration-bang-space-after": "never", // 在感叹号之后禁止有空白
    "declaration-bang-space-before": "always", // 在感叹号之前要求有一个空格
    "declaration-block-semicolon-newline-after": "always-multi-line", // 在声明块的分号之后要求有一个换行符
    "declaration-block-semicolon-space-after": "always-single-line",  // 在同一行的声明块的分号之后要求有一个空格
    "declaration-block-semicolon-space-before": "never", // 在声明块的分号之后禁止有空白
    "declaration-block-single-line-max-declarations": 1, // 限制单行声明块中声明的数量为1
    "declaration-block-trailing-semicolon": "always", // 要求在声明块中使用拖尾分号
    "declaration-colon-newline-after": "always-multi-line", // 在冒号之后要求有一个换行符
    "declaration-colon-space-after": "always-single-line",  // 在冒号之后要求有一个空格
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
    } ], // 要求或禁止在声明语句之前有空行
    "function-comma-newline-after": "always-multi-line", // 在函数的逗号之后要求有一个换行符
    "function-comma-space-after": "always-single-line", // 在函数的逗号之后要求有一个空格
    "function-comma-space-before": "never", // 在函数的逗号之前禁止有空白
    "function-max-empty-lines": 0, // 限制函数中相邻的空行数量为0
    "function-name-case": "lower", // 指定函数名称为小写
    "function-parentheses-newline-inside": "always-multi-line", // 在函数的括号内要求有一个换行符
    "function-parentheses-space-inside": "never-single-line", // 在函数的括号内禁止有空白
    "function-whitespace-after": "always", // 要求在函数之后有空白
    "indentation": 2, // 指定缩进为2
    "length-zero-no-unit": true, // 长度为0时，禁止使用单位
    "max-empty-lines": 1, // 限制相邻空行的数量为1
    "media-feature-colon-space-after": "always", // 在 media 特性中的冒号之后要求有一个空格
    "media-feature-colon-space-before": "never", // 在 media 特性中的冒号之前禁止有空白
    "media-feature-name-case": "lower", // 指定 media 特性名称为小写
    "media-feature-parentheses-space-inside": "never", // 在media 特性的括号内禁止有空白
    "media-feature-range-operator-space-after": "always", // 在 media 特性的范围操作符之后要求有一个空格
    "media-feature-range-operator-space-before": "always", // 在 media 特性的范围操作符之前要求有一个空格
    "media-query-list-comma-newline-after": "always-multi-line", // 在媒体查询的逗号之后要求有一个换行符
    "media-query-list-comma-space-after": "always-single-line", // 在媒体查询的逗号之后要求有一个空格
    "media-query-list-comma-space-before": "never", // 在媒体查询的逗号之前禁止有空白
    "no-eol-whitespace": true, // 禁止行尾空白
    "no-missing-end-of-source-newline": true, // 禁止缺少文件末尾的换行符
    "number-leading-zero": "always", // 要求小于 1 的小数的前导 0
    "number-no-trailing-zeros": true, // 禁止数字中的拖尾 0
    "property-case": "lower", // 要求属性为小写
    "rule-empty-line-before": [ "always-multi-line", {
      except: ["first-nested"],
      ignore: ["after-comment"],
    } ], // 在规则块之前要求有一个空行
    "selector-attribute-brackets-space-inside": "never", // 在特性选择器的方括号内禁止有空白
    "selector-attribute-operator-space-after": "never", // 在特性选择器的操作符之后禁止有空白
    "selector-attribute-operator-space-before": "never", // 在特性选择器的操作符之前禁止有空白
    "selector-combinator-space-after": "always", // 在关系选择符之后要求有一个空格
    "selector-combinator-space-before": "always", // 在关系选择符之前要求有一个空格
    "selector-descendant-combinator-no-non-space": true, // 禁止包含选择符出现非空格字符
    "selector-list-comma-newline-after": "always", // 要求选择器列表的逗号之后有一个换行符
    "selector-list-comma-space-before": "never", // 禁止在选择器列表的逗号之前有空白
    "selector-max-empty-lines": 0, // 限制选择器中相邻空行数量为0
    "selector-pseudo-class-case": "lower", // 指定伪类选择器为小写
    "selector-pseudo-class-parentheses-space-inside": "never",  // 在伪类选择器的括号内禁止有空白
    "selector-pseudo-element-case": "lower", // 指定伪元素选择器为小写
    "selector-pseudo-element-colon-notation": "double", // 指定伪元素选择器使用双冒号
    "selector-type-case": "lower", // 指定标签选择器为小写
    "unit-case": "lower", // 要求单位小写
    "value-list-comma-newline-after": "always-multi-line", // 要求在值列表的逗号之后有一个换行符
    "value-list-comma-space-after": "always-single-line", // 要求在值列表的逗号之后有一个空格
    "value-list-comma-space-before": "never", // 禁止在值列表的逗号之前有空白
    "value-list-max-empty-lines": 0, // 限制值列表中相邻空行数量为0
  },
}
