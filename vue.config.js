module.exports = {
  configureWebpack: (config) => {
    config.module.rules.push({
      test:/\.glsl$/,
      use:[
        {
          loader:"webpack-glsl-loader",
        },
      ],
    });
  }
}
