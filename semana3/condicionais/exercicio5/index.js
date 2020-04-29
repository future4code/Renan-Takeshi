// Link para o diagrama:
// https://user-images.githubusercontent.com/10583511/80531098-6f028500-8970-11ea-9bf0-0294da1bed84.png

if(prompt("Possui ossos ? Responda S ou N").toUpperCase() === "N"){
    // Não possui ossos é invertebrado
    console.log("Invertebrado")}
else if(prompt("É terrestre ? Responda S ou N").toUpperCase() === "N"){
    // Não é terrestre, então é peixe
    console.log("Peixe")}
else if(prompt("Possui penas ? Responda S ou N").toUpperCase() === "S"){
    // Possui penas é ave
    console.log("Ave")}
else if(prompt("Possui pelos ? Responda S ou N").toUpperCase() === "N"){
    // Não possui pelos, pode ser anfibio ou reptil
    if(prompt("Morou na água ? Responda S ou N").toUpperCase() === "S")
    {
        // Morou na agua é anfibio
        console.log("Anfibio")}
    else{
        // Não morou na agua é reptil
        console.log("Reptil")}}
else{
    // Possui pelos, pode ser humano ou não-humano
    if(prompt("É racional ? Responda S ou N").toUpperCase() === "S"){
        // Racional é humano
        console.log("Ser-Humano")
    }
        // Não racional, não humano
    else{console.log("Mamifero não-humano")}
}