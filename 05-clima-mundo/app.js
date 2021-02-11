const getDireccion = require('./Lugar/lugar')
const argv= require('yargs').options(
    {
        direccion :{
            alias:'d',
            desc:'direccion de la ciudad para obtener el clima',
            demand:true,
            


        }
    }
).argv;

// #npm i axios para peticiones http

console.log(argv.direccion)
 Direccionlogitudlat=getDireccion.getLugarLatLong(argv.direccion).then(
     (data)=>console.log(data)
 )

// console.log(Direccionlogitudlat)
