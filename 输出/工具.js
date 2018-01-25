"use strict";
/// <引用 路径="../node_modules/@types/支持库/index.d.cts"/>
Object.defineProperty(exports, "__esModule", { value: true });
var 存在状态;
(function (存在状态) {
    存在状态[存在状态["\u5B58\u5728"] = 1] = "\u5B58\u5728";
    存在状态[存在状态["\u5E94\u66FF\u6362"] = 2] = "\u5E94\u66FF\u6362";
    存在状态[存在状态["\u4E0D\u5B58\u5728"] = 3] = "\u4E0D\u5B58\u5728";
})(存在状态 = exports.存在状态 || (exports.存在状态 = {}));
// 工具部分
function 创建对象() {
    let 对象值 = Object.create(null);
    对象值.__ = null;
    delete 对象值.__;
    return 对象值;
}
exports.创建对象 = 创建对象;
function 创建节点映射() {
    return 创建对象();
}
exports.创建节点映射 = 创建节点映射;
function 按系数升序(a, b) {
    if (a === b)
        return 0 /* 等于 */;
    if (a === undefined || a.频率 === undefined)
        return 1 /* 大于 */;
    if (b === undefined || b.频率 === undefined)
        return -1 /* 小于 */;
    if (a.频率 === b.频率)
        return 0 /* 等于 */;
    return a.频率 > b.频率 ? -1 /* 小于 */ : 1 /* 大于 */;
}
exports.按系数升序 = 按系数升序;
function 按系数降序(a, b) {
    if (a === b)
        return 0 /* 等于 */;
    if (a === undefined || a.频率 === undefined)
        return -1 /* 小于 */;
    if (b === undefined || b.频率 === undefined)
        return 1 /* 大于 */;
    if (a.频率 === b.频率)
        return 0 /* 等于 */;
    return a.频率 > b.频率 ? 1 /* 大于 */ : -1 /* 小于 */;
}
exports.按系数降序 = 按系数降序;
function 按文本升序(a, b) {
    if (a === b)
        return 0 /* 等于 */;
    if (a === undefined || a.文本 === undefined)
        return 1 /* 大于 */;
    if (b === undefined || b.文本 === undefined)
        return -1 /* 小于 */;
    if (a.文本 === b.文本)
        return 0 /* 等于 */;
    return a.文本 < b.文本 ? 1 /* 大于 */ : -1 /* 小于 */;
}
exports.按文本升序 = 按文本升序;
function 按文本降序(a, b) {
    if (a === b)
        return 0 /* 等于 */;
    if (a === undefined || a.文本 === undefined)
        return -1 /* 小于 */;
    if (b === undefined || b.文本 === undefined)
        return 1 /* 大于 */;
    if (a.文本 === b.文本)
        return 0 /* 等于 */;
    return a.文本 < b.文本 ? -1 /* 小于 */ : 1 /* 大于 */;
}
exports.按文本降序 = 按文本降序;
function* 分行读文件(文件文本, 分隔符 = "\n") {
    if (!文件文本) {
        return;
    }
    let 行组 = 文件文本.split(分隔符);
    for (let i = 0; i < 行组.length; i++) {
        yield 行组[i];
    }
}
exports.分行读文件 = 分行读文件;
function 哈希(文本, 数量) {
    let v = 0;
    for (let i = 0; i < 文本.length; i++) {
        v += 文本[i].charCodeAt(0);
    }
    return v % 数量;
}
exports.哈希 = 哈希;
var 首字;
(function (首字) {
    首字[首字["a"] = 0] = "a";
    首字[首字["b"] = 1] = "b";
    首字[首字["c"] = 2] = "c";
    首字[首字["ch"] = 3] = "ch";
    首字[首字["d"] = 4] = "d";
    首字[首字["e"] = 5] = "e";
    首字[首字["f"] = 6] = "f";
    首字[首字["g"] = 7] = "g";
    首字[首字["h"] = 8] = "h";
    首字[首字["i"] = 9] = "i";
    首字[首字["j"] = 10] = "j";
    首字[首字["k"] = 11] = "k";
    首字[首字["l"] = 12] = "l";
    首字[首字["m"] = 13] = "m";
    首字[首字["n"] = 14] = "n";
    首字[首字["o"] = 15] = "o";
    首字[首字["p"] = 16] = "p";
    首字[首字["q"] = 17] = "q";
    首字[首字["r"] = 18] = "r";
    首字[首字["s"] = 19] = "s";
    首字[首字["sh"] = 20] = "sh";
    首字[首字["t"] = 21] = "t";
    首字[首字["u"] = 22] = "u";
    首字[首字["v"] = 23] = "v";
    首字[首字["w"] = 24] = "w";
    首字[首字["x"] = 25] = "x";
    首字[首字["y"] = 26] = "y";
    首字[首字["z"] = 27] = "z";
    首字[首字["zh"] = 28] = "zh";
    首字[首字["$a_zh"] = 29] = "$a_zh";
})(首字 = exports.首字 || (exports.首字 = {}));
function 字首哈希(文本) {
    switch (文本) {
        case "a":
            return 首字.a;
        case "b":
            return 首字.b;
        case "c":
            return 首字.c;
        case "ch":
            return 首字.ch;
        case "d":
            return 首字.d;
        case "e":
            return 首字.e;
        case "f":
            return 首字.f;
        case "g":
            return 首字.g;
        case "h":
            return 首字.h;
        case "i":
            return 首字.i;
        case "j":
            return 首字.j;
        case "k":
            return 首字.k;
        case "l":
            return 首字.l;
        case "m":
            return 首字.m;
        case "n":
            return 首字.n;
        case "o":
            return 首字.o;
        case "p":
            return 首字.p;
        case "q":
            return 首字.q;
        case "r":
            return 首字.r;
        case "s":
            return 首字.s;
        case "sh":
            return 首字.sh;
        case "t":
            return 首字.t;
        case "u":
            return 首字.u;
        case "v":
            return 首字.v;
        case "w":
            return 首字.w;
        case "x":
            return 首字.x;
        case "y":
            return 首字.y;
        case "z":
            return 首字.z;
        case "zh":
            return 首字.zh;
        default:
            return 首字.$a_zh;
    }
}
exports.字首哈希 = 字首哈希;
