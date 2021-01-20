module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }

}