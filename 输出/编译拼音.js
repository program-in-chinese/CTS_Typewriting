"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <引用 路径="../node_modules/@types/支持库/index.d.cts"/>
const __1 = require("./\u6838\u5FC3");
const __2 = require("./\u5DE5\u5177");
var Py;
(function (Py) {
    Py[Py["nullCharacter"] = 0] = "nullCharacter";
    Py[Py["_0"] = 48] = "_0";
    Py[Py["_1"] = 49] = "_1";
    Py[Py["_2"] = 50] = "_2";
    Py[Py["_3"] = 51] = "_3";
    Py[Py["_4"] = 52] = "_4";
    Py[Py["_5"] = 53] = "_5";
    Py[Py["_6"] = 54] = "_6";
    Py[Py["_7"] = 55] = "_7";
    Py[Py["_8"] = 56] = "_8";
    Py[Py["_9"] = 57] = "_9";
    Py[Py["a"] = 97] = "a";
    Py[Py["a1"] = 257] = "a1";
    Py[Py["a2"] = 225] = "a2";
    Py[Py["a3"] = 462] = "a3";
    Py[Py["a4"] = 224] = "a4";
    Py[Py["b"] = 98] = "b";
    Py[Py["c"] = 99] = "c";
    Py[Py["d"] = 100] = "d";
    Py[Py["e"] = 101] = "e";
    Py[Py["e1"] = 275] = "e1";
    Py[Py["e2"] = 233] = "e2";
    Py[Py["e3"] = 283] = "e3";
    Py[Py["e4"] = 232] = "e4";
    Py[Py["f"] = 102] = "f";
    Py[Py["g"] = 103] = "g";
    Py[Py["h"] = 104] = "h";
    Py[Py["i"] = 105] = "i";
    Py[Py["i1"] = 299] = "i1";
    Py[Py["i2"] = 237] = "i2";
    Py[Py["i3"] = 464] = "i3";
    Py[Py["i4"] = 236] = "i4";
    Py[Py["j"] = 106] = "j";
    Py[Py["k"] = 107] = "k";
    Py[Py["l"] = 108] = "l";
    Py[Py["m"] = 109] = "m";
    Py[Py["n"] = 110] = "n";
    Py[Py["o"] = 111] = "o";
    Py[Py["o1"] = 333] = "o1";
    Py[Py["o2"] = 243] = "o2";
    Py[Py["o3"] = 466] = "o3";
    Py[Py["o4"] = 242] = "o4";
    Py[Py["p"] = 112] = "p";
    Py[Py["q"] = 113] = "q";
    Py[Py["r"] = 114] = "r";
    Py[Py["s"] = 115] = "s";
    Py[Py["t"] = 116] = "t";
    Py[Py["u"] = 117] = "u";
    Py[Py["u1"] = 363] = "u1";
    Py[Py["u2"] = 250] = "u2";
    Py[Py["u3"] = 468] = "u3";
    Py[Py["u4"] = 249] = "u4";
    Py[Py["v"] = 118] = "v";
    Py[Py["v0"] = 252] = "v0";
    Py[Py["v1"] = 470] = "v1";
    Py[Py["v2"] = 472] = "v2";
    Py[Py["v3"] = 474] = "v3";
    Py[Py["v4"] = 476] = "v4";
    Py[Py["w"] = 119] = "w";
    Py[Py["x"] = 120] = "x";
    Py[Py["y"] = 121] = "y";
    Py[Py["z"] = 122] = "z";
    Py[Py["\u9017\u53F7"] = 44] = "\u9017\u53F7";
    Py[Py["\u5355\u5F15\u53F7"] = 39] = "\u5355\u5F15\u53F7";
})(Py = exports.Py || (exports.Py = {}));
var PY标记;
(function (PY标记) {
    PY标记[PY标记["\u7ED3\u5C3E"] = 0] = "\u7ED3\u5C3E";
    PY标记[PY标记["\u5355\u5F15\u53F7"] = 1] = "\u5355\u5F15\u53F7";
    PY标记[PY标记["\u9017\u53F7"] = 2] = "\u9017\u53F7";
    PY标记[PY标记["\u58F0\u6BCD_b"] = 3] = "\u58F0\u6BCD_b";
    PY标记[PY标记["\u58F0\u6BCD_p"] = 4] = "\u58F0\u6BCD_p";
    PY标记[PY标记["\u58F0\u6BCD_m"] = 5] = "\u58F0\u6BCD_m";
    PY标记[PY标记["\u58F0\u6BCD_f"] = 6] = "\u58F0\u6BCD_f";
    PY标记[PY标记["\u58F0\u6BCD_d"] = 7] = "\u58F0\u6BCD_d";
    PY标记[PY标记["\u58F0\u6BCD_t"] = 8] = "\u58F0\u6BCD_t";
    PY标记[PY标记["\u58F0\u6BCD_n"] = 9] = "\u58F0\u6BCD_n";
    PY标记[PY标记["\u58F0\u6BCD_l"] = 10] = "\u58F0\u6BCD_l";
    PY标记[PY标记["\u58F0\u6BCD_g"] = 11] = "\u58F0\u6BCD_g";
    PY标记[PY标记["\u58F0\u6BCD_k"] = 12] = "\u58F0\u6BCD_k";
    PY标记[PY标记["\u58F0\u6BCD_h"] = 13] = "\u58F0\u6BCD_h";
    PY标记[PY标记["\u58F0\u6BCD_j"] = 14] = "\u58F0\u6BCD_j";
    PY标记[PY标记["\u58F0\u6BCD_q"] = 15] = "\u58F0\u6BCD_q";
    PY标记[PY标记["\u58F0\u6BCD_x"] = 16] = "\u58F0\u6BCD_x";
    PY标记[PY标记["\u58F0\u6BCD_r"] = 17] = "\u58F0\u6BCD_r";
    PY标记[PY标记["\u58F0\u6BCD_z"] = 18] = "\u58F0\u6BCD_z";
    PY标记[PY标记["\u58F0\u6BCD_c"] = 19] = "\u58F0\u6BCD_c";
    PY标记[PY标记["\u58F0\u6BCD_s"] = 20] = "\u58F0\u6BCD_s";
    PY标记[PY标记["\u58F0\u6BCD_y"] = 21] = "\u58F0\u6BCD_y";
    PY标记[PY标记["\u58F0\u6BCD_w"] = 22] = "\u58F0\u6BCD_w";
    PY标记[PY标记["\u58F0\u6BCD_zh"] = 23] = "\u58F0\u6BCD_zh";
    PY标记[PY标记["\u58F0\u6BCD_ch"] = 24] = "\u58F0\u6BCD_ch";
    PY标记[PY标记["\u58F0\u6BCD_sh"] = 25] = "\u58F0\u6BCD_sh";
    PY标记[PY标记["\u97F5\u6BCD_a"] = 26] = "\u97F5\u6BCD_a";
    PY标记[PY标记["\u97F5\u6BCD_o"] = 27] = "\u97F5\u6BCD_o";
    PY标记[PY标记["\u97F5\u6BCD_e"] = 28] = "\u97F5\u6BCD_e";
    PY标记[PY标记["\u97F5\u6BCD_i"] = 29] = "\u97F5\u6BCD_i";
    PY标记[PY标记["\u97F5\u6BCD_u"] = 30] = "\u97F5\u6BCD_u";
    PY标记[PY标记["\u97F5\u6BCD_v"] = 31] = "\u97F5\u6BCD_v";
    PY标记[PY标记["\u97F5\u6BCD_an"] = 32] = "\u97F5\u6BCD_an";
    PY标记[PY标记["\u97F5\u6BCD_en"] = 33] = "\u97F5\u6BCD_en";
    PY标记[PY标记["\u97F5\u6BCD_vn"] = 34] = "\u97F5\u6BCD_vn";
    PY标记[PY标记["\u97F5\u6BCD_in"] = 35] = "\u97F5\u6BCD_in";
    PY标记[PY标记["\u97F5\u6BCD_un"] = 36] = "\u97F5\u6BCD_un";
    PY标记[PY标记["\u97F5\u6BCD_ao"] = 37] = "\u97F5\u6BCD_ao";
    PY标记[PY标记["\u97F5\u6BCD_ou"] = 38] = "\u97F5\u6BCD_ou";
    PY标记[PY标记["\u97F5\u6BCD_iu"] = 39] = "\u97F5\u6BCD_iu";
    PY标记[PY标记["\u97F5\u6BCD_ai"] = 40] = "\u97F5\u6BCD_ai";
    PY标记[PY标记["\u97F5\u6BCD_ei"] = 41] = "\u97F5\u6BCD_ei";
    PY标记[PY标记["\u97F5\u6BCD_ui"] = 42] = "\u97F5\u6BCD_ui";
    PY标记[PY标记["\u97F5\u6BCD_ie"] = 43] = "\u97F5\u6BCD_ie";
    PY标记[PY标记["\u97F5\u6BCD_ue"] = 44] = "\u97F5\u6BCD_ue";
    PY标记[PY标记["\u97F5\u6BCD_ve"] = 45] = "\u97F5\u6BCD_ve";
    PY标记[PY标记["\u97F5\u6BCD_er"] = 46] = "\u97F5\u6BCD_er";
    PY标记[PY标记["\u97F5\u6BCD_ang"] = 47] = "\u97F5\u6BCD_ang";
    PY标记[PY标记["\u97F5\u6BCD_eng"] = 48] = "\u97F5\u6BCD_eng";
    PY标记[PY标记["\u97F5\u6BCD_ing"] = 49] = "\u97F5\u6BCD_ing";
    PY标记[PY标记["\u97F5\u6BCD_ong"] = 50] = "\u97F5\u6BCD_ong";
})(PY标记 = exports.PY标记 || (exports.PY标记 = {}));
function 转为文本(标记) {
    return exports.标记转文本[标记];
}
exports.转为文本 = 转为文本;
exports.拼音正则 = /^[bpmfdtnlgkhjqxzcsrywaāáǎàoōóǒòeēéěèiīíǐìuūúǔùǖǘǚǜüv']+$/;
function 是拼音字符串(参数) {
    return exports.拼音正则.test(参数);
}
exports.是拼音字符串 = 是拼音字符串;
function 取拼音组拼音(拼音组) {
    let 结果 = [];
    if (!拼音组 || !拼音组.length) {
        return "";
    }
    拼音组.forEach(v => {
        结果.push(v.文本);
    });
    if (结果.length > 0) {
        return 结果.join("'");
    }
    return "";
}
exports.取拼音组拼音 = 取拼音组拼音;
function 取全拼索引(拼音组) {
    let 结果 = [];
    if (!拼音组 || !拼音组.length) {
        return [];
    }
    拼音组.forEach(v => {
        结果.push(v.文本);
    });
    if (结果.length > 0) {
        return 结果;
    }
    return [];
}
exports.取全拼索引 = 取全拼索引;
function 取拼音组拼音去重(拼音组) {
    let 结果 = "";
    if (!拼音组 || !拼音组.length) {
        return 结果;
    }
    拼音组.forEach(v => {
        if (结果.indexOf(v.文本) === -1)
            结果 += "'" + v.文本;
    });
    return 结果.substr(1);
}
exports.取拼音组拼音去重 = 取拼音组拼音去重;
function 是韵母(p) {
    switch (p.标记) {
        case PY标记.韵母_a:
        case PY标记.韵母_o:
        case PY标记.韵母_e:
        case PY标记.韵母_i:
        case PY标记.韵母_u:
        case PY标记.韵母_v:
        case PY标记.韵母_ai:
        case PY标记.韵母_ei:
        case PY标记.韵母_ui:
        case PY标记.韵母_ao:
        case PY标记.韵母_ou:
        case PY标记.韵母_an:
        case PY标记.韵母_en:
        case PY标记.韵母_in:
        case PY标记.韵母_ie:
        case PY标记.韵母_ue:
        case PY标记.韵母_iu:
        case PY标记.韵母_ve:
        case PY标记.韵母_er:
        case PY标记.韵母_un:
        case PY标记.韵母_vn:
        case PY标记.韵母_ang:
        case PY标记.韵母_eng:
        case PY标记.韵母_ing:
        case PY标记.韵母_ong:
            return true;
        default:
            return false;
    }
}
exports.是韵母 = 是韵母;
function 是声母(p) {
    switch (p.标记) {
        case PY标记.声母_b:
        case PY标记.声母_p:
        case PY标记.声母_m:
        case PY标记.声母_f:
        case PY标记.声母_d:
        case PY标记.声母_t:
        case PY标记.声母_n:
        case PY标记.声母_l:
        case PY标记.声母_g:
        case PY标记.声母_k:
        case PY标记.声母_h:
        case PY标记.声母_j:
        case PY标记.声母_q:
        case PY标记.声母_x:
        case PY标记.声母_zh:
        case PY标记.声母_ch:
        case PY标记.声母_sh:
        case PY标记.声母_r:
        case PY标记.声母_z:
        case PY标记.声母_c:
        case PY标记.声母_s:
        case PY标记.声母_y:
        case PY标记.声母_w:
            return true;
        default:
            return false;
    }
}
exports.是声母 = 是声母;
function 是声母双拼韵母(p1, p2) {
    switch (p1.标记) {
        case PY标记.声母_b:
            return 是声母b双拼韵母(p2);
        case PY标记.声母_p:
            return 是声母p双拼韵母(p2);
        case PY标记.声母_m:
            return 是声母m双拼韵母(p2);
        case PY标记.声母_f:
            return 是声母f双拼韵母(p2);
        case PY标记.声母_d:
            return 是声母d双拼韵母(p2);
        case PY标记.声母_t:
            return 是声母t双拼韵母(p2);
        case PY标记.声母_n:
            return 是声母n双拼韵母(p2);
        case PY标记.声母_l:
            return 是声母l双拼韵母(p2);
        case PY标记.声母_g:
            return 是声母g双拼韵母(p2);
        case PY标记.声母_k:
            return 是声母k双拼韵母(p2);
        case PY标记.声母_h:
            return 是声母h双拼韵母(p2);
        case PY标记.声母_j:
            return 是声母j双拼韵母(p2);
        case PY标记.声母_q:
            return 是声母q双拼韵母(p2);
        case PY标记.声母_x:
            return 是声母x双拼韵母(p2);
        case PY标记.声母_zh:
            return 是声母zh双拼韵母(p2);
        case PY标记.声母_ch:
            return 是声母ch双拼韵母(p2);
        case PY标记.声母_sh:
            return 是声母sh双拼韵母(p2);
        case PY标记.声母_r:
            return 是声母r双拼韵母(p2);
        case PY标记.声母_z:
            return 是声母z双拼韵母(p2);
        case PY标记.声母_c:
            return 是声母c双拼韵母(p2);
        case PY标记.声母_s:
            return 是声母s双拼韵母(p2);
        case PY标记.声母_y:
            return 是声母y双拼韵母(p2);
        case PY标记.声母_w:
            return 是声母w双拼韵母(p2);
        default:
            return false;
    }
}
exports.是声母双拼韵母 = 是声母双拼韵母;
function 是声母三拼韵母(p1, ps2) {
    switch (p1.标记) {
        case PY标记.声母_b:
            return 是声母b三拼韵母(ps2);
        case PY标记.声母_p:
            return 是声母p三拼韵母(ps2);
        case PY标记.声母_m:
            return 是声母m三拼韵母(ps2);
        case PY标记.声母_f:
            return false;
        case PY标记.声母_d:
            return 是声母d三拼韵母(ps2);
        case PY标记.声母_t:
            return 是声母t三拼韵母(ps2);
        case PY标记.声母_n:
            return 是声母n三拼韵母(ps2);
        case PY标记.声母_l:
            return 是声母l三拼韵母(ps2);
        case PY标记.声母_g:
            return 是声母g三拼韵母(ps2);
        case PY标记.声母_k:
            return 是声母g三拼韵母(ps2);
        case PY标记.声母_h:
            return 是声母h三拼韵母(ps2);
        case PY标记.声母_j:
            return 是声母j三拼韵母(ps2);
        case PY标记.声母_q:
            return 是声母q三拼韵母(ps2);
        case PY标记.声母_x:
            return 是声母x三拼韵母(ps2);
        case PY标记.声母_zh:
            return 是声母zh三拼韵母(ps2);
        case PY标记.声母_ch:
            return 是声母ch三拼韵母(ps2);
        case PY标记.声母_sh:
            return 是声母sh三拼韵母(ps2);
        case PY标记.声母_r:
            return 是声母r三拼韵母(ps2);
        case PY标记.声母_z:
            return 是声母z三拼韵母(ps2);
        case PY标记.声母_c:
            return 是声母c三拼韵母(ps2);
        case PY标记.声母_s:
            return 是声母s三拼韵母(ps2);
        case PY标记.声母_y:
            return 是声母y三拼韵母(ps2);
        case PY标记.声母_w:
            return false;
        default:
            return false;
    }
}
exports.是声母三拼韵母 = 是声母三拼韵母;
function 是三拼无音韵母(p) {
    return p.标记 === PY标记.韵母_i || p.标记 === PY标记.韵母_u;
}
exports.是三拼无音韵母 = 是三拼无音韵母;
function 是三拼韵母(p) {
    switch (p.标记) {
        case PY标记.韵母_a:
        case PY标记.韵母_an:
        case PY标记.韵母_ai:
        case PY标记.韵母_ao:
        case PY标记.韵母_ang:
        case PY标记.韵母_o:
        case PY标记.韵母_e:
        case PY标记.韵母_ong:
            return true;
        default:
            return false;
    }
}
exports.是三拼韵母 = 是三拼韵母;
function 是声母b(p) {
    return p.标记 === PY标记.声母_b;
}
exports.是声母b = 是声母b;
function 是声母b双拼韵母(p) {
    switch (p.标记) {
        //韵母_a | 韵母_ai | 韵母_an | 韵母_ang | 韵母_ao | 韵母_ei | 韵母_en | 韵母_eng | 韵母_i | 韵母_ie | 韵母_in | 韵母_ing | 韵母_o | 韵母_u
        case PY标记.韵母_a:
        case PY标记.韵母_ai:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ao:
        case PY标记.韵母_ei:
        case PY标记.韵母_en:
        case PY标记.韵母_eng:
        case PY标记.韵母_i:
        case PY标记.韵母_ie:
        case PY标记.韵母_in:
        case PY标记.韵母_ing:
        case PY标记.韵母_o:
        case PY标记.韵母_u:
            return true;
        default:
            return false;
    }
}
exports.是声母b双拼韵母 = 是声母b双拼韵母;
function 是声母b三拼韵母(p) {
    return p[0].标记 === PY标记.韵母_i && (p[1].标记 === PY标记.韵母_an || p[1].标记 === PY标记.韵母_ao);
}
exports.是声母b三拼韵母 = 是声母b三拼韵母;
function 是声母p(p) {
    return p.标记 === PY标记.声母_p;
}
exports.是声母p = 是声母p;
function 是声母p双拼韵母(p) {
    switch (p.标记) {
        // 韵母_a | 韵母_ai | 韵母_an | 韵母_ang | 韵母_ao | 韵母_ei | 韵母_en | 韵母_eng | 韵母_i | 韵母_ie | 韵母_in | 韵母_ing | 韵母_o | 韵母_ou | 韵母_u
        case PY标记.韵母_a:
        case PY标记.韵母_ai:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ao:
        case PY标记.韵母_ei:
        case PY标记.韵母_en:
        case PY标记.韵母_eng:
        case PY标记.韵母_i:
        case PY标记.韵母_ie:
        case PY标记.韵母_in:
        case PY标记.韵母_ing:
        case PY标记.韵母_o:
        case PY标记.韵母_ou:
        case PY标记.韵母_u:
            return true;
        default:
            return false;
    }
}
exports.是声母p双拼韵母 = 是声母p双拼韵母;
function 是声母p三拼韵母(p) {
    return 是声母b三拼韵母(p);
}
exports.是声母p三拼韵母 = 是声母p三拼韵母;
function 是声母m(p) {
    return p.标记 === PY标记.声母_m;
}
exports.是声母m = 是声母m;
function 是声母m双拼韵母(p) {
    switch (p.标记) {
        //  韵母_a | 韵母_ai | 韵母_an | 韵母_ang | 韵母_ao | 韵母_e | 韵母_ei | 韵母_en | 韵母_eng | 韵母_i | 韵母_ie | 韵母_in | 韵母_ing | 韵母_iu | 韵母_o | 韵母_ou | 韵母_u
        case PY标记.韵母_a:
        case PY标记.韵母_ai:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ao:
        case PY标记.韵母_e:
        case PY标记.韵母_ei:
        case PY标记.韵母_en:
        case PY标记.韵母_eng:
        case PY标记.韵母_i:
        case PY标记.韵母_ie:
        case PY标记.韵母_in:
        case PY标记.韵母_ing:
        case PY标记.韵母_iu:
        case PY标记.韵母_o:
        case PY标记.韵母_ou:
        case PY标记.韵母_u:
            return true;
        default:
            return false;
    }
}
exports.是声母m双拼韵母 = 是声母m双拼韵母;
function 是声母m三拼韵母(p) {
    return 是声母b三拼韵母(p);
}
exports.是声母m三拼韵母 = 是声母m三拼韵母;
function 是声母f(p) {
    return p.标记 === PY标记.声母_f;
}
exports.是声母f = 是声母f;
function 是声母f双拼韵母(p) {
    switch (p.标记) {
        //  韵母_a | 韵母_an | 韵母_ang | 韵母_ei | 韵母_en | 韵母_eng | 韵母_o | 韵母_ou | 韵母_u
        case PY标记.韵母_a:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ei:
        case PY标记.韵母_en:
        case PY标记.韵母_eng:
        case PY标记.韵母_o:
        case PY标记.韵母_ou:
        case PY标记.韵母_u:
            return true;
        default:
            return false;
    }
}
exports.是声母f双拼韵母 = 是声母f双拼韵母;
function 是声母d(p) {
    return p.标记 === PY标记.声母_d;
}
exports.是声母d = 是声母d;
function 是声母d双拼韵母(p) {
    switch (p.标记) {
        //  韵母_a | 韵母_ai | 韵母_an | 韵母_ang | 韵母_ao | 韵母_e | 韵母_ei | 韵母_en | 韵母_eng | 韵母_i | 韵母_ie | 韵母_ing | 韵母_iu | 韵母_ong | 韵母_ou | 韵母_u | 韵母_ui | 韵母_un
        case PY标记.韵母_a:
        case PY标记.韵母_ai:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ao:
        case PY标记.韵母_e:
        case PY标记.韵母_ei:
        case PY标记.韵母_en:
        case PY标记.韵母_eng:
        case PY标记.韵母_i:
        case PY标记.韵母_ie:
        case PY标记.韵母_ing:
        case PY标记.韵母_iu:
        case PY标记.韵母_ou:
        case PY标记.韵母_ong:
        case PY标记.韵母_u:
        case PY标记.韵母_ui:
        case PY标记.韵母_un:
            return true;
        default:
            return false;
    }
}
exports.是声母d双拼韵母 = 是声母d双拼韵母;
function 是声母d三拼韵母(p) {
    return 是声母b三拼韵母(p) || p[0].标记 == PY标记.韵母_u && (p[1].标记 === PY标记.韵母_o || p[1].标记 === PY标记.韵母_an);
}
exports.是声母d三拼韵母 = 是声母d三拼韵母;
function 是声母t(p) {
    return p.标记 === PY标记.声母_t;
}
exports.是声母t = 是声母t;
function 是声母t双拼韵母(p) {
    switch (p.标记) {
        //  韵母_a | 韵母_ai | 韵母_an | 韵母_ang | 韵母_ao | 韵母_e | 韵母_eng | 韵母_i | 韵母_ie | 韵母_ing | 韵母_ong | 韵母_ou | 韵母_u | 韵母_ui | 韵母_un
        case PY标记.韵母_a:
        case PY标记.韵母_ai:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ao:
        case PY标记.韵母_e:
        case PY标记.韵母_eng:
        case PY标记.韵母_i:
        case PY标记.韵母_ie:
        case PY标记.韵母_ing:
        case PY标记.韵母_ou:
        case PY标记.韵母_ong:
        case PY标记.韵母_u:
        case PY标记.韵母_ui:
        case PY标记.韵母_un:
            return true;
        default:
            return false;
    }
}
exports.是声母t双拼韵母 = 是声母t双拼韵母;
function 是声母t三拼韵母(p) {
    return 是声母d三拼韵母(p);
}
exports.是声母t三拼韵母 = 是声母t三拼韵母;
function 是声母n(p) {
    return p.标记 === PY标记.声母_n;
}
exports.是声母n = 是声母n;
function 是声母n双拼韵母(p) {
    switch (p.标记) {
        //   韵母_a | 韵母_ai | 韵母_an | 韵母_ang | 韵母_ao | 韵母_e | 韵母_ei| 韵母_i | 韵母_en | 韵母_eng 
        // | 韵母_ing | 韵母_ie | 韵母_in | 韵母_iu | 韵母_ong | 韵母_ou | 韵母_u | 韵母_v | 韵母_ve | 韵母_ue | 韵母_un
        case PY标记.韵母_a:
        case PY标记.韵母_ai:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ao:
        case PY标记.韵母_e:
        case PY标记.韵母_ei:
        case PY标记.韵母_en:
        case PY标记.韵母_eng:
        case PY标记.韵母_i:
        case PY标记.韵母_ie:
        case PY标记.韵母_in:
        case PY标记.韵母_iu:
        case PY标记.韵母_ing:
        case PY标记.韵母_ou:
        case PY标记.韵母_ong:
        case PY标记.韵母_v:
        case PY标记.韵母_ve:
        case PY标记.韵母_u:
        case PY标记.韵母_ue:
        case PY标记.韵母_un:
            return true;
        default:
            return false;
    }
}
exports.是声母n双拼韵母 = 是声母n双拼韵母;
function 是声母n三拼韵母(p) {
    // [韵母_i, 韵母_an] | [韵母_i, 韵母_ang] | [韵母_i, 韵母_ao] | [韵母_u, 韵母_an] | [韵母_u, 韵母_o]
    return (p[0].标记 === PY标记.韵母_i && (p[1].标记 === PY标记.韵母_an || p[1].标记 === PY标记.韵母_ang || p[1].标记 === PY标记.韵母_ao)) || (p[0].标记 === PY标记.韵母_u && (p[1].标记 === PY标记.韵母_an || p[1].标记 === PY标记.韵母_o));
}
exports.是声母n三拼韵母 = 是声母n三拼韵母;
function 是声母l(p) {
    return p.标记 === PY标记.声母_l;
}
exports.是声母l = 是声母l;
function 是声母l双拼韵母(p) {
    switch (p.标记) {
        // 韵母_a | 韵母_ai | 韵母_an | 韵母_ang | 韵母_ao | 韵母_e | 韵母_ei | 韵母_eng 
        // | 韵母_i | 韵母_ie | 韵母_in | 韵母_ing | 韵母_iu | 韵母_ong | 韵母_ou | 韵母_u | 韵母_v | 韵母_ve | 韵母_ue | 韵母_un
        case PY标记.韵母_a:
        case PY标记.韵母_ai:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ao:
        case PY标记.韵母_e:
        case PY标记.韵母_ei:
        case PY标记.韵母_eng:
        case PY标记.韵母_i:
        case PY标记.韵母_ie:
        case PY标记.韵母_in:
        case PY标记.韵母_iu:
        case PY标记.韵母_ing:
        case PY标记.韵母_ou:
        case PY标记.韵母_ong:
        case PY标记.韵母_v:
        case PY标记.韵母_ve:
        case PY标记.韵母_u:
        case PY标记.韵母_ue:
        case PY标记.韵母_un:
            return true;
        default:
            return false;
    }
}
exports.是声母l双拼韵母 = 是声母l双拼韵母;
function 是声母l三拼韵母(p) {
    // [韵母_i, 韵母_a] | [韵母_i, 韵母_an] | [韵母_i, 韵母_ang] | [韵母_i, 韵母_ao] | [韵母_u, 韵母_an] | [韵母_u, 韵母_e] | [韵母_u, 韵母_o]
    return (p[0].标记 === PY标记.韵母_i && (p[1].标记 === PY标记.韵母_an || p[1].标记 === PY标记.韵母_ang || p[1].标记 === PY标记.韵母_ao))
        || (p[0].标记 === PY标记.韵母_u && (p[1].标记 === PY标记.韵母_an || p[1].标记 === PY标记.韵母_e || p[1].标记 === PY标记.韵母_o));
}
exports.是声母l三拼韵母 = 是声母l三拼韵母;
function 是声母g(p) {
    return p.标记 === PY标记.声母_g;
}
exports.是声母g = 是声母g;
function 是声母g双拼韵母(p) {
    switch (p.标记) {
        //  韵母_a | 韵母_ai | 韵母_an | 韵母_ang | 韵母_ao | 韵母_e | 韵母_ei | 韵母_en | 韵母_eng 
        // | 韵母_ong | 韵母_ou | 韵母_u | 韵母_ui | 韵母_un 
        case PY标记.韵母_a:
        case PY标记.韵母_ai:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ao:
        case PY标记.韵母_e:
        case PY标记.韵母_ei:
        case PY标记.韵母_en:
        case PY标记.韵母_eng:
        case PY标记.韵母_ou:
        case PY标记.韵母_ong:
        case PY标记.韵母_u:
        case PY标记.韵母_ui:
        case PY标记.韵母_un:
            return true;
        default:
            return false;
    }
}
exports.是声母g双拼韵母 = 是声母g双拼韵母;
function 是声母g三拼韵母(p) {
    //[韵母_u, 韵母_a] | [韵母_u, 韵母_ai] | [韵母_u, 韵母_an] | [韵母_u, 韵母_ang] | [韵母_u, 韵母_o]
    return (p[0].标记 === PY标记.韵母_u &&
        (p[1].标记 === PY标记.韵母_a || p[1].标记 === PY标记.韵母_ai || p[1].标记 === PY标记.韵母_an || p[1].标记 === PY标记.韵母_ang || p[1].标记 === PY标记.韵母_o));
}
exports.是声母g三拼韵母 = 是声母g三拼韵母;
function 是声母k(p) {
    return p.标记 === PY标记.声母_k;
}
exports.是声母k = 是声母k;
function 是声母k双拼韵母(p) {
    switch (p.标记) {
        //  韵母_a | 韵母_ai | 韵母_an | 韵母_ang | 韵母_ao | 韵母_e | 韵母_en | 韵母_eng | 韵母_ong | 韵母_ou | 韵母_u | 韵母_ui | 韵母_un
        case PY标记.韵母_a:
        case PY标记.韵母_ai:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ao:
        case PY标记.韵母_e:
        case PY标记.韵母_ei:
        case PY标记.韵母_en:
        case PY标记.韵母_eng:
        case PY标记.韵母_ou:
        case PY标记.韵母_ong:
        case PY标记.韵母_u:
        case PY标记.韵母_ui:
        case PY标记.韵母_un:
            return true;
        default:
            return false;
    }
}
exports.是声母k双拼韵母 = 是声母k双拼韵母;
function 是声母k三拼韵母(p) {
    return 是声母g三拼韵母(p);
}
exports.是声母k三拼韵母 = 是声母k三拼韵母;
function 是声母h(p) {
    return p.标记 === PY标记.声母_h;
}
exports.是声母h = 是声母h;
function 是声母h双拼韵母(p) {
    return 是声母g双拼韵母(p);
}
exports.是声母h双拼韵母 = 是声母h双拼韵母;
function 是声母h三拼韵母(p) {
    return 是声母g三拼韵母(p);
}
exports.是声母h三拼韵母 = 是声母h三拼韵母;
function 是声母j(p) {
    return p.标记 === PY标记.声母_j;
}
exports.是声母j = 是声母j;
function 是声母j双拼韵母(p) {
    switch (p.标记) {
        //   韵母_i | 韵母_ie | 韵母_in | 韵母_ing | 韵母_iu | 韵母_u | 韵母_un | 韵母_ue
        case PY标记.韵母_i:
        case PY标记.韵母_ie:
        case PY标记.韵母_in:
        case PY标记.韵母_iu:
        case PY标记.韵母_ing:
        case PY标记.韵母_u:
        case PY标记.韵母_ue:
        case PY标记.韵母_un:
            return true;
        default:
            return false;
    }
}
exports.是声母j双拼韵母 = 是声母j双拼韵母;
function 是声母j三拼韵母(p) {
    // [韵母_i, 韵母_a] | [韵母_i, 韵母_ai] | [韵母_i, 韵母_an] | [韵母_i, 韵母_ang] | [韵母_i, 韵母_ong] | [韵母_u, 韵母_an] | [韵母_u, 韵母_e]
    return p[0].标记 === PY标记.韵母_i && (p[1].标记 === PY标记.韵母_a || p[1].标记 === PY标记.韵母_ai || p[1].标记 === PY标记.韵母_an || p[1].标记 === PY标记.韵母_ao || p[1].标记 === PY标记.韵母_ang || p[1].标记 === PY标记.韵母_ong)
        || p[0].标记 === PY标记.韵母_u && (p[1].标记 === PY标记.韵母_an);
}
exports.是声母j三拼韵母 = 是声母j三拼韵母;
function 是声母q(p) {
    return p.标记 === PY标记.声母_q;
}
exports.是声母q = 是声母q;
function 是声母q双拼韵母(p) {
    return 是声母j双拼韵母(p);
}
exports.是声母q双拼韵母 = 是声母q双拼韵母;
function 是声母q三拼韵母(p) {
    return 是声母j三拼韵母(p);
}
exports.是声母q三拼韵母 = 是声母q三拼韵母;
function 是声母x(p) {
    return p.标记 === PY标记.声母_x;
}
exports.是声母x = 是声母x;
function 是声母x双拼韵母(p) {
    return 是声母j双拼韵母(p);
}
exports.是声母x双拼韵母 = 是声母x双拼韵母;
function 是声母x三拼韵母(p) {
    return 是声母j三拼韵母(p);
}
exports.是声母x三拼韵母 = 是声母x三拼韵母;
function 是声母zh(p) {
    return p.标记 === PY标记.声母_zh;
}
exports.是声母zh = 是声母zh;
function 是声母zh双拼韵母(p) {
    switch (p.标记) {
        // 韵母_a | 韵母_ai | 韵母_an | 韵母_ang | 韵母_ao | 韵母_e | 韵母_ei | 韵母_en | 韵母_eng | 韵母_i | 韵母_ong | 韵母_ou | 韵母_u | 韵母_ui | 韵母_un
        case PY标记.韵母_a:
        case PY标记.韵母_ai:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ao:
        case PY标记.韵母_e:
        case PY标记.韵母_ei:
        case PY标记.韵母_en:
        case PY标记.韵母_eng:
        case PY标记.韵母_i:
        case PY标记.韵母_iu:
        case PY标记.韵母_ou:
        case PY标记.韵母_ong:
        case PY标记.韵母_u:
        case PY标记.韵母_ui:
        case PY标记.韵母_un:
            return true;
        default:
            return false;
    }
}
exports.是声母zh双拼韵母 = 是声母zh双拼韵母;
function 是声母zh三拼韵母(p) {
    // [韵母_u, 韵母_a] | [韵母_u, 韵母_ai] | [韵母_u, 韵母_an] | [韵母_u, 韵母_ang] | [韵母_u, 韵母_o]
    return (p[0].标记 === PY标记.韵母_u && (p[1].标记 === PY标记.韵母_a || p[1].标记 === PY标记.韵母_o || p[1].标记 === PY标记.韵母_ai || p[1].标记 === PY标记.韵母_an || p[1].标记 === PY标记.韵母_ang));
}
exports.是声母zh三拼韵母 = 是声母zh三拼韵母;
function 是声母ch(p) {
    return p.标记 === PY标记.声母_ch;
}
exports.是声母ch = 是声母ch;
function 是声母ch双拼韵母(p) {
    return 是声母r双拼韵母(p) || p.标记 === PY标记.韵母_a || p.标记 === PY标记.韵母_ai;
}
exports.是声母ch双拼韵母 = 是声母ch双拼韵母;
function 是声母ch三拼韵母(p) {
    // [韵母_u, 韵母_a] | [韵母_u, 韵母_ai] | [韵母_u, 韵母_an] | [韵母_i, 韵母_ang] | [韵母_u, 韵母_o]
    return 是声母zh三拼韵母(p);
}
exports.是声母ch三拼韵母 = 是声母ch三拼韵母;
function 是声母sh(p) {
    return p.标记 === PY标记.声母_sh;
}
exports.是声母sh = 是声母sh;
function 是声母sh双拼韵母(p) {
    switch (p.标记) {
        //韵母_a | 韵母_ai | 韵母_an | 韵母_ang | 韵母_ao | 韵母_e | 韵母_ei | 韵母_en | 韵母_eng | 韵母_i | 韵母_ou | 韵母_u | 韵母_ui | 韵母_un
        case PY标记.韵母_a:
        case PY标记.韵母_ai:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ao:
        case PY标记.韵母_e:
        case PY标记.韵母_ei:
        case PY标记.韵母_en:
        case PY标记.韵母_eng:
        case PY标记.韵母_i:
        case PY标记.韵母_ou:
        case PY标记.韵母_u:
        case PY标记.韵母_ui:
        case PY标记.韵母_un:
            return true;
        default:
            return false;
    }
}
exports.是声母sh双拼韵母 = 是声母sh双拼韵母;
function 是声母sh三拼韵母(p) {
    // [韵母_u, 韵母_a] | [韵母_u, 韵母_ai] | [韵母_u, 韵母_an] | [韵母_u, 韵母_ang] | [韵母_u, 韵母_o]
    return 是声母zh三拼韵母(p);
}
exports.是声母sh三拼韵母 = 是声母sh三拼韵母;
function 是声母r(p) {
    return p.标记 === PY标记.声母_r;
}
exports.是声母r = 是声母r;
function 是声母r双拼韵母(p) {
    switch (p.标记) {
        // 韵母_an | 韵母_ang | 韵母_ao | 韵母_e | 韵母_en | 韵母_eng | 韵母_i | 韵母_ong | 韵母_ou | 韵母_u | 韵母_ui | 韵母_un
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ao:
        case PY标记.韵母_e:
        case PY标记.韵母_en:
        case PY标记.韵母_eng:
        case PY标记.韵母_i:
        case PY标记.韵母_ou:
        case PY标记.韵母_ong:
        case PY标记.韵母_u:
        case PY标记.韵母_ui:
        case PY标记.韵母_un:
            return true;
        default:
            return false;
    }
}
exports.是声母r双拼韵母 = 是声母r双拼韵母;
function 是声母r三拼韵母(p) {
    // [韵母_u, 韵母_an] | [韵母_u, 韵母_o]
    return p[0].标记 === PY标记.韵母_u && (p[1].标记 === PY标记.韵母_an || p[1].标记 === PY标记.韵母_o);
}
exports.是声母r三拼韵母 = 是声母r三拼韵母;
function 是声母z(p) {
    return p.标记 === PY标记.声母_z;
}
exports.是声母z = 是声母z;
function 是声母z双拼韵母(p) {
    return 是声母g双拼韵母(p) || p.标记 === PY标记.韵母_i;
}
exports.是声母z双拼韵母 = 是声母z双拼韵母;
function 是声母z三拼韵母(p) {
    return 是声母r三拼韵母(p);
}
exports.是声母z三拼韵母 = 是声母z三拼韵母;
function 是声母c(p) {
    return p.标记 === PY标记.声母_c;
}
exports.是声母c = 是声母c;
function 是声母c双拼韵母(p) {
    return 是声母ch双拼韵母(p);
}
exports.是声母c双拼韵母 = 是声母c双拼韵母;
function 是声母c三拼韵母(p) {
    return 是声母r三拼韵母(p);
}
exports.是声母c三拼韵母 = 是声母c三拼韵母;
function 是声母s(p) {
    return p.标记 === PY标记.声母_s;
}
exports.是声母s = 是声母s;
function 是声母s双拼韵母(p) {
    return 是声母c双拼韵母(p);
}
exports.是声母s双拼韵母 = 是声母s双拼韵母;
function 是声母s三拼韵母(p) {
    return 是声母r三拼韵母(p);
}
exports.是声母s三拼韵母 = 是声母s三拼韵母;
function 是声母y(p) {
    return p.标记 === PY标记.声母_y;
}
exports.是声母y = 是声母y;
function 是韵母a(p) {
    return p.标记 === PY标记.韵母_a;
}
exports.是韵母a = 是韵母a;
function 是韵母o(p) {
    return p.标记 === PY标记.韵母_o;
}
exports.是韵母o = 是韵母o;
function 是韵母e(p) {
    return p.标记 === PY标记.韵母_e;
}
exports.是韵母e = 是韵母e;
function 是韵母i(p) {
    return p.标记 === PY标记.韵母_i;
}
exports.是韵母i = 是韵母i;
function 是韵母u(p) {
    return p.标记 === PY标记.韵母_u;
}
exports.是韵母u = 是韵母u;
function 是韵母v(p) {
    return p.标记 === PY标记.韵母_v;
}
exports.是韵母v = 是韵母v;
function 是声母y双拼韵母(p) {
    switch (p.标记) {
        //  韵母_a | 韵母_an | 韵母_ang | 韵母_ao | 韵母_e | 韵母_i | 韵母_in | 韵母_ing |  韵母_ong | 韵母_ou | 韵母_u | 韵母_un
        case PY标记.韵母_a:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ao:
        case PY标记.韵母_e:
        case PY标记.韵母_i:
        case PY标记.韵母_in:
        case PY标记.韵母_ing:
        case PY标记.韵母_o:
        case PY标记.韵母_ou:
        case PY标记.韵母_ong:
        case PY标记.韵母_u:
        case PY标记.韵母_un:
            return true;
        default:
            return false;
    }
}
exports.是声母y双拼韵母 = 是声母y双拼韵母;
function 是声母y三拼韵母(p) {
    //  [韵母_u, 韵母_an] | [韵母_u, 韵母_e]
    return p[0].标记 === PY标记.韵母_u && (p[1].标记 === PY标记.韵母_an || p[1].标记 === PY标记.韵母_e);
}
exports.是声母y三拼韵母 = 是声母y三拼韵母;
function 是声母w(p) {
    return p.标记 === PY标记.声母_w;
}
exports.是声母w = 是声母w;
function 是声母w双拼韵母(p) {
    switch (p.标记) {
        //   韵母_a | 韵母_ai | 韵母_an | 韵母_ang | 韵母_ei | 韵母_en | 韵母_eng | 韵母_o | 韵母_u
        case PY标记.韵母_a:
        case PY标记.韵母_ai:
        case PY标记.韵母_an:
        case PY标记.韵母_ang:
        case PY标记.韵母_ei:
        case PY标记.韵母_en:
        case PY标记.韵母_eng:
        case PY标记.韵母_o:
        case PY标记.韵母_u:
            return true;
        default:
            return false;
    }
}
exports.是声母w双拼韵母 = 是声母w双拼韵母;
function 是单引号(p) {
    return p.标记 === PY标记.单引号;
}
exports.是单引号 = 是单引号;
function 是三拼韵母组(p) {
    return __1.是数组(p);
}
exports.是三拼韵母组 = 是三拼韵母组;
exports.标记转文本 = {
    [PY标记.结尾]: "",
    [PY标记.单引号]: "'",
    [PY标记.逗号]: ",",
    [PY标记.声母_b]: "b",
    [PY标记.声母_p]: "p",
    [PY标记.声母_m]: "m",
    [PY标记.声母_f]: "f",
    [PY标记.声母_d]: "d",
    [PY标记.声母_t]: "t",
    [PY标记.声母_n]: "n",
    [PY标记.声母_l]: "l",
    [PY标记.声母_g]: "g",
    [PY标记.声母_k]: "k",
    [PY标记.声母_h]: "h",
    [PY标记.声母_j]: "j",
    [PY标记.声母_q]: "q",
    [PY标记.声母_x]: "x",
    [PY标记.声母_zh]: "zh",
    [PY标记.声母_ch]: "ch",
    [PY标记.声母_sh]: "sh",
    [PY标记.声母_r]: "r",
    [PY标记.声母_z]: "z",
    [PY标记.声母_c]: "c",
    [PY标记.声母_s]: "s",
    [PY标记.声母_y]: "y",
    [PY标记.声母_w]: "w",
    [PY标记.韵母_a]: "a",
    [PY标记.韵母_an]: "an",
    [PY标记.韵母_ang]: "ang",
    [PY标记.韵母_ai]: "ai",
    [PY标记.韵母_ao]: "ao",
    [PY标记.韵母_o]: "o",
    [PY标记.韵母_ou]: "ou",
    [PY标记.韵母_ong]: "ong",
    [PY标记.韵母_e]: "e",
    [PY标记.韵母_ei]: "ei",
    [PY标记.韵母_er]: "er",
    [PY标记.韵母_en]: "en",
    [PY标记.韵母_eng]: "eng",
    [PY标记.韵母_i]: "i",
    [PY标记.韵母_ie]: "ie",
    [PY标记.韵母_iu]: "iu",
    [PY标记.韵母_in]: "in",
    [PY标记.韵母_ing]: "ing",
    [PY标记.韵母_u]: "u",
    [PY标记.韵母_ui]: "ui",
    [PY标记.韵母_ue]: "ue",
    [PY标记.韵母_un]: "un",
    [PY标记.韵母_v]: "v",
    [PY标记.韵母_ve]: "ve",
    [PY标记.韵母_vn]: "vn",
};
function 是双节声母(p) {
    return p.标记 === PY标记.声母_zh || p.标记 === PY标记.声母_ch || p.标记 === PY标记.声母_sh;
}
exports.是双节声母 = 是双节声母;
function 是双元韵母(p) {
    return p.标记 >= PY标记.韵母_ao && p.标记 <= PY标记.韵母_er;
}
exports.是双元韵母 = 是双元韵母;
function 是单元韵母(p) {
    return p.标记 >= PY标记.韵母_a && p.标记 <= PY标记.韵母_v;
}
exports.是单元韵母 = 是单元韵母;
function 是三元韵母(p) {
    return p.标记 >= PY标记.韵母_ang && p.标记 <= PY标记.韵母_ong;
}
exports.是三元韵母 = 是三元韵母;
function 是三拼连读(p1) {
    return p1.声母 && p1.韵母 && __1.是数组(p1.韵母);
}
exports.是三拼连读 = 是三拼连读;
function 是整体音读(p1) {
    return p1.文本 === "zhi" || p1.文本 === "chi" || p1.文本 === "shi"
        || p1.文本 === "zi" || p1.文本 === "ci" || p1.文本 === "si"
        || p1.文本 === "ri"
        || p1.文本 === "yi" || p1.文本 === "yu" || p1.文本 === "ye" || p1.文本 === "yue" || p1.文本 === "yin"
        || p1.文本 === "yun" || p1.文本 === "ying" || p1.文本 === "yuan"
        || p1.文本 === "wu";
}
exports.是整体音读 = 是整体音读;
function 取拼音文本(p1, p2, p3) {
    if (p1 && p2 && p3) {
        return 转为文本(p1.标记) + 转为文本(p3.标记) + 转为文本(p2.标记);
    }
    else if (p1 && p2) {
        return 转为文本(p1.标记) + 转为文本(p2.标记);
    }
    else if (p1) {
        return 转为文本(p1.标记);
    }
    else if (p2) {
        return 转为文本(p2.标记);
    }
    else {
        return "";
    }
}
exports.取拼音文本 = 取拼音文本;
function 是分割符(py) {
    return py.标记 === PY标记.单引号;
}
exports.是分割符 = 是分割符;
function 创建分隔符() {
    let 拼音 = __2.创建对象();
    拼音.标记 = PY标记.单引号;
    拼音.文本 = "'";
    return 拼音;
}
exports.创建分隔符 = 创建分隔符;
function 创建拼音(p1, p2, p3) {
    let 拼音 = __2.创建对象();
    拼音.声母 = p1;
    拼音.韵母 = p3 && 是三拼韵母(p2) ? [p3, p2] : p2;
    拼音.文本 = 取拼音文本(p1, p2, p3);
    拼音.可分割 = (p1 && (是声母zh(p1) || 是声母ch(p1) || 是声母sh(p1))) || !!p3 || (p2 && p2.文本.length > 1);
    拼音.可拆分 = 拼音.可分割 ? 计算分割系数(p1, p2, p3) : 0;
    计算位置(拼音);
    return 拼音;
}
exports.创建拼音 = 创建拼音;
function 计算位置(py) {
    if (py.声母) {
        py.开始 = py.声母.开始;
    }
    if (!py.韵母) {
        py.结尾 == py.声母.结尾;
        return;
    }
    if (py.韵母 && __1.是数组(py.韵母)) {
        let 后 = py.韵母[1];
        py.结尾 = 后.结尾;
        if (!py.开始) {
            let 前 = py.韵母[0];
            py.开始 = 前.开始;
        }
        return;
    }
    else if (py.韵母 && !__1.是数组(py.韵母)) {
        py.结尾 = py.韵母.结尾;
        if (!py.开始) {
            py.开始 = py.韵母.开始;
        }
        return;
    }
    return;
}
exports.计算位置 = 计算位置;
function 重组拼音(ps) {
    let 插入位置 = [];
    let i = ps.length - 1;
    while (i >= 0) {
        let p = ps[i - 1];
        let p2 = ps[i];
        if (p2) {
            if (!p2.声母 && p && p.可拆分 & 拼音拆分标记.可分割出声母) {
                if (p.可拆分 & 拼音拆分标记.可分割出声母) {
                    let p2韵母 = p2.韵母;
                    let 验证 = p2韵母;
                    if (!__1.是数组(p2.韵母)) {
                        if (是韵母i(p2.韵母) || 是韵母u(p2.韵母)) {
                            // 可组 三拼
                            let p3 = ps[i + 1];
                            if (p3 && !p3.声母) {
                                验证 = [p2.韵母, p3.韵母];
                            }
                        }
                    }
                    let 通过验证 = false;
                    if (p.可拆分 & 拼音拆分标记.可分割出尾声母g) {
                        if (__1.是数组(验证) && 是声母g三拼韵母(验证)) {
                            通过验证 = true;
                        }
                        else if (是声母g双拼韵母(验证)) {
                            通过验证 = true;
                        }
                    }
                    else if (p.可拆分 & 拼音拆分标记.可分割出尾声母n) {
                        if (__1.是数组(验证) && 是声母n三拼韵母(验证)) {
                            通过验证 = true;
                        }
                        else if (是声母n双拼韵母(验证)) {
                            通过验证 = true;
                        }
                    }
                    else if (p.可拆分 & 拼音拆分标记.可分割出尾声母r) {
                        if (__1.是数组(验证) && 是声母r三拼韵母(验证)) {
                            通过验证 = true;
                        }
                        else if (是声母r双拼韵母(验证)) {
                            通过验证 = true;
                        }
                    }
                    通过验证 ? 插入位置.push(取拼音开始位置(p2) - 1) : undefined;
                }
            }
        }
        i--;
    }
    let 重新编译 = 插入位置.length ? 插入分隔(取拼音组原始文本(ps), 插入位置) : null;
    return 重新编译 ? 编译拼音(重新编译) : ps;
}
exports.重组拼音 = 重组拼音;
function 取拼音开始位置(p) {
    if (p.声母) {
        return p.声母.开始;
    }
    else if (p.韵母) {
        if (__1.是数组(p.韵母)) {
            return p.韵母[0].开始;
        }
        else {
            return p.韵母.开始;
        }
    }
}
function 插入分隔(拼音组文本, 位置) {
    let 结果 = [];
    for (let i = 0, ii = 0, iii; i < 位置.length; i++) {
        iii = 位置[i];
        结果.push(拼音组文本.substr(ii, iii));
        if (i === 位置.length - 1) {
            结果.push(拼音组文本.substr(iii));
        }
        ii = iii;
    }
    return 结果.join("'");
}
exports.插入分隔 = 插入分隔;
function 取拼音组原始文本(拼音组) {
    let 结果 = "";
    拼音组.forEach(v => {
        结果 += v.文本;
    });
    return 结果;
}
exports.取拼音组原始文本 = 取拼音组原始文本;
var 拼音拆分标记;
(function (拼音拆分标记) {
    拼音拆分标记[拼音拆分标记["\u65E0"] = 0] = "\u65E0";
    拼音拆分标记[拼音拆分标记["\u53EF\u5206\u5272\u6210\u4E24\u90E8\u5206"] = 1] = "\u53EF\u5206\u5272\u6210\u4E24\u90E8\u5206";
    拼音拆分标记[拼音拆分标记["\u53EF\u5206\u5272\u6210\u4E09\u90E8\u5206"] = 2] = "\u53EF\u5206\u5272\u6210\u4E09\u90E8\u5206";
    拼音拆分标记[拼音拆分标记["\u53EF\u5206\u5272\u51FA\u5C3E\u5355\u97F5\u6BCD"] = 4] = "\u53EF\u5206\u5272\u51FA\u5C3E\u5355\u97F5\u6BCD";
    拼音拆分标记[拼音拆分标记["\u53EF\u5206\u5272\u51FA\u5C3E\u58F0\u6BCDg"] = 8] = "\u53EF\u5206\u5272\u51FA\u5C3E\u58F0\u6BCDg";
    拼音拆分标记[拼音拆分标记["\u53EF\u5206\u5272\u51FA\u5C3E\u58F0\u6BCDn"] = 16] = "\u53EF\u5206\u5272\u51FA\u5C3E\u58F0\u6BCDn";
    拼音拆分标记[拼音拆分标记["\u53EF\u5206\u5272\u51FA\u5C3E\u58F0\u6BCDr"] = 32] = "\u53EF\u5206\u5272\u51FA\u5C3E\u58F0\u6BCDr";
    拼音拆分标记[拼音拆分标记["\u53EF\u5206\u5272\u51FA\u58F0\u6BCD"] = 56] = "\u53EF\u5206\u5272\u51FA\u58F0\u6BCD";
})(拼音拆分标记 = exports.拼音拆分标记 || (exports.拼音拆分标记 = {}));
function 计算分割系数(p1, p2, p3) {
    let 结果 = 拼音拆分标记.无;
    if (p1 && p2 && p3) {
        if (是整体音读({ 声母: p1, 韵母: [p3, p2] })) {
            return 拼音拆分标记.无;
        }
        结果 |= 拼音拆分标记.可分割成三部分;
    }
    if (p1 && p2 && !p3) {
        结果 |= 拼音拆分标记.可分割成两部分;
    }
    if (p2) {
        if (是g尾韵母且不是ong(p2)) {
            结果 |= 拼音拆分标记.可分割出尾声母g;
        }
        if (是n尾韵母(p2)) {
            结果 |= 拼音拆分标记.可分割出尾声母n;
        }
        if (是r尾韵母(p2)) {
            结果 |= 拼音拆分标记.可分割出尾声母r;
        }
        if (是双元韵母(p2) && !是r尾韵母(p2)) {
            结果 |= 拼音拆分标记.可分割出尾单韵母;
        }
    }
    return 结果;
}
exports.计算分割系数 = 计算分割系数;
function 是n尾韵母(p) {
    return p.标记 >= PY标记.韵母_an && p.标记 <= PY标记.韵母_un;
}
function 是r尾韵母(p) {
    return p.标记 === PY标记.韵母_er;
}
function 是g尾韵母且不是ong(p) {
    return p.标记 === PY标记.韵母_ang || p.标记 === PY标记.韵母_eng || p.标记 === PY标记.韵母_ing;
}
function 编译拼音(拼音文本) {
    try {
        拼音文本 = 拼音文本.replace(/\s+/g, "");
        let 拼音 = 拼音文本扫描(拼音文本);
        let 结果 = [];
        if (拼音 && 拼音.内容组.length) {
            let 前 = 0;
            while (前 < 拼音.内容组.length) {
                let p = 拼音.内容组[前];
                if (是单引号(p)) {
                    前++;
                }
                else if (是声母(p)) {
                    let p2 = 拼音.内容组[前 + 1];
                    if (p2 && 是单引号(p2)) {
                        // 分隔符强行分割
                        前++;
                        结果.push(创建拼音(p));
                        continue;
                    }
                    else if (p2 && 是韵母(p2)) {
                        if (p2 && 是三拼无音韵母(p2)) {
                            let p3 = 拼音.内容组[前 + 2];
                            if (p3 && 是韵母(p3) && 是三拼韵母(p3) && 是声母三拼韵母(p, [p2, p3])) {
                                // 三拼
                                前 += 3;
                                结果.push(创建拼音(p, p3, p2));
                                continue;
                            }
                            else if (是声母双拼韵母(p, p2)) {
                                // 与 三拼无音字母 双拼
                                前 += 2;
                                结果.push(创建拼音(p, p2));
                                continue;
                            }
                        }
                        else if (p2 && 是声母双拼韵母(p, p2)) {
                            // 双拼
                            前 += 2;
                            结果.push(创建拼音(p, p2));
                            continue;
                        }
                    }
                    // p 是独立声母
                    前++;
                    结果.push(创建拼音(p));
                    continue;
                }
                else if (是韵母(p)) {
                    // 是独立 韵母
                    前++;
                    结果.push(创建拼音(undefined, p));
                    continue;
                }
            }
        }
        if (结果 && 结果.length) {
            return 结果;
        }
    }
    catch (err) {
        return;
    }
}
exports.编译拼音 = 编译拼音;
function 拼音文本扫描(p) {
    p = p.toLowerCase();
    if (!是拼音字符串(p)) {
        return;
    }
    let 前 = 0;
    let 后 = 前;
    let 当前语义;
    return 编译();
    function 创建拼音组(初始组) {
        let 拼音组 = __2.创建对象();
        拼音组.开始 = 0;
        拼音组.结尾 = p.length;
        拼音组.内容组 = 初始组 || [];
        return 拼音组;
    }
    function 创建拼音节点(标记) {
        let 拼音 = __2.创建对象();
        拼音.标记 = 标记;
        拼音.开始 = 取开始();
        拼音.结尾 = 取结尾();
        拼音.文本 = 转为文本(拼音.标记);
        当前语义 = 下个();
        return 拼音;
    }
    function 编译() {
        let 拼音组 = 创建拼音组();
        当前语义 = 下个();
        标签: while (true) {
            switch (当前语义) {
                case PY标记.结尾:
                    break 标签;
                case PY标记.单引号:
                    拼音组.内容组.push(创建拼音节点(PY标记.单引号));
                    break;
                case PY标记.声母_b:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_b));
                    break;
                case PY标记.声母_p:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_p));
                    break;
                case PY标记.声母_m:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_m));
                    break;
                case PY标记.声母_f:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_f));
                    break;
                case PY标记.声母_d:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_d));
                    break;
                case PY标记.声母_t:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_t));
                    break;
                case PY标记.声母_n:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_n));
                    break;
                case PY标记.声母_l:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_l));
                    break;
                case PY标记.声母_g:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_g));
                    break;
                case PY标记.声母_k:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_k));
                    break;
                case PY标记.声母_h:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_h));
                    break;
                case PY标记.声母_j:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_j));
                    break;
                case PY标记.声母_q:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_q));
                    break;
                case PY标记.声母_x:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_x));
                    break;
                case PY标记.声母_zh:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_zh));
                    break;
                case PY标记.声母_ch:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_ch));
                    break;
                case PY标记.声母_sh:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_sh));
                    break;
                case PY标记.声母_r:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_r));
                    break;
                case PY标记.声母_z:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_z));
                    break;
                case PY标记.声母_c:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_c));
                    break;
                case PY标记.声母_s:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_s));
                    break;
                case PY标记.声母_y:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_y));
                    break;
                case PY标记.声母_w:
                    拼音组.内容组.push(创建拼音节点(PY标记.声母_w));
                    break;
                // 韵母
                case PY标记.韵母_a:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_a));
                    break;
                case PY标记.韵母_o:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_o));
                    break;
                case PY标记.韵母_e:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_e));
                    break;
                case PY标记.韵母_i:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_i));
                    break;
                case PY标记.韵母_u:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_u));
                    break;
                case PY标记.韵母_v:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_v));
                    break;
                case PY标记.韵母_ai:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_ai));
                    break;
                case PY标记.韵母_ei:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_ei));
                    break;
                case PY标记.韵母_ui:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_ui));
                    break;
                case PY标记.韵母_ao:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_ao));
                    break;
                case PY标记.韵母_ou:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_ou));
                    break;
                case PY标记.韵母_iu:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_iu));
                    break;
                case PY标记.韵母_ie:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_ie));
                    break;
                case PY标记.韵母_ve:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_ve));
                    break;
                case PY标记.韵母_ue:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_ue));
                    break;
                case PY标记.韵母_un:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_un));
                    break;
                case PY标记.韵母_er:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_er));
                    break;
                case PY标记.韵母_an:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_an));
                    break;
                case PY标记.韵母_en:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_en));
                    break;
                case PY标记.韵母_in:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_in));
                    break;
                case PY标记.韵母_ang:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_ang));
                    break;
                case PY标记.韵母_eng:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_eng));
                    break;
                case PY标记.韵母_ing:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_ing));
                    break;
                case PY标记.韵母_ong:
                    拼音组.内容组.push(创建拼音节点(PY标记.韵母_ong));
                    break;
            }
        }
        return 拼音组;
    }
    function 下个() {
        return 扫描();
    }
    function 取开始() {
        return Math.min(后, 前);
    }
    function 取结尾() {
        return Math.max(后, 前);
    }
    function 扫描() {
        后 = 前;
        while (true) {
            if (前 >= p.length) {
                return PY标记.结尾;
            }
            let ch = p.charCodeAt(前);
            switch (ch) {
                case Py.单引号:
                    前++;
                    return PY标记.单引号;
                case Py.b:
                    前++;
                    return PY标记.声母_b;
                case Py.p:
                    前++;
                    return PY标记.声母_p;
                case Py.m:
                    前++;
                    return PY标记.声母_m;
                case Py.f:
                    前++;
                    return PY标记.声母_f;
                case Py.d:
                    前++;
                    return PY标记.声母_d;
                case Py.t:
                    前++;
                    return PY标记.声母_t;
                case Py.j:
                    前++;
                    return PY标记.声母_j;
                case Py.q:
                    前++;
                    return PY标记.声母_q;
                case Py.x:
                    前++;
                    return PY标记.声母_x;
                case Py.l:
                    前++;
                    return PY标记.声母_l;
                case Py.k:
                    前++;
                    return PY标记.声母_k;
                case Py.w:
                    前++;
                    return PY标记.声母_w;
                case Py.y:
                    前++;
                    return PY标记.声母_y;
                case Py.n:
                    if (!(p.charCodeAt(前 - 1) === Py.a || p.charCodeAt(前 - 1) === Py.a1 || p.charCodeAt(前 - 1) === Py.a2 || p.charCodeAt(前 - 1) === Py.a3 || p.charCodeAt(前 - 1) === Py.a4
                        || (p.charCodeAt(前 - 1) === Py.o || p.charCodeAt(前 - 1) === Py.o1 || p.charCodeAt(前 - 1) === Py.o2 || p.charCodeAt(前 - 1) === Py.o3 || p.charCodeAt(前 - 1) === Py.o4) && p.charCodeAt(前 + 1) === Py.g
                        || p.charCodeAt(前 - 1) === Py.e || p.charCodeAt(前 - 1) === Py.e1 || p.charCodeAt(前 - 1) === Py.e2 || p.charCodeAt(前 - 1) === Py.e3 || p.charCodeAt(前 - 1) === Py.e4
                        || (p.charCodeAt(前 - 1) === Py.i || p.charCodeAt(前 - 1) === Py.i1 || p.charCodeAt(前 - 1) === Py.i2 || p.charCodeAt(前 - 1) === Py.i3 || p.charCodeAt(前 - 1) === Py.i4) && p.charCodeAt(前 + 1) === Py.g
                        || p.charCodeAt(前 - 1) === Py.u || p.charCodeAt(前 - 1) === Py.u1 || p.charCodeAt(前 - 1) === Py.u2 || p.charCodeAt(前 - 1) === Py.u3 || p.charCodeAt(前 - 1) === Py.u4
                        || p.charCodeAt(前 - 1) === Py.v || p.charCodeAt(前 - 1) === Py.v0 || p.charCodeAt(前 - 1) === Py.v1 || p.charCodeAt(前 - 1) === Py.v2 || p.charCodeAt(前 - 1) === Py.v3 || p.charCodeAt(前 - 1) === Py.v4)) {
                        前++;
                        return PY标记.声母_n;
                    }
                    break;
                case Py.g:
                    if (!(p.charCodeAt(前 - 1) === Py.n && (p.charCodeAt(前 - 2) === Py.a || p.charCodeAt(前 - 2) === Py.a1 || p.charCodeAt(前 - 2) === Py.a2 || p.charCodeAt(前 - 2) === Py.a3 || p.charCodeAt(前 - 2) === Py.a4
                        || p.charCodeAt(前 - 2) === Py.o || p.charCodeAt(前 - 2) === Py.o1 || p.charCodeAt(前 - 2) === Py.o2 || p.charCodeAt(前 - 2) === Py.o3 || p.charCodeAt(前 - 2) === Py.o4
                        || p.charCodeAt(前 - 2) === Py.e || p.charCodeAt(前 - 2) === Py.e1 || p.charCodeAt(前 - 2) === Py.e2 || p.charCodeAt(前 - 2) === Py.e3 || p.charCodeAt(前 - 2) === Py.e4
                        || p.charCodeAt(前 - 2) === Py.i || p.charCodeAt(前 - 2) === Py.i1 || p.charCodeAt(前 - 2) === Py.i2 || p.charCodeAt(前 - 2) === Py.i3 || p.charCodeAt(前 - 2) === Py.i4))) {
                        前++;
                        return PY标记.声母_g;
                    }
                    break;
                case Py.h:
                    if (p.charCodeAt(前 - 1) === Py.z) {
                        前++;
                        return PY标记.声母_zh;
                    }
                    else if (p.charCodeAt(前 - 1) === Py.c) {
                        前++;
                        return PY标记.声母_ch;
                    }
                    if (p.charCodeAt(前 - 1) === Py.s) {
                        前++;
                        return PY标记.声母_sh;
                    }
                    else {
                        前++;
                        return PY标记.声母_h;
                    }
                case Py.z:
                    if (p.charCodeAt(前 + 1) !== Py.h) {
                        前++;
                        return PY标记.声母_z;
                    }
                    break;
                case Py.c:
                    if (p.charCodeAt(前 + 1) !== Py.h) {
                        前++;
                        return PY标记.声母_c;
                    }
                    break;
                case Py.s:
                    if (p.charCodeAt(前 + 1) !== Py.h) {
                        前++;
                        return PY标记.声母_s;
                    }
                    break;
                case Py.r:
                    if (p.charCodeAt(前 - 1) !== Py.e) {
                        前++;
                        return PY标记.声母_r;
                    }
                    break;
                default:
                    if (ch === Py.a || ch === Py.a1 || ch === Py.a2 || ch === Py.a3 || ch === Py.a4) {
                        if (p.charCodeAt(前 + 1) === Py.o) {
                            前 += 2;
                            return PY标记.韵母_ao;
                        }
                        else if (p.charCodeAt(前 + 1) === Py.i) {
                            前 += 2;
                            return PY标记.韵母_ai;
                        }
                        else if (p.charCodeAt(前 + 1) === Py.n && p.charCodeAt(前 + 2) === Py.g) {
                            前 += 3;
                            return PY标记.韵母_ang;
                        }
                        else if (p.charCodeAt(前 + 1) === Py.n) {
                            前++;
                            return PY标记.韵母_an;
                        }
                        else {
                            前++;
                            return PY标记.韵母_a;
                        }
                    }
                    else if (ch === Py.o || ch === Py.o1 || ch === Py.o2 || ch === Py.o3 || ch === Py.o4) {
                        if (p.charCodeAt(前 + 1) === Py.n && p.charCodeAt(前 + 2) === Py.g) {
                            前 += 3;
                            return PY标记.韵母_ong;
                        }
                        else if (p.charCodeAt(前 + 1) === Py.u) {
                            前 += 2;
                            return PY标记.韵母_ou;
                        }
                        else {
                            前++;
                            return PY标记.韵母_o;
                        }
                    }
                    else if (ch === Py.e || ch === Py.e1 || ch === Py.e2 || ch === Py.e3 || ch === Py.e4) {
                        if (p.charCodeAt(前 + 1) === Py.n && p.charCodeAt(前 + 2) === Py.g) {
                            前 += 3;
                            return PY标记.韵母_eng;
                        }
                        else if (p.charCodeAt(前 + 1) === Py.n) {
                            前 += 2;
                            return PY标记.韵母_en;
                        }
                        else if (p.charCodeAt(前 + 1) === Py.r) {
                            前 += 2;
                            return PY标记.韵母_er;
                        }
                        else if (p.charCodeAt(前 + 1) === Py.i) {
                            前 += 2;
                            return PY标记.韵母_ei;
                        }
                        else {
                            前++;
                            return PY标记.韵母_e;
                        }
                    }
                    else if (ch === Py.i || ch === Py.i1 || ch === Py.i2 || ch === Py.i3 || ch === Py.i4) {
                        if (p.charCodeAt(前 + 1) === Py.n && p.charCodeAt(前 + 2) === Py.g) {
                            前 += 3;
                            return PY标记.韵母_ing;
                        }
                        else if (p.charCodeAt(前 + 1) === Py.n) {
                            前 += 2;
                            return PY标记.韵母_in;
                        }
                        else if (p.charCodeAt(前 + 1) === Py.u || p.charCodeAt(前 + 1) === Py.u1 || p.charCodeAt(前 + 1) === Py.u2 || p.charCodeAt(前 + 1) === Py.u3 || p.charCodeAt(前 + 1) === Py.u4) {
                            前 += 2;
                            return PY标记.韵母_iu;
                        }
                        else if (p.charCodeAt(前 + 1) === Py.e) {
                            前 += 2;
                            return PY标记.韵母_ie;
                        }
                        else {
                            前++;
                            return PY标记.韵母_i;
                        }
                    }
                    else if (ch === Py.u || ch === Py.u1 || ch === Py.u2 || ch === Py.u3 || ch === Py.u4) {
                        if (p.charCodeAt(前 + 1) === Py.n) {
                            前 += 2;
                            return PY标记.韵母_un;
                        }
                        else if (p.charCodeAt(前 + 1) === Py.i || p.charCodeAt(前 + 1) === Py.i1 || p.charCodeAt(前 + 1) === Py.i2 || p.charCodeAt(前 + 1) === Py.i3 || p.charCodeAt(前 + 1) === Py.i4) {
                            前 += 2;
                            return PY标记.韵母_ui;
                        }
                        else if (p.charCodeAt(前 + 1) === Py.e) {
                            前 += 2;
                            return PY标记.韵母_ue;
                        }
                        else {
                            前++;
                            return PY标记.韵母_u;
                        }
                    }
                    else if (ch === Py.v || ch === Py.v0 || ch === Py.v1 || ch === Py.v2 || ch === Py.v3 || ch === Py.v4) {
                        if (p.charCodeAt(前 + 1) === Py.n) {
                            前 += 2;
                            return PY标记.韵母_vn;
                        }
                        else if (p.charCodeAt(前 + 1) === Py.e) {
                            前 += 2;
                            return PY标记.韵母_ve;
                        }
                        else {
                            前++;
                            return PY标记.韵母_v;
                        }
                    }
                    break;
            }
            前++;
        }
    }
}
exports.拼音文本扫描 = 拼音文本扫描;
function 拼音是相等的(p1, p2) {
    if (p1 && p2) {
        if (p1.length !== p2.length) {
            return false;
        }
        for (let i = 0; i < p1.length; i++) {
            if (p1[i].文本 !== p2[i].文本) {
                return false;
            }
        }
        return true;
    }
    return false;
}
exports.拼音是相等的 = 拼音是相等的;
function 是简拼索引(key) {
    let 组 = key.split("'");
    for (let i = 0; i < 组.length; i++) {
        if (组[i].length > 2) {
            return false;
        }
        else if (!是首拼字母(组[i])) {
            return false;
        }
    }
    return true;
}
exports.是简拼索引 = 是简拼索引;
function 是首拼字母(py) {
    switch (py) {
        case "a":
        case "o":
        case "e":
        case "i":
        case "u":
        case "v":
        case "b":
        case "p":
        case "m":
        case "f":
        case "d":
        case "t":
        case "n":
        case "l":
        case "g":
        case "k":
        case "h":
        case "j":
        case "q":
        case "x":
        case "z":
        case "c":
        case "s":
        case "r":
        case "zh":
        case "ch":
        case "sh":
        case "y":
        case "w":
            return true;
        default:
            return false;
    }
}
exports.是首拼字母 = 是首拼字母;
function 中间有分割符(p, p2) {
    if (p.开始 === p2.开始) {
        return false;
    }
    let 前面 = p.开始 > p2.开始 ? p2 : p;
    let 后面 = p.开始 > p2.开始 ? p : p2;
    if (前面.结尾 !== 后面.开始) {
        return true;
    }
    return false;
}
exports.中间有分割符 = 中间有分割符;
function 取拼音索引简拼(拼音文本) {
    let ch = 拼音文本.charCodeAt(0);
    if (ch === Py.c || ch === Py.z || ch === Py.s) {
        let ch2 = 拼音文本.charCodeAt(1);
        if (ch2 === Py.h)
            return 拼音文本.slice(0, 2);
    }
    return 拼音文本[0];
}
exports.取拼音索引简拼 = 取拼音索引简拼;
