function introductionPerson(person) {
    console.log(person.name + "\u3055\u3093\uFF1A " + (person.description || "詳細はありません。"));
}
var person = { id: 1, name: "太郎" };
introductionPerson(person);
