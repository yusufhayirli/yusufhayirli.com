/* eslint-disable no-undef */
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'yh-database';
const collectionName = 'yh-collection';

let db, collection;

MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to MongoDB server");

  db = client.db(dbName);
  collection = db.collection(collectionName);
});

module.exports = {
  findAll: function() {
    return collection.find().toArray();
  },

  findById: function(id) {
    return collection.findOne({ _id: id });
  },

  insert: function(data) {
    return collection.insertOne(data);
  },

  update: function(id, data) {
    return collection.updateOne({ _id: id }, { $set: data });
  },

  delete: function(id) {
    return collection.deleteOne({ _id: id });
  }
};
