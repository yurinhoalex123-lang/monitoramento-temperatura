// # funções de leitura/validação
let sensor ={
    sensor_id:null,
    temperatura:null,
    unidade_medida:'celsius',
    timestamp:new Date().toISOString(),
    status:null
}

module.exports = sensor;

function