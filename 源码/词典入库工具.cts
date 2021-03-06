/// <引用 路径="../node_modules/@types/支持库/index.d.cts"/>
导入 { 系统 } 来自 "./系统";
导入 { 分行读文件, 按文本降序 } 来自 "./工具";
导入 { 取汉字拼音对应表 } 来自 "./拼音输入法输出";
导入 { 创建HMM分词, HMM分词 } 来自 "./HMM分词器";

变量 _hmm分词: HMM分词;

导出 函数 加载hmm分词器() {
    函数 加载() {
        变量 路径 = 系统.解析路径("../lib/HMM词典.utf8");
        _hmm分词 = 创建HMM分词(路径);
        返回 _hmm分词;
    }
    返回 _hmm分词 || 加载();
}

导出 函数 词典去重复(路径?: 文字, 数据?: 文字, 不写出数据 = 为假) {
    变量 内容: 文字;
    如果 (数据) {
        内容 = 数据;
    }
    否则 {
        路径 = 路径 || 系统.解析路径("../lib/基础词库.utf8");
        内容 = 系统.读文件(路径) 转为 文字;
    }
    变量 排序组 = (内容 转为 文字).分割(系统.新行);
    变量 词组: 映射类<文字, 文字> = 新建 映射类();
    排序组.循环执行(v => {
        变量 分组 = v.分割(":");
        如果 (词组.存在(分组[0] + ":" + 分组[1])) {
            变量 存在 = 词组.获取(分组[0] + ":" + 分组[1]);
            如果 (+存在 < +分组[2]) {
                词组.设置(分组[0] + ":" + 分组[1], 分组[2]);
            }
        }
        否则 {
            词组.设置(分组[0] + ":" + 分组[1], 分组[2]);
        }
    });
    变量 新内容: 文字[] = [];
    词组.循环执行((v, k) => {
        新内容.压入(`${k}:${v}`);
    });
    如果 (!不写出数据) {
        系统.写文件(路径, 新内容.连接(系统.新行));
    }
    否则 {
        返回 新内容.连接(系统.新行);
    }
}

导出 函数 词典排序(路径?: 文字, 数据?: 文字, 不写出数据 = 为假) {
    变量 内容: 文字;

    如果 (数据) {
        内容 = 数据;
    }
    否则 {
        内容 = 系统.读文件(路径) 转为 文字;
    }

    路径 = 路径 || 系统.解析路径("../lib/基础词库.utf8");
    变量 排序组 = (内容 转为 文字).分割(系统.新行);
    变量 词组: { 文本: 文字; 其他: 文字 }[] = [];

    排序组.循环执行(v => {
        变量 分组 = v.分割(":");
        变量 小数点 = 分组[2].索引在(".");
        如果 (小数点 !== -1) {
            分组[2] = 分组[2].分裂(0, 小数点 + 5);
        }
        词组.压入({ 文本: 分组[0], 其他: 分组[1] + ":" + 分组[2] });
    });

    词组 = 词组.排序(按文本降序);

    变量 新内容: 文字[] = [];
    词组.循环执行(v => {
        新内容.压入(`${v.文本}:${v.其他}`);
    });

    如果 (!不写出数据) {
        系统.写文件(路径, 新内容.连接(系统.新行));
    }
    否则 {
        返回 新内容.连接(系统.新行);
    }
    
}

/**
 * 本函数用来加载包含拼音的用户自定义词库,词库文件必须为utf8编码,每个词独立一行.
 *
 * **行内容格式如下:**
 * ```
 *     自定义词 zi ding yi ci 2
 *     自定义词文本 zi ding yi ci wen ben 1.5
 * ```
 * 词文本与拼音间为 1个空格 拼音间用1个空格分割, 拼音与频率间为 1个空格的间隔.
 *
 */

导出 函数 加载有拼音词库(路径: 文字) {
    变量 新路径 = 系统.解析路径("../lib/基础词库.utf8");
    变量 内容 = 系统.读文件(路径);
    变量 读一行 = 分行读文件(内容 转为 文字, "\n");
    变量 词组: 文字[] = [];
    判断 (为真) {
        变量 行文本 = 读一行.下个().值;
        如果 (!行文本) {
            跳出;
        }
        否则 {
            变量 分割 = 行文本.分割(" ");
            变量 文本 = 分割.推出();
            变量 频率 = 计算词频(文本);
            分割.弹出();
            变量 拼音 = 分割.连接("'");
            词组.压入(`${拼音}:${文本}:${频率}`);
        }
    }
    如果 (系统.文件存在(新路径)) {
        系统.追写文件(新路径, 系统.新行 + 词组.连接(系统.新行));
    }
    否则 {
        系统.写文件(新路径, 词组.连接(系统.新行));
    }
}

/**
 * 本函数用来加载用户自定义词库,词库文件必须为utf8编码,每个词独立一行.
 *
 * **行内容格式如下:**
 * ```
 *     自定义词 2
 *     自定义词文本 1.5
 * ```
 * 词文本与频率间为 1个空格的 间隔
 *
 */

导出 函数 加载无拼音词库(路径: 文字) {
    变量 新路径 = 系统.解析路径("../lib/基础词库.utf8");
    变量 内容 = 系统.读文件(路径);
    变量 读一行 = 分行读文件(内容 转为 文字, "\n");
    变量 词组: 文字[] = [];
    判断 (为真) {
        变量 行文本 = 读一行.下个().值;
        如果 (!行文本) {
            跳出;
        }
        否则 {
            变量 分割 = 行文本.分割(" ");
            如果 (分割 && 分割[0]) {
                变量 拼音组 = 加载汉字拼音(分割[0]);
                如果 (拼音组) {
                    如果 (拼音组.长度 === 1) {
                        变量 拼音 = 拼音组[0], 文本 = 分割[0], 频率 = 0;
                        如果 (分割[1]) {
                            频率 = +分割[1];
                        }
                        否则 {
                            频率 = 计算词频(文本);
                        }
                        词组.压入(`${拼音}:${文本}:${频率}`);
                    }
                    否则 {
                        拼音组.循环执行((v, ii) => {
                            变量 文本 = 分割[0], 频率 = 0;
                            如果 (分割[1]) {
                                频率 = +分割[1];
                            }
                            否则 {
                                频率 = 计算词频(文本);
                            }
                            词组.压入(`${v}:${文本}:${频率 / (ii + 1)}`);
                        });
                    }
                }
            }
        }
    }
    如果 (系统.文件存在(新路径)) {
        系统.追写文件(新路径, 系统.新行 + 词组.连接(系统.新行));
    }
    否则 {
        系统.写文件(新路径, 词组.连接(系统.新行));
    }
}

导出 函数 加载停止词词典(路径: 文字) {
    变量 新路径 = 系统.解析路径("../lib/停止词词典.utf8");
    变量 内容 = 系统.读文件(路径);
    变量 读一行 = 分行读文件(内容 转为 文字, "\n");
    变量 词组: 文字[] = [];
    判断 (为真) {
        变量 行文本 = 读一行.下个().值;
        如果 (!行文本) {
            跳出;
        }
        否则 {
            行文本 = 行文本.修剪();
            变量 拼音组 = 加载汉字拼音(行文本);
            如果 (拼音组) {
                如果 (拼音组.长度 === 1) {
                    变量 拼音 = 拼音组[0], 文本 = 行文本;
                    词组.压入(`${拼音}:${文本}`);
                }
                否则 {
                    拼音组.循环执行((v, ii) => {
                        变量 文本 = 行文本;
                        词组.压入(`${v}:${文本}`);
                    });
                }
            }
        }
    }
    如果 (系统.文件存在(新路径)) {
        系统.追写文件(新路径, 系统.新行 + 词组.连接(系统.新行));
    }
    否则 {
        系统.写文件(新路径, 词组.连接(系统.新行));
    }
}

函数 计算词频(词文本: 文字): 数字 {
    变量 hmm = 加载hmm分词器();
    变量 长度 = 词文本.长度;
    变量 头频率 = 数学类.abs(hmm.模型.频率统计信息[0].最小 + -1 - hmm.模型.取输出概率(hmm.模型.输出概率表[0], 词文本.字符代码在(0), hmm.模型.频率统计信息[0].最小));
    变量 尾频率 = 数学类.abs(hmm.模型.频率统计信息[1].最小 + -1 - hmm.模型.取输出概率(hmm.模型.输出概率表[1], 词文本.字符代码在(长度 - 1), hmm.模型.频率统计信息[1].最小));
    变量 中间频率 = 0;
    变量 中间基数 = hmm.模型.频率统计信息[2].最小 + -1;
    循环 (变量 i = 1; i < 长度 - 1; i++) {
        中间频率 += 数学类.abs(中间基数 - hmm.模型.取输出概率(hmm.模型.输出概率表[2], 词文本.字符代码在(i), 中间基数 + 1));
    }
    如果 (是非数字(头频率 + 尾频率 + 中间频率)) {
        返回 0.1;
    }
    否则 {
        返回 ((头频率 + 尾频率 + 中间频率) / 长度) * .2;
    }
}

导出 函数 加载汉字拼音(文本: 文字): 文字[] {
    变量 多音拼音组: 文字[][] = [];
    变量 不含多音字组: 文字[] = [];
    变量 包含多音 = 为假;
    变量 没有拼音 = 为假;
    循环 (变量 i = 0; i < 文本.长度; i++) {
        变量 拼音 = 取汉字拼音对应表()[文本.字符代码在(i)];
        变量 拼音组: 文字[] = [];
        如果 (!拼音 && 文本[i].字符代码在(0) < 127) {
            拼音 = 文本[i];
        }
        如果 (拼音) {
            如果 (拼音.索引在("'") !== -1) {
                包含多音 = 为真;
                拼音组 = 拼音.分割("'");
            }
            否则 {
                不含多音字组.压入(拼音);
                拼音组 = [拼音];
            }
            多音拼音组.压入(拼音组);
        }
        否则 {
            没有拼音 = 为真;
        }
    }
    如果 (没有拼音) {
        返回;
    }
    如果 (包含多音) {
        返回 分割多音字(多音拼音组);
    }
    否则 {
        返回 [不含多音字组.连接("'")];
    }
}

函数 分割多音字(多音字拼音数组: 文字[][]): 文字[] {
    变量 结果数组: 文字[] = [];
    变量 临时: 文字[] = [];
    函数 多音词分裂组合(多音字拼音数组: 文字[][], 过度: 文字[] = [], 当前层: 数字 = 0) {
        如果 (多音字拼音数组.长度 === 当前层 + 1) {
            循环 (变量 i = 0; i < 多音字拼音数组[当前层].长度; i++) {
                临时 = 过度.分裂(0);
                临时.压入(多音字拼音数组[当前层][i]);
                结果数组.压入(临时.连接("'"));
            }
        }
        否则 {
            循环 (变量 i = 0; i < 多音字拼音数组[当前层].长度; i++) {
                临时 = 过度.分裂(0);
                临时.压入(多音字拼音数组[当前层][i]);
                多音词分裂组合(多音字拼音数组, 临时, 当前层 + 1);
            }
        }
    }
    多音词分裂组合(多音字拼音数组);
    临时 = 未定;
    返回 结果数组;
}
