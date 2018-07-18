// デコレータとはデザインパターンの１つで「クラスやメソッドなどを装飾（デコレート）する」という意味がある。
// 装飾する対象の前に@デコレータ名を置く。
@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}