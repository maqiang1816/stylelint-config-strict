
module.exports = {
  rules: {
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown
    // Disallow unknown at-rules
    // 禁止使用未知的 @ 规则
    'at-rule-no-unknown': true,

    // https://stylelint.io/user-guide/rules/block-no-empty
    // Disallow empty blocks
    // 禁止出现空块
    'block-no-empty': true,

    // https://stylelint.io/user-guide/rules/color-no-invalid-hex
    // Disallow invalid hex colors
    // 禁止使用无效的十六进制颜色
    'color-no-invalid-hex': true,

    // https://stylelint.io/user-guide/rules/comment-no-empty
    // Disallow empty comments
    // 禁止空注释
    'comment-no-empty': true,

    // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties
    // Disallow duplicate properties within declaration blocks
    // 在声明的块中禁止出现重复的属性
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: [
          'consecutive-duplicates-with-different-values',
        ],
      },
    ],

    // https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides
    // Disallow shorthand properties that override related longhand properties
    // 禁止缩写属性覆盖相关普通写法属性
    'declaration-block-no-shorthand-property-overrides': true,

    // https://stylelint.io/user-guide/rules/font-family-no-duplicate-names
    // Disallow duplicate font family names
    // 禁止使用重复的字体名称
    'font-family-no-duplicate-names': true,

    // https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword
    // Disallow missing generic families in lists of font family names
    // 禁止丢失通用字体
    'font-family-no-missing-generic-family-keyword': true,

    // https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator
    // Disallow an unspaced operator within calc functions
    // 禁止在 calc 函数内使用不加空格的操作符
    'function-calc-no-unspaced-operator': true,

    // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction
    // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax
    // 根据标准语法，禁止 linear-gradient() 中无效的方向值
    // standard syntax(标准语法) --> https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax
    'function-linear-gradient-no-nonstandard-direction': true,

    // https://stylelint.io/user-guide/rules/keyframe-declaration-no-important
    // Disallow !important within keyframe declarations
    // 禁止在 keyframe 声明中使用 !important
    'keyframe-declaration-no-important': true,

    // https://stylelint.io/user-guide/rules/media-feature-name-no-unknown
    // Disallow unknown media feature names
    // 禁止使用未知的 media 特性名称
    'media-feature-name-no-unknown': true,

    // https://stylelint.io/user-guide/rules/no-descending-specificity
    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity
    // 禁止低优先级的选择器出现在高优先级的选择器之后
    'no-descending-specificity': true,

    // https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules
    // Disallow duplicate @import rules within a stylesheet
    // 在一个样式表中禁止出现重复的 @import 规则
    'no-duplicate-at-import-rules': true,

    // https://stylelint.io/user-guide/rules/no-duplicate-selectors
    // Disallow duplicate selectors within a stylesheet
    // 在一个样式表中禁止出现重复的选择器
    'no-duplicate-selectors': true,

    // https://stylelint.io/user-guide/rules/no-empty-source
    // Disallow empty sources
    // 禁止空源
    'no-empty-source': true,

    // https://stylelint.io/user-guide/rules/no-extra-semicolons
    // Disallow extra semicolons
    // 禁止多余的分号
    'no-extra-semicolons': true,

    // https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments
    // Disallow double-slash comments (//...) which are not supported by CSS
    // 禁用 CSS 不支持的双斜线注释 (//...)
    // It could lead to unexpected results() --> https://stackoverflow.com/questions/12298890/is-it-bad-practice-to-comment-out-single-lines-of-css-with/20192639#20192639
    'no-invalid-double-slash-comments': true, // TODO: 未生效

    // https://stylelint.io/user-guide/rules/property-no-unknown
    // Disallow unknown properties
    // 禁止使用未知属性
    'property-no-unknown': true,

    // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown
    // Disallow unknown pseudo-class selectors
    // 禁止使用未知的伪类选择器
    'selector-pseudo-class-no-unknown': true,

    // https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown
    // Disallow unknown pseudo-element selectors
    // 禁止使用未知的伪元素选择器
    'selector-pseudo-element-no-unknown': true,

    // https://stylelint.io/user-guide/rules/selector-type-no-unknown
    // Disallow unknown type selectors
    // 禁止使用未知的标签选择器
    'selector-type-no-unknown': true,

    // https://stylelint.io/user-guide/rules/string-no-newline
    // Disallow (unescaped) newlines in strings
    // 禁止在字符串中使用（非转义的）换行符
    'string-no-newline': true,

    // https://stylelint.io/user-guide/rules/unit-no-unknown
    // Disallow unknown units
    // 禁止使用未知单位
    'unit-no-unknown': true,
  },
};
