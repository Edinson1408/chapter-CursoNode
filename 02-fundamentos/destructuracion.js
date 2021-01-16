let deadpool ={
    nombre: 'wade',
    apellido :'winston',
    poder :'Regeneracion',
    getNombre:()=>`${this.nombre} ${this.apellido} - poder : ${this.poder}`
    
}

//destructuramos un objeto
let {nombre : primerNombre,apellido,poder}= deadpool;

console.log(primerNombre,apellido,poder)