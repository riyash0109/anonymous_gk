const {readFileSync, read, readFile} = require('fs')
var loadjson = ()=>JSON.parse(readFileSync('stadium.json'))
var data = readFileSync('stadium.json')
console.log(JSON.parse(data)['roaster'][0])
module.exports = {loadjson};