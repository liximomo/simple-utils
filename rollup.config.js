import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

const env = process.env.NODE_ENV;

const config = {
  input: 'src/main.js',
  file: pkg.browser,
  name: pkg.name,
  plugins: [
    babel({
      exclude: ['node_modules/**']
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
  ]
};
  
if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  );
}

export default config;