# API de integração com API Pública do GitHub

- ### **Devido ao que foi solicitado ser apenas uma consulta a uma API externa, acredito que uma função lambda já atenderia muito bem a demanda de forma mais barata, rápida e eficiente. Versão otimizada para função lambda implementada em outra branch, e pode ser encontrada [clicando aqui](https://github.com/CiroGomes/list-repos-github/tree/main)**
- ### Esta versão é um backend um pouco mais incrementado, contendo um servidor NodeJS, utilizando conceitos SOLID, rotas e teste de integração.

---

- API utilizando NodeJS na versão 14.x.x.
- Como servidor não está online, é possível baixar o código e seguir os seguintes passos para sua execução:
  - Clonar repositório
  - Entrar na pasta `Api`
  - Criar cópia de arquivo `.env.example` e renomear para `.env`
  - Dentro do arquivo `.env`, adicionar url da api do github.
    - Dentro do arquivo deve ficar assim: `GITHUB_API_URL=https://api.github.com`
  - Executar comando `npm install`
  - Executar comando `npm run dev` ou `npm run start`
- Rota para busca dos repositórios: http://localhost:3333/github/search
  - Pode realizar consulta direto no navegador, ou caso esteja utilizando alguma ferramenta, utilizar método `GET`. Também é possível realizar consulta pela documentação da API.
- Link para documentação (utilizando swagger): http://localhost:3333/api-docs
- Comando para executar teste:
  - `npm run test`
- ### API realiza consulta na API Pública do GitHub e retorna apenas os dados necessários para utilização pelo bot.

# Informações de acesso

- API neste formato não está online. Versão otimizada para função lambda (AWS) pode ser acessada no link abaixo:

- Endpoint: https://oeenesnm44.execute-api.us-east-2.amazonaws.com/challangeTakeBlip

- Sem necessidade de parâmetros ou headers.

## ResponseBody Type:

```typescript
interface IGitHubRepository {
  name: string;
  description: string;
  avatar_url: string;
}

class ResponseBody {
  0: IGitHubRepository;
  1: IGitHubRepository;
  2: IGitHubRepository;
  3: IGitHubRepository;
  4: IGitHubRepository;
}
```

## Exemplo ResponseBody (json):

```json
{
  "0": {
    "name": "GitHub Repository name 0",
    "description": "Description GitHub Repository 0",
    "avatar_url": "https://avatars.githubusercontent.com/u/0000000?v=4"
  },
  "1": {
    "name": "GitHub Repository name 1",
    "description": "Description GitHub Repository 1",
    "avatar_url": "https://avatars.githubusercontent.com/u/0000000?v=4"
  },
  "2": {
    "name": "GitHub Repository name 2",
    "description": "Description GitHub Repository 2",
    "avatar_url": "https://avatars.githubusercontent.com/u/0000000?v=4"
  },
  "3": {
    "name": "GitHub Repository name 3",
    "description": "Description GitHub Repository 3",
    "avatar_url": "https://avatars.githubusercontent.com/u/0000000?v=4"
  },
  "4": {
    "name": "GitHub Repository name 4",
    "description": "Description GitHub Repository 4",
    "avatar_url": "https://avatars.githubusercontent.com/u/0000000?v=4"
  }
}
```
