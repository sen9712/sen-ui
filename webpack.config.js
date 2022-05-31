const path = require('path')

module.exports = {
  mode: 'production',
  entry: { //入口文件
    SUI: './lib/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),//__dirname 表示当前目录，由于不同操作系统的原因，'\','/'可能会混，所以我们需要用到resolve替我们来判断
    library: 'SUI',
    libraryTarget: 'umd',
  },
  module: {//配置规则识别tsx
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}