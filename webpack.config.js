const path = require('path');
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'./public/bundle.js'
    },
    module:{
        loaders:[
            {
                // Only working with files that in in a .js or .jsx extension
                test: /\.jsx?$/,
                // Webpack will only process files in our app folder. This avoids processing
                // node modules and server files unnecessarily
                include: path.join(__dirname, 'src'),
                loader:'babel-loader',
                query:{
                    presets:['react', 'es2015']
                }

            }
        ]
    }
};

// Dependencies
    // react
    // react-dom

// dev dependencies
    // babel-core
    // babel-loader
    // babel-preset-es2015
    // babel-preset-react