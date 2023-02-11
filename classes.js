//Base class / Parent class 
class BaseOrder{
    constructor(bid){
        this.bid=bid;
    }
    display(){
        console.log("Display method from BaseORder class " +this.bid);
    }
}
let bobj = new BaseOrder(10);
bobj.display();

//Create new class - dervied class / child class 
class DerviedOrder extends BaseOrder{
    constructor(did,bid){
        //to access teh base class constructor 
        super(bid);
        //derived class constructor value
        this.did=did;
    }
    //own features 
    getDetails(){
        console.log("Details method from Derived class" + this.did);
    }
    // base features 
}

let dobj = new DerviedOrder(3000,5000);
dobj.getDetails();
dobj.display();