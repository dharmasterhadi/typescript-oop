class Harimau {
    static kaki:number = 4

    static berlari(){
        console.log(`Harimau berlari dengan ${this.kaki} kaki`)
    }

    getKaki(){
        console.log(Harimau.kaki)
    }
}

const h1 = new Harimau()
const h2 = new Harimau()
const h3 = new Harimau()

console.log(h1.getKaki())
console.log(h2.getKaki())
console.log(h3.getKaki())

Harimau.kaki = 6

console.log(h1.getKaki())
console.log(h2.getKaki())
console.log(h3.getKaki())
