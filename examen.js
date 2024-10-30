const fs = require('fs');




function llegirProductes () {

    const data = fs.readFileSync('productes.json', 'utf-8');

    const productes = JSON.parse(data);


    return productes;
}

productes = llegirProductes();