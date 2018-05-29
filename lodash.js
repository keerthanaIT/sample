console.log('heloo node');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
console.log(_.isString('abc'));
console.log(_.isString(123));
var filteredArray = _.uniq([2,1,3,2,1,5,8,4]);
console.log(filteredArray);

