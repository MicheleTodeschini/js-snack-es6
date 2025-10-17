console.log('funzia');


//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

//creo array di oggetti
//assegno nome e peso
//stampo bici con peso minore

const biciEl = document.getElementById('bici')

// creo array con nomi di bici
const biciclette = [{
    nome: 'Bianchi',
    peso: 10
},
{
    nome: 'Pinarello',
    peso: 8
},
{
    nome: 'Colnago',
    peso: 9
}
]
// assegno a bici leggera il primo elemento di biciclette
let biciLeggera = biciclette[0]


// creo ciclo for che paragona le bici e se ne trova una più leggera, la cambia
for (let i = 1; i < biciclette.length; i++)
    if (biciclette[i].peso < biciLeggera.peso) {
        biciLeggera = biciclette[i]
        biciEl.innerHTML = `la più leggera è ${biciLeggera.nome}`
    }
console.log(biciLeggera.nome);

console.log(Math.min(Number(biciclette.peso)))

