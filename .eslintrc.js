module.exports = {
  extends: 'universe',
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'import/order': 0,
        'import/newline-after-import': 2,
        'import/namespace': 0,
      },
    },
  ],
}
