//Testing the bookshelf stuff
'use strict';
var knex = require('knex')({
  client: 'pg',
/*
  connection: {
    host     : 'localhost',
    port 	 : '5432',
    user     : 'dcr',
    password : '',
    database : 'inventory',
    charset  : 'utf8'
  }
*/
  connection: {
    host     : '127.0.0.1',
    port     : '5432',
    user     : 'admin',
    password : 'a',
    database : 'inventory',
    charset  : 'utf-8'
  }
});

var bookshelf = require('bookshelf')(knex);




var Parts = bookshelf.Model.extend({
  tableName: 'parts'
});



/*Doing it this way but there may be a cleaner way to do it in knex*/
//This is a function to use Knex to create tables
knex.schema.createTableIfNotExists('products_', function(table){
 
  table.increments('id').primary();
  table.string('name');
  table.string('type');
  table.integer('quantity');
  table.integer('active');

}).then(function () {
  console.log('Products_ Table Created');
});

knex.schema.createTableIfNotExists('parts_', function(table){
 
  table.increments('id').primary();
  table.string('name');
  table.integer('quantity');
  table.integer('cost');
  table.integer('RecAmt');

}).then(function () {
  console.log('parts_ Table Created');
});

knex.schema.createTableIfNotExists('orders', function(table){
 
  table.increments('id').primary();
  table.integer('partid');
  table.integer('quantity');
  table.decimal('totalcost');

}).then(function () {
  console.log('orders Table Created');
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
  table.dateTime('dateSent');
  table.string('seen');
  table.string('response');

}).then(function () {
  console.log('parts requested Table Created');
});


//Loops and prints each row in the Transactions table
Parts.fetchAll().then(function (transactions) {
        transactions.forEach(function (model) {
            console.log(model)
        })    
    })