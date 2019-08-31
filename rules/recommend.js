"use strict"

module.exports = {
  rules: {
    "at-rule-no-unknown": true, // 禁止使用未知的 @ 规则
    "block-no-empty": true, // 禁止出现空块
    "color-no-invalid-hex": true, // 禁止使用无效的十六进制颜色
    "comment-no-empty": true, // 禁止空注释
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: [
          "consecutive-duplicates-with-different-values",
        ],
      },
    ], // 在声明的块中禁止出现重复的属性
    "declaration-block-no-shorthand-property-overrides": true, // 禁止缩写属性覆盖相关普通写法属性
    "font-family-no-duplicate-names": true, // 禁止使用重复的字体名称
    "font-family-no-missing-generic-family-keyword": true, // 禁止丢失通用字体
    "function-calc-no-unspaced-operator": true, // 禁止在 calc 函数内使用不加空格的操作符
    "function-linear-gradient-no-nonstandard-direction": true, // 根据标准语法，禁止 linear-gradient() 中无效的方向值
    "keyframe-declaration-no-important": true, // 禁止在 keyframe 声明中使用 !important
    "media-feature-name-no-unknown": true, // 禁止使用未知的 media 特性名称
    "no-descending-specificity": true, // 禁止低优先级的选择器出现在高优先级的选择器之后
    "no-duplicate-at-import-rules": true, // 在一个样式表中禁止出现重复的 @import 规则
    "no-duplicate-selectors": true, // 在一个样式表中禁止出现重复的选择器
    "no-empty-source": true, // 禁止空源
    "no-extra-semicolons": true, // 禁止多余的分号
    "no-invalid-double-slash-comments": true, // 禁用 CSS 不支持的双斜线注释 (//...)
    "property-no-unknown": true, // 禁止使用未知属性
    "selector-pseudo-class-no-unknown": true,  // 禁止使用未知的伪类选择器
    "selector-pseudo-element-no-unknown": true, // 禁止使用未知的伪元素选择器
    "selector-type-no-unknown": true,  // 禁止使用未知的标签选择器
    "string-no-newline": true, // 禁止在字符串中使用（非转义的）换行符
    "unit-no-unknown": true, // 禁止使用未知单位
  },
}
