import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';

import { join } from 'path';

import pkg from './package.json';


// Constants for output files:
const SRC_DIR = 'src';
const BUILD_DIR = 'build-pkg';

const outputDefaults = {
    name: 'HiGlassZarrDataFetchers',
    // We want sourcemap files to be created for debugging purposes.
    // https://rollupjs.org/guide/en/#outputsourcemap
    sourcemap: true,
};

const pkgConfig = {
    input: join(SRC_DIR, 'index.js'),
    output: [
        {
            file: join(BUILD_DIR, 'index.min.js'),
            // Reference: https://rollupjs.org/guide/en/#outputformat
            format: 'iife',
            plugins: [
                terser()
            ],
            ...outputDefaults
        },
        {
            file: join(BUILD_DIR, 'index.umd.js'),
            // Reference: https://rollupjs.org/guide/en/#outputformat
            format: 'umd',
            ...outputDefaults
        },
        {
            file: join(BUILD_DIR, 'index.cjs.js'),
            // Reference: https://rollupjs.org/guide/en/#outputformat
            format: 'cjs',
            ...outputDefaults
        },
        {
            file: join(BUILD_DIR, 'index.esm.js'),
            // Reference: https://rollupjs.org/guide/en/#outputformat
            format: 'es',
            ...outputDefaults
        }
    ],
    plugins: [
        // Tell Rollup how to resolve packages in node_modules.
        // Reference: https://github.com/rollup/plugins/tree/master/packages/commonjs#using-with-rollupplugin-node-resolve
        resolve({
            browser: true,
        }),
        // Tell Rollup how to handle JSON imports.
        json(),
        // Need to convert CommonJS modules in node_modules to ES6.
        // Reference: https://github.com/rollup/plugins/tree/master/packages/node-resolve#using-with-rollupplugin-commonjs
        commonjs({
            // Using this RegEx rather than 'node_modules/**' is suggested, to enable symlinks.
            // Reference: https://github.com/rollup/plugins/tree/master/packages/commonjs#usage-with-symlinks
            include: /node_modules/,
        }),
        // Tell Rollup to compile our source files with Babel.
        // Note: This plugin respects Babel config files by default.
        // Reference: https://github.com/rollup/plugins/tree/master/packages/babel
        babel({
            // The 'runtime' option is recommended when bundling libraries.
            // Reference: https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
            babelHelpers: 'runtime',
            // Reference: https://github.com/rollup/plugins/issues/381#issuecomment-627215009
            skipPreflightCheck: true,
            // Only transpile our source code.
            // Reference: https://github.com/rollup/plugins/tree/master/packages/babel#extensions
            exclude: 'node_modules/**'
        })
    ],
    // We do not to include Zarr in the bundle.
    external: ['zarr']
};

export default pkgConfig;