/*
    import / export => javascript in browser (type="module") => react/angular/typescript/vue (там где есть HTML)

    require / module.exports => node.js
*/

const { extension } = require("mime");
const path = require("node:path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

// console.log(path.resolve(__dirname, "./dist"));
const config = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "./docs"),
        filename: "index.js",
        clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "./public")
        },
        port: 3000
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {loader: "file-loader"}
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.svg"
        })
    ]
}

module.exports = config;