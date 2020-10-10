require('dotenv').config();
var SequelizeAuto = require('sequelize-auto')


var auto = new SequelizeAuto(process.env.DB_DATABASE , process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    directory: false, // prevents the program from writing to disk
    port: process.env.PORT,
    caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
    additional: {
        timestamps: false
        //...
    },
    tables : ['mst_peb']
})

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  //console.log(auto.foreignKeys); // foreign key list
});

