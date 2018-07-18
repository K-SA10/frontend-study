// 型変換

// any型
let obj: any = "1";

// <>演算子でnumber型に変換
let num1: number = <number>obj;

// as演算子でnumber型に変換
let num2: number = obj as number;

// JSXを使用する場合、<>での記述は使用できないため
// as文法を使うようにする。