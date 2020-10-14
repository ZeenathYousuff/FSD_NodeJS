/*const products = [];
module.exports= class Product{
    constructor(t) {
        this.title=t;

    }
    save()
    {
        products.push(this)
    }
    static fetchAll()
    {
        return products;
    }
}*/

const fs = require('fs');
const path = require('path');
let products = [];

module.exports = class Product {
    constructor(t,p,d) {
        this.title = t;
        this.price = p;
        this.desc = d;
    }

    save() {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {

            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
        return products;
    }

   static removeProduct(){
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );

        fs.truncate(p, 0, function()
        {
            console.log('done')
        })
    }

};