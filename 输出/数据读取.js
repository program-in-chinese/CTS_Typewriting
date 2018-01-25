"use strict";
/// <引用 路径="../node_modules/@types/支持库/index.d.cts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("./\u7CFB\u7EDF");
const __2 = require("./\u5DE5\u5177");
const ____1 = require("./\u7F16\u8BD1\u62FC\u97F3");
const ______1 = require("./\u8BCD\u5178\u5165\u5E93\u5DE5\u5177");
let _总词库索引;
let _停止词索引;
let _输入记录库索引;
function 加载词库索引() {
    function 加载() {
        let 路径 = __1.系统.解析路径("../lib/基础词库.utf8");
        let 内容 = __1.系统.读文件(路径);
        let 读一行 = 分行读(内容);
        _总词库索引 = __2.创建对象();
        _总词库索引.上个 = null;
        while (true) {
            let 行内容 = 读一行.next().value;
            if (!行内容) {
                break;
            }
            else {
                let 拼音组 = 行内容.split("'");
                let 简拼键组 = [];
                for (let i = 0; i < 拼音组.length; i++) {
                    if (i > 2) {
                        break;
                    }
                    简拼键组.push(__2.字首哈希(____1.取拼音索引简拼(拼音组[i])));
                }
                插入节点(简拼键组, 行内容);
            }
        }
        return _总词库索引;
        function 插入节点(键, 值) {
            let 当前节点 = _总词库索引;
            for (let i = 0; i < 键.length; i++) {
                let 当前 = 键[i];
                if (!当前节点.下个) {
                    当前节点.下个 = new Array();
                }
                if (!当前节点.下个[当前]) {
                    let 下个节点 = __2.创建对象();
                    当前节点.下个[当前] = 下个节点;
                    let 临时 = 当前节点;
                    当前节点 = 下个节点;
                    当前节点.上个 = 临时;
                }
                else {
                    当前节点 = 当前节点.下个[当前];
                }
            }
            (当前节点.当前词 || (当前节点.当前词 = [])).push(值);
        }
    }
    return _总词库索引 || 加载();
}
exports.加载词库索引 = 加载词库索引;
function 加载输入记录索引() {
    function 加载() {
        let 路径 = __1.系统.解析路径("../lib/输入记录/输入记录.utf8");
        let 内容 = __1.系统.读文件(路径);
        let 读一行 = 分行读(内容);
        _输入记录库索引 = __2.创建对象();
        _输入记录库索引.上个 = null;
        while (true) {
            let 行内容 = 读一行.next().value;
            if (!行内容) {
                break;
            }
            else {
                let 拼音组 = 行内容.split("'");
                let 简拼键组 = [];
                for (let i = 0; i < 拼音组.length; i++) {
                    简拼键组.push(__2.字首哈希(____1.取拼音索引简拼(拼音组[i])));
                }
                插入节点(简拼键组, 行内容);
            }
        }
        return _输入记录库索引;
        function 插入节点(键, 值) {
            let 当前节点 = _输入记录库索引;
            for (let i = 0; i < 键.length; i++) {
                let 当前 = 键[i];
                if (!当前节点.下个) {
                    当前节点.下个 = new Array();
                }
                if (!当前节点.下个[当前]) {
                    let 下个节点 = __2.创建对象();
                    当前节点.下个[当前] = 下个节点;
                    let 临时 = 当前节点;
                    当前节点 = 下个节点;
                    当前节点.上个 = 临时;
                }
                else {
                    当前节点 = 当前节点.下个[当前];
                }
            }
            (当前节点.当前词 || (当前节点.当前词 = [])).push(值);
        }
    }
    return _输入记录库索引 || 加载();
}
exports.加载输入记录索引 = 加载输入记录索引;
function 加载停止词索引() {
    function 加载() {
        let 路径 = __1.系统.解析路径("../lib/停止词词典.utf8");
        let 内容 = __1.系统.读文件(路径);
        let 读一行 = 分行读(内容);
        _停止词索引 = __2.创建对象();
        _停止词索引.上个 = null;
        while (true) {
            let 行内容 = 读一行.next().value;
            if (!行内容) {
                break;
            }
            else {
                let 分组 = 行内容.split(":");
                let 拼音组 = 分组[0].split("'");
                let 词 = __2.创建对象();
                词.拼音 = 分组[0];
                词.文本 = 分组[1];
                词.频率 = 1;
                插入节点(拼音组, 词);
            }
        }
        return _停止词索引;
        function 插入节点(键, 值) {
            let 当前节点 = _停止词索引;
            for (let i = 0; i < 键.length; i++) {
                let 当前 = 键[i];
                if (!当前节点.下个) {
                    当前节点.下个 = new Map();
                }
                if (!当前节点.下个.has(当前)) {
                    let 下个节点 = __2.创建对象();
                    当前节点.下个.set(当前, 下个节点);
                    let 临时 = 当前节点;
                    当前节点 = 下个节点;
                    当前节点.上个 = 临时;
                }
                else {
                    当前节点 = 当前节点.下个.get(当前);
                }
            }
            (当前节点.当前词 || (当前节点.当前词 = [])).push(值);
        }
    }
    return _停止词索引 || 加载();
}
exports.加载停止词索引 = 加载停止词索引;
let 停止词个数 = 0;
function 查询拼音数据库(简拼, 拼音, 是全拼, 是简拼) {
    let 用户词 = 取输入记录词(简拼, 拼音, 是全拼, 是简拼);
    try {
        let 库内词 = 取基本库词(简拼, 拼音, 是全拼, 是简拼);
        if (用户词 && 库内词) {
            let 结果 = 去除重复(库内词);
            结果.push(...去除重复(用户词));
            结果 = 去除重复(结果);
            return 结果.sort(__2.按系数升序);
        }
        else {
            return 去除重复(库内词).sort(__2.按系数升序);
        }
    }
    catch (err) {
        if (用户词) {
            return 去除重复(用户词).sort(__2.按系数升序);
        }
        else {
            try {
                if (停止词个数 > 3) {
                    throw new Error("停止词个数太多");
                }
                停止词个数++;
                let 后面;
                let 前面;
                let 起点 = -1;
                let i, 词;
                while (起点 !== 0 && 起点 < 简拼.length) {
                    let 临时 = 取停止词(拼音.split("'"), 起点 == -1 ? 起点 = 0 : 起点);
                    i = 临时.i;
                    词 = 临时.词;
                    if (词) {
                        break;
                    }
                    起点++;
                }
                if (起点 !== 0 && 起点 < 简拼.length) {
                    let 临时 = [...简拼];
                    let 临时2 = 拼音;
                    拼音 = 拼音.split("'").splice(0, 起点).join("'");
                    前面 = 查询拼音数据库(简拼.splice(0, 起点), 拼音, 是全拼, 是简拼);
                    简拼 = 临时;
                    拼音 = 临时2;
                }
                if (词) {
                    if (i < 简拼.length - 1) {
                        拼音 = 拼音.split("'").splice(i).join("'");
                        后面 = 查询拼音数据库(简拼.splice(i), 拼音, 是全拼, 是简拼);
                    }
                    if (前面 && 后面) {
                        return 多维组合成词([前面, 词, 后面]);
                    }
                    else if (前面) {
                        return 多维组合成词([前面, 词]);
                    }
                    else if (后面) {
                        return 多维组合成词([词, 后面]);
                    }
                    else {
                        return 词;
                    }
                }
                else {
                    let 组合 = [];
                    let 临时 = [...简拼];
                    let 临时2 = 拼音.includes("'") ? 拼音.split("'") : 拼音;
                    for (let ii = 0; ii < 临时.length; ii++) {
                        let 值 = 查询拼音数据库([临时[ii]], 临时2[ii], 是全拼, 是简拼);
                        组合.push(值);
                    }
                    return 多维组合成词(组合);
                }
            }
            catch (err) {
                停止词个数 = 0;
                return [{ 拼音: 拼音.replace("'", ""), 文本: 拼音, 频率: 1 }];
            }
        }
    }
}
exports.查询拼音数据库 = 查询拼音数据库;
function 多维组合成词(二维数组) {
    let 结果数组 = [];
    let 临时 = [];
    let 长度 = 二维数组.length;
    function 交叉组合(多维数组, 过度 = [], 当前层 = 0) {
        if (多维数组.length === 当前层 + 1) {
            for (let i = 0; i < 多维数组[当前层].length; i++) {
                临时 = 过度.slice(0);
                临时.push(多维数组[当前层][i]);
                let 组合 = __2.创建对象();
                组合.文本 = "";
                组合.频率 = 0;
                let 拼音 = [];
                for (let v of 临时) {
                    组合.文本 += v.文本;
                    拼音.push(v.拼音);
                    组合.频率 += (v.频率 / 长度);
                }
                组合.拼音 = 拼音.join("'");
                结果数组.push(组合);
            }
        }
        else {
            for (let i = 0; i < 多维数组[当前层].length; i++) {
                临时 = 过度.slice(0);
                临时.push(多维数组[当前层][i]);
                交叉组合(多维数组, 临时, 当前层 + 1);
            }
        }
    }
    交叉组合(二维数组);
    临时 = undefined;
    return 结果数组;
}
function 去除重复(数据) {
    var 结果 = [];
    for (var i = 0; i < 数据.length; i++) {
        if (结果.findIndex(v => v.文本 == 数据[i].文本) === -1) {
            结果.push(数据[i]);
        }
    }
    return 结果;
}
function 取基本库词(简拼, 拼音, 是全拼, 是简拼) {
    let 结果 = [];
    let 当前 = _总词库索引;
    for (let i = 0; i < 简拼.length; i++) {
        let p = 简拼[i];
        let 键 = __2.字首哈希(p);
        if (当前.下个) {
            if (!当前.下个[键]) {
                return;
            }
            else {
                当前 = 当前.下个[键];
            }
        }
        else if (当前.当前词) {
            结果 = 筛选基本库结果(当前.当前词, 简拼, 拼音, 是全拼, 是简拼);
        }
        else {
            return;
        }
        if (i === 简拼.length - 1) {
            if (当前.当前词) {
                结果 = 筛选基本库结果(当前.当前词, 简拼, 拼音, 是全拼, 是简拼);
            }
        }
    }
    return 结果 && 结果.length ? 结果.sort(__2.按系数升序) : undefined;
}
function 取输入记录词(简拼, 拼音, 是全拼, 是简拼) {
    let 结果 = [];
    let 当前 = _输入记录库索引;
    for (let i = 0; i < 简拼.length; i++) {
        let p = 简拼[i];
        let 键 = __2.字首哈希(p);
        if (当前.下个) {
            if (!当前.下个[键]) {
                // 没有下个 从这里取词
            }
            else {
                当前 = 当前.下个[键];
            }
        }
        else if (当前.当前词) {
            let 词组文本 = 当前.当前词;
            结果 = 筛选输入记录结果组(词组文本, 简拼, 拼音, 是全拼, 是简拼);
        }
        else {
            return;
        }
        if (i === 简拼.length - 1) {
            if (当前.当前词) {
                let 词组文本 = 当前.当前词;
                结果 = 筛选输入记录结果组(词组文本, 简拼, 拼音, 是全拼, 是简拼);
            }
            else {
                return;
            }
        }
    }
    return 结果 && 结果.length ? 结果 : undefined;
}
function 取停止词(拼音, 起点 = 0) {
    let 结果 = [];
    let 当前 = _停止词索引;
    if (起点 >= 拼音.length) {
        return { i: 0, 词: [] };
    }
    for (let i = 起点; i < 拼音.length; i++) {
        let 键 = 拼音[i];
        if (当前.下个) {
            if (!当前.下个.has(键)) {
                while (i !== 0) {
                    if (当前.当前词) {
                        break;
                    }
                    当前 = 当前.上个;
                    i--;
                }
                return { i, 词: 当前 && 当前.当前词 };
            }
            else {
                当前 = 当前.下个.get(键);
            }
        }
        else {
            while (i !== 0) {
                if (当前.当前词) {
                    break;
                }
                i--;
                当前 = 当前.上个;
            }
            return { i, 词: 当前 && 当前.当前词 };
        }
        if (i === 拼音.length - 1) {
            if (当前.当前词) {
                return { i, 词: 当前 && 当前.当前词 };
            }
            else {
                while (i !== 0) {
                    if (当前.当前词) {
                        break;
                    }
                    i--;
                    当前 = 当前.上个;
                }
                return { i, 词: 当前 && 当前.当前词 };
            }
        }
    }
}
let _最大值 = (Math.pow(2, 53) - 1) / 10000;
function 计算输入记录频率(使用次数) {
    return Math.min(使用次数 * 10000, _最大值);
}
function 筛选输入记录结果组(词组文本, 键组, 拼音, 是全拼 = false, 是简拼) {
    let 结果 = new Map();
    创建库内词组();
    if (是全拼) {
        if (结果.has(拼音)) {
            return 结果.get(拼音);
        }
        else {
            return;
        }
    }
    else if (结果.has("#1#")) {
        return 结果.get("#1#");
    }
    else {
        return;
    }
    function 创建库内词组() {
        for (let t of 词组文本) {
            let 词 = __2.创建对象();
            let 组 = t.split(":");
            词.拼音 = 组[0];
            词.文本 = 组[1];
            词.频率 = 计算输出频率(计算输入记录频率(+组[2]), 拼音, 组[0], 键组, 是简拼);
            let 键 = 是全拼 ? 词.拼音 : "#1#";
            if (结果.has(键)) {
                结果.get(键).push(词);
            }
            else {
                结果.set(键, [词]);
            }
        }
    }
}
function 筛选基本库结果(词组文本, 键组, 拼音, 是全拼 = false, 是简拼) {
    let 结果 = new Map();
    创建库内词组();
    if (是全拼) {
        if (结果.has(拼音)) {
            return 结果.get(拼音);
        }
        else {
            return;
        }
    }
    else if (结果.has("#1#")) {
        return 结果.get("#1#");
    }
    else {
        return;
    }
    function 创建库内词组() {
        for (let t of 词组文本) {
            let 词 = __2.创建对象();
            let 组 = t.split(":");
            词.拼音 = 组[0];
            词.文本 = 组[1];
            词.频率 = 计算输出频率(+组[2], 拼音, 组[0], 键组, 是简拼);
            let 键 = 是全拼 ? 词.拼音 : "#1#";
            if (结果.has(键)) {
                结果.get(键).push(词);
            }
            else {
                结果.set(键, [词]);
            }
        }
    }
}
function 计算输出频率(基数, 输入, 输出, 键组, 是简拼 = false) {
    let 值 = 1;
    if (是简拼) {
        return 基数;
    }
    if (输入 === 输出) {
        return Math.ceil(基数) * Math.pow(2, 16);
    }
    let a = 输入.split("'");
    let b = 输出.split("'");
    let 长度 = Math.min(a.length, b.length);
    for (let i = 0; i < 长度; i++) {
        if (a[i] === b[i] && a[i] !== 键组[i]) {
            值 += 8;
        }
    }
    if (a.length === b.length) {
        值 += 1;
    }
    值 = 值 > 30 ? 30 : 值;
    return 值 > 2 ? Math.ceil(基数) * Math.pow(2, 值) : Math.ceil(基数 * .1);
}
function* 分行读(文本) {
    let 文本组 = 文本.split("\r\n");
    for (let v of 文本组) {
        yield v;
    }
}
function 存入用户输出记录索引(文本) {
    更新用户输出索引(文本);
}
exports.存入用户输出记录索引 = 存入用户输出记录索引;
function 更新用户输出索引(词文本) {
    let 新词 = [];
    let 拼音组 = ______1.加载汉字拼音(词文本);
    if (拼音组) {
        if (拼音组.length === 1) {
            let 拼音 = 拼音组[0];
            let 拼音分组 = 拼音.split("'");
            let 简拼键组 = [];
            for (let i = 0; i < 拼音分组.length; i++) {
                简拼键组.push(__2.字首哈希(____1.取拼音索引简拼(拼音分组[i])));
            }
            更新数据(简拼键组, `${拼音}:${词文本}:${1}`);
        }
        else {
            拼音组.forEach(v => {
                let 拼音分组 = v.split("'");
                let 简拼键组 = [];
                for (let i = 0; i < 拼音分组.length; i++) {
                    简拼键组.push(__2.字首哈希(____1.取拼音索引简拼(拼音分组[i])));
                }
                更新数据(简拼键组, `${v}:${词文本}:${1}`);
            });
        }
    }
    function 更新数据(简拼键组, 加入文本) {
        let 存在 = 取输入记录原始数据(简拼键组);
        if (存在) {
            let 位置 = 存在.findIndex(vv => {
                let zu1 = vv.split(":");
                let zu2 = 加入文本.split(":");
                return zu1[0] + zu1[1] === zu2[0] + zu2[1];
            });
            if (位置 !== -1) {
                let 文本 = 存在[位置];
                let zu = 文本.split(":");
                存在[位置] = `${zu[0]}:${zu[1]}:${+zu[2] + 1}`;
            }
            else {
                存在.push(加入文本);
            }
        }
        else {
            按库插入节点(_输入记录库索引, 简拼键组, 加入文本);
        }
    }
}
function 取输入记录原始数据(简拼) {
    let 当前 = _输入记录库索引;
    for (let i = 0; i < 简拼.length; i++) {
        let 键 = 简拼[i];
        if (当前 && 当前.下个) {
            当前 = 当前.下个[键];
        }
        else {
            return;
        }
        if (i === 简拼.length - 1) {
            if (当前 && 当前.当前词) {
                return 当前.当前词;
            }
        }
    }
}
function 提取输入记录树数据() {
    let 数据 = [];
    function 深度遍历(节点) {
        if (节点 != null) {
            if (节点.当前词) {
                数据.push(...节点.当前词);
            }
            let 子节点 = 节点.下个;
            for (let 子键 in 子节点) {
                深度遍历(子节点[子键]);
            }
        }
    }
    深度遍历(_输入记录库索引);
    return 数据;
}
function 保存输入记录() {
    let 数据 = 提取输入记录树数据();
    let 词典路径 = __1.系统.解析路径("../lib/输入记录/输入记录.utf8");
    ______1.词典排序(词典路径, 数据.join(__1.系统.新行));
}
exports.保存输入记录 = 保存输入记录;
function 按库插入节点(根节点, 键, 值) {
    let 当前节点 = 根节点;
    for (let i = 0; i < 键.length; i++) {
        let 当前 = 键[i];
        if (!当前节点.下个) {
            当前节点.下个 = new Array();
        }
        if (!当前节点.下个[当前]) {
            let 下个节点 = __2.创建对象();
            当前节点.下个[当前] = 下个节点;
            let 临时 = 当前节点;
            当前节点 = 下个节点;
            当前节点.上个 = 临时;
        }
        else {
            当前节点 = 当前节点.下个[当前];
        }
    }
    (当前节点.当前词 || (当前节点.当前词 = [])).push(值);
}
