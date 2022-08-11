interface GenericIdentityFn {
    <Type>(arg: Type): Type;
}
   
function identity<Type>(arg: Type): Type {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;

const output = myIdentity("Hello World!");

console.info(output);
  