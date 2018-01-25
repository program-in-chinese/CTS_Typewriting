"use strict";
/// <引用 路径="../node_modules/@types/支持库/index.d.cts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const _______1 = require("./\u62FC\u97F3\u8F93\u5165\u6CD5\u8F93\u51FA");
const ____1 = require("./\u6570\u636E\u8BFB\u53D6");
____1.加载停止词索引();
____1.加载词库索引();
____1.加载输入记录索引();
let 开始时间 = Date.now();
let 拼音 = "hanguo";
let 结果 = _______1.拼音查词(拼音);
let 结束时间 = Date.now();
console.log("用时: ", 结束时间 - 开始时间);
console.log("结果: ", 结果);
console.log("目前输入法开发基本完成了, 正在全力翻译支持库,这个输入法的词库量还是太少了");
console.log();
