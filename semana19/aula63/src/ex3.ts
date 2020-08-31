// Entradas
export enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL",
}

export enum NATIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

export interface User {
  name: string;
  age: number;
  nationality: NATIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

// Saidas
export interface ResultItem {
  allowed: string[];
  unallowed: string[];
}
export interface Result {
  brazilians: ResultItem;
  americans: ResultItem;
}

// Implementacao

export function verifyAge(casino: Casino, users: User[]): Result {
  const resultItemBrazilians: ResultItem = { allowed: [], unallowed: [] };
  const resultItemAmericans: ResultItem = { allowed: [], unallowed: [] };

  switch (casino.location) {
    case LOCATION.BRAZIL: {
      users.forEach((item) => {
        if (item.age >= 18) {
          if (item.nationality === NATIONALITY.BRAZILIAN)
            resultItemBrazilians.allowed.push(item.name);
          else resultItemAmericans.allowed.push(item.name);
        } else {
          if (item.nationality === NATIONALITY.BRAZILIAN)
            resultItemBrazilians.unallowed.push(item.name);
          else resultItemAmericans.unallowed.push(item.name);
        }
      });
      break;
    }
    case LOCATION.EUA: {
      users.forEach((item) => {
        if (item.age >= 21) {
          if (item.nationality === NATIONALITY.BRAZILIAN)
            resultItemBrazilians.allowed.push(item.name);
          else resultItemAmericans.allowed.push(item.name);
        } else {
          if (item.nationality === NATIONALITY.BRAZILIAN)
            resultItemBrazilians.unallowed.push(item.name);
          else resultItemAmericans.unallowed.push(item.name);
        }
      });
      break;
    }
    default:
      break;
  }

  return { brazilians: resultItemBrazilians, americans: resultItemAmericans };
}
