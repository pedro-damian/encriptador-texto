

var btnEncriptar = document.querySelector(".btn-encriptar");
var btnDesencriptar = document.querySelector(".btn-desencriptar");
var resultado = document.querySelector(".mensaje");
var muneco = document.querySelector(".muneco");
var info = document.querySelector(".info-mensaje");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;


function encriptar(){
  ocultarAdelante();
  var mensaje = recuperarTexto()
  resultado.textContent = encriptarTexto(mensaje);
}


function desencriptar(){
  ocultarAdelante();
  var mensaje = recuperarTexto()
  resultado.textContent = desencriptarTexto(mensaje);
}

function recuperarTexto(){
  var mensaje = document.querySelector(".text-area")
  return mensaje.value
}

function ocultarAdelante(){
  muneco.classList.add("ocultar");
  info.classList.add("ocultar");
}

function encriptarTexto(mensaje){
  var texto = mensaje;
  var textoFinal = "";

  for(var i = 0; i < texto.length; i++){
      if(texto[i] == "a"){
          textoFinal = textoFinal + "ai"
      }
      else if(texto[i] == "e"){
          textoFinal = textoFinal + "enter"
      }
      else if(texto[i] == "i"){
          textoFinal = textoFinal + "imes"
      }
      else if(texto[i] == "o"){
          textoFinal = textoFinal + "ober"
      }
      else if(texto[i] == "u"){
          textoFinal = textoFinal + "ufat"
      }
      else{
          textoFinal = textoFinal + texto[i]
      }
  }
  return textoFinal;

}

function desencriptarTexto(mensaje){
  var texto = mensaje;
  var textoFinal = "";

  for(var i = 0; i < texto.length; i++){
      if(texto[i] == "a"){
          textoFinal = textoFinal + "a"
          i = i+1;
      }
      else if(texto[i] == "e"){
          textoFinal = textoFinal + "e"
          i = i+4;
      }
      else if(texto[i] == "i"){
          textoFinal = textoFinal + "i"
          i = i+3;
      }
      else if(texto[i] == "o"){
          textoFinal = textoFinal + "o"
          i = i+3;
      }
      
      else if(texto[i] == "u"){
          textoFinal = textoFinal + "u"
          i = i+3;
      }
      else{
          textoFinal = textoFinal + texto[i];
      }
  }

  return textoFinal;

}


const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".mensaje").textContent;
    navigator.clipboard.writeText(contenido);
    alert("Texto Copiado")
});