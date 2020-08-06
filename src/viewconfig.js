const viewconfig = {
    "editable": true,
    "zoomFixed": false,
    "trackSourceServers": [
      "https://higlass.io/api/v1"
    ],
    "exportViewUrl": "/api/v1/viewconfs",
    "views": [
      {
        "initialXDomain": [
          -2.3283064365386963e-10,
          249999999.99999997
        ],
        "initialYDomain": [
          1427772999.601453,
          1610402869.7313232
        ],
        "genomePositionSearchBoxVisible": true,
        "genomePositionSearchBox": {
          "autocompleteServer": "https://higlass.io/api/v1",
          "chromInfoServer": "https://higlass.io/api/v1",
          "visible": true,
          "chromInfoId": "hg38"
        },
        "tracks": {
          "top": [
            {
              "type": "horizontal-chromosome-labels",
              "uid": "GzHGPlijS2eASBqslzVcxA",
              "tilesetUid": "ZpZ8c5JJRUS1J7ZkofcUrg",
              "server": "https://resgen.io/api/v1",
              "options": {
                "showMousePosition": false,
                "mousePositionColor": "#999999",
                "color": "#808080",
                "stroke": "#ffffff",
                "fontSize": 12,
                "fontIsLeftAligned": false
              },
              "width": 1027,
              "height": 30
            },
            {
              "type": "horizontal-gene-annotations",
              "uid": "R6ZZ5LnEQ4ODCWZoE38maw",
              "tilesetUid": "M9A9klpwTci5Vf4bHZ864g",
              "server": "https://resgen.io/api/v1",
              "options": {
                "labelColor": "black",
                "labelPosition": "hidden",
                "plusStrandColor": "blue",
                "minusStrandColor": "red",
                "trackBorderWidth": 0,
                "trackBorderColor": "black",
                "showMousePosition": false,
                "name": "gene-annotations-hg38_3d2Hebg.db",
                "mousePositionColor": "#999999",
                "fontSize": 10,
                "labelBackgroundColor": "#ffffff",
                "labelLeftMargin": 0,
                "labelRightMargin": 0,
                "labelTopMargin": 0,
                "labelBottomMargin": 0,
                "minHeight": 24,
                "geneAnnotationHeight": 12,
                "geneLabelPosition": "outside",
                "geneStrandSpacing": 4
              },
              "width": 568,
              "height": 70
            },
            {
              "type": "horizontal-bar",
              "uid": "bmcNxj_MSEar_3nYVMnPnQ",
              "tilesetUid": "a-iBpdh3Q_uO2FLCWKpOOw",
              "server": "https://resgen.io/api/v1",
              "options": {
                "labelColor": "black",
                "labelPosition": "topLeft",
                "axisPositionHorizontal": "right",
                "barFillColor": "darkgreen",
                "valueScaling": "linear",
                "trackBorderWidth": 0,
                "trackBorderColor": "black",
                "labelTextOpacity": 0.4,
                "barOpacity": 1,
                "name": "conservation (hg38.phastCons100way.bw)",
                "align": "bottom",
                "labelLeftMargin": 0,
                "labelRightMargin": 0,
                "labelTopMargin": 0,
                "labelBottomMargin": 0,
                "labelShowResolution": false,
                "axisLabelFormatting": "scientific",
                "labelShowAssembly": true
              },
              "width": 568,
              "height": 42
            }
          ],
          "left": [],
          "center": [
            {
              "type": "horizontal-multivec",
              "uid": "cistrome-aggregation-test-track-1",
              "data": {
                "type": "zarr-multivec",
               "url": "http://higlass-serverless.s3.amazonaws.com/multivec/Homo_sapiens__AFF4__all.multires.zarr",
                "filetype": "multivec",
              },
              "coordSystem": "hg38",
              "options": {
                "labelPosition": "hidden",
                "labelColor": "black",
                "labelTextOpacity": 0.4,
                "valueScaling": "linear",
                "trackBorderWidth": 0,
                "trackBorderColor": "black",
                "heatmapValueScaling": "log",
                "labelLeftMargin": 0,
                "labelRightMargin": 0,
                "labelTopMargin": 0,
                "labelBottomMargin": 0,
                "labelShowResolution": true,
                "minHeight": 100,
                "colorbarPosition": "bottomLeft",
                "zeroValueColor": "dimgray",
                "selectRows": null,
                "selectRowsAggregationMethod": "server",
                "selectRowsAggregationMode": "sum",
                "selectRowsAggregationWithRelativeHeight": false,
                "colorbarBackgroundColor": "#ffffff",
                "scaleStartPercent": "0.00000",
                "scaleEndPercent": "1.00000"
              },
              "width": 1607,
              "height": 682
            }
          ],
          "bottom": [],
          "right": [],
          "whole": [],
          "gallery": []
        },
        "layout": {
          "w": 12,
          "h": 79,
          "x": 0,
          "y": 0
        },
        "uid": "cistrome-aggregation-test-view"
      }
    ],
    "zoomLocks": {
      "locksByViewUid": {},
      "locksDict": {}
    },
    "locationLocks": {
      "locksByViewUid": {},
      "locksDict": {}
    },
    "valueScaleLocks": {
      "locksByViewUid": {},
      "locksDict": {}
    }
};

export default viewconfig;