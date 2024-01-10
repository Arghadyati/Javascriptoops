// const student={
//     fullName:"Arghadyati Bayen",
//     age:22,
//     gender:"male",
//     marks:94,
//     printMarks:()=>{
//       console.log("marks=",this.marks);
//     },
// }

/*
PROTOTYPE
const employee = {
    calTax() {
        console.log("tax rate is 10 %");
    }
}
const KaranArjun = {
    salary: 50000,

}
KaranArjun.__proto__ = employee;
*/

//classes

class ToyotaCar{
    constructor(brand,milage){
        console.log("creating new object");
        this.brand=brand;
        this.milage=milage;
    }
  start(){
    console.log("start");
  }
  stop(){
    console.log("stop");
  }
//   setBrand(brand){
//     this.brandName=brand;
//   }
}
let fortuner=new ToyotaCar("fortuner",10);
console.log(fortuner);
let lexus=new ToyotaCar();