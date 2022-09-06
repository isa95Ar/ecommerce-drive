"use strict";
exports.__esModule = true;
exports.slugify = void 0;
var slugify = function (str) {
    var from = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç', to = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc', mapping = {};
    for (var i = 0, j = from.length; i < j; i++)
        mapping[from.charAt(i)] = to.charAt(i);
    var result = [];
    for (var i = 0, j = str.length; i < j; i++) {
        var c = str.charAt(i);
        if (mapping.hasOwnProperty(str.charAt(i)))
            result.push(mapping[c]);
        else
            result.push(c);
    }
    return result
        .join('')
        .replace(/[^-A-Za-z0-9]+/g, '-')
        .toLowerCase();
};
exports.slugify = slugify;
