// 型変数を用いて関数を定義
function identity<T>(arg: T): T {
    return arg;
}

// stringを型として指定
let output = identity<string>("taro");
// numberを型として指定
let output2 = identity<number>(1);