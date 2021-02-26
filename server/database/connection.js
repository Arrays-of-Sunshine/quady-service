const { Client } = require('pg');

const postgresRole = 'samquady';

const client = new Client({
  user: postgresRole,
  host: 'localhost',
  database: 'sdc',
  password: 'password',
  port: 5432
});

client.connect();

const dumpMaster = `
DROP TABLE IF EXISTS masterRecords;
`;

const createMasterquery = `
CREATE TABLE IF NOT EXISTS masterRecords (
  id int,
  name varchar,
  category varchar,
  manufacturer varchar,
  PRIMARY KEY (id)
);
`;

const copyQuery = `
COPY masterRecords
FROM '/Users/samquady/Work/sdc-team/general-sales/csv-data/primary-records.csv'
DELIMITER ','
CSV HEADER;
`;

const searchQuery = `SELECT * FROM masterRecords WHERE id = `

client
  .query(dumpMaster)
  .then(res => {
    console.log('table dropped');
  })
  .catch(err => {
    console.log('error');
  });

client
  .query(createMasterquery)
  .then(res => {
    console.log('table created');
  })
  .catch(err => {
    console.log('error', err);
  });

client
  .query(copyQuery)
  .then(res => {
    console.log('table copied');
  })
  .catch(err => {
    console.log('error', err);
  })

  const getItemData = (id, cb) => {
    client.query(searchQuery + id, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        cb(null, results.rows);
      }
    })
  }

  module.exports = {
    client,
    getItemData
  }