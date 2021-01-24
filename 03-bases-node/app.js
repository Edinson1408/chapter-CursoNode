// //require
// const fs = require('fs');

const { alias } = require('yargs');




//DEstructuracion
//const {CrearArchivo}= multiplicar =require('./multiplicar/multiplicar')
// const fs = require('express');//es instalble no son paquetes nativos de nodejs
// const fs = require('./fs'); //son archivos que nosotros creamos



//  let base=7

// console.log(multiplicar)
// console.log(process.argv)
//ejecutar node app --base=5
// let argvr=process.argv
// let parametro=argvr[2]
// let base=parametro.split('=')[1]
// console.log(parametro)
//   CrearArchivo(base)
//   .then(archivo=>console.log(`Archivo creado : ${archivo}`))
// .catch(e=>console.log(e))

  //el archivo packege.jsom //es para tener las dependencias que nuestra app 
  //necesita para ejecutarse
//instalacion que son necesarias
//npm i yargs --save
//cuando des desarrollo
//npm i --save-dev nodemon
//para desinstalar
//npm uninstall nodemon 

/****************************usando yars argv */
// que es un paquete pirata de NPM que permite argumentos de línea de comandos para NodeJs.
//los comandos es para saber que comandos utilizaras
//en este caso tenemos defindos base es para poder escribir
//un comando diciendo --base (node app --base )
//si  no mandas el comando de --base tendras un error y te dira que 
//que base es requerido

//lo enviamos a mi archivos yargs.js

const argv=require('./config/yargs').argv;

const colors=require('colors')

const {CrearArchivo,listarTabla}=require('./multiplicar/multiplicar')

//let argv2=process.argv;
console.log(argv)
console.log(argv.base)
console.log(argv.limite)

let comando =argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar')
        listarTabla(argv.base,argv.limite)
        break;
    case 'crear':
        console.log('Crear')
          CrearArchivo(argv.base,argv.limite)
            .then(archivo=>console.log(`Archivo creado :`.red ,`  ${archivo}`))
            .catch(e=>console.log(e))
        break;
    default:
        console.log('Comando no reconocido')
        break;
}






