class Hewan {
    nama:string;
    kaki:number;

    bernafas(){
        console.log('bernafas')
    }
}

class Mamalia extends Hewan {
    warna:string;
}

const sapi = new Mamalia()
sapi.nama = "Sapi"
sapi.kaki = 4
sapi.warna = "Putih"
console.log(sapi)
sapi.bernafas()

