interface Generic<T> {
    propA : T
}

function genericFunction<T>(value:T):Generic<T>{
    let data:Generic<T>={
        propA:value
    }

    return data
}

console.log(genericFunction<string>('hadidharma'))
console.log(genericFunction<number>(41234))
console.log(genericFunction<boolean>(true))

