//  inscrição e processamento (subscriber)

// Importa a biblioteca MQTT para realizar a comunicação com o broker
const mqtt = require('mqtt');

// Importa as configurações do projeto (broker e tópico)
const config= require('./config')


const servidor = mqtt.connect(config.broker)

servidor.on('error',function(erro){
    console.log(erro);
    
})

servidor.on('connect', function(){
    console.log('conectado');
    servidor.subscribe(config.topico, function(){
        console.log('subscrit ativo');
        
    })
    
})

servidor.on('message',function(topico, mensagem){
    try{
    // Converte a mensagem recebida de JSON para um objeto JavaScript
    let temp= JSON.parse(mensagem)
    console.log(temp);
    
    if(temp.temperatura>28){
        temp.estado='alta'
    }
    else if(temp.temperatura>=18||temp.temperatura==28){
        temp.estado='normal'
    }
    else if(temp.temperatura<18){
        temp.estado='baixa'
    }
      console.log(temp);
    }
    catch{
        // Caso a mensagem não seja um JSON válido,
        // exibe seu conteúdo original como texto
        console.log(mensagem.toString());
        
    }
})