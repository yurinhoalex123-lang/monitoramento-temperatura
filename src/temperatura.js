// # funções de leitura/validação
let sensor ={
    id:null,
    temperatura:null,
    unidade_medida:'celsius',
    timestamp:null,
}

function aleatorio(){

    return Math.floor(Math.random()*11)+Math.floor(Math.random()*11)+Math.floor(Math.random()*11)+8
}


function leituratemperatura(id,temp,){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
        sensor.id= 'sensor-sala-01'
        console.log(aleatorio());
        sensor.temperatura= aleatorio()
        sensor.timestamp=new Date().toISOString()
        resolve(JSON.stringify(sensor))
        },3000)
    });
}


module.exports= {leituratemperatura}