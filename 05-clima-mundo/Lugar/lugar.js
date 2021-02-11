const axios = require('axios')

// axios.get('http://api.openweathermap.org/data/2.5/weather', {
//     params: {
//         q: argv.direccion,
//        appid:'6fd127583fbe90bf985a8270332f6c57',
//        lang:'es'
//     }
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });  

//ejamplo de headers 

// var instace = axios.create({
//     baseURL:'api.openweathermap.org/data/2.5/weather?q=Madrid&appid=6fd127583fbe90bf985a8270332f6c57&lang=es',
//     timeout:1000,
//     headers:{'api':'nombre api'}
// })

// var instace = axios.create({
//     baseURL:'api.openweathermap.org/data/2.5/weather?q=Madrid&appid=6fd127583fbe90bf985a8270332f6c57&lang=es',
//     timeout:1000,
//     headers:{'api':'nombre api'}
// })


// instace.get()
// .t



//   getUser();

 const getLugarLatLong= async (direccion)=> {
    
    
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', 
                                    {
                                        params: {
                                            q: direccion,
                                        appid:'6fd127583fbe90bf985a8270332f6c57',
                                        lang:'es',
                                        units:'metric'
                                        }
                                     })
                //  console.log(response.data);
        // }catch(e){
        //         console.log(e)
        // }
        
        const data= response.data
        const direccion1= data.name
        const lat= data.coord.lat
        const log= data.coord.lon
        const tipo_clima = data.weather[1].description
        const temperatura = data.main.temp

        return {
            direccion1,
            lat,
            log,
            tipo_clima,
            temperatura
        }
        console.log(a)
  }


module.exports={
    getLugarLatLong
}