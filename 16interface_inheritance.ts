interface Buah {
    name:string;
    biji:boolean;
}

interface BuahBerduri extends Buah {
    umur:number;
}

class Durian implements BuahBerduri {
    name:string = 'Durian'
    biji:boolean = true
    umur:number = 20
}