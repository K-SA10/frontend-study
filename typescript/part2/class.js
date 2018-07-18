var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseClass = /** @class */ (function () {
    function BaseClass() {
        // TypeScriptではデフォルトでpublicになる
        this.prop1 = "public プロパティ";
        // 明示的にpublicを指定
        this.prop2 = "public プロパティ";
        // クラス外からのアクセス付加
        this.prop3 = "private プロパティ";
        // 継承したクラスからのアクセスは可能
        this.prop4 = "protected プロパティ";
    }
    return BaseClass;
}());
var SubClass = /** @class */ (function (_super) {
    __extends(SubClass, _super);
    function SubClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SubClass.prototype, "getProp3", {
        get: function () {
            // private定義されているので継承先での参照はエラー
            return this.prop3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubClass.prototype, "getProp4", {
        get: function () {
            // protectedプロパティは継承先からの参照も可能
            return this.prop4;
        },
        enumerable: true,
        configurable: true
    });
    return SubClass;
}(BaseClass));
var base = new BaseClass();
console.log(base.prop1); // OK
console.log(base.prop2); // OK
console.log(base.prop3); // エラー
console.log(base.prop4); // エラー
var sub = new SubClass();
console.log(sub.prop4); // エラー
console.log(sub.getProp4); // OK
