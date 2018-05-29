console.log('heloo node');
const fs = require('fs');

const _ = require('lodash');
const notes = require('./notes.js');
console.log(process.argv[2]);

var command = process.argv[2];

if(command === 'list'){
    console.log('list al notes');
}
else(command === 'read'){
    console.log('read note');
}


