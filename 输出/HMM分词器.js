"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HMM____1 = require("./HMM\u5206\u8BCD\u6A21\u578B");
let _模型;
function 创建HMM分词(HMM词典路径) {
    if (!_模型) {
        _模型 = HMM____1.创建HMM模型(HMM词典路径);
    }
    return {
        分词,
        模型: _模型
    };
}
exports.创建HMM分词 = 创建HMM分词;
function 分词(句子文本) {
    let 左 = 0;
    let 右 = 0;
    let 结尾 = 句子文本.length;
    let 结果 = [];
    while (右 !== 结尾) {
        if (句子文本.charCodeAt(右) < 0x80) {
            if (左 != 右) {
                内部分词(句子文本.substring(左, 右), 结果);
            }
            左 = 右;
            do {
                右 += 单字结果处理(句子文本.substring(左)); // 连续 英文
                if (右 !== 左) {
                    break;
                }
                右 += 数字结果处理(句子文本.substring(左)); // 连续数字
                if (右 !== 左) {
                    break;
                }
                右++;
            } while (false);
            let 词 = 句子文本.substring(左, 右);
            结果.push(词);
            左 = 右;
        }
        else {
            右++;
        }
    }
    if (左 !== 右) {
        内部分词(句子文本.substring(左, 右), 结果);
    }
    return 结果;
}
exports.分词 = 分词;
function 单字结果处理(句子文本) {
    let i = 0;
    while (句子文本.length !== i) {
        const x = 句子文本.charCodeAt(i);
        if (97 <= x && x <= 122 || 65 <= x && x <= 90) {
            i++;
        }
        else {
            return i;
        }
    }
    return i;
}
function 数字结果处理(句子文本) {
    let i = 0;
    while (句子文本.length !== i) {
        const x = 句子文本.charCodeAt(i);
        if (48 <= x && x <= 57 || 46 === x) {
            i++;
        }
        else {
            return i;
        }
    }
    return i;
}
const _最小数字 = -3.14e+100;
function 内部分词(句子文本, 结果) {
    let 状态 = [];
    维特比算法(句子文本, 状态);
    let 左 = 0;
    let 右 = 0;
    for (let i = 0; i < 状态.length; i++) {
        if (状态[i] === HMM____1.位置码.尾 || 状态[i] === HMM____1.位置码.独) {
            右 = i + 1;
            let 词 = 句子文本.substring(左, 右);
            结果.push(词);
            左 = 右;
        }
    }
}
function 维特比算法(句子文本, 状态集) {
    let Y = HMM____1.位置码.总;
    let X = 句子文本.length;
    let 当前, 以前, 开始, 临时, 结尾E, 结尾S;
    let 路径 = [];
    let 频率 = [];
    for (let y = 0; y < Y; y++) {
        频率[0 + y * X] = _模型.开始概率[y] + _模型.取输出概率(_模型.输出概率表[y], 句子文本.charCodeAt(0));
        路径[0 + y * X] = -1;
    }
    let 输出概率;
    for (let x = 1; x < X; x++) {
        for (let y = 0; y < Y; y++) {
            当前 = x + y * X;
            频率[当前] = _最小数字;
            路径[当前] = HMM____1.位置码.尾;
            输出概率 = _模型.取输出概率(_模型.输出概率表[y], 句子文本.charCodeAt(x));
            for (let yY = 0; yY < Y; yY++) {
                以前 = x - 1 + yY * X;
                临时 = 频率[以前] + _模型.反向概率[yY][y] + 输出概率;
                if (临时 > 频率[当前]) {
                    频率[当前] = 临时;
                    路径[当前] = yY;
                }
            }
        }
    }
    结尾E = 频率[X - 1 + HMM____1.位置码.尾 * X];
    结尾S = 频率[X - 1 + HMM____1.位置码.独 * X];
    开始 = 0;
    if (结尾E >= 结尾S) {
        开始 = HMM____1.位置码.尾;
    }
    else {
        开始 = HMM____1.位置码.独;
    }
    for (let x = X - 1; x >= 0; x--) {
        状态集[x] = 开始;
        开始 = 路径[x + 开始 * X];
    }
}
