1 camada:

1 servidor + 1 terminal burro

2 camadas:

Frontend + Backend (Persistência dos Dados no Backend, usando Banco de Dados ou qualquer outra tecnologia)

multi camadas:
Vários frontends e vários backends, todos comunicando entre si

Quais linguagens são usadas para construir uma aplicação completa, com vários servidores que se comunicam?

Frontend (WEB):
HTML (Linguagem de Marcação) e CSS (Linguagem de Estilização)
JavaScript/JS (Linguagem de Programação)

Backend (WEB):
Linguagem de programação: PHP, C#, C++, JavaScript, Java, Python
Motor: Apache, NodeJS, Tomcat, Python



COMUNICAÇÃO DO COMPUTADOR

INTERNET

PROTOCOLO: Method
ENDEREÇO: oceanbrasil.com (52.3.19.137)
PORTA: 80
ALGUMAS INFORMAÇÕES COMPLEMENTARES

http://localhost:3000/

Protocolo (ou Method): http
Endereço: localhost (127.0.0.1)
Porta: 3000


http://localhost:3000/mensagens

Servidor receberá '/mensagens'
Endpoint: /mensagens

Linguagem de comunicação entre os sites é: HTML, CSS e JS

Tenho um site: google.com:80 (Frontend)

Usuário faz uma busca no site, digitando 'servidor' no campo de busca e pressionando 'enter'

O site frontend vai enviar uma requisição para um endereço de IP

Tenho um servidor: api.google.com:3000

// JSON
{
	"busca": "servidor",
	"usuario": 28
}

objetoRecebido = {...}

objetoRecebido.busca // servidor

objetoRecebido.palavras-chave[2]

XML

objetoRecebido.chave
objetoRecebido.chave6.chave

REST ou RESTful

Aplicação de troca de mensagens


Toda requisição possui:
- Endpoint
- Verbo
- Header
- Body

Toda resposta possui:
- Header
- Body

[GET] http://localhost:3000/mensagens
-> Retornar todas as mensagens

- Endpoint: '/mensagens'
- Verbo: GET
- Header: ...
- Body: { "texto": "Eu sou uma mensagem" }

[GET] http://localhost:3000/mensagens/1
-> Retornar a mensagem com ID 1

[POST] http://localhost:3000/mensagens
-> Criar a mensagem

[PUT] http://localhost:3000/mensagens/1
-> Editar a mensagem com ID 1

[DELETE] http://localhost:3000/mensagens/1
-> Remover a mensagem com ID 1

RESTful: A capacidade de uma aplicação se comunicar usando REST
Se uma aplicação sabe a diferença entre POST e GET, ela é uma aplicação RESTful


Principais dúvidas relacionadas ao tema backend:

- COMPARAÇÃO -

From Felipe Lôbo to Everyone:  01:50 PM
as rotas são pensadas antes de codificar ou durante?

From Rodrigo Carneiro to Everyone:  01:51 PM
backend são processos nao controlados pelo usuario?  Não necessariamente precisam usar base de dados?
From Rodrigo Carneiro to Everyone:  01:59 PM
Professor minha pergunta sobre o backend, foi pensando nos sites que fazem crawler (tipo indexadores de precos) e que os dados são buscados independentemente se tem usuario ou nao pedindo a consulta

From Felipe Lôbo to Everyone:  01:52 PM
a escolha do banco de dados (relacional ou n relacional) é importante em q sentido para o backend?

From Welisson Luca to Everyone:  01:53 PM
Quais as diferenças entre o deno js e o node js ?

From }° ) to Everyone:  01:54 PM
Quais as falhas de segurança? 
From }° ) to Everyone:  01:55 PM
falhas de segurança em banco de dados

From }° ) to Everyone:  01:54 PM
Cobol e linguagem de banco de dadoa também

From Antonio Gomes to Everyone:  01:57 PM
Todo framework de web é um motor?

Framework vs Biblioteca
