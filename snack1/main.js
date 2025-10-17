console.log('funzia');


//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

//creo array di oggetti
//assegno nome e peso
//stampo bici con peso minore

const biciEl = document.getElementById('bici')


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

let biciLeggera = biciclette[0]

for (let i = 0; i < biciclette.length; i++)
    if (biciclette[i].peso < biciLeggera.peso) {
        biciLeggera = biciclette[i]
    }
console.log(biciLeggera.nome);
