//require
 const fs = require('fs');
 const colors=require('colors')


let listarTabla=(base,limite=10)=>{

    console.log('=========================='.green)
    console.log(`tabla de ${base}`.green)
    console.log('=========================='.green)
    for (let i = 1; i <= limite; i++) {
        // data+=`${base} * ${i} = ${base*i} \n`,
        console.log(`${base} * ${i} =`,base*i)

        }
        
} 

let CrearArchivo=(base,limite=10)=>{
    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject(`El valor introducido  no es un numero`);
            return;
        }

        let data=''
        for (let i = 1; i <= limite; i++) {

        data+=`${base} * ${i} = ${base*i} \n`,
        console.log(`${base} * ${i} =`,2*i)

        }


        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`,data, (err) => {
        // if (err) throw err;
        // console.log('el archivo ha sido creado');
        if(err) reject(err)
        else
            resolve(`tabla-del-${base}-al-${limite}.txt`.green)
        
        // console.log(`El archivo ha sido creado`)
        });
    })
}

 module.exports={
     CrearArchivo,
     listarTabla
 }
