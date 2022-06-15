function CreateA(a) {
    this.a = 0;
}
CreateA.prototype.valueOf = function () {
    this.a++;
    console.log(this, "12");
    return this.a;
};

const a = new CreateA();

console.log(a == 1 && a == 2 && a == 3);
