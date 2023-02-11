//Base class / Parent class
class BaseOrder{
    display(){
        console.log("Display method from BaseORder class ");
    }
}
let bobj = new BaseOrder();
bobj.display();
//Create new class - dervied class / child class
class DerviedOrder extends BaseOrder{
    //own features
    getDetails(){
        console.log("Details method from Derived class");
    }
    // base features
}
let dobj = new DerviedOrder();
dobj.getDetails();
dobj.display();