const btnavancar = document.getElementById("btn-avancar");
const btnvoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoatual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function () {
        const cartavirada = cartao.querySelector(".carta-virada");
 
        // virar o cartão
        cartao.classList.toggle("virar");
        // mostrar o fundo da carta
        cartavirada.classList.toggle("mostar-fundo-carta");
    });
});

btnavancar.addEventListener("click", function () {
    if (cartaoatual === cartoes.length - 1) return;

    escondercartaoselecionado();

    cartaoatual++;
    mostrarcartao(cartaoatual);

});

btnvoltar.addEventListener("click", function () {
    if (cartaoatual === 0) return;

    escondercartaoselecionado();

    cartaoatual--;
    mostrarcartao(cartaoatual);
});

function mostrarcartao(cartaoatual) {
    cartoes[cartaoatual].classList.add("selecionado");
}

function escondercartaoselecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
