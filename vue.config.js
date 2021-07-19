// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

function configSVGIcon(config) {
  config.module.rule('svg').uses.clear()
  // Exclude SVG sprite directory from default svg rule
  config.module.rule('svg').exclude.add(path.resolve(__dirname, './src/icons/svg')).end()

  // Options used by svgo-loader to optimize SVG files
  // https://github.com/svg/svgo#what-it-can-do
  const options = {
    plugins: [
      { cleanupAttrs: true },
      { cleanupEnableBackground: true },
      { cleanupIDs: true },
      { cleanupListOfValues: true },
      { cleanupNumericValues: true },
      { collapseGroups: true },
      // { convertColors: true },
      { convertPathData: true },
      { convertShapeToPath: true },
      { convertStyleToAttrs: true },
      { convertTransform: true },
      { mergePaths: true },
      { removeComments: true },
      { removeDesc: true },
      { removeDimensions: true },
      { removeDoctype: true },
      { removeEditorsNSData: true },
      { removeEmptyAttrs: true },
      { removeEmptyContainers: true },
      { removeEmptyText: true },
      { removeHiddenElems: true },
      { removeMetadata: true },
      { removeNonInheritableGroupAttrs: true },
      { removeRasterImages: true },
      { removeTitle: true },
      { removeUnknownsAndDefaults: true },
      { removeUselessDefs: true },
      { removeUnusedNS: true },
      { removeUselessStrokeAndFill: true },
      {
        // removeAttrs: { attrs: 'fill' }, //移除fill属性
      },
      { removeXMLProcInst: true },
      { removeStyleElement: true },
      { removeUnknownsAndDefaults: true },
      { sortAttrs: true }
    ]
  }

  // Include only SVG sprite directory for new svg-icon rule
  // Use svg-sprite-loader to build SVG sprite
  // Use svgo-loader to optimize SVG files
  config.module
    .rule('svg-icon')
    .test(/\.svg$/)
    .include.add(path.resolve(__dirname, './src/icons/svg'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
    .end()
    .use('svgo-loader')
    .loader('svgo-loader')
    .options(options)
    .end()
}

module.exports = {
  chainWebpack: config => {
    // const svgRule = config.module.rule('svg');
    // svgRule.uses.clear();
    // svgRule
    //   .use('babel-loader')
    //   .loader('babel-loader')
    //   .end()
    //   .use('vue-svg-loader')
    //   .loader('vue-svg-loader');
    configSVGIcon(config)
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))

    config.plugin('html').tap(args => {
      // args[0].title = 'Bework | CRM'
      args[0].title = 'LPB | Ứng dụng quản lý bảo hiểm'

      return args
    })
  }
}
