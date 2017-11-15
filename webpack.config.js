module.exports = {
    entry: './src/index.js',
   
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },

            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
 
        ]
    },

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    }

}