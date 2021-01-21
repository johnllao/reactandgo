
This is an example of a React application hosted on the same HTTP server with the 
API. The HTTP server will server both the API and the application requests 
(e.g. static content)

### Dependecies

This application will use custom tools for building React

- @babel/core
- @babel/preset-env
- @babel/preset-react
- babel-loader
- webpack
- webpack-cli

### Babel config

Create a file babel.config.json with the following content

    {
        "presets": [ "@babel/preset-env", "@babel/preset-react" ]
    }


### Webpack config

Create a webpack config file with the following content

    module.exports = {
        entry: {
            app: './src/app.jsx',
        },
        output: {
            filename: '[name].js',
            path: __dirname + '/js'
        },
        module: {
            rules: [
                {
                    test: /\.m?jsx$/,
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

#### entry

Refers to the main React module which will server as the entry point of the application

#### output

Refers to where the transpiled JSX will be saved

#### module

This is where we refer the babel-loader so Webpack can identify what JSX files to transpile 
using Babel

### Building

To build the React execute the following command

    npx webpack --mode development

Mode values can be development or production

    asset app.js 1.01 MiB [emitted] (name: app)
    runtime modules 668 bytes 3 modules
    modules by path ./node_modules/ 979 KiB
    modules by path ./node_modules/scheduler/ 31.8 KiB 4 modules
    modules by path ./node_modules/react/ 70.6 KiB
    ./node_modules/react/index.js 190 bytes [built] [code generated]
    ./node_modules/react/cjs/react.development.js 70.5 KiB [built] [code generated]
    modules by path ./node_modules/react-dom/ 875 KiB
    ./node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
    ./node_modules/react-dom/cjs/react-dom.development.js 874 KiB [built] [code generated]
    ./node_modules/object-assign/index.js 2.06 KiB [built] [code generated]
    modules by path ./src/*.jsx 14.3 KiB
    ./src/app.jsx 3.74 KiB [built] [code generated]
    ./src/header.jsx 3.42 KiB [built] [code generated]
    ./src/menu.jsx 3.7 KiB [built] [code generated]
    ./src/body.jsx 3.42 KiB [built] [code generated]
    webpack 5.13.0 compiled successfully in 789 ms


Enjoy coding!

