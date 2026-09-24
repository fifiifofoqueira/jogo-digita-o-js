let TextoRef = document.getElementById("TextoRef");
let Resultado = document.getElementById("Resultado");
let Entrada = document.getElementById("Entrada");
let Temporizador= document.getElementById("Temporizador");
let TextoFundo = document.getElementById("TextoFundo");
const Frases = [["Frase 1", "Frase 1 parte 2"], ["Frase 2", "Frase 2 parte 2"]];
let indiceFrase = Math.floor(Math.random() * Frases.length);
let indiceTrecho = 0; 
function EscolherFrase() {
  TextoRef.textContent = Frases[indiceFrase][indiceTrecho]; 
};

function AtualizarTextoFundo () {
    TextoFundo.textContent=Frases[indiceFrase][indiceTrecho]
};

document.addEventListener("DOMContentLoaded", EscolherFrase);
document.addEventListener("DOMContentLoaded", AtualizarTextoFundo);

Entrada.addEventListener('input', (evento) => {
  let Tamanho = Entrada.value.length;
  if (Entrada.value===Frases[indiceFrase][indiceTrecho]) {
    indiceTrecho+=1;
    EscolherFrase();
    Entrada.value= ""
    AtualizarTextoFundo();
  }
  else if (Entrada.value.length===0) {
    Resultado.textContent="Começe a digitar!";
  }
  else if (Entrada.value.slice(0, Tamanho) !== Frases[indiceFrase][indiceTrecho].slice(0, Tamanho)) {
    Resultado.textContent = "Ops, algo está errado!";
  } else {
    Resultado.textContent = "Digitando corretamente...";
  }
});

Entrada.addEventListener("click", () => {
  let ContadorTempo = setInterval (() =>{

  })
})
