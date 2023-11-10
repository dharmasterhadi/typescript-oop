class Person1 {
    name:string = 'Novinata Sitepu'
}

class Person2<T>{
    namePerson2 : T

    constructor(namePerson2:T){
        this.namePerson2 = namePerson2
    }
}

const hadidharma = new Person1()

const person2 = new Person2(hadidharma)