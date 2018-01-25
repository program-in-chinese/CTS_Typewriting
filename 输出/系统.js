"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const os = require("os");
const path = require("path");
const net = require("net");
const cp = require("child_process");
exports.系统 = (() => {
    function 取运行环境() {
        function 读文件(路径, 不解码) {
            const 结果 = fs.readFileSync(路径);
            if (不解码) {
                return 结果;
            }
            return 结果.toString();
        }
        function 写文件(路径, 数据, 写字节或符号) {
            if (写字节或符号) {
                数据 = "\uFEFF" + 数据;
            }
            let 句柄;
            try {
                句柄 = fs.openSync(路径, "w");
                fs.writeSync(句柄, 数据);
            }
            finally {
                if (句柄 !== undefined) {
                    fs.closeSync(句柄);
                }
            }
        }
        function 文件系统信息(路径, 条目种类) {
            try {
                const 状态 = fs.statSync(路径);
                switch (条目种类) {
                    case 0 /* 文件类 */: return 状态.isFile();
                    case 1 /* 目录类 */: return 状态.isDirectory();
                }
            }
            catch (e) {
                return false;
            }
        }
        function 文件存在(路径) {
            return 文件系统信息(路径, 0 /* 文件类 */);
        }
        function 目录存在(路径) {
            return 文件系统信息(路径, 1 /* 目录类 */);
        }
        function 创建目录(目录名称) {
            if (!文件系统信息(目录名称, 1 /* 目录类 */)) {
                fs.mkdirSync(目录名称);
            }
        }
        function 追写文件(文件名, 数据) {
            fs.appendFileSync(文件名, 数据);
        }
        function 创建子进程(命令, 参数) {
            return cp.spawn(命令, 参数, { detached: true });
        }
        const 运行系统 = {
            新行: os.EOL,
            读文件,
            写文件,
            追写文件,
            文件存在,
            目录存在,
            创建目录,
            结合路径: (...路径) => path.join(路径),
            解析路径: 路径 => path.resolve(__dirname, 路径),
            临时目录: os.tmpdir,
            创建服务: net.createServer,
            创建子进程
        };
        return 运行系统;
    }
    let 系统 = 取运行环境();
    return 系统;
})();
