'use strict'

module.exports = {
  extends: [
    './rules/recommend',
    './rules/standard',
    './rules/extra',
  ].map(require.resolve),
  rules: {
    "font-family-no-missing-generic-family-keyword": null, // 不禁止丢失通用字体
  }
}
