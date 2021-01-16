console.log("inicio de programa")

setTimeout(()=>{
    console.log("primer Timeiut")
},3000)

setTimeout(()=>{
    console.log("segundo Timeiut")
},0)

setTimeout(()=>{
    console.log("Tercero Timeiut")
},0)

console.log("fin  de programa")

//al hacer el callback , esta realizando una peticion , al hacer eso
//el programa espera una respuesta para ejecutar pero sin bloquear las demas
//sentencias

//acad vez quese pide una funcion como api, 
//se va a la cola de callbacks para ser ejecutadas
