let empleados =[{
    id:1,
    nombre:'Edinson'
},
{
    id:2,
    nombre:'Rosa'
},
{
    id:3,
    nombre:'Juan'
}
]

let salarios=[
    {
        id:1,
        salario :1000
    },
    {
        id:2,
        salario :2000
    }
]



let getEmpleado=(id)=>{
    //iniciamos una promesa 
    return new Promise((resolve,reject)=>{
        //resolve cuando es correcto
        //reject cuando algo es incorrecto
        let empleadoDB=empleados.find(empleado=>empleado.id===id)
        if(!empleadoDB){
                reject(`No existe un empleado con el Id ${id}`)
        }
        else {
                
                 resolve(empleadoDB) //solo permite enviar un parametro
        }
    })


    
    
}

let getSalario =(empleado)=>{
    return new Promise((resolve,reject)=>{
        let salarioDB=salarios.find(salario=>salario.id===empleado.id)
        if(!salarioDB){
            // callback(`No se encontro salario para ${empleado.nombre}`)
            reject(`No se encontro salario para ${empleado.nombre}`)
        }else{
            
            resolve({nombre:empleado.nombre,salario:salarioDB.salario})
        }
    })
    
}



// getEmpleado(3)
// .then(empleado=>{
//     console.log('Empleado base datos: ',empleado)
//     getSalario(empleado).then(Salario=>{console.log(Salario)},
//     (error)=>{console.log(error)}
//     )
// },(error)=>{
//     console.log(error)
// })

//encademando promesas


getEmpleado(2)
.then(empleado=>{
    
    return getSalario(empleado);

}).then(resp=>{console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)})
.catch(error=>{
    console.log(error)
})