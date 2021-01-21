


// let getNombre=async()=>{
//     // undefined.name;
//     //especificar un error
//     // throw new Error('No existe el nombre para el usuario');
    
//     return 'Edinson'

// }
//cuando le pones el async es como hacer un prormesa
// let getNombre=()=>{
//     return new Promise((resolve,reject)=>{
//         resolve('fermando')
//     })
// }

//mas elavorado
//forma normal

let getNombre=()=>{
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            resolve('Edinson')
        }, 3000);


    })
}

let saludo=async ()=>{
    //si no se pone el await el codigo seggira  y  si la respuesta demora 
    //entonces el se ejcutara el console.log y el retunr y noo esperar los 
    //3 segundos que son para que se llene la variable nobre
    //compruena quitando el await(let nombre=getNombre();)
    let nombre=await getNombre(); //esperar aque la promesa responda corectamente para proceder con las demas sentencias
    // console.log('vez te dije')
    return `hola ${nombre}`
}


saludo()
.then(mensaje=>console.log(mensaje))
.catch(e=>{
    console.log('Error en Async',e)
})
// console.log(getNombre())
