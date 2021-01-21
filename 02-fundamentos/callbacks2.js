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


let getEmpleado=(id,callback)=>{
    let empleadoDB=empleados.find(empleado=>empleado.id===id)
    if(!empleadoDB){
            callback(`No existe un empleado con el Id ${id}`)
    }
    else {
        // console.log(empleadoDB)
        callback(null,empleadoDB)
    }
    
}

let getSalario =(empleado,callback)=>{
    // let empleadoDB=empleados.find(empleado=>empleado.id===id)
    let salarioDB=salarios.find(salario=>salario.id===empleado.id)
    if(!salarioDB){
        callback(`No se encontro salario para ${empleado.nombre}`)
    }else{
        
         callback(null,{nombre:empleado.nombre,salario:salarioDB.salario})
    }
}   


getEmpleado(1,(error,empleado)=>{
        if(error){
            return console.log(error)
        }
        
            console.log(empleado)
        getSalario(empleado,(error,resp)=>{
                if(error){
                    return console.log(error)
                }else{
                     console.log(resp)
                }
        })

})




// let obtener_reuniones=(idevento,callback)=>{
//     let evento={idevento}
//     if (idevento===1) {
//         //hacer un posto con el detalle del evento
//         callback(null,{evento:1,detalle:[{nombre:'evento1'}]} )
//     }else{
//         callback('Error', {evento})
//     }
    
// }

// obtener_reuniones(1,(erro,data)=>{
//     if (erro) {
//         return console.log('Error demelas',erro)
//     }else {
//         console.log(data)
//         //creamos las vista pe ppa
//     }
// })