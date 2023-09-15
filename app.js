'use strict'

const Informacoes = [
    {
        nome: "50 cent",
        imagem: "cent.jpg",
        ultimaMensagem: "Olha esse som aqui...",
        contato: "Carlos",
        tempo: "Há 15 minutos",
        lidas: "2"
    },
    {
        nome: "Denzel",
        imagem: "denzel.jpg",
        ultimaMensagem: "Tô fazendo um filme novo",
        contato: "Carlos",
        tempo: "Há 25 minutos",
        lidas: "1"
    },
    {
        nome: "Papai Cris",
        imagem: "cr7.jpg",
        ultimaMensagem: "Vem jogar comigo",
        contato: "carlos",
        tempo: "Há 5 minutos",
        lidas: "1"

    }
]


const criarItem = (Informacoes) => {

    const imagem = document.createElement('img')
    imagem.src = `./img/${Informacoes.imagem}`
    imagem.alt = Informacoes.name
    imagem.classList.add('img')

        //Part1
    const nome = document.createElement('h1')
    nome.textContent = Informacoes.nome

    const lidas = document.createElement('h2')
    lidas.textContent = Informacoes.lidas

        //Part2
    const ultimaMensagem = document.createElement('p')
    ultimaMensagem.textContent = Informacoes.ultimaMensagem

        //Destinatario
    const contato = document.createElement('div')
    contato.textContent = Informacoes.contato
    contato.classList.add('destinatario')

        //Status
    const tempo = document.createElement('div')
    tempo.textContent = Informacoes.tempo
    tempo.classList.add('status')

    
        ///////////////////////////////////////////

        const part1 = document.createElement('div')
        part1.replaceChildren(nome, lidas)
        part1.classList.add('part1')

        const part2 = document.createElement('div')
        part2.replaceChildren(ultimaMensagem)
        
        const all = document.createElement('div')
        all.replaceChildren(part1, part2, tempo)

        const item = document.createElement('div')
        item.replaceChildren(imagem, all,contato)
        item.classList.add('item')
        

     
    return item
}

const mostrarItem = (Informacoes) => {
    const itemConteiner = document.getElementById('item-conteiner')
    const item = criarItem(Informacoes)
   
    itemConteiner.appendChild(item)
}
Informacoes.forEach(mostrarItem)