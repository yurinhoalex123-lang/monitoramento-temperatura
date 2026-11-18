// # funções de leitura/validação
const config=require('./config')

let sensor ={
    id:null,
    temperatura:null,
    unidade_medida:'celsius',
    timestamp:null,
}


// Retorna a soma de três números aleatórios entre 0 e 10, mais 8.
function aleatorio(){

    return Math.floor(Math.random()*11)+Math.floor(Math.random()*11)+Math.floor(Math.random()*11)+8
}


function temperatura(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
        if(Math.random()*10<9){
            sensor.id= 'sensor-sala-01'
            sensor.temperatura= aleatorio()
            sensor.timestamp=new Date().toISOString()
            resolve(JSON.stringify(sensor))
        }
        else{
            reject("falha na leitura sensor-sala-01")
        }
        },config.intervalo)
    });
}

// Exporta a função temperatura para que possa ser utcilizada
// em outros arquivos do projeto, como o publisher.js
module.exports= {temperatura}