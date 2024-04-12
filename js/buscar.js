async function buscar(){
    console.log("passei por aqui");

    const resposta = await fetch("https://66186cc49a41b1b3dfbd0cf2.mockapi.io/agendas");
    const respostaDadosAgenda = await resposta.json();

    console.log(respostaDadosAgenda)

const cards = document.getElementById("cards_games")

    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) =>{

        return "teste "

    })
}

console.log("antes de buscar")
buscar();

console.log("depois de buscar")