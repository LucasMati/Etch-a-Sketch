const container = document.getElementById("container");
  let tam = 16;

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
  }

  changeSize(tam); // Carga inicial