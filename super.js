class person{
    constructor(name){
        this.species="homo sapience";
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
}
class Engineer extends person{
    constructor(branch,name){
        super(name);//to invoke parent class constructor
        this.branch=branch;
    }
    work(){
        super.eat();
        console.log("solve problems");
    }
}
let engobj=new Engineer("ece","Argha")