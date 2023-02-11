class product{
    //methods 
    //this keyword is used to access the class varibales in the scope 
    //constructor 
        constructor(pid,pname,price){
    // initialize the entID using "this" keyword 
            this.pid = pid;
            this.pname= pname
            this.price=price;
    }
    //class method
        getProductDetails(){
            console.log("Employee Ent ID is :"+ this.pid);
            console.log("Employee Name :" + this.pname);
            console.log("Employee price:"+this.price)
    }
    }
    
    //Object creation 
    let empObj = new product(21,"Kalpana",9000);
    //call the class method 
    empObj.display();