enum IdadeHistorica {
  PRE_HISTORIA = "100000 AC",
  IDADE_ANTIGA = "4000 AC",
  IDADE_MEDIA = "476 DC",
  IDADE_MODERNA = "1453 DC",
  IDADE_CONTEMPORANEA = "1789 DC",
}

const determinaIdadeHistorica = (ano: number, sigla?: string): string => {
  if (ano < 1 || !Number.isInteger(ano)) return "Ano invalido!";

  const siglaUpperCase: string = (sigla && sigla.toUpperCase()) || "DC";
  if (siglaUpperCase && siglaUpperCase !== "AC" && siglaUpperCase !== "DC")
    return "Sigla incorreta!";

  if (siglaUpperCase === "AC" && ano >= 100000) return "Pre-historia";
  if (
    (siglaUpperCase === "AC" && ano < 100000) ||
    (siglaUpperCase === "DC" && ano < 476)
  )
    return "Idade Antiga";
  if (siglaUpperCase === "DC" && ano >= 1789) return "Idade Contemporanea";
  if (siglaUpperCase === "DC" && ano >= 1453) return "Idade Moderna";

  return "Idade Media";
};

console.log(determinaIdadeHistorica(555));
