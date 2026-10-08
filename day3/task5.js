class Student {
    constructor(name) {
        this.name = name;
    }

    add(marks) {
        this.marks = marks;
    }

    del() {
        delete this.marks;
    }
}

let s = new Student("Tanshu");

s.add(90);
console.log(s);

s.del();
console.log(s);