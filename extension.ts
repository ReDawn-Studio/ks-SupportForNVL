/**
 * @Description 
 */
import * as vscode from 'vscode';
import {makeCompletionItem} from './src/until'
import paramsList from './src/paramsList.json'
export class MyCompletionProvider implements vscode.CompletionItemProvider {
  provideCompletionItems(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.CompletionItem[]> {
    // 获取输入的文本
    const linePrefix = document.lineAt(position).text.substr(0, position.character);
    // 如果以 @ 开头
    if (linePrefix.endsWith('@')) {
      // 创建代码补全项
      const bg = new vscode.CompletionItem('bg', vscode.CompletionItemKind.Variable);
      bg.insertText = new vscode.SnippetString('bg storage="${1:BG12a}"');
      // bg.documentation = "nihao"
      bg.detail = '背景图片';
      bg.documentation = new vscode.MarkdownString(
        '显示效果: `time=700`  \n' +
        '其他trans相关参数及默认值见上表  \n' +
        'storage: 背景图片名  \n' +
        'clfg: 同时消除所有前景层  \n' +
        'hidemes: 同时消除对话框（及系统按钮）  \n' +
        'convert: 图片反色效果  \n' +
        'grayscale: 图片去色效果  \n' +
        'mcolor: 蒙版色  \n' +
        'mopacity: 蒙版色透明度'
      );
      const completionItem2 = new vscode.CompletionItem('fg', vscode.CompletionItemKind.Variable);
      completionItem2.documentation = new vscode.MarkdownString(
        '显示效果	:time=500`  \n' +
        '其他trans相关参数及默认值见上表  \n' +
        'storage: 头像图片名  \n' +
        'opacity: 透明度  \n' +
        'fg: 同时显示人物立绘图片，不能调整位置，会自动取得指定编号图层的坐标  \n' +
        'layer: 同时显示的人物立绘所用的图层  \n'
      );
      completionItem2.detail = '人物图片';
      completionItem2.insertText = new vscode.SnippetString('fg pos="center" storage="fg01_02"');
      // 返回代码补全项数组
      return makeCompletionItem(paramsList);
    }
    // 如果不以 @ 开头，返回空数组
    return [];
  }
}
export class MyHoverProvider implements vscode.HoverProvider {
  provideHover(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.Hover> {
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

export function activate(context: vscode.ExtensionContext) {
  // 注册代码补全提供程序
  console.log('Congratulations, your extension "helloworld-sample" is now active!');
  
    // 注册代码补全提供程序
  let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World!');
  });
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      { scheme: 'file', language: 'ks' },
      new MyCompletionProvider(),
      '@' // 触发代码补全的字符
    ),
    vscode.languages.registerHoverProvider(
      { scheme: 'file', language: 'ks' }, // 适用的语言和文件方案
      new MyHoverProvider()
    )
  );
  context.subscriptions.push(disposable);

}
