//  inscrição e processamento (subscriber)

const mqtt = require('mqtt');
const { LOADIPHLPAPI } = require('node:dns');

const servidor = mqtt.connect('mqtt://localhost:1883')

servidor.on('error',function(erro){
    console.log(erro);
    
})

servidor.on('connect', function(){
    console.log('conectado');
    servidor.subscribe('laboratorio/sala1/temperaturai', function(){
        console.log('subscrit ativo');
        
    })
    
})

servidor.on('message',function(topico, mensagem,c){
    console.log(topico,"\n", mensagem.toString(), "\n",c);
    
})