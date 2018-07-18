// 関数の型注釈
// 戻り値がstringであることがわかるので戻り値の型は省略できる。
// function greet9(name: string): string {
function greet(name) {
    return 'こんにちは、${name}さん';
}
var greeting_message = greet('太郎');
// 必須ではない引数には?をつけることで省略可能
function greet2(name) {
    return 'こんにちは、${name || "匿名"}さん';
}
var greeting_message2 = greet2();
// 省略可能な引数と必須な引数が混在する場合は
// 省略可能な引数を右側にまとめる必要がある。
// 省略可能な引数が先に来ているのでエラーとなる。
function greet3(name, suffix) {
    return 'こんにちは、${name || "匿名"}${suffix}';
}
var greeting_message3 = greet3("さん");
// デフォルト値の型が引数の型として使用される。
function greet4(name) {
    if (name === void 0) { name = "匿名"; }
    return 'こんにちは、${name}';
}
// こんにちは、匿名さん
var greeting_message4_1 = greet4();
// こんにちは、太郎さん
var greeting_message4_2 = greet4("太郎");
// アロー関数でも引数名：型名、戻り値の型も()の横に：型と定義する。
var add = function (a, b) {
    return a + b;
};
