// var express = require('express');
// var app = express();
// var path = require('path');
// var bodyParser = require('body-parser')
// var http = require('http').Server(app);
// const https = require('https');
// const request = require('request');

// var allowCrossDomain = function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// }

// app.get('/', (req, res) => res.send('Hello World!'));
// var port = process.env.PORT || 3005;
// app.listen(port);
// console.log('server is running on port ',port);



const express = require('express')
const app = express()
const port = 3000

var parser = require('simple-excel-to-json')
var doc = parser.parseXls2Json('/Users/vimalkovath/Downloads/COVID19-India.xlsx');

app.get('/', (req, res) => res.send('Hello World!',doc))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
