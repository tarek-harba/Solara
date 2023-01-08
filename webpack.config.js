
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let webpack_mode = 'development';

if (process.env.NODE_ENV === 'production') {
    webpack_mode = 'production'
}

module.exports = {
    mode: webpack_mode,
    entry: {
        main: path.resolve(__dirname, 'src/main.js'),
        homepage: path.resolve(__dirname, 'src/js/homepage.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    // watch: true,
    // watchOptions: {
    //     aggregateTimeout: 200,
    //     poll: 1000,
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Homepage',
            filename: 'index.html',
            template: 'src/index.html',
            chunks: ['main', 'homepage'],
        }),
    ],
}   