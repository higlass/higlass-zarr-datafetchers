# higlass-zarr-multivec-datafetcher

This is a plugin datafetcher for loading zarr-based multivec files (stored in S3, no need for `higlass-server`).

```sh
npm install
# replace higlass dist/
rm -r ./node_modules/higlass/dist
cp -r ./higlass-dist ./node_modules/higlass/dist
# run the demo
npm run start
```

Zarr files have been generated using this script https://github.com/hms-dbmi/cistrome-explorer/blob/keller-mark/zarr-for-serverless/pipelines/cistrome-to-multivec/src/manifest_to_zarr.py
