class StoreA {
    private name:string = 'Store A'
    private profit:number = 2000

    getName():string {
        return this.name
    }

    getProfit():number {
        return this.profit
    }

}

class DressMuslim {
    private store:StoreA
    private name:string
    private price:number

    constructor(name:string, price:number){
        this.name = name
        this.price = price

        this.store = new StoreA()
    }

    priceSell():void {
        console.log(`product ${this.name} dijual dengan harga ${this.store.getProfit() + this.price}`)
    }

}

const bajukurung = new DressMuslim('Baju Kurung', 25000)
bajukurung.priceSell()


