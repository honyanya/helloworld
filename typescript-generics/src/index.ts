function identity<Type>(arg: Type): Type {
    return arg;
}

// const output = identity<string>("Hello World!");
const output = identity("Hello World!");

console.info(output);
