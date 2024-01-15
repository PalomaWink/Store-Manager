# Store Manager

Essa aplicação se trata de uma API RESTful utilizando a arquitetura em camadas. a API que foi construida é um sistema de gerenciamento de vendas em que é possível criar, visualizar, deletar e atualizar produtos e vendas. Foi utilizado o banco de dados MySQL para a gestão de dados e desenvolvidos testes para garantir as funcionalidade das implementações.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [ESLint](https://eslint.org/)
- [Sequelize](https://sequelize.org/)
- [Mocha](https://mochajs.org/)
- [SQL]

## Estrutura do Projeto

O projeto é dividido em várias partes:

- `backend`: Esta é a pasta principal do código do servidor. Ela contém o código do servidor express (`app.js` e `server.js`), os controladores (`controllers/`), os middlewares (`middlewares/`) e os modelos (`models/`).
- `__tests__`: Esta pasta contém todos os testes do projeto.
- `sql`: Esta pasta contém scripts SQL para migrações e seeds.

## Como Executar o Projeto

Para executar este projeto, você precisará ter Node.js, npm e Docker instalados em sua máquina. Depois de clonar o repositório, você pode instalar as dependências com `npm install` e iniciar o servidor com `npm start`.

## Testes

Os testes podem ser executados com o comando `npm test`.

## Docker

Este projeto inclui um `Dockerfile` e um `docker-compose.yml`, permitindo que seja facilmente construído e executado dentro de um contêiner Docker.

## Contribuição

Este projeto é para fins educacionais, portanto, pull requests não serão aceitos.

## Licença

MIT
