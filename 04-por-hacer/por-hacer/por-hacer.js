

const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

let listadoPorHacer=[];


const guardarDB=()=>{
    let data =JSON.stringify(listadoPorHacer);

    return new Promise((resolve,reject)=>{
        fs.writeFile(`db/data.json`,data, (err) => {
            // if (err) throw err;
            // console.log('el archivo ha sido creado');
            if(err) reject(err)
            else
                resolve('se creo el registro')
            
            // console.log(`El archivo ha sido creado`)
            });
    })
}

const cargarDb=()=>{
    try{
        listadoPorHacer=require('../db/data.json');
    }
    catch{
        listadoPorHacer=[];
    }
}



const crear =(description)=>{
    cargarDb();
    let porHacer={
        description,
        completado:false
    };

    listadoPorHacer.push(porHacer)
    guardarDB()
    return porHacer;
}

const getListado=()=>{
    cargarDb();
    return  listadoPorHacer;   
}

const actualizar=(description,completado=true)=>{
    cargarDb();
    //este index valida la posicion de la tarea
    let index=listadoPorHacer.findIndex(tarea=>{
        return tarea.description === description;
    })
    //si no encuentra dato te enviara el -1
    if (index>=0){
        listadoPorHacer[index].completado=completado;
        guardarDB();
        return true
    }else {
        return false
    }


}
const borrar=(description)=>{
        cargarDb();
        let index=listadoPorHacer.findIndex(tarea=>{
            return tarea.description === description;
        })
        if (index >=0) {
            // delete   listadoPorHacer[index]    
            listadoPorHacer.splice( index, 1 );
            guardarDB();        
            return true
        }
        else{
            return false
        }

}
module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}