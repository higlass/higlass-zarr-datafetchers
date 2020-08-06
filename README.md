# higlass-zarr-multivec-datafetcher

This is a plugin datafetcher for loading zarr-based multivec files (stored in S3, no need for `higlass-server`).

```sh
npm install
# replace higlass dist/
rm -r ./node_modules/higlass/dist
cp -r ./dist ./node_modules/higlass/dist
# run the demo
npm run start
```