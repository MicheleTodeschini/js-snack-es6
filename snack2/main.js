console.log('funzia');

/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

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


for (let i = 0; i < squadre.length; i++) {
    if (squadre[i].punti == 0) {
        squadre[i].punti = Math.floor(Math.random() * 100);
        console.log(squadre[i]);

    }

}

