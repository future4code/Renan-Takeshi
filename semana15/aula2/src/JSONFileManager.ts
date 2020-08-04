import * as fs from "fs";

export abstract class JSONFileManager {
  static readDatabase(fileName: string): any[] {
    try {
      const fileData: string = fs.readFileSync(fileName).toString();
      return JSON.parse(fileData);
    } catch (error) {
      console.log(`Erro ao ler a base de dados: ${error.message}`);
      return [];
    }
  }

  static writeToDatabase(fileName: string, data: any): void {
    try {
      const dataAsString: string = JSON.stringify(data, null, 3);
      fs.writeFileSync(fileName, dataAsString);
    } catch (error) {
      console.log(`Erro ao escrever na base de dados: ${error.message}`);
    }
  }
}
