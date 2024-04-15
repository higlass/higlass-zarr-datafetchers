import * as esbuild from "esbuild";

const env = process.env.APP_ENV || 'development';

import { NodeGlobalsPolyfillPlugin as globals } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin as builtins } from '@esbuild-plugins/node-modules-polyfill';

esbuild.build({
  entryPoints: ["src/index.js"],
  target: 'es2020',
  format: 'esm',
  sourcemap: true,
  bundle: true,
  minify: env === 'production',
  outfile: env === 'production' ? 'dist/index.min.js' : 'dist/index.js',
  plugins: [],
  external: ['zarrita'],
  watch: process.env.ESBUILD_MODE === 'watch',
});