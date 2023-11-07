function getData1(value: any){
    return value
}

const data1 = getData1('hadidharma')

function getData2<T>(value: T){
    return value;
}

const password = getData2<string>('hadidharmatestingpassword')

console.log(password.toUpperCase())