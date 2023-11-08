type generic<T> = T;

function genericFunction<T>(value: T):generic<T>{
    return value;
}

console.log(genericFunction<string>('hadidharma hutasuhut'))