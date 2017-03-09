*What's New in Wepack Two?*

Code Splitting with ES2015

- Lazily load require.ensure -> ES6 import('./module')

- webpack understands imports by default no need for babel to transpile

resolve configs(root, fallback, modulesDirectories) -> resolve.modules []

module.loaders is now module.rules []

Chaining loaders and Automatic -loader module name extension removed
- loader: "style-loader!css-loader!less-loader"
-> use: ["style-loader", "css-loader", "scss-loader" ] or Array<objects>

ExtractTextWebpackPlugin syntax changes to function params 

Custom arguments in CLI and configuration
webpack --custom-stuff -> webpack --env.customStuff

No custom options on webpack.config - user loader options
query -> options or ?
`rules: [{test: /\.ts?$/, loader: 'ts-loader', options: {transpile: false} }]`
`rules: [{test: /\.ts?$/, loader: 'ts-loader? + JSON.stringify({transpileOnly: false})}]`

Template strings
require(`./templates/${name}`)

Full list here [webpack migration](https://webpack.js.org/guides/migrating/)
