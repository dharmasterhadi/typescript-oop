class Person {
    readonly gender:string = 'Laki-laki'
}

const Budi = new Person()
Budi.gender = 'Perempuan' // perhatikan pesan yang muncul jika dihover..bahwa gender hanya bersifat readonly