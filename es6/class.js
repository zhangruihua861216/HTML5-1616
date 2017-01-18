//function Person(){
//
//}
//function student(){
//    Person.call(this,null);
//}
//Student.prototype=Person.prototype;

class Person{
    constructor(){
        this.type="人类";
    }
    say(str){
        console.log(this.type+"说"+str);
    }
}

let p=new Person();
p.say();

class Student extends Person{
    constructor(){
        super();
        this.type="学生";
    }
}
let s=new Student();
s.say("好好学习");

