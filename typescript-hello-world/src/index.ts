export const helloworld = (message: string): string => {
    return `hello world! ${message}`;
};

console.info(helloworld("hoge"));
console.info(helloworld("fuga"));
