import { Command } from "https://deno.land/x/cliffy@v0.24.2/command/mod.ts";

const { options, args } = await new Command()
  .name("deno-cliffy-hello-world")
  .version("0.1.0")
  .description("cliffy hello world!")
  .arguments("<arg>")
  .option("--name <name:string>", "name", { required: true })
  .parse(Deno.args);

console.log({ args });
console.log({ options });
