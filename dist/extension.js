/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activate = exports.MyHoverProvider = exports.MyCompletionProvider = void 0;
/**
 * @Description
 */
const vscode = __importStar(__webpack_require__(1));
const until_1 = __webpack_require__(2);
const paramsList_json_1 = __importDefault(__webpack_require__(3));
class MyCompletionProvider {
    provideCompletionItems(document, position) {
        // 获取输入的文本
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        // 如果以 @ 开头
        if (linePrefix.endsWith('@')) {
            // 创建代码补全项
            const bg = new vscode.CompletionItem('bg', vscode.CompletionItemKind.Variable);
            bg.insertText = new vscode.SnippetString('bg storage="${1:BG12a}"');
            // bg.documentation = "nihao"
            bg.detail = '背景图片';
            bg.documentation = new vscode.MarkdownString('显示效果: `time=700`  \n' +
                '其他trans相关参数及默认值见上表  \n' +
                'storage: 背景图片名  \n' +
                'clfg: 同时消除所有前景层  \n' +
                'hidemes: 同时消除对话框（及系统按钮）  \n' +
                'convert: 图片反色效果  \n' +
                'grayscale: 图片去色效果  \n' +
                'mcolor: 蒙版色  \n' +
                'mopacity: 蒙版色透明度');
            const completionItem2 = new vscode.CompletionItem('fg', vscode.CompletionItemKind.Variable);
            completionItem2.documentation = new vscode.MarkdownString('显示效果	:time=500`  \n' +
                '其他trans相关参数及默认值见上表  \n' +
                'storage: 头像图片名  \n' +
                'opacity: 透明度  \n' +
                'fg: 同时显示人物立绘图片，不能调整位置，会自动取得指定编号图层的坐标  \n' +
                'layer: 同时显示的人物立绘所用的图层  \n');
            completionItem2.detail = '人物图片';
            completionItem2.insertText = new vscode.SnippetString('fg pos="center" storage="fg01_02"');
            // 返回代码补全项数组
            return (0, until_1.makeCompletionItem)(paramsList_json_1.default);
        }
        // 如果不以 @ 开头，返回空数组
        return [];
    }
}
exports.MyCompletionProvider = MyCompletionProvider;
class MyHoverProvider {
    provideHover(document, position) {
        const wordRange = document.getWordRangeAtPosition(position, /\b(?:@bg|storage)\b/);
        if (!wordRange) {
            return; // 不在 @bg 或 storage 上
        }
        const word = document.getText(wordRange);
        if (word === '@bg' || word === 'storage') {
            // 设置提示框的内容
            const hoverContent = new vscode.MarkdownString();
            hoverContent.appendCodeblock('storage=""', 'string');
            hoverContent.appendMarkdown('storage: 背景图片');
            return new vscode.Hover(hoverContent, wordRange);
        }
        return; // 不在 @bg 或 storage 上
    }
}
exports.MyHoverProvider = MyHoverProvider;
function activate(context) {
    // 注册代码补全提供程序
    console.log('Congratulations, your extension "helloworld-sample" is now active!');
    // 注册代码补全提供程序
    let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World!');
    });
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider({ scheme: 'file', language: 'ks' }, new MyCompletionProvider(), '@' // 触发代码补全的字符
    ), vscode.languages.registerHoverProvider({ scheme: 'file', language: 'ks' }, // 适用的语言和文件方案
    new MyHoverProvider()));
    context.subscriptions.push(disposable);
}
exports.activate = activate;


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompletionItems = exports.makeCompletionItem = void 0;
/**
 * @Description
 */
const paramsList_json_1 = __importDefault(__webpack_require__(3));
const vscode = __importStar(__webpack_require__(1));
let makeCompletionItem = (paramsList) => {
    let CompletionItem = [];
    Object.keys(paramsList).forEach((params) => {
        const item = new vscode.CompletionItem(params, vscode.CompletionItemKind.Variable);
        item.insertText = new vscode.SnippetString(paramsList[params]["example"] || "暂无");
        // item.documentation = "nihao"
        item.detail = paramsList[params]["name"] || "暂无";
        item.documentation = new vscode.MarkdownString(jsonToMarkdown(paramsList[params]));
        item.filterText = params;
        CompletionItem.push(item);
    });
    return CompletionItem;
};
exports.makeCompletionItem = makeCompletionItem;
exports.CompletionItems = (0, exports.makeCompletionItem)(paramsList_json_1.default);
function jsonToMarkdown(data) {
    let markdown = '';
    // 根据对象的键值对生成 Markdown 字符串
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            markdown += `**${key}:** ${data[key]}\n`;
        }
    }
    return markdown;
}


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = JSON.parse('{"bg":{"storage":"背景图片名","clfg":"同时消除所有前景层","hidemes":"同时消除对话框（及系统按钮","convert":"图片反色效果","grayscale":"图片去色效果","mcolor":"蒙版色","mopacity":"蒙版色透明度","example":"bg storage=\'图片\'","name":"背景图片"},"fg":{"显示效果":"time=500其他trans相关参数及默认值见上表","storage":"头像图片名","opacity":"透明度","fg":"同时显示人物立绘图片，不能调整位置，会自动取得指定编号图层的坐标","layer":"同时显示的人物立绘所用的图层","name":"人物图片"},"face":{"显示效果":"time=100其他trans相关参数及默认值见上表","storage":"头像图片名","opacity":"图片透明度","fg":"同时显示人物立绘图片，不能调整位置，会自动取得指定编号图层的坐标","layer":"同时显示的人物立绘所用的图层","name":"显示头像"},"clbg":{"消除效果":"time=700其他trans相关参数及默认值见上表","clfg":"同时消除所有前景层","hidemes":"同时消除对话框（及系统按钮）","name":"消除背景"},"clfg":{"消除效果":"time=500其他trans相关参数及默认值见上表","layer":"0可选0~8/all","clface":"同时消除头像","hidemes":"同时消除对话框（及系统按钮）","name":"消除人物"},"dia":"显示一般对话框（uidia内的定义）","scr":"显示大对话框（uidia内的定义）","menu":"显示透明对话框（uidia内的定义）","hidemes":"隐藏对话框（不会消除头像或改变对话框样式）","showmes":"将隐藏的对话框显示出来（如隐藏对话框之后头像没有消除过，则头像仍会恢复显示）","npc":{"id":"要显示的人物姓名，会以【姓名】格式显示","color":"显示人名时所用的文字颜色，不指定时会使用人名列表namelist里的路人颜色","face":"同时显示头像图片","fg":"同时显示人物立绘图片，不能调整位置，会自动取得指定编号图层的坐标","layer":"同时显示的人物立绘所用的图层","name":"人名相关"},"主角":{"":"显示内容为【f.姓+f.名】，文字颜色使用人名列表namelist里的主角颜色","name":"主角"},"其他人物名":{"face":"同时显示头像图片","name":"其他人物名","fg":"同时显示人物立绘图片，不能调整位置，会自动取得指定编号图层的坐标"},"wait":{"time":"等待时间（毫秒）","name":"等待时间（毫秒）","canskip":"是否可略过，不填默认为true"},"waitclick":"KAG3原版指令","bgm":{"storage":"音乐文件名","overlap":500,"time":1000,"name":"播放音乐","loop":true},"se":{"storage":"音效文件名","buf":0,"loop":false,"name":"播放音效/配乐","time":"渐入时间，不填写时效果同playse"},"ws":{"buf":0,"name":"等待音效","canskip":false},"stopbgm":"KAG3原版指令","fadebgm":{"name":"音乐渐进","time":"渐变时间","volume":"渐变音量"},"fadeoutbgm":{"name":"音乐渐退","time":"渐变时间"},"stopse":{"name":"停止音效","buf":0},"fadese":{"buf":0,"time":"渐变时间","name":"停止音效","volume":"渐变音量"},"fadeoutse":{"buf":0,"name":"渐变停止音效","time":"渐变时间"},"selstart":{"hidemes":false,"hidesysbutton":false,"name":"准备选项"},"locate":{"x":null,"y":null,"name":"按钮位置"},"selbutton":{"text":"选项按钮上会显示的文字","target":"点下按钮后会跳转到的标签","storage":"点下按钮后会跳转到的脚本文件名","exp":"点下按钮后会执行的TJS表达式","normal":"按钮一般状态下的图片，不填写则会使用界面配置表setting内的对应值，下同","over":null,"on":null,"enterse":null,"clickse":null,"name":"选项按钮"},"selend":{"显示效果":"time=300其他trans相关参数及默认值见上表","name":"等待选项","timeout":"限时选项处理","outtime":"限时选项等待时间","storage":"超时后跳转去的脚本","target":"超时后跳转去的标签","timebar":"限时选项剩余时间倒计时槽","bgimage":"时间槽背景图形","bgx":"时间槽背景图形坐标","bgy":"时间槽背景图形坐标","bar":"时间槽图片","x":"时间槽坐标","y":"时间槽坐标","width":"时间槽宽度"},"clsel":{"显示效果":"time=100","name":"消除选项"}}');

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=extension.js.map