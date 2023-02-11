class Employee{
    //methods 
    //this keyword is used to access the class varibales in the scope 
    //constructor 
        constructor(ename){
        // initialize the entID using "this" keyword 
            this.entId = "kalpana.banka";
            this.ename= ename;
    }
    
    //class method
        display(){
            console.log("Employee Ent ID is :"+ this.entId);
            console.log("Employee Name :" + this.ename);
    }
    }
    
    //Object creation 
    let empObj = new Employee("Kalpana");
    //call the class method 
    empObj.display();