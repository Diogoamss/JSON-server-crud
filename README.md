# 📱 Atividade de programação mobile II 

## Descrição 📎

> O codigo desenvolvido trata-se de um **CRUD** simples alimentado por uma **API-rest** simulada por **JSON-server** e **Ngrok** com a biblioteca do **Reac-Native**

## Funcionalidade ⚡

> O projeto contas com as seguintes funcionalidades
>  * Hooks 
>    build-in React Hooks como useState e useEffect
>    hooks implementados por mim como useAddEdit e usePerson para flexibilizar o codigo
>    documentação/tutorias utilizados: [React hooks](https://react.dev/reference/react/hooks). &
>    [Aprenda REACT HOOKS em 30 minutos | Tutorial sobre Hooks](https://youtu.be/Fc-___dblSI?si=fQ2lp5PEHJo_eAus).
>
>  * Components
>    buidl-in components do React Native como o ActivityIndicator [ActivityIndicator React](https://reactnative.dev/docs/activityindicator).
>    components visuais que se repetem construidos por mim como button.js, buttonDelete.js, buttonEdit.js, PersonCard.js e searchBar.js
>
> * Routes
>      São os Services que funcionam como rotas para o CRUD sendo
>      * add.js = POST
>      * delete.js = DELETE
>      * edit.js = PUT
>  
>         
> 

## Estrutura do projeto 📂

### Raiz do projeto

```
JSON-SERVER-CRUD/
├── .expo/
├── assets/
├── Backend/
│   └── db.json
├── node_modules/
├── src/
├── .env
├── .env.exemple
├── .gitignore
├── App.js
├── app.json
├── index.js
├── package-lock.json
└── package.json
```
---
### Backend 📁

```
Backend/
└── db.json           # Banco de dados local em JSON (json-server)
```
---
### SRC 📁

```
src/
├── components/      # Componentes visuais reutilizaveis da interface
│   ├── activityIndicator.js
│   ├── button.js
│   ├── buttonDelete.js
│   ├── buttonEdit.js
│   ├── PersonCard.js
│   └── searchBar.js
│
├── hooks/         # Logica de negocio separada da interface (custom hooks do React)
│   ├── useAddEdit.js
│   └── usePerson.js
│
├── routes/        # funções responsaveis pela comunicação com a API
│   ├── add.js
│   ├── delete.js
│   └── edit.js
│
├── screens/      # Telas da aplicação
│   ├── AddEditScreen.js
│   └── HomeScreen.js
│
└── styles/      # Arquivos de estilização 
    ├── styles.js
    └── stylesButton.js
```

---

## Como executar 🔬

1. Clonando repositorio
   ```
   git clone https://github.com/Diogoamss/JSON-server-crud.git
   ```

2. Navegue até a pasta raiz do projeto e instale as dependencias:
    ```
    cd JSON-server-crud
    npm i    
    ```

3. Configure o .env:

   3.1  Instale globalmente:
   ```
    npm i -g json-server
   ```
   
   3.2 navegue ate Backend
     ```
      cd Backend
     ```
     ```
      npx json-server --watch db.json --port 3000
     ```
   3.3 configure o Ngrok, Crie uma conta gratuita em https://ngrok.com/ e baixe o Ngrok
* Autentificação do token
   ```
   ngrok config add-authtoken SEU_TOKEN
   ```
   3.4 Em um novo terminal:
    ```
      cmd
    ```

    ```
      ngrok http 3000
    ```
* Configure a chave da API
   ```
    EXPO_PUBLIC_API_URL=suaChaveApiAqui
   ```

4. Para rodar o projeto:
   ```
    npx expo start
    ```
  * ou
    
    ```
    npx expo start --tunnel
    ```




