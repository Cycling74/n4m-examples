const OFF = 0;
const ERROR = 2;

module.exports = {

	env: {
		es6: true,
		node: true
	},

	"extends": "eslint:recommended",

	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module"
	},

	plugins: [

	],

	// Stop walking up the dir-tree for further config files
	root: true,

	rules: {

		// The following rules appear as listed on the ESLint Rules Documentation website.
		// The RNBO ESLint config extends the eslint:recommended ruleset, however for reference
		// and easier customisation we list all rules here and override only if necessary (uncommented)

		// Possible Errors (http://eslint.org/docs/rules/#possible-errors)
		// ----
		"for-direction": ERROR,
		"getter-return": ERROR,
		"no-await-in-loop": OFF,
		"no-compare-neg-zero": ERROR,
		"no-cond-assign": [ERROR, "always"],
		"no-console": OFF,
		"no-constant-condition": ERROR,
		"no-control-regex": ERROR,
		"no-debugger": ERROR,
		"no-dupe-args": ERROR,
		"no-dupe-keys": ERROR,
		"no-duplicate-case": ERROR,
		"no-empty": ERROR,
		"no-empty-character-class": ERROR,
		"no-ex-assign": ERROR,
		"no-extra-boolean-cast": OFF,
		"no-extra-parens": [ERROR, "functions"],
		"no-extra-semi": ERROR,
		"no-func-assign": ERROR,
		"no-inner-declarations": ERROR,
		"no-invalid-regexp": ERROR,
		"no-irregular-whitespace": ERROR,
		"no-obj-calls": ERROR,
		"no-prototype-builtins": OFF,
		"no-regex-spaces": ERROR,
		"no-sparse-arrays": ERROR,
		"no-template-curly-in-string": OFF,
		"no-unexpected-multiline": ERROR,
		"no-unreachable": ERROR,
		"no-unsafe-finally": ERROR,
		"no-unsafe-negation": ERROR,
		"use-isnan": ERROR,
		"valid-jsdoc": OFF,
		"valid-typeof": ERROR,

		// Best Practices (http://eslint.org/docs/rules/#best-practices)
		// ----
		"accessor-pairs": OFF,
		"array-callback-return": OFF,
		"block-scoped-var": OFF,
		"class-methods-use-this": OFF,
		"complexity": OFF,
		"consistent-return": [ERROR, {
			"treatUndefinedAsUnspecified": true
		}],
		"curly": [ERROR, "multi-line"],
		"default-case": ERROR,
		"dot-location": OFF,
		"dot-notation": [ERROR, {
			"allowKeywords": true
		}],
		"eqeqeq": [ERROR, "smart"],
		"guard-for-in": ERROR,
		"no-alert": ERROR,
		"no-caller": ERROR,
		"no-case-declarations": ERROR,
		"no-div-regex": OFF,
		"no-else-return": ERROR,
		"no-empty-function": OFF,
		"no-empty-pattern": ERROR,
		"no-eq-null": ERROR,
		"no-eval": ERROR,
		"no-extend-native": ERROR,
		"no-extra-bind": ERROR,
		"no-extra-label": OFF,
		"no-fallthrough": ERROR,
		"no-floating-decimal": ERROR,
		"no-global-assign": ERROR,
		"no-implicit-coercion": OFF,
		"no-implicit-globals": OFF,
		"no-implied-eval": ERROR,
		"no-invalid-this": OFF,
		"no-iterator": OFF,
		"no-labels": OFF,
		"no-lone-blocks": ERROR,
		"no-loop-func": ERROR,
		"no-magic-numbers": OFF,
		"no-multi-spaces": OFF,
		"no-multi-str": ERROR,
		"no-new": ERROR,
		"no-new-func": ERROR,
		"no-new-wrappers": ERROR,
		"no-octal": ERROR,
		"no-octal-escape": ERROR,
		"no-param-reassign": ERROR,
		"no-proto": ERROR,
		"no-redeclare": ERROR,
		"no-restricted-properties": OFF,
		"no-return-assign": ERROR,
		"no-script-url": ERROR,
		"no-self-assign": ERROR,
		"no-self-compare": ERROR,
		"no-sequences": ERROR,
		"no-throw-literal": ERROR,
		"no-unmodified-loop-condition": OFF,
		"no-unused-expressions": OFF,
		"no-unused-labels": ERROR,
		"no-useless-call": OFF,
		"no-useless-concat": OFF,
		"no-useless-escape": ERROR,
		"no-void": OFF,
		"no-warning-comments": OFF,
		"no-with": ERROR,
		"prefer-promise-reject-errors": OFF,
		"radix": ERROR,
		"require-await": OFF,
		"vars-on-top": OFF,
		"wrap-iife": [ERROR, "any"],
		"yoda": ERROR,

		// Strict Mode (http://eslint.org/docs/rules/#strict-mode)
		// ----
		"strict": [ERROR, "global"],


		// Variables (http://eslint.org/docs/rules/#variables)
		// ----
		"init-declarations": OFF,
		"no-catch-shadow": OFF,
		"no-delete-var": ERROR,
		"no-label-var": OFF,
		"no-restricted-globals": OFF,
		"no-shadow": ERROR,
		"no-shadow-restricted-names": ERROR,
		"no-undef": ERROR,
		"no-undef-init": OFF,
		"no-undefined": OFF,
		"no-unused-vars": [ERROR, {
			"vars": "local",
			"args": "after-used"
		}],
		"no-use-before-define": ERROR,

		// Node.js and CommonJS (http://eslint.org/docs/rules/#nodejs-and-commonjs)
		// ----
		"callback-return": OFF,
		"global-require": OFF,
		"handle-callback-err": OFF,
		"no-buffer-constructor": OFF,
		"no-mixed-requires": OFF,
		"no-new-require": OFF,
		"no-path-concat": OFF,
		"no-process-env": OFF,
		"no-process-exit": OFF,
		"no-restricted-modules": OFF,
		"no-sync": OFF,

		// Stylistic Issues (http://eslint.org/docs/rules/#stylistic-issues)
		// ----
		"array-bracket-newline": OFF,
		"array-bracket-spacing": OFF,
		"array-element-newline": OFF,
		"block-spacing": OFF,
		"brace-style": OFF,
		"camelcase": [OFF, {
			"properties": "never"
		}],
		"capitalized-comments": OFF,
		"comma-dangle": [ERROR, "never"],
		"comma-spacing": [ERROR, {
			"before": false,
			"after": true
		}],
		"comma-style": [ERROR, "last"],
		"computed-property-spacing": OFF,
		"consistent-this": OFF,
		"eol-last": ERROR,
		"func-call-spacing": OFF,
		"func-name-matching": OFF,
		"func-names": OFF,
		"func-style": OFF,
		"id-blacklist": OFF,
		"id-length": OFF,
		"id-match": OFF,
		"indent": [ERROR, "tab"],
		"jsx-quotes": OFF,
		"key-spacing": [ERROR, {
			"beforeColon": false,
			"afterColon": true
		}],
		"keyword-spacing": OFF,
		"line-comment-position": OFF,
		"linebreak-style": OFF,
		"lines-around-comment": OFF,
		"max-depth": OFF,
		"max-len": OFF,
		"max-lines": OFF,
		"max-nested-callbacks": OFF,
		"max-params": OFF,
		"max-statements": OFF,
		"max-statements-per-line": OFF,
		"multiline-ternary": OFF,
		"new-cap": [ERROR, {
			"newIsCap": true
		}],
		"new-parens": OFF,
		"newline-per-chained-call": OFF,
		"no-array-constructor": OFF,
		"no-bitwise": OFF,
		"no-continue": OFF,
		"no-inline-comments": OFF,
		"no-lonely-if": OFF,
		"no-mixed-operators": OFF,
		"no-mixed-spaces-and-tabs": ERROR,
		"no-multi-assign": OFF,
		"no-multiple-empty-lines": [ERROR, {
			"max": ERROR
		}],
		"no-negated-condition": OFF,
		"no-nested-ternary": OFF,
		"no-new-object": ERROR,
		"no-plusplus": OFF,
		"no-restricted-syntax": OFF,
		"no-tabs": OFF,
		"no-ternary": OFF,
		"no-trailing-spaces": ERROR,
		"no-underscore-dangle": OFF,
		"no-unneeded-ternary": OFF,
		"no-whitespace-before-property": OFF,
		"nonblock-statement-body-position": OFF,
		"object-curly-newline": OFF,
		"object-curly-spacing": OFF,
		"object-property-newline": OFF,
		"one-var": [ERROR, "never"],
		"one-var-declaration-per-line": OFF,
		"operator-assignment": OFF,
		"operator-linebreak": OFF,
		"padded-blocks": [OFF, "never"],
		"padding-line-between-statements": OFF,
		"quote-props": [ERROR, "as-needed", {
			"keywords": true,
			"unnecessary": false
		}],
		"quotes": [ERROR, "double", "avoid-escape"],
		"require-jsdoc": OFF,
		"semi": [ERROR, "always"],
		"semi-spacing": [ERROR, {
			"before": false,
			"after": true
		}],
		"semi-style": OFF,
		"sort-keys": OFF,
		"sort-vars": OFF,
		"space-before-blocks": ERROR,
		"space-before-function-paren": [ERROR, "never"],
		"space-in-parens": OFF,
		"space-infix-ops": ERROR,
		"space-unary-ops": OFF,
		"spaced-comment": [ERROR, "always"],
		"switch-colon-spacing": OFF,
		"template-tag-spacing": OFF,
		"unicode-bom": OFF,
		"wrap-regex": OFF,

		// ES6 (http://eslint.org/docs/rules/#ecmascript-6)
		// ----
		"arrow-body-style": OFF,
		"arrow-parens": OFF,
		"arrow-spacing": OFF,
		"constructor-super": ERROR,
		"generator-star-spacing": OFF,
		"no-class-assign": ERROR,
		"no-confusing-arrow": OFF,
		"no-const-assign": ERROR,
		"no-dupe-class-members": ERROR,
		"no-duplicate-imports": OFF,
		"no-new-symbol": ERROR,
		"no-restricted-imports": OFF,
		"no-this-before-super": ERROR,
		"no-useless-computed-key": OFF,
		"no-useless-constructor": OFF,
		"no-useless-rename": OFF,
		"no-var": OFF,
		"object-shorthand": OFF,
		"prefer-arrow-callback": OFF,
		"prefer-const": OFF,
		"prefer-destructuring": OFF,
		"prefer-numeric-literals": OFF,
		"prefer-rest-params": OFF,
		"prefer-spread": OFF,
		"prefer-template": OFF,
		"require-yield": ERROR,
		"rest-spread-spacing": OFF,
		"sort-imports": OFF,
		"symbol-description": OFF,
		"template-curly-spacing": OFF,
		"yield-star-spacing": OFF
	}
};
