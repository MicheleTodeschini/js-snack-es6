console.log('funzia');

/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


// creo array di oggetti
const squadre = [
    {
        nome: 'Milan',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juventus',
        punti: 0,
        falliSubiti: 0
    },
]
//creo for che confronta i punti e i falli di tutte le squadre e se sono pari a 0, genera dei numeri random e li inserisce al posto dello 0
for (let i = 0; i < squadre.length; i++) {
    if (squadre[i].punti == 0) {
        squadre[i].punti = Math.floor(Math.random() * 100);
    } if (squadre[i].falliSubiti == 0) {
        squadre[i].falliSubiti = Math.floor(Math.random() * 100);
    }
}

// commento via il for sottostante in modo da avere tutto in un ciclo unico e non due for separati
/*
for (let i = 0; i < squadre.length; i++) {
    if (squadre[i].falliSubiti == 0) {
        squadre[i].falliSubiti = Math.floor(Math.random() * 100);
    }
}

*/

console.log(squadre);

let nameFoul = []
// creo squadra singola e poi la pusho nella squadra nameFoul
for (let i = 0; i < squadre.length; i++) {
    const squadra = {
        nome: squadre[i].nome,
        falliSubiti: squadre[i].falliSubiti,
    }
    nameFoul.push(squadra)
    console.log(nameFoul);

}



