
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: [
            'node_modules/**',
            'allure-results/**',
            'allure-report/**',
            'coverage/**',
        ],
    },
    {
        files: ['**/*.js', '**/*.mjs'],
        extends: [js.configs.recommended],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    {
        files: ['**/*.ts'],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
        ],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            'preserve-caught-error': 'off',
        },
    },
);
