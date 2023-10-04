# API de Filmes

![GitHub repo size](https://img.shields.io/github/repo-size/seu-usuario/seu-repositorio)
![GitHub contributors](https://img.shields.io/github/contributors/seu-usuario/seu-repositorio)
![GitHub stars](https://img.shields.io/github/stars/seu-usuario/seu-repositorio?style=social)
![GitHub forks](https://img.shields.io/github/forks/seu-usuario/seu-repositorio?style=social)

A API de Filmes é um serviço que fornece informações sobre filmes, incluindo detalhes, descrições, imagens e trailers. Você pode usá-la para criar aplicativos, sites ou qualquer projeto que envolva informações sobre filmes.

## Tabela de Conteúdos

- [Uso](#uso)
- [Rotas](#rotas)
  
## Rotas
GET : http://localhost:3004/
POST:http://localhost:3004/createMovie
PUT:http://localhost:3004/put/:ID
DELETE:http://localhost:3004/deleteMovies/:ID

## Uso

Você pode usar esta API para obter informações sobre filmes em seus próprios projetos. Veja como fazer uma solicitação de exemplo:

```javascript
fetch('http://localhost:3000/movies')
.then(response => response.json())
.then(data => {
 console.log(data);
})
.catch(error => {
 console.error('Erro ao buscar dados da API:', error);
});

*vc pode adicionar mais filmes testando as rotas pelo insomia
