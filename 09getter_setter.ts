class Product {
    private _price:number = 0;
    private _discount:number = 0.10;


    get price(){
        return this._price
    }

    set price(value:number){
        this._price = value - (value * this._discount)
    }
}

const hp = new Product()
hp.price = 5600000;
console.log(hp.price)