const fs = require('fs');


function llegirProductes () {

    const data = fs.readFileSync('productes.json', 'utf-8');

    const productes = JSON.parse(data);


    return productes;
}

let productes = [];
productes = llegirProductes();

function mostrarProducte (producte){

}

function mostrarProductes (arrayProductes) {
    for (let i = 0; i < arrayProductes.length; i++) {
        const producte = arrayProductes[i];
        console.log(`ID: ${producte.id},Marca: ${producte.marca}, Nom: ${producte.nom}, Preu: ${producte.preu}, Disponible: ${producte.disponible}}`);
    }
}
mostrarProductes(productes);