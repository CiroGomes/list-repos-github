# API de integração com API Pública do GitHub

- ### **Devido ao que foi solicitado ser apenas uma consulta a uma API externa, acredito que uma função lambda já atenderia muito bem a demanda de forma mais barata, rápida e eficiente.**
- ### Esta versão é otimizada para ser uma Função Lambda da AWS. Existe uma outra branch (acesse [clicando aqui](https://github.com/CiroGomes/list-repos-github/tree/v1.0.0-api-rest)) que contém um servidor Node um pouco mais incrementado, utilizando conceitos SOLID, rotas e teste unitário.

---

- API desenvolvida de forma otimizada a ser utilizada como uma Função Lambda (AWS), utilizando NodeJS na versão 14.x.x.
- API realiza consulta na API Pública do GitHub e retorna apenas os dados necessários para utilização pelo bot.

# Informações de acesso

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
