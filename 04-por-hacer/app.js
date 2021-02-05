const argv= require('./config/yargs').argv;
const porHacer =require('./por-hacer/por-hacer')
let comando=argv._[0];
const color=require('colors')

switch (comando) {
    case 'crear':
        
        let tarea=porHacer.crear(argv.description);
        console.log(tarea)
        break;
    case 'actualizar':
        console.log('actualizar')
        let actualizado=porHacer.actualizar(argv.description,argv.completado)
        console.log(actualizado)
       break;
    case 'listar':
        console.log('listar')
        let listado=porHacer.getListado();
        for (let tarea of listado) {
            console.log('======por haver========='.green)
            console.log(tarea.description)
            console.log('Estado: ',tarea.completado);
            console.log('========================='.green)
            
        }
        break;
    case 'borrar':
        let borrado=porHacer.borrar(argv.description);
        console.log(borrado)
    break;
    default:
        console.log('No es un comando no reconocido')
        break;
}

// console.log(argv) 