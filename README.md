# login-jwt

### No seu terminal, entre em sua pasta de preferência e rode os seguintes comandos em destaque, para rodar o projeto em sua máquina.

##### Clonar projeto
```
git clone https://github.com/RafaelGSantana/login-jwt.git
```

##### Entrar no projeto
```
cd login-jwt
```

#### Rodar front-end

##### Entra na pasta client
```
cd client
```
##### Instale as dependencias
```
yarn
```
##### Rode o front-end no browser
```
yarn start
```
#### Rodar o back-end

##### Volte para a pasta login-jwt e entre na pasta serve
```
cd server
```
##### Instale as dependencias
```
yarn
```
##### Rode o servidor
```
yarn dev
```
---

Com estes comandos, a aplicação estará rodando.

Neste projeto, deixei o arquivo .env exposto, para facilitar o teste da aplicação.

Deixo abaixo, alguns credenciais de acesso, pois a funcionalidade de cadastro no front-end ainda não foi finalizada

Credenciais

E-mail: rafael@teste.com
Senha: 123456

E-mail: rafaelgs@teste.com
Senha: 123456

E-mail: jose@teste.com
Senha: 123456

---

#### Próximos passos

##### Correção de bugs

- Funcionalidade de logout, limpa o storage, mas não recireciona para tela de login. É necessário atualizar a página para redirecionar.

##### Melhorias

- Fazer validação dos campos pelo front-end e exibir mensagem de erro.
- Refatorar a parte de rotas privadas
- Enviar token nas requisições de rotas privadas
- Refatoração do código


