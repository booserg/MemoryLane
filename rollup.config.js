const typescript = require('rollup-plugin-typescript2');
const copy = require('rollup-plugin-copy');

module.exports = {
  input: 'src/main.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    typescript({ useTsconfigDeclarationDir: true, clean: true }),
    copy({ targets: [{ src: ['manifest.json', 'styles.css'], dest: 'dist' }] }),
  ],
};
