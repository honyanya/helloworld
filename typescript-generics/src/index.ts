function identity<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length);
    return arg;
}

// const output = identity<string>("Hello World!");
const output = identity(["Hello World!"]);

console.info(output);
