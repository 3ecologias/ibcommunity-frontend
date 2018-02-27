Rodar o projeto tem que ter o node instalado no pc

1 -> Clonar o Projeto

2 -> No diretorio do projeto pelo terminal "npm install", depois que instalar todas as dependencias com sucesso

2 -> Executar "npm start" assim rodar o projeto.


Deploy no projeto (aconselhavel fazer estas etapas no servidor)

1 -> Clonar o Projeto

2 -> No diretorio do projeto pelo terminal "npm install", depois que instalar todas as dependencias com sucesso

3 -> Executar "npm run build" então o projeto será buildado para estar pronto deploy

4 -> Depois de todos os arquivos serem gerados, será criada uma pasta chamada build na raiz do projeto

5 -> Dentro da pasta build estara o site convertido para deploy

6 -> Copie todo o conteudo para a pasta publica do html, Geralmente em /var/www/public_html mas depende de qual sistema está sendo usado
