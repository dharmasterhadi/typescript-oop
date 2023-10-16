class Kendaraan {
    constructor(public name:string, public wheels:number){}
}

class Sepeda extends Kendaraan {
    machine:boolean

    constructor(name:string, wheels:number, machine:boolean){
        super(name, wheels)
        this.machine = machine
    }
}

const sepeda = new Sepeda('Sepeda',2,false)
console.log(sepeda);