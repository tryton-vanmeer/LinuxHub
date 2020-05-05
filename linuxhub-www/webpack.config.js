var HtmlWebpackPlugin = require("html-webpack-plugin")
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require("path")

module.exports = {
    context: path.join(__dirname, "src"),
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    entry: ["./index.tsx"],
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js",
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        inline: true,
        host: "localhost",
        port: 8080,
        stats: "errors-only",
        historyApiFallback: {
            index: "/"
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ]
};