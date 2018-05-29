const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const res = notes.addNote();
console.log (res);
var  result = notes.add(2,2);
console.log(result);
var user = os.userInfo();
console.log(user.username);
fs.appendFile('message.txt','heloo/'+ user.username + notes.age);

