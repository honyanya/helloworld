interface GenericIdentityFn<Type> {
    (arg: Type): Type;
}
   
function identity<Type>(arg: Type): Type {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

const output = myIdentity(0);

console.info(output);
