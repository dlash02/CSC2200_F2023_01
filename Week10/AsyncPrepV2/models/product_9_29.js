const fs = require('fs');
const path = require('path');

const rootDir = path.dirname(process.mainModule.filename);
console.log( rootDir );

const p = path.join( rootDir, 'data', 'products.json');
console.log( `p=${p}` );

// const products = [];

module.exports = class Product {
    constructor(t, a, p) {
        this.title = t;
        this.author = a;
        this.price = p;
    }

    save() {
        // products.push( this );
        fs.readFile(p, (err, fContent) => {
            // got the file and ready
            let products = [];
            if (!err) {
                products = JSON.parse(fContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log("Write Erro?");
                console.log(err);
            })

        })
    }

    static fetchAll(callB) {
        fs.readFile(p, (err, fContent) => {
            // got the file and ready
            if (err) {
                callB([]);
            }
            callB(JSON.parse(fContent));
        })
    }
}