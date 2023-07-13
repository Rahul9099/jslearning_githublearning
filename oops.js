const obj= function (name,age){//1)create emty obj 2)call function 3)assign prototype 4)return obj
    this.name = name,
    this.age= age
}

class obj2{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    hey(){
        console.log(`hey i am ${this.name} i am ${this.age}old`);
    }
}

let user = new obj('rahul',23);
let user2= new obj2('rahul',22);

user2.hey();

obj.prototype.hey=function(){
    console.log(`hey i am ${this.name} i am ${this.age}old`);
}

user.hey();