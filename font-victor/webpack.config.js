var path = require('path');
var webpack = require('webpack');
var AppConfig = require('./src/app/app.config.ts');
var AMBConfig = require('@amb/config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

const extractCSS = new ExtractTextPlugin({ filename: 'css/[name].[hash].css' });

var ENV = process.env.npm_lifecycle_event;
var isTestWatch = ENV === 'test-watch';
var isTest = ENV === 'test' || isTestWatch;
var isProd = ENV === 'production';

module.exports = function makeWebpackConfig() {

	var config = {};

	//Se não for um projeto Cordova, utilize a lógica abaixo para a configuração devtool.
	
	if (isProd) {
		config.devtool = 'source-map';
	}
	else if (isTest) {
		config.devtool = 'inline-source-map';
	}
	else {
		config.devtool = 'eval-source-map';
	}
	

	//Se for utilizar o build para um projeto Cordova, utilize a configuração devtool abaixo.
	// config.devtool = 'cheap-module-source-map';

	if (!isTest) {
		config.entry = isTest ? {} : {
			'polyfills': './src/polyfills.ts',
			'amb': './src/amb.ts',
			'app': './src/main.ts'
		};
	}

	config.output = isTest ? {} : {
		//path: root('../www'), Se for utilizar o build para um projeto Cordova, utilize esta configuracao
		path: root('dist'),
		publicPath: AMBConfig.AMBApplicationConfig.baseUrl + AMBConfig.AMBApplicationConfig.webAppContextPath,
		filename: isProd ? 'js/[name].[hash].js' : 'js/[name].js',
		chunkFilename: isProd ? 'chunk/[id].[hash].chunk.js' : 'chunk/[id].chunk.js'
	};

	config.resolve = {
		extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
		symlinks: false
	};

	var atlOptions = '';

	if (isTest && !isTestWatch) {
		atlOptions = 'inlineSourceMap=true&sourceMap=false';
	}

	config.module = {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: 'awesome-typescript-loader?' + atlOptions,
						options: { useCache: !isProd }
					},
					{
						loader: 'angular2-template-loader'
					}, 
					{
						loader: 'angular-router-loader'
					}
				],
				exclude: [isTest ? /\.(e2e)\.ts$/ : /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
			},
			{
				test: /\.(png|jpe?g|gif|svg|otf|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{ loader: 'file-loader?name=fonts/[name].[hash].[ext]?' }
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{ loader: 'file-loader?name=img/[name].[hash].[ext]?' }
				]
			},
			{
				test: /app\.module\.scss$/,
				loader: extractCSS.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader']
				})
			},
			{
				test: /\.(scss|sass)$/,
				exclude: /app\.module\.scss$/,
				loader: 'raw-loader!postcss-loader!resolve-url-loader!sass-loader'
			},
			{
				test: /\.html$/,
				use: [
					'raw-loader',
					{
						loader: 'string-replace-loader',
						options: {
							search: '{{ app-context }}',
							replace: AMBConfig.AMBApplicationConfig.baseUrl + AMBConfig.AMBApplicationConfig.webAppContextPath,
							flags: 'g'
						}
					},
				],
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			}
		]
	};

	if (!isTest || !isTestWatch) {
		// tslint support
		config.module.rules.push({
			test: /\.ts$/,
			enforce: 'pre',
			loader: 'tslint-loader'
		});
	}

	config.plugins = [
		new webpack.DefinePlugin({
			'process.env': { ENV: JSON.stringify(ENV) }
		}),
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)@angular/,
			root('./src')
		),
		new webpack.LoaderOptionsPlugin({
			/*debug: true,*/
			tslint: {
				emitErrors: false,
				failOnHint: false
			}
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			fullcalendar: 'fullcalendar',
			moment: 'moment'
		})
	];

	if (true) {
		config.plugins.push(
			new webpack.NoEmitOnErrorsPlugin(),
			new webpack.optimize.UglifyJsPlugin({ beautify: false, comments: false, sourceMap: true, mangle: { keep_fnames: true }, output: {comments: false} })
		);
	}

	if (!isTest) {
		config.plugins.push(
			new webpack.optimize.CommonsChunkPlugin({
				name: ['amb', 'polyfills']
			}),
			new HtmlWebpackPlugin({
				template: 'src/index.html',
				chunksSortMode: 'dependency'
			}),
			extractCSS
		);
	}

	config.devServer = {
		historyApiFallback: true,
		quiet: true,
		stats: 'minimal', // none (or false), errors-only, minimal, normal (or true) and verbose
		proxy: {
			"/api": {
				target: "http://localhost:9080",
				pathRewrite: { "^/api": "" }
			}
		}
	};

	config.plugins.push(
		new CopyWebpackPlugin([{
			from: root('public'),
			to: 'public',
			ignore: [ 'cordova*.*' ]
		}]),
		new CopyWebpackPlugin([{
			from: root('node_modules/@amb/components-angular/fonts'),
			to: 'fonts'
		}]),
		new CopyWebpackPlugin([{
			from: root('node_modules/@amb/components-angular/fonts/victor-fonts'),
			to: 'fonts/victor-fonts'
		}]),
		new CopyWebpackPlugin([{
			from: root('assets'),
			to: 'assets'
		}]),
		new CopyWebpackPlugin([{
			from: root('public/img/cordova'),
			to: 'img'
		}])
	);

	return config;
}();

// Funções utilitárias.
function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [__dirname].concat(args));
}