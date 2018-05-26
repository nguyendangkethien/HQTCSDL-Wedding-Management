var coreConfig = require('./core.config')
var path = require('path')
module.exports = Object.assign(
    coreConfig,
    {
        entry: './frontend/modules/manage-wedding/main.js',
        output: {
            sourceMapFilename: 'manage-wedding.js.map',
            path: path.resolve('public/themes/adminlte/js/manage-wedding/'),
            publicPath: '/',
            filename: 'manage-wedding.min.js'
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve('frontend/modules/manage-wedding')
            }
        },

    } 
)