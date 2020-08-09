[![npm](https://img.shields.io/npm/v/higlass-zarr-datafetchers)](https://www.npmjs.com/package/higlass-zarr-datafetchers)
[![npm bundle size](https://img.shields.io/bundlephobia/min/higlass-zarr-datafetchers)](https://unpkg.com/browse/higlass-zarr-datafetchers/)

# higlass-zarr-datafetchers

This repository contains plugin data fetchers for loading [Zarr](https://github.com/gzuidhof/zarr.js/)-based files in HiGlass.
These plugins allow data to be stored in object stores such as S3 (rather than using `higlass-server`).

```sh
yarn add zarr # peer dependency
yarn add higlass-register # helpers for plugin registration
yarn add higlass-zarr-datafetchers
```

List of data fetchers currently implemented:

- `zarr-multivec`: Use this data fetcher with a `horizontal-multivec` track to visualize multi-sample genome-wide continuous data with a heatmap.

## Develop

### Install dependencies
```sh
yarn
```

### Run the demo

```sh
yarn run start
```

## Build

```sh
yarn run build
```

## Conversion resources

Coming soon: [higlass-zarr-converters](https://github.com/keller-mark/higlass-zarr-converters)

_For the current demo, Zarr files were generated using this script https://github.com/hms-dbmi/cistrome-explorer/blob/keller-mark/zarr-for-serverless/pipelines/cistrome-to-multivec/src/manifest_to_zarr.py_