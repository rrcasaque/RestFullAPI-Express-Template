# API de Educação

Bem-vindo à documentação da **API de Educação**, uma poderosa API RESTful para gerenciar alunos, disciplinas e turmas.

## Documentação da API

A documentação completa da API, incluindo detalhes sobre os recursos, endpoints e exemplos de uso, está disponível em [localhost:3000/docs](http://localhost:3000/docs).

## Instruções de Uso

Para começar a usar a **API de Educação**, siga estas instruções:

## Licença

Esta API é disponibilizada sob a Licença MIT, uma licença de código aberto amplamente reconhecida e utilizada na comunidade de desenvolvimento.

### Pré-requisitos

Certifique-se de ter o Node.js e o gerenciador de pacotes Yarn instalados em seu sistema.

### Instalação

1. Clone este repositório para o seu ambiente local.

2. Navegue até o diretório raiz do projeto.

3. Execute o seguinte comando para instalar as dependências:

```bash
    yarn install
```

# Executando a API

Após a instalação das dependências, você pode iniciar a API com o seguinte comando:

```bash
   yarn start
```

# A API estará disponível em http://localhost:3000.

### Scripts

No arquivo package.json, você encontrará os seguintes scripts disponíveis:

"scripts": {
"build": "tsup src",
"start": "tsx src/index.ts",
"dev": "tsx watch src/index.ts",
"husky:prepare": "husky install",
"test": "jest --passWithNoTests",
"test:watch": "yarn test --watch",
"test:staged": "yarn test --findRelatedTests",
"test:push": "yarn test --coverage"
}

### build: Compila o código-fonte TypeScript.

### start: Inicia a API.

### dev: Inicia a API em modo de desenvolvimento com recarga automática.

### test: Executa os testes.

### test:watch: Executa os testes em modo de observação.

### test:staged: Executa testes relacionados a arquivos alterados em um commit.

### test:push: Executa testes com cobertura e gera relatórios.

Você pode usar esses scripts para compilar, iniciar e testar a API de acordo com suas necessidades.

Isso conclui a documentação da API de Educação. Se você tiver alguma dúvida ou precisar de mais informações sobre como usar a API, não hesite em entrar em contato conosco.
