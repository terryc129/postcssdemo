//using the postcss via webpack and implement precss plugin
var webpack = require('webpack');

module.exports={
  entry: __dirname + '/index.js',
  output: {
    publicPath: '/',
    filename: './bundle.js'
  },
  module:{

  	loaders:[

 			{
 				test:/\.css$/,
 				loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
 			}

  	]
  },

  postcss: ()=>[require('precss')]



}