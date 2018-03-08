Rodar o projeto tem que ter o node instalado no pc

1 -> Clonar o Projeto

2 -> No diretorio do projeto pelo terminal "npm install", depois que instalar todas as dependencias com sucesso

2 -> Executar "npm start" assim rodar o projeto.


Os passos pra deploy ou update do projeto são:
1 - Clona o projeto ou git pull
2 - npm install (ou yarn install) depende do gerenciador de pacotes que você usar
3 - npm run build para buildar a versão de produção
4 - na pasta do projeto rode o comando pm2 start serve.js

OBS: Se o nginx nao tiver configurado, configurar para o endereço "IP:8001"
OBS1: Tem que ter instalado o pacote pm2 no sistema basta dar npm install -g pm2, yarn global add pm2 (talvez precise de sudo)
