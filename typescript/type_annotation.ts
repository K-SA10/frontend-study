// 以下のように方を指定することを「型注釈」と言う。
let str: string = "文字列";
let num: number = 1;
let bool: boolean = true;
let obj: any = {};

// 「文字列」と言う文字はJavaScriptでは文字列だとわかるため
// 型注釈を省略することが可能
let str1 = "文字列";
let num1 = 1;
let bool1 = true;
let obj1 = {};

// 上記のように型を宣言しなくても型を決定できる機構のことを
// 「型推論」と言う。