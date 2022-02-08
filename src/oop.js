class Customer {
    constructor(id,number){
        this.id = id; //this anahtar sözcüğü instance'a karşılık gelir ve constructordaki özelliklere erişmek için gereklidir.
        this.number = number;
    }
}

let customer = new Customer(5, "12345");

//----- PROTOTYPING -----
customer.name = "Mustafa"; // Instance'a yapılan Prototyping

Customer.prop = "Özellik"; // Class'a yapılan Prototyping
