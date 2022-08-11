function identity<Type>(arg: Type): Type {
    return arg;
}

// let myIdentity: <Type>(arg: Type) => Type = identity;
// let myIdentity: <Input>(arg: Input) => Input = identity;
let myIdentity: { <Type>(arg: Type): Type } = identity;

// const output = identity<string>("Hello World!");
const output = identity(["Hello World!"]);

console.info(output);
  