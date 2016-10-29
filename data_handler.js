//Testing the bookshelf stuff
'use strict';
var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    port 	 : '5432',
    user     : 'admin',
    password : 'a',
    database : 'inventory',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');




/*Doing it this way but there may be a cleaner way to do it in knex*/
//This is a function to use Knex to create tables
knex.schema.createTableIfNotExists('products', function(table){
 
  table.increments('id').primary();
  table.string('name');
  table.string('type');
  table.integer('quantity');
  table.string('active');

}).then(function () {
  console.log('products Table Created');
});

knex.schema.createTableIfNotExists('parts', function(table){
 
  table.increments('id').primary();
  table.string('name');
  table.integer('quantity');
  table.integer('cost');
  table.integer('recamt');

}).then(function () {
  console.log('parts Table Created');
});

knex.schema.createTableIfNotExists('part_orders', function(table){
 
  table.increments('id').primary();
  table.integer('partid');
  table.integer('quantity');
  table.decimal('totalcost');

}).then(function () {
  console.log('part_orders Table Created');
});


knex.schema.createTableIfNotExists('product_orders', function(table){
 
  table.increments('id').primary();
  table.string('address');
  table.integer('quantity');

}).then(function () {
  console.log('products_orders Table Created');
});

knex.schema.createTableIfNotExists('products_refurb', function(table){
 
  table.increments('id').primary();
  table.string('name');
  table.string('type');
  table.integer('quantity');

}).then(function () {
  console.log('products_refurb Table Created');
});

knex.schema.createTableIfNotExists('parts_requests', function(table){
 
  table.increments('id').primary();
  table.dateTime('datesent');
  table.string('seen');
  table.string('response');

}).then(function () {
  console.log('parts_requested Table Created');
});


var Products = bookshelf.Model.extend({
  tableName: 'products'
});

var Parts = bookshelf.Model.extend({
  tableName: 'parts'
});

var PartOrders = bookshelf.Model.extend({
  tableName: 'parts_orders'
});

var ProductOrders = bookshelf.Model.extend({
  tableName: 'product_orders'
});

var RefurbProducts = bookshelf.Model.extend({
  tableName: 'products_refurb'
});

var ReqParts = bookshelf.Model.extend({
  tableName: 'parts_requests'
});





/*
knex.select().from('parts_').then(function(prods){

    console.log(prods);
});*/


/*
Parts.fetchAll().then(function (transactions) {
        transactions.forEach(function (model) {
            console.log(model)
        })    
    });*/

module.exports = {
  expProducts : bookshelf.model('Products', Products),
  expParts : bookshelf.model('Parts', Parts),
  expPartOrders: bookshelf.model('PartOrders', PartOrders),
  expProductsOrder: bookshelf.model('ProductOrders', ProductOrders),
  expRefurbProducts: bookshelf.model('RefurbProducts', RefurbProducts),
  expReqParts: bookshelf.model('ReqParts', ReqParts),
  knexQuery: knex

}