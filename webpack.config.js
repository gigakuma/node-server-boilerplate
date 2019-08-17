const path = require('path');
const externals = require('webpack-node-externals');

module.exports = {
    entry: {
        app: [
            './server/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    target: 'node',
    externals: [externals()],
    context: __dirname,
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true,
        path: true
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/env"],
                            plugins: [
                                "@babel/proposal-object-rest-spread",
                                "@babel/syntax-async-generators",
                                "@babel/transform-async-to-generator",
                                "@babel/plugin-proposal-class-properties"
                            ]
                        }
                    }
                ],
                include: path.resolve(__dirname, 'server'),
                exclude: /node_modules/
            }
        ]
    }
}