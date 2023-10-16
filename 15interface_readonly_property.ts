interface Handphone {
    readonly name:string;
    readonly price:number;
}

let samsung:Handphone = { name:'Samsung', price:20 }

// samsung.name = 'Asus' //ini tidak bisa dilakukan karena property bersifat readonly