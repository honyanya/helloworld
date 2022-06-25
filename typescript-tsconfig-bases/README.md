# typescript-tsconfig-bases

```sh
$ yarn add -D @tsconfig/strictest
```

```sh
$ cat ./node_modules/@tsconfig/strictest/tsconfig.json 
{
  "compilerOptions": {
    "strict": true,
    "allowUnusedLabels": false,
    "allowUnreachableCode": false,
    "exactOptionalPropertyTypes": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noPropertyAccessFromIndexSignature": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,

    "importsNotUsedAsValues": "error",
    "checkJs": true,

    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Strictest"
}
```
