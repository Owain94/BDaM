const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const config = {
  user: 'glodinas',
  database: 'g1',
  password: 'cdx-BMW-G85-CpM',
  host: 'g2.ctggsm3hdmic.eu-central-1.rds.amazonaws.com',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
};

router.post('/', function(req, res, next) {
  const results = [];

  console.log(req.body['command']);

  pg.connect(config, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    
    const query = client.query(req.body['command']);
    query.on('row', (row) => {
      results.push(row);
    });

    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

module.exports = router;
