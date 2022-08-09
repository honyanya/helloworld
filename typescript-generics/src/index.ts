function identity<Type>(arg: Type): Type {
    console.log(arg.length); // Property 'length' does not exist on type 'Type'.
    return arg;
}

// const output = identity<string>("Hello World!");
const output = identity("Hello World!");

console.info(output);
