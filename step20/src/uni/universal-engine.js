import * as fs from 'fs';
import { renderModuleFactory } from '@angular/platform-server';
var templateCache = {}; // cache for page templates
var outputCache = {}; // cache for rendered pages
// cache for rendered pages
export function ngUniversalEngine(setupOptions) {
    return function (filePath, options, callback) {
        var url = options.req.url;
        var html = outputCache[url];
        if (html) {
            // return already-built page for this url
            console.log('from cache: ' + url);
            callback(null, html);
            return;
        }
        console.log('building: ' + url);
        if (!templateCache[filePath]) {
            var file = fs.readFileSync(filePath);
            templateCache[filePath] = file.toString();
        }
        // render the page via angular platform-server
        var appModuleFactory = setupOptions.bootstrap[0];
        renderModuleFactory(appModuleFactory, {
            document: templateCache[filePath],
            url: url
        }).then(function (str) {
            outputCache[url] = str;
            callback(null, str);
        });
    };
}
//# sourceMappingURL=universal-engine.js.map