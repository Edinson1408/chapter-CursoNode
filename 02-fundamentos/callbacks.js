//simple

// setTimeout(() => {
//     console.log('Hola Mundo')
// }, 3000);


//funciones dentro de otra funcion que puedes ejecutar cuando termine la funcion ptincipal
//osea la que no envias como parametro
let getUsuarioById=(id,callback)=>{
    let usuario ={
        nombre: 'Fernando',
        id
    }

    if(id ===20){
            callback(`El usuario  con id ${id} , no existe en la BD`)
    }else 
    {
        callback(null, usuario);
    }
}

getUsuarioById(10,(error,usuario)=>{
    if(error){
        return console.log(error)
    }
    console.log(`usuario de base de datos`,usuario)
})