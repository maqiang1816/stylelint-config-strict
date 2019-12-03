
module.exports = {
  rules: {
    // https://stylelint.io/user-guide/rules/at-rule-blacklist
    // Specify a blacklist of disallowed at-rules
    // 不指定一个禁止使用的 @ 规则的黑名单
    'at-rule-blacklist': null,

    // https://stylelint.io/user-guide/rules/at-rule-name-newline-after
    // Require a newline after at-rule names
    // 要求在 @ 规则之后有一个换行符
    'at-rule-name-newline-after': 'always-multi-line',

    // https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix
    // at-rule-no-vendor-prefix
    // 不禁止 @ 规则使用浏览器引擎前缀
    'at-rule-no-vendor-prefix': null,

    // https://stylelint.io/user-guide/rules/at-rule-property-requirelist
    // Specify a requirelist of properties for an at-rule
    // 不指定一个@ 规则须包含的属性名单
    'at-rule-property-requirelist': null,

    // https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before
    // Require a single space or disallow whitespace before the semicolons of at-rules
    // 禁止在 @ 规则的分号之前有空格
    'at-rule-semicolon-space-before': 'never',

    // https://stylelint.io/user-guide/rules/at-rule-whitelist
    // Specify a whitelist of allowed at-rules
    // 不指定允许使用的 @ 规则的白名单
    'at-rule-whitelist': null,

    // https://stylelint.io/user-guide/rules/block-closing-brace-space-after
    // Require a single space or disallow whitespace after the closing brace of blocks
    // 在闭括号之后要求有一个空格
    'block-closing-brace-space-after': 'always-single-line',

    // https://stylelint.io/user-guide/rules/block-opening-brace-newline-before
    // Require a newline or disallow whitespace before the opening brace of blocks
    // 在开括号之前不做要求
    'block-opening-brace-newline-before': null,

    // https://stylelint.io/user-guide/rules/color-named
    // Require (where possible) or disallow named colors.
    // 禁止使用命名的颜色
    'color-named': [ 'never', {
      ignore: [ 'inside-function' ],
    } ],

    // https://stylelint.io/user-guide/rules/color-no-hex
    // Disallow hex colors
    // 不禁止使用十六进制颜色
    'color-no-hex': null,

    // https://stylelint.io/user-guide/rules/comment-word-blacklist
    // Specify a blacklist of disallowed words within comments
    // 不指定不允许出现在注释中的单词的黑名单
    'comment-word-blacklist': null,

    // https://stylelint.io/user-guide/rules/custom-media-pattern
    // Specify a pattern for custom media query names
    // 不指定一个自定义媒体查询名称的匹配模式
    'custom-media-pattern': null,

    // https://stylelint.io/user-guide/rules/custom-property-pattern
    // Specify a pattern for custom properties
    // 不为自定义属性指定一个匹配模式
    'custom-property-pattern': null,

    // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties
    // Disallow longhand properties that can be combined into one shorthand property
    // 禁止使用可以缩写却不缩写的属性
    'declaration-block-no-redundant-longhand-properties': true,

    // https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before
    // Require a newline or disallow whitespace before the semicolons of declaration blocks
    // 在声明块的分号之前禁止有空白
    'declaration-block-semicolon-newline-before': 'never-multi-line',

    // https://stylelint.io/user-guide/rules/declaration-no-important
    // Disallow !important within declarations
    // 禁止在声明中使用 !important  ---TODO:待商榷
    'declaration-no-important': true,

    // https://stylelint.io/user-guide/rules/declaration-property-unit-blacklist
    // Specify a blacklist of disallowed property and unit pairs within declarations
    // 不指定一个在声明中禁止使用的属性和单位的黑名单
    'declaration-property-unit-blacklist': null,

    // https://stylelint.io/user-guide/rules/declaration-property-unit-whitelist
    // Specify a whitelist of allowed property and unit pairs within declarations
    // 不指定一个在声明中禁止使用的属性和单位的白名单
    'declaration-property-unit-whitelist': null,

    // https://stylelint.io/user-guide/rules/declaration-property-value-blacklist
    // Specify a blacklist of disallowed property and value pairs within declarations
    // 不指定一个在声明中禁止使用的属性和值的黑名单
    'declaration-property-value-blacklist': null,

    // https://stylelint.io/user-guide/rules/declaration-property-value-whitelist
    // Specify a whitelist of allowed property and value pairs within declarations
    // 不指定一个在声明中禁止使用的属性和值的白名单
    'declaration-property-value-whitelist': null,

    // https://stylelint.io/user-guide/rules/font-family-name-quotes
    // Specify whether or not quotation marks should be used around font family names
    // 指定字体名称需要使用引号括起来
    'font-family-name-quotes': 'always-where-recommended',

    // https://stylelint.io/user-guide/rules/font-weight-notation
    // Require numeric or named (where possible) font-weight values
    // 要求使用数字或命名的 (可能的情况下) font-weight 值
    'font-weight-notation': [ 'named-where-possible', {
      ignore: [ 'relative' ],
    } ],

    // https://stylelint.io/user-guide/rules/function-blacklist
    // Specify a blacklist of disallowed functions
    // 不指定一个禁用的函数的黑名单
    'function-blacklist': null,

    // https://stylelint.io/user-guide/rules/function-calc-no-invalid
    // Disallow an invalid expression within calc functions
    // 禁止无效的 calc 函数
    'function-calc-no-invalid': true,

    // https://stylelint.io/user-guide/rules/function-comma-newline-before
    // Require a newline or disallow whitespace before the commas of functions
    // 在函数的逗号之前禁止有空白
    'function-comma-newline-before': 'never-multi-line',

    // https://stylelint.io/user-guide/rules/function-url-no-scheme-relative
    // Disallow scheme-relative urls
    // 禁止 url 使用相对协议的链接
    'function-url-no-scheme-relative': true,

    // https://stylelint.io/user-guide/rules/function-url-quotes
    // Require or disallow quotes for urls
    // 要求 url 使用引号
    'function-url-quotes': 'always',

    // https://stylelint.io/user-guide/rules/function-url-scheme-blacklist
    // Specify a blacklist of disallowed URL schemes
    // 不指定一个禁止的 url 协议的黑名单
    'function-url-scheme-blacklist': null,

    // https://stylelint.io/user-guide/rules/function-url-scheme-whitelist
    // Specify a whitelist of allowed URL schemes
    // 不指定一个允许的 url 协议的白名单
    'function-url-scheme-whitelist': null,

    // https://stylelint.io/user-guide/rules/function-whitelist
    // Specify a whitelist of allowed functions
    // 不指定一个允许的函数的白名单
    'function-whitelist': null,

    // https://stylelint.io/user-guide/rules/keyframes-name-pattern
    // Specify a pattern for keyframe names
    // 不指定一个keyframe 的命名模式
    'keyframes-name-pattern': null,

    // https://stylelint.io/user-guide/rules/linebreaks
    // Specify unix or windows linebreaks
    // 指定使用的换行符
    linebreaks: 'unix',

    // https://stylelint.io/user-guide/rules/max-nesting-depth
    // Limit the depth of nesting
    // 限制允许嵌套的深度 ---TODO:待商榷
    'max-nesting-depth': [ 5, {
      ignore: [
        'blockless-at-rules',
        'pseudo-classes',
      ],
    } ],

    // https://stylelint.io/user-guide/rules/media-feature-name-blacklist
    // Specify a blacklist of disallowed media feature names
    // 不指定禁止使用的 media 特性名称的黑名单
    'media-feature-name-blacklist': null,

    // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix
    // Disallow vendor prefixes for media feature names
    // 不禁止 media 特性名称带有浏览器引擎前缀
    'media-feature-name-no-vendor-prefix': null,

    // https://stylelint.io/user-guide/rules/media-feature-name-value-whitelist
    // Specify a whitelist of allowed media feature name and value pairs
    // 不指定允许使用的 media 特性属性和值的白名单
    'media-feature-name-value-whitelist': null,

    // https://stylelint.io/user-guide/rules/media-feature-name-whitelist
    // Specify a whitelist of allowed media feature names
    // 不指定允许使用的 media 特性名称的白名单
    'media-feature-name-whitelist': null,

    // https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before
    // Require a newline or disallow whitespace before the commas of media query lists
    // 在媒体查询的逗号之前禁止有空白
    'media-query-list-comma-newline-before': 'never-multi-line',

    // https://stylelint.io/user-guide/rules/no-empty-first-line
    // Disallow empty first lines
    // 第一行禁止为空
    'no-empty-first-line': true,

    // https://stylelint.io/user-guide/rules/no-unknown-animations
    // Disallow unknown animations
    // 禁止未知的动画
    'no-unknown-animations': true,

    // https://stylelint.io/user-guide/rules/number-max-precision
    // Limit the number of decimal places allowed in numbers
    // 限制两位小数
    'number-max-precision': 2,

    // https://stylelint.io/user-guide/rules/property-blacklist
    // Specify a blacklist of disallowed properties
    // 不指定一个禁止使用的属性的白名单
    'property-blacklist': null,

    // https://stylelint.io/user-guide/rules/property-no-vendor-prefix
    // Disallow vendor prefixes for properties
    // 不禁止属性使用浏览器引擎前缀
    'property-no-vendor-prefix': null,

    // https://stylelint.io/user-guide/rules/property-whitelist
    // Specify a whitelist of allowed properties
    // 不指定一个允许使用的属性的白名单
    'property-whitelist': null,

    // https://stylelint.io/user-guide/rules/selector-attribute-operator-blacklist
    // Specify a blacklist of disallowed attribute operators
    // 不指定一个禁止使用的特性(attribute)操作符的黑名单
    'selector-attribute-operator-blacklist': null,

    // https://stylelint.io/user-guide/rules/selector-attribute-operator-whitelist
    // Specify a whitelist of allowed attribute operators
    // 不指定一个允许使用的特性(attribute)操作符的白名单
    'selector-attribute-operator-whitelist': null,

    // https://stylelint.io/user-guide/rules/selector-attribute-quotes
    // Require or disallow quotes for attribute values
    // 禁止特性值使用引号
    'selector-attribute-quotes': 'never',

    // https://stylelint.io/user-guide/rules/selector-class-pattern
    // Specify a pattern for class selectors
    // 指定一个类选择器的模式，限制选择器名称写法
    'selector-class-pattern': '^[a-z]+([a-z0-9]?|[a-z0-9\\-\\_]*[a-z0-9])$',

    // https://stylelint.io/user-guide/rules/selector-combinator-blacklist
    // Specify a blacklist of disallowed combinators
    // 不指定一个禁止使用的关系选择符的黑名单
    'selector-combinator-blacklist': null,

    // https://stylelint.io/user-guide/rules/selector-combinator-whitelist
    // Specify a whitelist of allowed combinators
    // 不指定一个允许使用的关系选择符的白名单
    'selector-combinator-whitelist': null,

    // https://stylelint.io/user-guide/rules/selector-id-pattern
    // Specify a pattern for ID selectors
    // 指定一个id选择器的模式，限制选择器名称写法
    'selector-id-pattern': '^[a-z]+([a-z0-9]?|[a-z0-9\\-\\_]*[a-z0-9])$',

    // https://stylelint.io/user-guide/rules/selector-list-comma-newline-before
    // Require a newline or disallow whitespace before the commas of selector lists
    // 禁止在选择器列表的逗号之前有空白
    'selector-list-comma-newline-before': 'never-multi-line',

    // https://stylelint.io/user-guide/rules/selector-list-comma-space-after
    // Require a single space or disallow whitespace after the commas of selector lists
    // 要求在同一行的选择器列表的逗号之后有一个空格
    'selector-list-comma-space-after': 'always-single-line',

    // https://stylelint.io/user-guide/rules/selector-max-attribute
    // Limit the number of attribute selectors in a selector
    // 限制同时最多三个属性选择器 ---TODO:待商榷
    'selector-max-attribute': 3,

    // https://stylelint.io/user-guide/rules/selector-max-class
    // Limit the number of classes in a selector
    // 限制同时最多五个类选择器 ---TODO:待商榷
    'selector-max-class': 5,

    // https://stylelint.io/user-guide/rules/selector-max-combinators
    // Limit the number of combinators in a selector
    // 限制同时最多三个关系选择器 ---TODO:待商榷
    'selector-max-combinators': 3,

    // https://stylelint.io/user-guide/rules/selector-max-compound-selectors
    // Limit the number of compound selectors in a selector
    // 限制同时最多五个选择器 ---TODO:待商榷
    'selector-max-compound-selectors': 5,

    // https://stylelint.io/user-guide/rules/selector-max-id
    // Limit the number of ID selectors in a selector
    // 限制同时最多两个id选择器 ---TODO:待商榷
    'selector-max-id': 2,

    // https://stylelint.io/user-guide/rules/selector-max-pseudo-class
    // Limit the number of pseudo-classes in a selector
    // 限制同时最多三个伪类选择器 ---TODO:待商榷
    'selector-max-pseudo-class': 3,

    // https://stylelint.io/user-guide/rules/selector-max-specificity
    // Limit the specificity of selectors
    // 限制同时存在的id, class, type(标签)选择器的数量 ---TODO:待商榷
    'selector-max-specificity': '3,5,3',

    // https://stylelint.io/user-guide/rules/selector-max-type
    // Limit the number of type selectors in a selector
    // 限制同时最多三个标签选择器 ---TODO:待商榷
    'selector-max-type': 3,

    // https://stylelint.io/user-guide/rules/selector-max-universal
    // Limit the number of universal selectors in a selector
    // 限制同时最多三个通用(*)选择器 ---TODO:待商榷
    'selector-max-universal': 3,

    // https://stylelint.io/user-guide/rules/selector-nested-pattern
    // Specify a pattern for the selectors of rules nested within rules
    // 不指定嵌套选择器的匹配模式
    'selector-nested-pattern': null,

    // https://stylelint.io/user-guide/rules/selector-no-qualifying-type
    // Disallow qualifying a selector by type
    // 禁止使用类型对选择器
    'selector-no-qualifying-type': [ true, {
      ignore: [ 'attribute', 'class', 'id' ],
    } ],

    // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix
    // Disallow vendor prefixes for selectors
    // 选择器禁止使用浏览器引擎前缀
    'selector-no-vendor-prefix': null,

    // https://stylelint.io/user-guide/rules/selector-pseudo-class-blacklist
    // Specify a blacklist of disallowed pseudo-class selectors
    // 不指定允许使用的伪类选择器的黑名单
    'selector-pseudo-class-blacklist': null,

    // https://stylelint.io/user-guide/rules/selector-pseudo-class-whitelist
    // Specify a whitelist of allowed pseudo-class selectors
    // 不指定允许使用的伪类选择器的白名单
    'selector-pseudo-class-whitelist': null,

    // https://stylelint.io/user-guide/rules/selector-pseudo-element-blacklist
    // Specify a blacklist of disallowed pseudo-element selectors
    // 不指定允许使用的伪元素选择器的黑名单
    'selector-pseudo-element-blacklist': null,

    // https://stylelint.io/user-guide/rules/selector-pseudo-element-whitelist
    // Specify a whitelist of allowed pseudo-element selectors
    // 不指定允许使用的伪元素选择器的白名单
    'selector-pseudo-element-whitelist': null,

    // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values
    // Disallow redundant values in shorthand properties
    // 禁止在简写属性中使用冗余值
    'shorthand-property-no-redundant-values': true,

    // https://stylelint.io/user-guide/rules/string-quotes
    // Specify single or double quotes around strings
    // 指定字符串使用双引号
    'string-quotes': 'double',

    // https://stylelint.io/user-guide/rules/time-min-milliseconds
    // Specify the minimum number of milliseconds for time values
    // 禁止 animation 和 transition 时间小于或等于 100ms
    'time-min-milliseconds': 100,

    // https://stylelint.io/user-guide/rules/unit-blacklist
    // Specify a blacklist of disallowed units
    // 不指定禁止使用的单位的黑名单
    'unit-blacklist': null,

    // https://stylelint.io/user-guide/rules/unit-whitelist
    // Specify a whitelist of allowed units
    // 不指定所允许的单位的白名单
    'unit-whitelist': null,

    // https://stylelint.io/user-guide/rules/value-keyword-case
    // Specify lowercase or uppercase for keywords values
    // 要求属性的值为小写
    'value-keyword-case': 'lower',

    // https://stylelint.io/user-guide/rules/value-list-comma-newline-before
    // Require a newline or disallow whitespace before the commas of value lists
    // 禁止在值列表的逗号之前有空白
    'value-list-comma-newline-before': 'never-multi-line',

    // https://stylelint.io/user-guide/rules/value-no-vendor-prefix
    // Disallow vendor prefixes for values
    // 不禁止给值添加浏览器引擎前缀
    'value-no-vendor-prefix': null,
  },
};
