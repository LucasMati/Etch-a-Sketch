const container = document.getElementById("pixels-container");
  let tam = 16;
  const colorPicker = document.getElementById("colorPicker");
  let color = colorPicker.value;
  const eraser = document.getElementById("eraser");
  const reset = document.getElementById("reset");
  
    colorPicker.addEventListener("input", () => {
        color = colorPicker.value;
    });
  function actualizarValor(valor) {
      document.getElementById("valor").textContent = valor;
      tam = valor;
      changeSize(tam);
  }

  function changeSize(tam) {
      container.innerHTML = ""; // Limpia el contenedor

      for (let j = 0; j < tam; j++) {
          let newRow = document.createElement("div");
          newRow.className = "row";

          for (let i = 0; i < tam; i++) {
              let newDiv = document.createElement("div");
              newDiv.className = "caja";
              newRow.appendChild(newDiv);
          }
          container.appendChild(newRow);
      }
      draw()
  }
  
  changeSize(tam); // Carga inicial
  function draw() {
    let elementos = document.querySelectorAll(".caja");
    let activado = false;
    
    eraser.addEventListener("click", () =>{
        color = "white";
    });
    elementos.forEach((elemento) => {
        elemento.addEventListener("mousedown", () => {
            
            activado = true;
            elemento.style.backgroundColor = color; // Pinta el cuadro al hacer clic
        });

        elemento.addEventListener("mousemove", () => {
            if (activado) {
                elemento.style.backgroundColor = color; // Pinta al arrastrar
            }
        });
    });

    // Evento global para desactivar el "modo de pintura"
    document.addEventListener("mouseup", () => {
        activado = false;
    });
}
reset.addEventListener("click", () =>{
    container.removeChild(container.firstChild);
    changeSize(tam);
});