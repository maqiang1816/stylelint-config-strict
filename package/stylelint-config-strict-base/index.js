
module.exports = {
  extends: [
    './rules/recommend',
    './rules/standard',
    './rules/extra',
  ].map(require.resolve),
  rules: {

  },
};
