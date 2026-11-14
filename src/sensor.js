// # simulação e publicação (publisher)

const mqtt = require('mqtt');
const sensor =require('./temperatura')
const config=require('./config')


// Função assíncrona responsável por realizar a leitura
// do sensor e publicar os dados no broker MQTT
async function leitura_sensor_temperatura(){
    let dados=null
    try{
        // Aguarda a leitura do sensor ser concluída
        // e armazena os dados retornados
        dados= await sensor.temperatura()
    }
    catch(erro){
        // Caso ocorra uma falha na leitura do sensor,
        // armazena a mensagem de erro para publicação
        dados= erro 
    }

    const servidor = mqtt.connect(config.broker)

    servidor.on('error',function(erro){
        console.log("erro ao conectar ao mqtt\ninformação do erro: "+erro);
    })

    servidor.on('connect', function(){
        servidor.publish(config.topico,dados,function(){
            console.log('dados enviado');
            
        })
        servidor.end()
        
    })
}

//Executa a função de leitura e publicação repetidamente,
// respeitando o intervalo definido no arquivo de configuração
setInterval(leitura_sensor_temperatura,config.intervalo)

