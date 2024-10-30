const fs = require('fs');

const data = fs.readFileSync('productes.json', 'utf-8');

const productes = JSON.parse(data);


function llegirProductes (arrayProductes) {

    for (let i = 0; i < arrayProductes.length; i++) {
        const producte = arrayProductes[i];
        console.log(`ID: ${producte.id}, Nom: ${producte.nom}, Preu: ${producte.preu}`);
    }



}
console.log(llegirProductes(productes));