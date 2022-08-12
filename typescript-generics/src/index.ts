interface GenericIdentityFn<Type> {
    (arg: Type): Type;
}
   
function identity<Type>(arg: Type): Type {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

const output = myIdentity(0);

console.info(output);

class GenericNumber<NumType> {
    zeroValue: NumType | undefined;
    add: ((x: NumType, y: NumType) => NumType) | undefined;
}
   
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
const add = myGenericNumber.add = function (x, y) {
    return x + y;
};

console.info(add(10,20));
