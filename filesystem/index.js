const fs = require('fs')
const {resolve} = require('path')

const fileReadCallback = (error, data) => {
  if(error){
    return console.log('Gagal membuka berkas')
  }
  console.log(data)
}

const data =fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);

console.log(data)