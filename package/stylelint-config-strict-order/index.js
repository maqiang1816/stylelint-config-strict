/*
 * @author: maqiang
 * @Date: 2019-12-03 14:13:59
 * @LastEditors: maqiang
 * @LastEditTime: 2019-12-03 15:08:44
 * @description: stylelint 规则主入口
 */

module.exports = {
  extends: [
    '@xmgh/stylelint-config-strict-base',
    require.resolve('./rules/order'),
  ],
  rules: {

  },
}
