class BaseClass {
    // TypeScriptではデフォルトでpublicになる
    prop1 = "public プロパティ";

    // 明示的にpublicを指定
    public prop2 = "public プロパティ";

    // クラス外からのアクセス付加
    private prop3 = "private プロパティ";

    // 継承したクラスからのアクセスは可能
    protected prop4 = "protected プロパティ";
}

class SubClass extends BaseClass {
    get getProp3() {
        // private定義されているので継承先での参照はエラー
        return this.prop3;
    }

    get getProp4() {
        // protectedプロパティは継承先からの参照も可能
        return this.prop4;
    }
}

let base = new BaseClass();
console.log(base.prop1);    // OK
console.log(base.prop2);    // OK
console.log(base.prop3);    // エラー
console.log(base.prop4);    // エラー

let sub = new SubClass();
console.log(sub.prop4);     // エラー
console.log(sub.getProp4);  // OK