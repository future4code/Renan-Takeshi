import { appendFileSync } from "fs";

appendFileSync(process.argv[2], `\n${process.argv.slice(3).join(" ")}`);
