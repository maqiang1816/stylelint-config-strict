
module.exports = {
  rules: {
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before
    // Require or disallow an empty line before at-rules
    // 要求在 @ 规则之前有空行
    'at-rule-empty-line-before': [ 'always', {
      except: [
        'blockless-after-same-name-blockless',
        'first-nested',
      ],
      ignore: [ 'after-comment' ],
    } ],

    // https://stylelint.io/user-guide/rules/at-rule-name-case
    // Specify lowercase or uppercase for at-rules names
    // 指定 @ 规则名称为小写
    'at-rule-name-case': 'lower',

    // https://stylelint.io/user-guide/rules/at-rule-name-space-after
    // Require a single space after at-rule names
    // 要求在 @ 规则之后有一个空格
    'at-rule-name-space-after': 'always-single-line',

    // https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after
    // Require a newline after the semicolon of at-rules
    // 要求在 @ 规则的分号之后有一个换行符
    'at-rule-semicolon-newline-after': 'always',

    // https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before
    // Require or disallow an empty line before the closing brace of blocks
    // 禁止在闭括号之前有空行
    'block-closing-brace-empty-line-before': 'never',

    // https://stylelint.io/user-guide/rules/block-closing-brace-newline-after
    // Require a newline or disallow whitespace after the closing brace of blocks
    // 在闭括号之后要求有一个换行符
    'block-closing-brace-newline-after': 'always',

    // https://stylelint.io/user-guide/rules/block-closing-brace-newline-before
    // Require a newline or disallow whitespace before the closing brace of blocks
    // 在闭括号之前要求有一个换行符
    'block-closing-brace-newline-before': 'always-multi-line',

    // https://stylelint.io/user-guide/rules/block-closing-brace-space-before
    // Require a single space or disallow whitespace before the closing brace of blocks
    // 在闭括号之前要求有一个空格
    'block-closing-brace-space-before': 'always-single-line',

    // https://stylelint.io/user-guide/rules/block-opening-brace-newline-after
    // Require a newline after the opening brace of blocks
    // 在开括号之后要求有一个换行符
    'block-opening-brace-newline-after': 'always-multi-line',

    // https://stylelint.io/user-guide/rules/block-opening-brace-space-after
    // Require a single space or disallow whitespace after the opening brace of blocks
    // 在开括号之后要求有一个空格
    'block-opening-brace-space-after': 'always-single-line',

    // https://stylelint.io/user-guide/rules/block-opening-brace-space-before
    // Require a single space or disallow whitespace before the opening brace of blocks
    // 在开括号之前要求有一个空格
    'block-opening-brace-space-before': 'always',

    // https://stylelint.io/user-guide/rules/color-hex-case
    // Specify lowercase or uppercase for hex colors
    // 指定十六进制颜色值为小写
    'color-hex-case': 'lower',

    // https://stylelint.io/user-guide/rules/color-hex-length
    // Specify short or long notation for hex colors
    // 指定十六进制颜色使用缩写
    'color-hex-length': 'short',

    // https://stylelint.io/user-guide/rules/comment-empty-line-before
    // Require or disallow an empty line before comments
    // 要求在注释之前有空行
    'comment-empty-line-before': [ 'always', {
      except: [ 'first-nested' ],
      ignore: [ 'stylelint-commands' ],
    } ],

    // https://stylelint.io/user-guide/rules/comment-whitespace-inside
    // Require or disallow whitespace on the inside of comment markers
    // 要求在注释标签内有空白
    'comment-whitespace-inside': 'always',

    // https://stylelint.io/user-guide/rules/custom-property-empty-line-before
    // Require or disallow an empty line before custom properties
    // 要求在自定义属性之前有一行空行
    'custom-property-empty-line-before': [ 'always', {
      except: [
        'after-custom-property',
        'first-nested',
      ],
      ignore: [
        'after-comment',
        'inside-single-line-block',
      ],
    } ],

    // https://stylelint.io/user-guide/rules/declaration-bang-space-after
    // Require a single space or disallow whitespace after the bang of declarations
    // 在感叹号之后禁止有空白
    'declaration-bang-space-after': 'never',

    // https://stylelint.io/user-guide/rules/declaration-bang-space-before
    // Require a single space or disallow whitespace before the bang of declarations
    // 在感叹号之前要求有一个空格
    'declaration-bang-space-before': 'always',

    // https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after
    // Require a newline or disallow whitespace after the semicolons of declaration blocks
    // 在声明块的分号之后要求有一个换行符
    'declaration-block-semicolon-newline-after': 'always-multi-line',

    // https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after
    // Require a single space or disallow whitespace after the semicolons of declaration blocks
    // 在同一行的声明块的分号之后要求有一个空格
    'declaration-block-semicolon-space-after': 'always-single-line',

    // https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before
    // Require a single space or disallow whitespace before the semicolons of declaration blocks
    // 在声明块的分号之后禁止有空白
    'declaration-block-semicolon-space-before': 'never',

    // https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations
    // Limit the number of declarations within a single-line declaration block
    // 限制单行声明块中声明的数量为1
    'declaration-block-single-line-max-declarations': 1,

    // https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon
    // Require or disallow a trailing semicolon within declaration blocks
    // 要求在声明块中使用拖尾分号
    'declaration-block-trailing-semicolon': 'always',

    // https://stylelint.io/user-guide/rules/declaration-colon-newline-after
    // Require a newline or disallow whitespace after the colon of declarations
    // 在冒号之后要求有一个换行符
    'declaration-colon-newline-after': 'always-multi-line',

    // https://stylelint.io/user-guide/rules/declaration-colon-space-after
    // Require a single space or disallow whitespace after the colon of declarations
    // 在冒号之后要求有一个空格
    'declaration-colon-space-after': 'always-single-line',

    // https://stylelint.io/user-guide/rules/declaration-colon-space-before
    // Require a single space or disallow whitespace before the colon of declarations
    // 在冒号之前禁止有空白
    'declaration-colon-space-before': 'never',

    // https://stylelint.io/user-guide/rules/declaration-empty-line-before
    // Require or disallow an empty line before declarations
    // 要求或禁止在声明语句之前有空行
    'declaration-empty-line-before': [ 'always', {
      except: [
        'after-declaration',
        'first-nested',
      ],
      ignore: [
        'after-comment',
        'inside-single-line-block',
      ],
    } ],

    // https://stylelint.io/user-guide/rules/function-comma-newline-after
    // Require a newline or disallow whitespace after the commas of functions
    // 在函数的逗号之后要求有一个换行符
    'function-comma-newline-after': 'always-multi-line',

    // https://stylelint.io/user-guide/rules/function-comma-space-after
    // Require a single space or disallow whitespace after the commas of functions
    // 在函数的逗号之后要求有一个空格
    'function-comma-space-after': 'always-single-line',

    // https://stylelint.io/user-guide/rules/function-comma-space-before
    // Require a single space or disallow whitespace before the commas of functions
    // 在函数的逗号之前禁止有空白
    'function-comma-space-before': 'never',

    // https://stylelint.io/user-guide/rules/function-max-empty-lines
    // Limit the number of adjacent empty lines within functions
    // 限制函数中相邻的空行数量为0
    'function-max-empty-lines': 0,

    // https://stylelint.io/user-guide/rules/function-name-case
    // Specify lowercase or uppercase for function names
    // 指定函数名称为小写
    'function-name-case': 'lower',

    // https://stylelint.io/user-guide/rules/function-parentheses-newline-inside
    // Require a newline or disallow whitespace on the inside of the parentheses of functions
    // 在函数的括号内要求有一个换行符
    'function-parentheses-newline-inside': 'always-multi-line',

    // https://stylelint.io/user-guide/rules/function-parentheses-space-inside
    // Require a single space or disallow whitespace on the inside of the parentheses of functions
    // 在函数的括号内禁止有空白
    'function-parentheses-space-inside': 'never-single-line',

    // https://stylelint.io/user-guide/rules/function-whitespace-after
    // Require or disallow whitespace after functions
    // 要求在函数之后有空白
    'function-whitespace-after': 'always',

    // https://stylelint.io/user-guide/rules/indentation
    // Specify indentation
    // 指定缩进为2
    indentation: 2,

    // https://stylelint.io/user-guide/rules/length-zero-no-unit
    // Disallow units for zero lengths
    // 长度为0时，禁止使用单位
    'length-zero-no-unit': true,

    // https://stylelint.io/user-guide/rules/max-empty-lines
    // Limit the number of adjacent empty lines
    // 限制相邻空行的数量为1
    'max-empty-lines': 1,

    // https://stylelint.io/user-guide/rules/media-feature-colon-space-after
    // Require a single space or disallow whitespace after the colon in media features
    // 在 media 特性中的冒号之后要求有一个空格
    'media-feature-colon-space-after': 'always',

    // https://stylelint.io/user-guide/rules/media-feature-colon-space-before
    // Require a single space or disallow whitespace before the colon in media features
    // 在 media 特性中的冒号之前禁止有空白
    'media-feature-colon-space-before': 'never',

    // https://stylelint.io/user-guide/rules/media-feature-name-case
    // Specify lowercase or uppercase for media feature names
    // 指定 media 特性名称为小写
    'media-feature-name-case': 'lower',

    // https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside
    // Require a single space or disallow whitespace on the inside of the parentheses within media features
    // 在media 特性的括号内禁止有空白
    'media-feature-parentheses-space-inside': 'never',

    // https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after
    // Require a single space or disallow whitespace after the range operator in media features
    // 在 media 特性的范围操作符之后要求有一个空格
    'media-feature-range-operator-space-after': 'always',

    // https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before
    // Require a single space or disallow whitespace before the range operator in media features
    // 在 media 特性的范围操作符之前要求有一个空格
    'media-feature-range-operator-space-before': 'always',

    // https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after
    // Require a newline or disallow whitespace after the commas of media query lists
    // 在媒体查询的逗号之后要求有一个换行符
    'media-query-list-comma-newline-after': 'always-multi-line',

    // https://stylelint.io/user-guide/rules/media-query-list-comma-space-after
    // Require a single space or disallow whitespace after the commas of media query lists
    // 在媒体查询的逗号之后要求有一个空格
    'media-query-list-comma-space-after': 'always-single-line',

    // https://stylelint.io/user-guide/rules/media-query-list-comma-space-before
    // Require a single space or disallow whitespace before the commas of media query lists
    // 在媒体查询的逗号之前禁止有空白
    'media-query-list-comma-space-before': 'never',

    // https://stylelint.io/user-guide/rules/no-eol-whitespace
    // Disallow end-of-line whitespace
    // 禁止行尾空白
    'no-eol-whitespace': true,

    // https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline
    'no-missing-end-of-source-newline': true, // 禁止缺少文件末尾的换行符

    // https://stylelint.io/user-guide/rules/number-leading-zero
    // Require or disallow a leading zero for fractional numbers less than 1
    // 要求小于 1 的小数的前导 0
    'number-leading-zero': 'always',

    // https://stylelint.io/user-guide/rules/number-no-trailing-zeros
    // Disallow trailing zeros in numbers
    // 禁止数字中的拖尾 0
    'number-no-trailing-zeros': true,

    // https://stylelint.io/user-guide/rules/property-case
    // Specify lowercase or uppercase for properties
    // 要求属性为小写
    'property-case': 'lower',

    // https://stylelint.io/user-guide/rules/rule-empty-line-before
    // Require or disallow an empty line before rules
    // 在规则块之前要求有一个空行
    'rule-empty-line-before': [ 'always-multi-line', {
      except: [ 'first-nested' ],
      ignore: [ 'after-comment' ],
    } ],

    // https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside
    // Require a single space or disallow whitespace on the inside of the brackets within attribute selectors
    // 在特性选择器的方括号内禁止有空白
    'selector-attribute-brackets-space-inside': 'never',

    // https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after
    // Require a single space or disallow whitespace after operators within attribute selectors
    // 在特性选择器的操作符之后禁止有空白
    'selector-attribute-operator-space-after': 'never',

    // https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before
    // Require a single space or disallow whitespace before operators within attribute selectors
    // 在特性选择器的操作符之前禁止有空白
    'selector-attribute-operator-space-before': 'never',

    // https://stylelint.io/user-guide/rules/selector-combinator-space-after
    // Require a single space or disallow whitespace after the combinators of selectors
    // 在关系选择符之后要求有一个空格
    'selector-combinator-space-after': 'always',

    // https://stylelint.io/user-guide/rules/selector-combinator-space-before
    // Require a single space or disallow whitespace before the combinators of selectors
    // 在关系选择符之前要求有一个空格
    'selector-combinator-space-before': 'always',

    // https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space
    // Disallow non-space characters for descendant combinators of selectors
    // 禁止包含选择符出现非空格字符
    'selector-descendant-combinator-no-non-space': true,

    // https://stylelint.io/user-guide/rules/selector-list-comma-newline-after
    // Require a newline or disallow whitespace after the commas of selector lists
    // 要求选择器列表的逗号之后有一个换行符
    'selector-list-comma-newline-after': 'always',

    // https://stylelint.io/user-guide/rules/selector-list-comma-space-before
    // Require a single space or disallow whitespace before the commas of selector lists
    // 禁止在选择器列表的逗号之前有空白
    'selector-list-comma-space-before': 'never',

    // https://stylelint.io/user-guide/rules/selector-max-empty-lines
    // Limit the number of adjacent empty lines within selectors
    // 限制选择器中相邻空行数量为0
    'selector-max-empty-lines': 0,

    // https://stylelint.io/user-guide/rules/selector-pseudo-class-case
    // Specify lowercase or uppercase for pseudo-class selectors
    // 指定伪类选择器为小写
    'selector-pseudo-class-case': 'lower',

    // https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside
    // Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors
    // 在伪类选择器的括号内禁止有空白
    'selector-pseudo-class-parentheses-space-inside': 'never',

    // https://stylelint.io/user-guide/rules/selector-pseudo-element-case
    // Specify lowercase or uppercase for pseudo-element selectors
    // 指定伪元素选择器为小写
    'selector-pseudo-element-case': 'lower',

    // https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation
    // Specify single or double colon notation for applicable pseudo-elements
    // 指定伪元素选择器使用双冒号
    'selector-pseudo-element-colon-notation': 'double',

    // https://stylelint.io/user-guide/rules/selector-type-case
    // Specify lowercase or uppercase for type selectors
    // 指定标签选择器为小写
    'selector-type-case': 'lower',

    // https://stylelint.io/user-guide/rules/unit-case
    // Specify lowercase or uppercase for units
    // 要求单位小写
    'unit-case': 'lower',

    // https://stylelint.io/user-guide/rules/value-list-comma-newline-after
    // Require a newline or disallow whitespace after the commas of value lists
    // 要求在值列表的逗号之后有一个换行符
    'value-list-comma-newline-after': 'always-multi-line',

    // https://stylelint.io/user-guide/rules/value-list-comma-space-after
    // Require a single space or disallow whitespace after the commas of value lists
    // 要求在值列表的逗号之后有一个空格
    'value-list-comma-space-after': 'always-single-line',

    // https://stylelint.io/user-guide/rules/value-list-comma-space-before
    // Require a single space or disallow whitespace before the commas of value lists
    // 禁止在值列表的逗号之前有空白
    'value-list-comma-space-before': 'never',

    // https://stylelint.io/user-guide/rules/value-list-max-empty-lines
    // Limit the number of adjacent empty lines within value lists
    // 限制值列表中相邻空行数量为0
    'value-list-max-empty-lines': 0,
  },
};
