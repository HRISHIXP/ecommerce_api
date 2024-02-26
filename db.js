const mysql = require('mysql2/promise');
const config = require('./config');

var resp = {
    ecommerce:null
}
async function connectToDB(dbName ="ecommerce"){
    const connection = await mysql.createConnection(config[dbName]);
    return connection;
}


module.exports.initDB = async function initDB(dbName = 'ecommerce'){
    resp[dbName] = await connectToDB(dbName);
}

//ddl
//dml

module.exports.executQuery = async function executQuery(query,placeholders,dbName ='ecommerce'){
    if(!resp[dbName]){
        await this.initDB(dbName);
    }

    const [results,fields] = await resp[dbName].execute(query,placeholders);
    return results;
}

db.executQuery("select * from order wgere id = ?",[1]);
db.executQuery("create table  ",[]);