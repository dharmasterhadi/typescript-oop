interface Manusia<T>{
    name:T
    displayName():T
}

class MahlukSosial<T> implements Manusia<T> {
    name:T

    constructor(myname:T){
        this.name = myname
    }

    displayName(): T {
        return this.name
    }
}

// const hadidharma = new MahlukSosial<string>('hadi dharma')
// console.log(hadidharma.displayName())

const budiputera = new MahlukSosial<number>(12445121)
console.log(budiputera.displayName())

