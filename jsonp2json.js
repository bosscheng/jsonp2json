/*
* author: wancheng
* date: 2018-12-26
* desc: jsonp2json
*/

function jsonp2json(str) {
    var jsonObj = false;

    var jsonStr = str
        .replace(/^\s+/, '')
        .replace(/\s+$/, '')
        .replace(/^.*?\(\s{0,}/, '')
        .replace(/\);?$/, '')
    try {
        jsonObj = JSON.parse(jsonStr)
    } catch (e) {
        jsonObj = jsonStr;
    }
    return jsonObj;
}
