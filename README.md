# @xmgh/stylelint-config-strict

A strict shareable config for stylelint

## Installation

```bash
npm install @xmgh/stylelint-config-strict --save-dev
```

## Usage

Since [stylelint 9.7.0](https://github.com/stylelint/stylelint/blob/9.7.0/CHANGELOG.md#970), you can simply use the globally installed configuration name instead of the absolute path:

```json
{
  "extends": "@xmgh/stylelint-config-strict"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, change the `indentation` to tabs, turn off the `number-leading-zero` rule,and add the `unit-whitelist` rule:

```json
{
  "extends": "@xmgh/stylelint-config-strict",
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends",
        "ignores"
      ]
    }],
    "indentation": "tab",
    "number-leading-zero": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

### Using the config with SugarSS syntax

The config is broadly compatible with [SugarSS](https://github.com/postcss/sugarss) syntax. You *will* need to turn off the rules that check braces and semicolons, as so:

```json
{
  "extends": "@xmgh/stylelint-config-strict",
  "rules": {
    "block-closing-brace-empty-line-before": null,
    "block-closing-brace-newline-after": null,
    "block-closing-brace-newline-before": null,
    "block-closing-brace-space-before": null,
    "block-opening-brace-newline-after": null,
    "block-opening-brace-space-after": null,
    "block-opening-brace-space-before": null,
    "declaration-block-semicolon-newline-after": null,
    "declaration-block-semicolon-space-after": null,
    "declaration-block-semicolon-space-before": null,
    "declaration-block-trailing-semicolon": null
  }
}
```

## [License](LICENSE)
