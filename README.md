<p align="center">
    <h2 align="center">Lucas Amorim Lima</h2>
</p> 

# Desafio Coodesh
This is a challenge by <a href="https://coodesh.com/">Coodesh</a>

## :rocket: Quick start

### Step 1: Clone o repositório 

Fork o repositório. em seguida, clone-o localmente fazendo:

```bash
https://github.com/LucasAmorimLima/coodesh
```

### Step 2: Instalando as dependências 

Entre no diretório

```bash
cd coodesh
```

Instalando todas as dependências 
```bash
npm install
```

### Step 3: Iniciando o server de desenvolvimento

Para iniciar o server de desenvolvimento exculte:
```
npm run dev
```

## :open_file_folder: O que têm dentro?

Um rápido overview da estrutura do projeto
```
    .
    ├── controller
    │   ├───error
    │   ├───types
    │   └───validator
    ├── domain
    ├── infra
    │   ├───axios
    │   ├───cronJob
    │   |───validator
    │   ├───database
    │   └───emailService
    ├── main
    │   ├───adapters
    │   |───config
    │   ├───factories
    │   └───routes
    ├── use-cases
    │   ├───articles
    │   |───dto
    │   ├───error
    │   └───repositories
```

## Bibliotecas e Frameworks ultilizados

1. Express
2. Lodash
3. Swagger
4. typescript
5. Joi
6. Moment
7. Mongoose
8. NodeEmail
9. Node-cron
10. Axios


## Explicações

1. Express
  
  Usei o express, mesmo não sendo o framework mais produtivo para mostrar meus conhecimento na base do Node,
  framework como NestJS tem um desenvolvimento de APIs mais opinado, entretando também desenvolvo em NestJS.
  
2. lodash

  É uma biblioteca para manipulação de arrays, gosto de usá-la porque as operações de array se tornam mais concisas e evitam código adicional.
  
3. Swagger

  Ultilizo para fazer a documentação dos projetos sendo que também é possível testa-la, está funcionalidade considero muito importante pois o FrontEnd irá saber extamente como é o retormo recebido dos endpoints.
  
4. Typescript

  Umas das pricipais vantagens do Typescript é a detecção de erros durante o desenvolvimento é possivel também ultilizar o IntelliSense da IDE facilitando ainda mais o desenvolvimento,  o  Typescript também conta com algumas funções que ainda não são nativas no node, além de ajudar na manutenabilidade do código, por ser uma estrutura mais tipada.
  
5. Joi

  Responsáveis pelas validações dos endpoints, faz o tratamento dos dados enviados para a API para garantir que são os dados esperados, além de evitar erros internos na aplicação.
    
6. Moment

  Biblioteca resposável por manipulação e criação de data, operações com datas sempre são complicadas, pelo menos eu me enrolo um pouco, moment me ajuda facilitando a manipulação delas.
  
7. Mongoose

  Um ORM, ou seja uma é responsável pro criar uma camada entre o banco de dados e a aplicação, já uso a algum tempo, porém há sempre novas descobertas, como por exemplo a possibilidade de usar
  id auto increment numérico ao invés de um ObjectId.

  8. Nodemailer
  
  Uma biblioteca resposável por configurar o envio de email, gosto muito pela sua práticidade, é muito fácil de implementa-la e conseguir um resultado bom.
  
 9. Node-cron

  Uma biblioteca para criação de Crons que basicamente é um arquivo que de tempos em tempos é execultado, dá pra fazer na mão com setTimeout, mas a abstração que uma biblioteca trás 
  é muito boa.

  10. Axios

  Axios é um cliente HTTP leve baseado no serviço $http dentro do Angular.js v1.x e é semelhante à API Fetch nativa do JavaScript. O Axios é baseado em promessas, o que lhe dá a capacidade de aproveitar a assíncrona do JavaScript e esperar por um código assíncrono mais legível.
  
## Swagger

Depois que a aplicação é iniciada, voçê pode ver a documentação do projeto acessando :
```
http://localhost:3333/api-docs
```

## Tests

Uma vez que o aplicativo é iniciado, você pode fazer o teste do aplicativo executando o comando:

```
npm test
```

## Notificação do CronJob

Quando acontece algum erro no código do cron, é enviado um email para mim, para modificar basta ir em mail.ts no método sendEmail

atualmente está assim
```
... other configs
to: {
  name: "lucas",
  address: "lucasamorimlima17@gmail.com",
},
from: {
  name: 'Equipe do Meu App',
  address: 'equipe@meuapp.com',
},
```
eu meio que chumbei pra quem seria enviado, porém para que a classe possa ser usada em outros lugares, seria necessário apenas passar o name e address como parâmetros




