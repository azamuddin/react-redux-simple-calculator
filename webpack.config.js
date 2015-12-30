module.exports = {

    entry: [
//        'webpack-dev-server/client?http://localhost:8000',
//        'webpack/hot/only-dev-server',
        './src/main.js'
    ],

    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: 'http://localhost:8000/static'
    },

    module: {
        loaders: [
            {
                test: /\.js$/ ,
                exclude: /node_modules/,
                loaders: ['react-hot','babel?presets[]=es2015,presets[]=react']
            }
        ]
    }

}