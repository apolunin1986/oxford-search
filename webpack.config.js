const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
});

var config = {
    entry: [
        './src/index.js',
        './src/index.css',
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                ]
            },
        ],
    },
    plugins: [htmlPlugin],
    devServer: {
        proxy: {
            '/api': {
                target: 'https://od-api.oxforddictionaries.com',
                secure: false,
            },
        }
    }
};

module.exports = config;