import * as fs from "fs";

const args: string[] = process.argv.slice(2);
const tarefa: string = args.slice(1).join(" ");

let tarefas: string = fs.readFileSync(args[0]).toString();
tarefas += `${tarefa}\n`;

fs.writeFileSync(args[0], tarefas);
