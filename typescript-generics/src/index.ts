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
   
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};
 
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

interface Lengthwise {
    length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}

// loggingIdentity(3); // Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

loggingIdentity({ length: 10, value: 3 });

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}
   
let x = { a: 1, b: 2, c: 3, d: 4 };
   
getProperty(x, "a");
getProperty(x, "b");
// getProperty(x, "m"); // Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.

function create<Type>(c: { new (): Type }): Type {
    return new c();
}

class BeeKeeper {
    hasMask: boolean = true;
}

class ZooKeeper {
    nametag: string = "Mikle";
}
   
class Animal {
    numLegs: number = 4;
}
   
class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
}
   
class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}
   
function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}
   
console.info(createInstance(Lion).keeper.nametag);
console.info(createInstance(Bee).keeper.hasMask);
