const db = require( "../util/database");

module.exports = class Product {
    // add more attributes to model
    constructor(t, imageURL, author, price, description ) {
        this.title = t;
        this.imageURL = imageURL;
        this.description = description;
        this.author = author;
        this.price = price;
    }
    save() {
        return db.execute( 'insert into products (title, price, author, imageURL, description) ' +
            'values (?, ?, ?, ?, ?) ',
            [this.title, this.price, this.author, this.imageURL, this.description ]
        )
    }

    static fetchAll(  ) {
        // allows the caller to deal with than and catch error
        /// but instead return entire promise to let upper module
        // deal with exception.
        return db.execute( "select * from products");
        //  .then( result => {
        //      console.log( "Res=");
        //      console.log( result );
        //      return result;
        // })
        // .catch( err => {
        //  console.log("DB Error=" + err)
     }
    static findById( id, callB ) {
        return db.execute( 'select * from products where products.id = ?', [id]);
    }
}