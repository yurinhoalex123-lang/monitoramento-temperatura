  <!-- # instalação, execução e evidências -->

  🌡️ Sistema de Monitoramento de Temperatura com MQTT
📌 Sobre o projeto

Este projeto consiste em uma simulação de um sistema de monitoramento de temperatura utilizando o protocolo MQTT (Message Queuing Telemetry Transport) e Node.js.

O sistema simula a leitura de um sensor de temperatura, realiza a publicação dos dados em um broker MQTT e utiliza um subscriber para receber e processar as informações.

A partir da temperatura recebida, o sistema classifica o ambiente em três estados:

Alta: temperatura superior a 28 °C.
Normal: temperatura entre 18 °C e 28 °C.
Baixa: temperatura inferior a 18 °C.

O objetivo é demonstrar, na prática, a comunicação entre dispositivos utilizando o protocolo MQTT, simulando um cenário de Internet das Coisas (IoT).

⚙️ Tecnologias utilizadas
Node.js – Ambiente de execução JavaScript.
MQTT – Protocolo de comunicação utilizado na troca de mensagens.
Mosquitto – Broker MQTT.
MQTT.js – Biblioteca utilizada para comunicação MQTT.
📁 Estrutura do projeto
text
projeto/
│
├── config.js
├── temperatura.js
├── publisher.js
├── subscriber.js
├── package.json
└── README.md

Descrição dos arquivos

config.js

Armazena as configurações utilizadas pelo sistema, como:

Endereço do broker MQTT.
Tópico de comunicação.
Intervalo entre as leituras.

temperatura.js

Responsável por simular o sensor de temperatura. O módulo:

Gera valores aleatórios de temperatura.
Define o identificador do sensor.
Registra a data e hora da leitura.
Simula uma possível falha durante a leitura.
Retorna os dados no formato JSON.

publisher.js

Responsável pela publicação das informações no broker MQTT. O publisher:

Solicita uma leitura ao sensor.
Trata possíveis erros na leitura.
Estabelece conexão com o broker MQTT.
Publica os dados no tópico configurado.
Encerra a conexão após a publicação.

subscriber.js

Responsável por receber e processar as mensagens publicadas. O subscriber:

Estabelece conexão com o broker MQTT.
Inscreve-se no tópico configurado.
Recebe as mensagens enviadas pelo publisher.
Converte os dados recebidos de JSON para objeto JavaScript.
Classifica a temperatura de acordo com os limites definidos.
🔄 Funcionamento do sistema

O funcionamento acontece seguindo as seguintes etapas:

O sensor simula uma leitura de temperatura.
Os dados são organizados em um objeto e convertidos para JSON.
O publisher recebe os dados do sensor.
O publisher estabelece conexão com o broker MQTT.
As informações são publicadas no tópico laboratorio/sala1/temperatura.
O subscriber recebe a mensagem através da inscrição no tópico.
A temperatura é analisada e classificada como alta, normal ou baixa.
📡 Formato dos dados

As mensagens publicadas pelo sensor seguem a seguinte estrutura:

json
{
  "id": "sensor-sala-01",
  "temperatura": 25,
  "unidade_medida": "celsius",
  "timestamp": "2026-11-13T18:00:00.000Z"
}


Após o processamento pelo subscriber, o campo estado é adicionado:

json
{
  "id": "sensor-sala-01",
  "temperatura": 25,
  "unidade_medida": "celsius",
  "timestamp": "2026-11-13T18:00:00.000Z",
  "estado": "normal"
}

🛠️ Configurações

As configurações do projeto estão definidas no arquivo config.js:

javascript
const broker = 'mqtt://localhost:1883'
const topico = 'laboratorio/sala1/temperatura'
const intervalo = 3000

module.exports = {
    broker,
    topico,
    intervalo
}

Configuração	Descrição
broker	Endereço do servidor MQTT.
topico	Tópico utilizado para publicação e inscrição.
intervalo	Intervalo de execução em milissegundos (3 segundos).
🚀 Como executar o projeto
1. Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

Node.js.
npm.
Um broker MQTT, como o Mosquitto.

O broker deve estar em execução no endereço localhost:1883.

2. Instalar as dependências

Na pasta do projeto, execute:

bash
npm install mqtt

3. Executar o subscriber

Abra um terminal e execute:

bash
node subscriber.js


O subscriber irá se conectar ao broker MQTT e se inscrever no tópico configurado.

4. Executar o publisher

Abra outro terminal e execute:

bash
node publisher.js


O publisher começará a realizar as leituras simuladas e publicar os dados no tópico a cada 3 segundos.

📊 Exemplo de saída

Um exemplo de mensagem recebida e processada pelo subscriber:

text
conectado
subscrit ativo

{
  id: 'sensor-sala-01',
  temperatura: 25,
  unidade_medida: 'celsius',
  timestamp: '2026-11-13T18:00:00.000Z'
}

{
  id: 'sensor-sala-01',
  temperatura: 25,
  unidade_medida: 'celsius',
  timestamp: '2026-11-13T18:00:00.000Z',
  estado: 'normal'
}

🎯 Objetivos de aprendizagem

Com o desenvolvimento deste projeto, é possível compreender:

O funcionamento do protocolo MQTT.
A comunicação entre publisher e subscriber.
A utilização de tópicos para troca de mensagens.
A conexão de aplicações Node.js com um broker MQTT.
A simulação de sensores em sistemas IoT.
O tratamento de erros utilizando try/catch e Promises.
O processamento de dados recebidos em formato JSON.
📚 Considerações finais

O projeto demonstra uma aplicação básica de comunicação IoT utilizando MQTT, simulando um sensor de temperatura e permitindo o monitoramento de suas leituras através de um sistema de publicação e inscrição.

A estrutura também permite futuras melhorias, como integração com sensores físicos, armazenamento das leituras em banco de dados, criação de dashboards e implementação de alertas para temperaturas fora dos limites estabelecidos.