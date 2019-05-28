module.exports = {
	root: true,
	env: {
		browser: true
	},
	'extends': [
		'plugin:vue/essential',
		'@vue/standard'
	],
	plugins: [
		'vue',
		'graphql'
	],
	rules: {
		"graphql/template-strings": ['error', {
		// Import default settings for your GraphQL client. Supported values:
		// 'apollo', 'relay', 'lokka'
		env: 'apollo',

		// Import your schema JSON here
		// schemaJson: require('./schema.json'),

		// tagName is gql by default
		}],
		'import/extensions': ['error', 'always', {
			js: 'never',
			vue: 'never'
		}],
		// disallow reassignment of function parameters
		// disallow parameter object manipulation except for specific exclusions
		'no-param-reassign': ['error', {
		props: true,
		ignorePropertyModificationsFor: [
			'state', // for vuex state
			'acc', // for reduce accumulators
			'e' // for e.returnvalue
		]
		}],
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'indent': [1, 'tab'],
		'no-tabs': 0
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
