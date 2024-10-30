const fs = require('fs');

const data = fs.readFileSync('productes.json', 'utf-8');

const productes = JSON.parse(data);


function llegirProductes (arrayProductes) {

    for (let i = 0; i < arrayProductes.length; i++) {
        const producte = arrayProductes[i];
        console.log(`ID: ${producte.id},Marca: ${producte.marca}, Nom: ${producte.nom}, Preu: ${producte.preu}`);
    }



}
console.log(llegirProductes(productes));
"id": 1,
        "nom": "Portàtil",
        "marca": "Dell",
        "categoria": "Electrònica",
        "preu": 850,
        "disponible": true,
        "caracteristiques": {
            "memoria": "16GB",
            "disc_dur": "512GB SSD",
            "processador": "Intel i7"
        }