# higlass-zarr-datafetchers

This repository contains plugin datafetchers for loading zarr-based files in HiGlass.
These plugins allow data to be stored in object stores such as S3 (rather than using `higlass-server`).

```sh
yarn add zarr # peer dependency
yarn add higlass-zarr-datafetchers
```

## Develop
```sh
yarn

# Replace node_modules/higlass/dist directory
# TODO: remove this step once plugin datafetcher support is released on NPM
rm -r ./node_modules/higlass/dist
cp -r ./higlass ./node_modules/higlass/dist
# Replace node_modules/higlass-register/dist directory
# TODO: remove this step once plugin datafetcher support is released on NPM
cp ./higlass-register/index.js ./node_modules/higlass-register/src/index.js

# Run the demo
yarn run start
```

## Build

```sh
yarn run build
```

## Publish

Create the production bundle, update the version, and publish to NPM.

```sh
npm version patch
npm publish
```

Zarr files have been generated using this script https://github.com/hms-dbmi/cistrome-explorer/blob/keller-mark/zarr-for-serverless/pipelines/cistrome-to-multivec/src/manifest_to_zarr.py
