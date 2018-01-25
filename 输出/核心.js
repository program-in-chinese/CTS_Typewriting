"use strict";
/// <引用 路径="../node_modules/@types/支持库/index.d.cts"/>
Object.defineProperty(exports, "__esModule", { value: true });
function 是数组(值) {
    return Array.isArray ? Array.isArray(值) : 值 instanceof Array;
}
exports.是数组 = 是数组;
var 调试输出;
(function (调试输出) {
    调试输出.当前认定层次 = 0 /* 无 */;
    调试输出.正在调试中 = false;
    function 应该断言(层次) {
        return 调试输出.当前认定层次 >= 层次;
    }
    调试输出.应该断言 = 应该断言;
    function 断言(表达式, 消息, 详细信息, 栈记号) {
        if (!表达式) {
            if (详细信息) {
                消息 += "\r\n详细调试信息: " + (typeof 详细信息 === "文字" ? 详细信息 : 详细信息());
            }
            失败(消息 ? "假表达式: " + 消息 : "假表达式.", 栈记号 || 断言);
        }
    }
    调试输出.断言 = 断言;
    function 相等断言(a, b, msg, msg2) {
        if (a !== b) {
            const 消息 = msg ? msg2 ? `${msg} ${msg2}` : msg : "";
            失败(`表达式: ${a} === ${b}. ${消息}`);
        }
    }
    调试输出.相等断言 = 相等断言;
    function 小于断言(a, b, msg) {
        if (a >= b) {
            失败(`表达式: ${a} < ${b}. ${msg || ""}`);
        }
    }
    调试输出.小于断言 = 小于断言;
    function 小于等于断言(a, b) {
        if (a > b) {
            失败(`表达式: ${a} <= ${b}`);
        }
    }
    调试输出.小于等于断言 = 小于等于断言;
    function 大于等于断言(a, b) {
        if (a < b) {
            失败(`表达式: ${a} >= ${b}`);
        }
    }
    调试输出.大于等于断言 = 大于等于断言;
    function 失败(消息, 栈记号) {
        debugger;
        const e = new Error(消息 ? `调试失败. ${消息}` : "调试失败.");
        if (Error.captureStackTrace) {
            Error.captureStackTrace(e, 栈记号 || 失败);
        }
        throw e;
    }
    调试输出.失败 = 失败;
    function 不及断言(成员, 消息, 栈记号) {
        return 失败(消息 || `非法值: ${成员}`, 栈记号 || 不及断言);
    }
    调试输出.不及断言 = 不及断言;
})(调试输出 = exports.调试输出 || (exports.调试输出 = {}));
