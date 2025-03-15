console.log('Apenas um pequeno segredo para os mais curiosos');

function verificar() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    document.getElementById("verificar").addEventListener("click", () => {
        let chute = parseInt(document.getElementById("chute").value);
        alert(chute === numeroSecreto ? "Acertou!" : "Errou, tente de novo!");
    });
}

