const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:'node-modules',
                use: 'babel-loader',
            },
             {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
            ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '/public/index.html'),
            filename: 'index.html'
        })
    ]
};