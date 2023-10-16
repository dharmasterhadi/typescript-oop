class Buah {
    name:string=''

    dicabut(){
        console.log('Buah dicabut')
    }
}

class Apel extends Buah {
    dicabut(){
        console.log('Tidak Jadi dicabut')
    }
}

const apel = new Apel()
apel.dicabut()