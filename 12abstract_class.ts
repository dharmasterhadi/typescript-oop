abstract class Laptop {
    constructor(public name:string){}

    abstract masukBios():void;
}

class Asus extends Laptop {
    constructor(){
        super('Asus')
    }

    masukBios(): void {
        console.log('Tekan F2')
    }
}

class Lenovo extends Laptop {
    constructor(){
        super('Lenovo')
    }

    masukBios(): void {
        console.log('Tekan Delete Berulang Ulang')
    }
}

const asus = new Asus()
asus.masukBios()

const lenovo = new Lenovo()
lenovo.masukBios()