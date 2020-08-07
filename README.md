# higlass-zarr-datafetchers

This repository contains plugin datafetchers for loading zarr-based files in HiGlass.
These plugins allow data to be stored in object stores such as S3 (rather than using `higlass-server`).

```sh
npm install

# Replace node_modules/higlass/dist directory
# TODO: remove this step once plugin datafetcher support is released on NPM
rm -r ./node_modules/higlass/dist
cp -r ./higlass-dist ./node_modules/higlass/dist
# Replace node_modules/higlass-register/dist directory
# TODO: remove this step once plugin datafetcher support is released on NPM
rm -r ./node_modules/higlass-register/dist
cp -r ./higlass-register-dist ./node_modules/higlass-register/dist


# Run the demo
npm run start
```

Zarr files have been generated using this script https://github.com/hms-dbmi/cistrome-explorer/blob/keller-mark/zarr-for-serverless/pipelines/cistrome-to-multivec/src/manifest_to_zarr.py
