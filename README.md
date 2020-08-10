[![npm](https://img.shields.io/npm/v/higlass-zarr-datafetchers)](https://www.npmjs.com/package/higlass-zarr-datafetchers)
[![npm bundle size](https://img.shields.io/bundlephobia/min/higlass-zarr-datafetchers)](https://unpkg.com/browse/higlass-zarr-datafetchers/)

# higlass-zarr-datafetchers

This repository contains plugin data fetchers for loading [Zarr](https://zarr.readthedocs.io/en/stable/)-based files in HiGlass.
These plugins allow data to be stored in object stores such as S3 (rather than using [higlass-server](https://github.com/higlass/higlass-server)).
Plugin data fetchers can be registered using [higlass-register](https://github.com/higlass/higlass-register).

## Installation

```sh
yarn add zarr # peer dependency
yarn add higlass-register # helpers for plugin registration
yarn add higlass-zarr-datafetchers
```

## Register plugin data fetchers

```js
import register from "higlass-register";
import { ZarrMultivecDataFetcher } from "higlass-zarr-datafetchers";

register(
    { dataFetcher: ZarrMultivecDataFetcher, config: ZarrMultivecDataFetcher.config },
    { pluginType: "dataFetcher" }
);
```

## Use in a HiGlass view config track definition

List of data fetchers currently implemented:

- `zarr-multivec` (register with `ZarrMultivecDataFetcher`)
    
    - Use this data fetcher with a `horizontal-multivec` track to visualize multi-sample genome-wide continuous data.

    ```js
    {
        "type": "horizontal-multivec",
        "uid": "demo-multivec-track",
        "data": {
            "type": "zarr-multivec",
            "url": "//higlass-serverless.s3.amazonaws.com/multivec/Homo_sapiens__AFF4__all.multires.zarr",
        },
    }
    ```

    - Alternatively, use this data fetcher with a `horizontal-bar` track to visualize single-sample genome-wide continuous data (one row of a multi-sample file).

    ```js
    {
        "type": "horizontal-bar",
        "uid": "demo-bar-track",
        "data": {
            "type": "zarr-multivec",
            "url": "//higlass-serverless.s3.amazonaws.com/multivec/Homo_sapiens__AFF4__all.multires.zarr",
            "row": 0, // specify the index of a row of interest
        },
    }
    ```

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

_For the current demo, Zarr files were generated using [this script](https://github.com/hms-dbmi/cistrome-explorer/blob/221fc8c183f0e03f83059a6735f5dbe48217b4d3/pipelines/cistrome-to-multivec/src/manifest_to_zarr.py)_
