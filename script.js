





// VARIÁVEIS //

let TextoRef = document.getElementById("TextoRef");
let Resultado = document.getElementById("Resultado");
let Entrada = document.getElementById("Entrada");
let Temporizador = document.getElementById("Temporizador");
let TextoFundo = document.getElementById("TextoFundo");
let j = 0;
const EntradaResultado = document.getElementById("EntradaResultado");

const Frases = [
    ["Frase 1", "Frase 1 parte 2"],
    ["Frase 2", "Frase 2 parte 2"]
];

let indiceFrase = Math.floor(Math.random() * Frases.length);
let indiceTrecho = 0;

let Segundos = 60;
let ContadorTempo;


// FUNÇÕES //

function EscolherFrase() {
    TextoRef.textContent = Frases[indiceFrase][indiceTrecho];
}

function AtualizarTextoFundo() {
    TextoFundo.textContent = Frases[indiceFrase][indiceTrecho];
}

function Perder() {
    clearInterval(ContadorTempo);
    Resultado.textContent = "Tempo esgotado!";
}


function AtualizarCores() {

    let texto = Entrada.value;
    let textoOriginal = Frases[indiceFrase][indiceTrecho];

    let temp = "";

    for (let i = 0; i < texto.length; i++) {

    if (texto[i] === textoOriginal[i]) {
        temp += `<span class="certo">${texto[i]}</span>`;
    } else {
        temp += `<span class="errado">${texto[i]}</span>`;
    }
if ((i + 1) % 67 === 0) {
        
        temp += "<br>";
        
        j++

        
        if (j===5){
        
            Entrada.addEventListener('keydown', function(tecla) {
                    if (tecla.key !== "Backspace")
                    tecla.preventDefault();
            });

        }
    }
}

    EntradaResultado.innerHTML = temp;
}


// EVENT LISTENERS //

document.addEventListener("DOMContentLoaded", () => {

    EscolherFrase();
    AtualizarTextoFundo();

});


Entrada.addEventListener("input", () => {

    // mantém o cursor no final
    Entrada.selectionStart = Entrada.value.length;
    Entrada.selectionEnd = Entrada.value.length;

    let texto = Entrada.value;
    let textoOriginal = Frases[indiceFrase][indiceTrecho];


    // atualiza o texto colorido que está POR CIMA do Entrada
    AtualizarCores();


    // TEXTO VAZIO

    if (texto.length === 0) {

        Resultado.textContent = "Digite agora!!";

        TextoFundo.style.color = "#bbb";

        EntradaResultado.innerHTML = "";

        return;
    }


    // FRASE COMPLETA

    if (texto === textoOriginal) {

        indiceTrecho++;

        Entrada.value = "";
        EntradaResultado.innerHTML = "";

        // acabou os trechos dessa frase
        if (indiceTrecho >= Frases[indiceFrase].length) {

            indiceFrase++;

            // acabou todas as frases
            if (indiceFrase >= Frases.length) {
                indiceFrase = 0;
            }

            indiceTrecho = 0;
        }

        EscolherFrase();
        AtualizarTextoFundo();

        TextoFundo.style.color = "#bbb";

        Resultado.textContent = "Correto!";

        return;
    }


    // VERIFICA SE TEM ERRO

    let temErro = false;

    for (let i = 0; i < texto.length; i++) {

        if (texto[i] !== textoOriginal[i]) {

            temErro = true;
            break;
        }
    }


    if (temErro) {

        Resultado.textContent = "Ops, algo foi digitado errado!";

    } else {

        Resultado.textContent = "Digitando corretamente...";

    }

});


// MANTÉM O CURSOR NO FINAL //

Entrada.addEventListener("click", () => {

    Entrada.selectionStart = Entrada.value.length;
    Entrada.selectionEnd = Entrada.value.length;

});


// TEMPORIZADOR //

Entrada.addEventListener("click", () => {

    ContadorTempo = setInterval(() => {

        Segundos--;

        Temporizador.textContent = Segundos + "s";

        if (Segundos <= 0) {

            clearInterval(ContadorTempo);

            Perder();

        }

    }, 1000);

}, { once: true });





Entrada.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});



