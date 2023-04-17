
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/main.js'),
        homepage: path.resolve(__dirname, 'src/js/homepage.js'),
        about: path.resolve(__dirname, 'src/js/about.js'),
        solarSystems: path.resolve(__dirname, 'src/js/solar-systems.js'),
        contactUs: path.resolve(__dirname, 'src/js/contact-us.js'),
        system: path.resolve(__dirname, 'src/js/system.js'),
        testimony: path.resolve(__dirname, 'src/js/testimony.js'),
        vaildateProduct: path.resolve(__dirname, 'src/js/vaildate-product.js'),
        estimatePrice: path.resolve(__dirname, 'src/js/estimate-price.js'),
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
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i,
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
        new HtmlWebpackPlugin({
            title: 'About Us',
            filename: 'about.html',
            template: 'src/about.html',
            chunks: ['main', 'about'],
        }),
        new HtmlWebpackPlugin({
            title: 'Available Solar Systems',
            filename: 'solar-systems.html',
            template: 'src/solar-systems.html',
            chunks: ['main', 'solarSystems'],
        }),
        new HtmlWebpackPlugin({
            title: 'Contact Us',
            filename: 'contact-us.html',
            template: 'src/contact-us.html',
            chunks: ['main', 'contactUs'],
        }),
        new HtmlWebpackPlugin({
            title: 'System',
            filename: 'system.html',
            template: 'src/system.html',
            chunks: ['main', 'system'],
        }),
        new HtmlWebpackPlugin({
            title: 'Testimony',
            filename: 'testimony.html',
            template: 'src/testimony.html',
            chunks: ['main', 'testimony'],
        }),
        new HtmlWebpackPlugin({
            title: 'Vaildate Product',
            filename: 'vaildate-product.html',
            template: 'src/vaildate-product.html',
            chunks: ['main', 'vaildateProduct'],
        }),
        new HtmlWebpackPlugin({
            title: 'Estimate Price',
            filename: 'estimate-price.html',
            template: 'src/estimate-price.html',
            chunks: ['main', 'estimatePrice'],
        }),
    ],
}   