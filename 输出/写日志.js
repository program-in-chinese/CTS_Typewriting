"use strict";
/// <引用 路径="../node_modules/@types/支持库/index.d.cts"/>
const __1 = require("./\u7CFB\u7EDF");
let 启用日志 = true;
let 写日志 = (function () {
    if (!启用日志) {
        return function () { };
    }
    let 开始 = true;
    let 文件名 = __1.系统.结合路径(__1.系统.临时目录(), "vsc_cts_拼音输入法扩展", "拼音输入法日志.log");
    return function 日志(日志内容) {
        if (开始) {
            开始 = false;
            __1.系统.写文件(文件名, 格式化时间() + " : " + 日志内容 + __1.系统.新行);
            return;
        }
        __1.系统.追写文件(文件名, 格式化时间() + " : " + 日志内容 + __1.系统.新行);
    };
})();
function 格式化时间() {
    const d = new Date();
    return `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}] `;
}
module.exports = 写日志;
