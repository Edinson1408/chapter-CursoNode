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


let getEmpleado= async (id)=>{

        let empleadoDB=empleados.find(empleado=>empleado.id===id)
        if(!empleadoDB){
                throw new Error(`No existe un empleado con el Id ${id}`)
        }
        else {
                
               return  empleadoDB //solo permite enviar un parametro
        }


    
    
}

let getSalario  = async(empleado)=>{
    
        let salarioDB=salarios.find(salario=>salario.id===empleado.id)
        if(!salarioDB){
            // callback(`No se encontro salario para ${empleado.nombre}`)
            throw new Error(`No se encontro salario para ${empleado.nombre}`)
        }else{
            
            return {nombre:empleado.nombre,salario:salarioDB.salario}
        }
    
    
}

let getInformacion=async (id)=>{
    let empleado=await getEmpleado(id)
    let resp =await getSalario(empleado)
    return `${resp.nombre} tiene como salario de ${resp.salario}`
}

getInformacion(2)
.then(mensaje=>{console.log(mensaje)})
.catch(e=>console.log("Error en Async ",e))