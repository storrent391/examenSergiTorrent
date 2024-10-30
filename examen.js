const fs = require('fs');


function llegirProductes () {

    const data = fs.readFileSync('productes.json', 'utf-8');

    const productes = JSON.parse(data);


    return productes;
}

let productes = [];
productes = llegirProductes();


let producte = [];
producte = productes[1];
function mostrarProducte (producte){
    console.log(`ID: ${producte.id}, Marca: ${producte.marca}, Nom: ${producte.nom}, Preu: ${producte.preu}, Disponible: ${producte.disponible}}`);
}

function mostrarProductes (arrayProductes) {
    for (let i = 0; i < arrayProductes.length; i++) {
        const producte = arrayProductes[i];
        console.log(`ID: ${producte.id},Marca: ${producte.marca}, Nom: ${producte.nom}, Preu: ${producte.preu}, Disponible: ${producte.disponible}}`);
    }
}
function mostrarProducteID(productes, id) {
    const producte = productes.find(producte => producte.id === id);
    
    
    if (producte) {
        console.log(`ID: ${producte.id}, Marca: ${producte.marca}, Nom: ${producte.nom}, Preu: ${producte.preu}, Disponible: ${producte.disponible}`);
        
    } else {
        console.log('Producte no trobat');
    }
}
mostrarProducte(producte);

mostrarProductes(productes);

mostrarProducteID(productes, 4);