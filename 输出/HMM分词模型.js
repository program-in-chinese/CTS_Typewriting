"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("./\u5DE5\u5177");
const __2 = require("./\u7CFB\u7EDF");
var 位置码;
(function (位置码) {
    位置码[位置码["\u9996"] = 0] = "\u9996";
    位置码[位置码["\u5C3E"] = 1] = "\u5C3E";
    位置码[位置码["\u4E2D"] = 2] = "\u4E2D";
    位置码[位置码["\u72EC"] = 3] = "\u72EC";
    位置码[位置码["\u603B"] = 4] = "\u603B";
})(位置码 = exports.位置码 || (exports.位置码 = {}));
let 频率统计信息 = [];
function 创建HMM模型(HMM词典路径) {
    let 当前内容;
    try {
        if (!当前内容) {
            当前内容 = __2.系统.读文件(HMM词典路径);
        }
    }
    catch (err) {
        throw err;
    }
    加载模块(当前内容);
    return {
        开始概率,
        反向概率,
        输出概率表,
        取输出概率,
        频率统计信息
    };
}
exports.创建HMM模型 = 创建HMM模型;
const 开始概率 = [];
const 反向概率 = [];
const 输出概率B = __1.创建对象();
const 输出概率E = __1.创建对象();
const 输出概率M = __1.创建对象();
const 输出概率S = __1.创建对象();
const 输出概率表 = [输出概率B, 输出概率E, 输出概率M, 输出概率S];
function 加载模块(词典内容) {
    let 读行 = __1.分行读文件(词典内容);
    while (true) {
        let 值 = 读行.next().value;
        if (!值) {
            break;
        }
        值 = 值.trim();
        if (值.indexOf("#") !== -1) {
            continue;
        }
        if (值.indexOf("$_1:") === 0) {
            值 = 值.substr(4);
            let 临时组 = 值.split(" ");
            if (临时组.length !== 位置码.总) {
                throw new Error("HMM词典数据出现错误");
            }
            for (let j = 0; j < 临时组.length; j++) {
                if (isNaN(+临时组[j])) {
                    throw new Error("HMM词典数据出现错误");
                }
                开始概率[j] = +临时组[j];
            }
            continue;
        }
        for (let i = 0; i < 位置码.总; i++) {
            if (值.indexOf("$_2:") !== 0 ||
                值.indexOf("$_3:") !== 0 ||
                值.indexOf("$_4:") !== 0 ||
                值.indexOf("$_5:") !== 0) {
                throw new Error("HMM词典数据出现错误");
            }
            值 = 值.substr(4);
            let 临时组 = 值.split(" ");
            if (临时组.length !== 位置码.总) {
                throw new Error("HMM词典数据出现错误");
            }
            反向概率[i] = [];
            for (let j = 0; j < 临时组.length; j++) {
                if (isNaN(+临时组[j])) {
                    throw new Error("HMM词典数据出现错误");
                }
                反向概率[i][j] = +临时组[j];
            }
            值 = 读行.next().value;
            if (!值) {
                throw new Error("HMM词典数据出现错误");
            }
        }
        if (值.indexOf("$_6:") === 0) {
            值 = 值.substr(4);
            加载输出概率(值, 输出概率B, 位置码.首);
            continue;
        }
        if (值.indexOf("$_7:") === 0) {
            值 = 值.substr(4);
            加载输出概率(值, 输出概率E, 位置码.尾);
            continue;
        }
        if (值.indexOf("$_8:") === 0) {
            值 = 值.substr(4);
            加载输出概率(值, 输出概率M, 位置码.中);
            continue;
        }
        if (值.indexOf("$_9:") === 0) {
            值 = 值.substr(4);
            加载输出概率(值, 输出概率S, 位置码.独);
            break;
        }
    }
}
const _最小数字 = -3.14e+100;
function 加载输出概率(行文本, 映射, 编号 = 位置码.首) {
    if (!行文本) {
        return false;
    }
    let 统计 = __1.创建对象();
    统计.总和 = 0;
    统计.最大 = _最小数字;
    统计.最小 = 0;
    let 临时 = 行文本.split(",");
    统计.总数 = 临时.length;
    for (let i = 0; i < 临时.length; i++) {
        let 临时1 = 临时[i].split(":");
        if (临时1.length !== 2) {
            return false;
        }
        let 频率 = +临时1[1];
        映射[临时1[0].charCodeAt(0)] = 频率;
        if (频率 > 统计.最大) {
            统计.最大 = 频率;
        }
        else if (频率 < 统计.最小) {
            统计.最小 = 频率;
        }
        if (频率 != _最小数字) {
            统计.总和 += 频率;
        }
    }
    统计.总和 = Math.abs(统计.总和);
    统计.平均 = 统计.总和 / 统计.总数;
    频率统计信息[编号] = 统计;
    return true;
}
function 取输出概率(当前映射, 键, 最小数 = _最小数字) {
    return 当前映射["" + 键] || 最小数;
}
