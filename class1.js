class Employee{
    //methods
    //this keyword is used to access the class varibales in the scope
    //constructor
    constructor(entId){
        // initialize the entID using "this" keyword
        this.entId = entId;
    }
    //class method
    display(){
        console.log("Employee Ent ID is :"+ this.entId);
    }
}
//Object creation
let empObj = new Employee('kalpana.banka@accenture.com');
//call the class method
empObj.display();