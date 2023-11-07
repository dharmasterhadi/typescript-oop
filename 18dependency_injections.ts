class Store {
    private name:string = 'Hadi Store'
    private profit:number = 5000

    getName():string{
        return this.name
    }
    getProfit():number{
        return this.profit
    }
}

class FashionDress {
    private store:Store
    private name:string
    private price:number

    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
        this.store = new Store()
    }

    sell():void{
        console.log(`Harga jual ${this.name} adalah ${this.price + this.store.getProfit()}`)
    }

}

const bajuKurung = new FashionDress('Baju Kurung', 25000)
bajuKurung.sell()