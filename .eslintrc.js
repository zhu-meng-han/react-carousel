// http://eslint.org/docs/user-guide/configuring

module.exports = {
	parser: 'babel-eslint',
	extends: [
		'tmaito',
		'plugin:react/recommended',
		'prettier',
		'prettier/react',
		'plugin:prettier/recommended',
	],
	plugins: ['prettier'],
	rules: {
		"react/prop-types": 'off',
		// prettier标记的地方抛出错误信息
		"prettier/prettier": [
			"error",
			{
				"singleQuote": true,
				"trailingComma": "none",
				"bracketSpacing": true,
				"jsxBracketSameLine": true
			}
		]
	}
};
