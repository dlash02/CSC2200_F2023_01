const adminData = require("../routes/admin");
// const Product = require("../models/oproduct");
const Product = require("../models/product");
// let products = [];
exports.getAddProduct = ( req, res, next) => {
    res.render( 'admin/addProduct',
        {
            from: 'addProduct'
        })
}
exports.postAddProduct = ( req, res, next) => {
    let t = req.body.title;
    let a = req.body.author;
    let p = req.body.price
    // res.send(`Made it to postAddProduct title:${t}`);
    const product = new Product( t, a, p );
    product.save();
    res.redirect("/showAdmin");
}
exports.getProducts = ( req, res, next ) => {
    Product.fetchAll()
        .then(( rows, fieldData ) => {
            console.log( "ROws="); console.log( rows );
            // res.send( "Is seems ok ");
            res.render( 'admin/showProductsAdmin', {
                title: "Show Products Available (DB)",
                from: 'showProducts',
                products: rows[0]
            })
        })
 }
exports.deleteProduct = ( req, res, next ) => {
    // Left off here ... need to code delete.
    // It is coded in modles.
    let id = req.params.id;
    console.log( `id:${id}`);

    Product.delete( id )
        .then( (result)  => {
            res.redirect("/showAdmin");
    })
        .catch( err => {
           console.log( "Error on delete");
           console.log( err );
    })
}
exports.editProduct = ( req, res, next ) => {
    let id = req.params.id;
    console.log( "Inside Edit .... id=" +id );
    // fetch all the records and find the idth one
    Product.findById(id)
        .then ((rows, fieldData) =>{
            console.log("ROWS=>");
            // console.log( rows[0][0] );
            // console.log( rows );

            // res.send("It must works");
            res.render( 'admin/ShowUpdateForm', {
                title : `Update record:${id} `,
                id : rows[0].id,
                from: 'updateProducts',
                product: rows[0][0]
            })
        }).catch( err => {
        console.log( "DB Error=>");
        console.log( err );
    })
}
exports.postUpdateProduct = ( req, res, next ) => {
    let id = req.body.productId;
    console.log(`id:${id}`);
    let author = req.body.author;
    let title = req.body.title;
    let price = req.body.price;
    const product = new Product( title, author, price );
    product.update( id )
        .then (( rows, fieldData ) =>{
        res.redirect("/showAdmin");

    }).catch ( err => {
        console.log( "WHat the hec-> "); console.log( err );
    })
    return;

    // console.log( `author:${req.body.author}`)
    // res.send("Happy day are here again made it to most update product" +id);
}