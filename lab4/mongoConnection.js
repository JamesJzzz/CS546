// Zhiyuan(James) Zhang
// Sep 30 2017
// I pledge my honor that I have abided by the Stevens Honor System.

const MongoClient = require("mongodb").MongoClient;
const settings = require("./settings");
const mongoConfig = settings.mongoConfig;

let fullMongoUrl = `${mongoConfig.serverUrl}${mongoConfig.database}`;
let _connection = undefined;

let connectDb = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(fullMongoUrl);
  }

  return _connection;
};

module.exports = connectDb;