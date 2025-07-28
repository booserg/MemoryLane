const typescript = require('rollup-plugin-typescript2');
const vue = require('rollup-plugin-vue');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const copy = require('rollup-plugin-copy');

module.exports = {
  input: 'src/main.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    vue({ css: true, preprocessStyles: true }),
    typescript({ useTsconfigDeclarationDir: true, clean: true }),
    nodeResolve(),
    commonjs(),
    copy({ targets: [{ src: ['manifest.json', 'styles.css'], dest: 'dist' }] }),
  ],
};
