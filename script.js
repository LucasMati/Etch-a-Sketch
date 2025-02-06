const container = document.getElementById("container");

for (let j = 0; j < 16; j++) {
    let newRow = document.createElement("div"); // Crea un div
    newRow.style.display = "flex";
    for (let i = 0; i < 16; i++) {
        let newDiv = document.createElement("div"); // Crea un div
        newDiv.textContent = ""; // Agrega texto al div
        newDiv.className = "caja"; // Se aplica el estilo definido en CSS
        newDiv.style.border = "1px solid black";
        newDiv.style.margin = "0px";
        newDiv.style.padding = "5px";
        newDiv.style.width = "10px";
        newDiv.style.height = "10px";
        newRow.appendChild(newDiv); // Agrega el div al body
    }
    container.appendChild(newRow); // Agrega el div al body
}