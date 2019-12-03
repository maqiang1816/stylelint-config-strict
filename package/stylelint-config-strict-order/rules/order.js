
module.exports = {
  plugins: [
    // stylelint-order是CSS属性排序插件
    'stylelint-order',
  ],
  rules: {
    // 指定声明块内的内容顺序
    'order/order': [
      [
        'custom-properties',
        'declarations',
      ],
      {
        disableFix: true,
      },
    ],
    // 'order/properties-alphabetical-order': [
    //   true, {
    //     disableFix: true,
    //   },
    // ],
    'order/properties-order': [
      {
        // Must be first.
        properties: [ 'all' ],
      },
      {
        // Position.
        properties: [
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index',
        ],
      },
      {
        // Display mode.
        properties: [
          'visibility',
          'box-sizing',
          'display',
        ],
      },
      {
        // Flexible boxes.
        properties: [
          'flex',
          'flex-basis',
          'flex-direction',
          'flex-flow',
          'flex-grow',
          'flex-shrink',
          'flex-wrap',
        ],
      },
      {
        // Align.
        properties: [
          'align-content',
          'align-items',
          'align-self',
        ],
      },
      {
        // Justify.
        properties: [
          'justify-content',
          'justify-items',
          'justify-self',
        ],
      },
      {
        // Grid layout.
        properties: [
          'grid',
          'grid-area',

          'grid-template',
          'grid-template-areas',
          'grid-template-rows',
          'grid-template-columns',

          'grid-row',
          'grid-row-start',
          'grid-row-end',

          'grid-column',
          'grid-column-start',
          'grid-column-end',

          'grid-auto-rows',
          'grid-auto-columns',
          'grid-auto-flow',

          'grid-gap',
          'grid-row-gap',
          'grid-column-gap',
        ],
      },
      {
        // Order.
        properties: [
          'order',
        ],
      },
      {
        // Box model.
        properties: [
          'float',
          'width',
          'min-width',
          'max-width',

          'height',
          'min-height',
          'max-height',

          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',

          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',

          'overflow',
          'overflow-x',
          'overflow-y',
          '-webkit-overflow-scrolling',
          '-ms-overflow-x',
          '-ms-overflow-y',
          '-ms-overflow-style',
          'overscroll-behavior',

          'clip',
          'clear',
          'zoom',
        ],
      },
      {
        // Background & Border & Outline
        properties: [
          'background',
          'background-color',
          'background-image',
          'background-repeat',
          'background-attachment',
          'background-position',
          'background-position-x',
          'background-position-y',
          'background-clip',
          'background-origin',
          'background-size',
          'background-blend-mode',
          'isolation',
          'filter',

          'border',
          'border-color',
          'border-style',
          'border-width',

          'border-top',
          'border-top-color',
          'border-top-style',
          'border-top-width',
          'border-right',
          'border-right-color',
          'border-right-style',
          'border-right-width',
          'border-bottom',
          'border-bottom-color',
          'border-bottom-style',
          'border-bottom-width',
          'border-left',
          'border-left-color',
          'border-left-style',
          'border-left-width',

          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',

          'border-image',
          'border-image-source',
          'border-image-slice',
          'border-image-width',
          'border-image-outset',
          'border-image-repeat',

          'outline',
          'outline-width',
          'outline-style',
          'outline-color',
          'outline-offset',

          'box-shadow',
          'mix-blend-mode',
          'opacity',
          '-ms-interpolation-mode',
        ],
      },
      {
        // Table & List.
        properties: [
          'columns',
          'column-gap',
          'column-fill',
          'column-rule',
          'column-span',
          'column-count',
          'column-width',

          'table-layout',
          'empty-cells',
          'caption-side',
          'border-spacing',
          'border-collapse',

          'list-style',
          'list-style-position',
          'list-style-type',
          'list-style-image',
        ],
      },
      {
        // Typography.
        properties: [
          'font',
          'font-family',
          'font-size',
          'font-style',
          'font-weight',
          'font-variant',
          'font-size-adjust',
          'font-stretch',
          'font-effect',
          'font-emphasize',
          'font-emphasize-position',
          'font-emphasize-style',
          '-webkit-font-smoothing',
          '-moz-osx-font-smoothing',
          'font-smooth',

          'hyphens',
          'line-height',
          'color',

          'text-align',
          'text-align-last',
          'text-emphasis',
          'text-emphasis-color',
          'text-emphasis-style',
          'text-emphasis-position',
          'text-decoration',
          'text-indent',
          'text-justify',
          'text-outline',
          'text-overflow',
          'text-overflow-ellipsis',
          'text-overflow-mode',
          'text-shadow',
          'text-transform',
          'text-wrap',
          'text-size-adjust',

          'letter-spacing',
          'word-break',
          'word-spacing',
          'word-wrap', // Legacy name for `overflow-wrap`
          'overflow-wrap',
          'tab-size',
          'white-space',
          'vertical-align',
        ],
      },
      {
        // SVG Presentation Attributes.
        properties: [
          'alignment-baseline',
          'baseline-shift',
          'dominant-baseline',
          'text-anchor',
          'word-spacing',
          'writing-mode',

          'fill',
          'fill-opacity',
          'fill-rule',

          'stroke',
          'stroke-dasharray',
          'stroke-dashoffset',
          'stroke-linecap',
          'stroke-linejoin',
          'stroke-miterlimit',
          'stroke-opacity',
          'stroke-width',

          'color-interpolation',
          'color-interpolation-filters',
          'color-profile',
          'color-rendering',

          'flood-color',
          'flood-opacity',
          'image-rendering',
          'lighting-color',
          'marker-start',
          'marker-mid',
          'marker-end',
          'mask',
          'shape-rendering',
          'stop-color',
          'stop-opacity',
        ],
      },
      {
        // Transitions & Animation.
        properties: [
          'transition',
          'transition-delay',
          'transition-timing-function',
          'transition-duration',
          'transition-property',

          'transform',
          'transform-box',
          'transform-origin',
          'transform-style',
          'backface-visibility',
          'perspective',
          'perspective-origin',

          'animation',
          'animation-name',
          'animation-duration',
          'animation-play-state',
          'animation-timing-function',
          'animation-delay',
          'animation-iteration-count',
          'animation-direction',
        ],
      },
      {
        // Accessibility & Interactions.
        properties: [
          'pointer-events',
          'touch-action',
          'cursor',
          'caption-side',
          'content',
          'quotes',
          'src',
          'speak',
          'counter-reset',
          'counter-increment',
          'resize',
          'user-select',

          'nav-index',
          'nav-up',
          'nav-right',
          'nav-down',
          'nav-left',
        ],
      },
    ],
  },
};
