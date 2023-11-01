class StoreIkhwan {
    private name:string = 'Store Ikhwan'
    private profit:number = 30000

    getName():string{
        return this.name
    }
    getProfit():number{
        return this.profit
    }
}

class DressKaftan {
    private store:StoreIkhwan
    private name:string
    private price:number

    constructor(name:string, price:number){
        this.name = name
        this.price = price
        
        this.store = new StoreIkhwan()
    }

    sell():void{
        console.log(`harga jual ${this.name} adalah ${this.price + this.store.getProfit()}`)
    }
}

const bajukurung = new DressKaftan('Baju Kurung', 20000) //contoh nya bisa running

bajukurung.sell() //testing dengan nama baju kurung

//tambahan komentar untuk membuktikan commit
