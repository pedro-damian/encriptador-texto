
const textarea = document.getElementById("textarea");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const munheco = document.getElementById("munheco");
const infoMensaje = document.getElementById("infoMensaje");
const container_right = document.getElementById("container_right")

let reemplazar = [
  ["e", "enter"],
  ["o", "ober"],
  ["i", "imes"],
  ["a", "ai"],
  ["u", "ufat"],
]

btnEncriptar.addEventListener("click", () => { 
  const texto = textarea.value.toLowerCase()
  function encriptar(newText){
    for(let i=0; i< reemplazar.length; i++){
      if(newText.includes(reemplazar[i][0])){
        newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
      };
    };
    return newText
  }
  const textoEncriptado = encriptar(texto);
  mensajeFinal.innerHTML = textoEncriptado;

  // oculta la imagen y el mensaje de informacion del contenedor derecho
  munheco.style.display = "none";
  infoMensaje.style.display = "none";

  // muestra el boton de copiar texto
  btnCopiar.style.display = "block";

  container_right.classList.add("ajustar");
  mensajeFinal.classList.add("ajustar");
});