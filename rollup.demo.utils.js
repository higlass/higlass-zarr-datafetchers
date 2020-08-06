const hgVersion = '1.10.2';

export function htmlFromTemplate({ title, publicPath, nodeEnv, cssFile, jsFile }) {
    return `<!DOCTYPE html>
<html>
    <head lang="en">
        <title>${title}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://unpkg.com/higlass@${hgVersion}/dist/hglib.css">
        <link rel="stylesheet" href="${publicPath}${cssFile}"/>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        
        <div id="root"></div>
                
        <script type="text/javascript" src="${publicPath}${jsFile}"></script>
    </body>
</html>`;
};