# Metropolitan Museum of Art

O projeto foi feito com **Vue 3** **typescript** utilizando o **Vite**.
Projeto rodando em **[themetmuseum.netlify.app/](https://themetmuseum.netlify.app/)**

### Detalhes da interface

Design inspirado da identidade visual do site do [Met](https://www.metmuseum.org/).

- **Home**: página inicial com background interativo 360º e botão para acessar a página de busca. É possivel pesquisar ao digitar enter ou clicar no botão de pesquisa.
- **Search**: página de busca com campo de texto para digitar o termo de busca e filtros para refinar a busca. É possivel pesquisar ao digitar enter (quando o input superiro estiver em focus) ou clicar no botão de pesquisa. Ao clicar em um resultado, o usuário é redirecionado para a modal de detalhes.
- **Modal de detalhes**: modal com detalhes do objeto selecionado. É possivel fechar a modal clicando no botão de fechar ou clicando fora da modal. Também é possivel clicar na imagem para ver ela em tamanho maior.
- **Favoritos**: é possível favoritar um objeto clicando na estrela em cada objeto da lista. A lista de favoritos é salva no local storage e é possivel acessar ela clicando no botão de favoritos no menu superior. É possivel remover um objeto da lista de favoritos clicando na estrela novamente.

### Lista de algumas bibliotecas utilizadas:

- **[TailwindCSS](https://tailwindcss.com/)**: para estilização do projeto
- **[Pinia](https://pinia.esm.dev/)**: para gerenciamento de estado
- **[Pinia (plugin persistedstate)](https://prazdevs.github.io/pinia-plugin-persistedstate/)**: para salavar automaticamente algum estado no local storage
- **[A-frame](https://aframe.io/)**: para background interativo 360º da página inicial
- **[Axios](https://axios-http.com/)**: para requisição com API
- **[Vueuse](https://vueuse.org/)**: para utilidades do vue
- **[Vueuse/motion](https://motion.vueuse.org/)**: para animações e transição de elementos
- **[Vue Router](https://router.vuejs.org/)**: para gerenciamento de rotas
- **[Unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)**: plugin do vite para importação automática de bibliotecas e metodos do vue, evitando a necessidade de importar manualmente
- **[Unplugin-components](https://github.com/antfu/unplugin-vue-components)**: para importação automática de componentes

### Instrução para rodar o projeto:

1. Criar arquivo o .env na raiz do projeto com a chave da API do met: `VITE_API_URL=https://collectionapi.metmuseum.org/public/collection/v1/`
2. Instalar as dependências com `yarn install`
3. Rodar o projeto com `yarn dev`
4. Acessar o projeto em `http://localhost:3000/`

### Instruções para buildar o projeto:

- Rodar o comando `yarn build`

### Observações:

- Alguns testes com a API do met demonstraram que a mesma apresenta algumas falhas com os filtros implementados, como por exemplo o de imagem e localização.
- O texto digitado também é _case sensitive_ (diferente de maíusculas e minúsculas).
- Como a API publica não possui uma consulta que retorne todos os objetos com o detalhamento completo, foi necessário fazer uma consulta para cada objeto retornado na primeira consulta, o que torna o processo de busca um pouco mais lento. Para contornar isso limitei a quantidade de resultado por páginas a 8, o que torna a busca mais rápida e não sobrecarrega o servidor.
