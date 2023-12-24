/**
 * @Description 
 */
import paramsList from './paramsList.json'
import * as vscode from 'vscode';

export let makeCompletionItem = (paramsList: any) => {
  let CompletionItem: any[] = [];
  Object.keys(paramsList).forEach((params) => {
    const item = new vscode.CompletionItem(params, vscode.CompletionItemKind.Variable);
    item.insertText = new vscode.SnippetString(paramsList[params]["example"] || "暂无");
    // item.documentation = "nihao"
    item.detail = paramsList[params]["name"] || "暂无";
    item.documentation = new vscode.MarkdownString(
      jsonToMarkdown( paramsList[params])
    );
    item.filterText = params;
    CompletionItem.push(item);
  })
  return CompletionItem
}
export let CompletionItems = makeCompletionItem(paramsList)
function jsonToMarkdown(data:any) {
  let markdown = '';

  // 根据对象的键值对生成 Markdown 字符串
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      markdown += `**${key}:** ${data[key]}\n`;
    }
  }

  return markdown;
}