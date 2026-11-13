// # simulação e publicação (publisher)

//  inscrição e processamento (subscriber)

const mqtt = require('mqtt');


const servidor = mqtt.connect('mqtt://localhost:1883')

const senso =require('./temperatura')

senso.leituratemperatura

async function name() {
    console.log(await senso.leituratemperatura(10,20));
}

name()

servidor.on('error',function(erro){
    console.log(erro);
    
})

servidor.on('connect', function(){
    console.log('conectado');
    servidor.publish('laboratorio/sala1/temperatura','ola', function(){
        console.log('publicador ativo');
        
    })
    servidor.end()
    
})
