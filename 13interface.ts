interface AndroidPhone {
    name:string
    
    home():void
    back():void
    menu():void

}

class Samsung implements AndroidPhone {
    name:string

    constructor(name:string){
        this.name = name;
    }

    home(){
        console.log('tapped home')
    }

    back(){
        console.log(('back to menu'))
    }

    menu(){
        console.log('tapped menu')
    }

}

class gameA {
    private phone:AndroidPhone

    constructor(phone:AndroidPhone){
        this.phone = phone
    }

    home(){
        this.phone.home()
    }

    back(){
        console.log('back to menu game')
    }

    menu(){
        this.phone.menu()
    }
}

const samsung = new Samsung('A51')
const game = new gameA(samsung)

game.back()
game.home()
game.menu()








