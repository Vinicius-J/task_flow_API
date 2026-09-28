# 📝 Task Flow

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Express](https://img.shields.io/badge/Express-API-000000)
![Zod](https://img.shields.io/badge/Zod-validation-3E67B1)
![Status](https://img.shields.io/badge/status-in%20development-orange)
![License](https://img.shields.io/badge/license-MIT-green)

## 📖 Sobre o projeto

O **Task Flow** é uma API de gerenciamento de tarefas desenvolvida com **Node.js e TypeScript**.

O projeto foi criado com o objetivo de praticar e consolidar fundamentos de desenvolvimento backend, evoluindo gradualmente de uma aplicação simples em memória para uma API estruturada com conceitos utilizados em aplicações backend profissionais.

Durante seu desenvolvimento, o projeto aborda conceitos como:

- HTTP
- APIs REST
- Node.js
- TypeScript
- JavaScript
- Event Loop
- Programação assíncrona
- Arquitetura em camadas
- Separação de responsabilidades
- DTOs
- Validação de dados
- Tratamento de erros
- Repositories
- Use Cases
- Testes automatizados
- Banco de dados
- Autenticação
- Boas práticas de desenvolvimento backend

O projeto é desenvolvido de forma incremental através de **Sprints**, onde cada etapa adiciona novos conceitos e responsabilidades à aplicação.

---

## 🎯 Objetivos

O principal objetivo do Task Flow é servir como projeto de estudo e portfólio para desenvolvimento backend.

Os objetivos incluem:

- Desenvolver uma base sólida em **Node.js**
- Aprofundar conhecimentos em **JavaScript e TypeScript**
- Entender o funcionamento do protocolo **HTTP**
- Compreender como servidores backend funcionam
- Desenvolver APIs REST
- Aplicar princípios de arquitetura de software
- Praticar separação de responsabilidades
- Aprender a trabalhar com persistência de dados
- Implementar testes automatizados
- Desenvolver uma API cada vez mais próxima de um projeto profissional

---

## ✨ Funcionalidades

Atualmente o projeto possui funcionalidades relacionadas ao gerenciamento de tarefas.

### Tasks

- ✅ Criar tarefas
- ✅ Listar tarefas
- ✅ Buscar tarefas
- ✅ Atualizar tarefas
- ✅ Remover tarefas
- ✅ Trabalhar com armazenamento em memória
- ✅ Separar regras de negócio da camada HTTP
- ✅ Organizar responsabilidades através de Services / Use Cases
- 🚧 Persistência em banco de dados
- 🚧 Testes automatizados
- 🚧 Autenticação e autorização

> Algumas funcionalidades serão implementadas gradualmente conforme o projeto evolui pelas Sprints.

---

## 📂 Estrutura do projeto

A estrutura pode evoluir conforme novas Sprints forem implementadas.

Uma representação da organização atual/conceitual:

```text
src
├── controller
│
├── data
│
├── factories
│
├── main
│
├── routes
│
├── services
│
└── utils
```

A estrutura será reorganizada gradualmente conforme novos conceitos de arquitetura forem introduzidos.

---

## 🧠 Conceitos e práticas aplicados

Durante o desenvolvimento do Task Flow são estudados e aplicados conceitos importantes de backend.

### JavaScript

- Closures
- Prototypes
- Classes
- Recursão
- Call Stack
- Event Loop
- Microtasks
- Macrotasks
- Promises
- `async/await`
- Programação assíncrona

### Node.js

- Runtime JavaScript
- APIs nativas do Node.js
- Módulo `http`
- Streams
- Eventos
- Event Loop
- Processamento assíncrono
- Servidores HTTP

### Backend

- HTTP
- REST
- CRUD
- Status Codes
- Headers
- Request / Response
- JSON
- Rotas
- Controllers
- Services
- Use Cases
- Repositories

### Arquitetura

- Separação de responsabilidades
- DTOs
- Interfaces
- Dependency Injection
- Repository Pattern
- Inversão de dependência
- Organização em camadas

### Qualidade

- Tratamento de erros
- Validação de dados
- Testes automatizados
- Código legível
- Manutenibilidade
- Evolução incremental

---

## 🛠️ Tecnologias utilizadas

### Backend

- **Node.js**
- **TypeScript**

### API

- **Express**

> O Express é utilizado nas primeiras etapas do projeto para facilitar o desenvolvimento da API. Em uma etapa posterior, o projeto também explora a implementação de um servidor utilizando o módulo HTTP nativo do Node.js.

### Validação

- **Zod**

### Desenvolvimento

- **Git**
- **GitHub**
- **npm**

### Testes

- **Jest**

---

## 📋 Requisitos

Antes de executar o projeto, certifique-se de possuir:

- Node.js 18 ou superior
- npm
- Git

Verifique as versões instaladas:

```bash
node --version
npm --version
git --version
```

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/Vinicius-J/task_flow_API
```

### 2. Entre na pasta do projeto

```bash
cd task-flow
```

### 3. Instale as dependências

```bash
npm install
```

---

## ▶️ Executando o projeto

Para iniciar o servidor em ambiente de desenvolvimento:

```bash
npm run dev
```

Após iniciar a aplicação, a API ficará disponível localmente.

```text
http://localhost:3000
```

> A porta pode variar de acordo com a configuração definida no projeto.

---

## 🔌 API

A API possui operações relacionadas ao gerenciamento de tarefas.

### Criar tarefa

```http
POST /tasks
```

### Listar tarefas

```http
GET /tasks
```

### Buscar tarefa

```http
GET /tasks/:id
```

### Atualizar tarefa

```http
PUT /tasks/:id
```

### Remover tarefa

```http
DELETE /tasks/:id
```

> Os endpoints e contratos da API podem sofrer alterações conforme o projeto evolui pelas Sprints.

---

## 🧪 Testes

Os testes fazem parte da evolução do projeto e têm como objetivo garantir que as regras da aplicação continuem funcionando conforme novas funcionalidades são adicionadas.

As áreas de teste incluem:

- Regras de negócio
- Services / Use Cases
- Repositories
- Controllers
- Validação de dados
- Tratamento de erros

Para executar os testes:

```bash
npm test
```

---

## 🗺️ Roadmap

O desenvolvimento do Task Flow é dividido em Sprints.

### Sprint 1 — CRUD básico

- [x] Criar tarefas
- [x] Listar tarefas
- [x] Atualizar tarefas
- [x] Remover tarefas
- [x] Armazenamento em memória
- [x] Estrutura inicial da API

### Sprint 2 — JavaScript Deep Dive

- [x] Closures
- [x] Prototypes
- [x] Call Stack
- [x] Event Loop
- [x] Microtasks
- [x] Macrotasks
- [x] Promises
- [x] `async/await`
- [x] APIs do Node.js

### Sprint 3 — Organização e arquitetura

- [x] Melhorar separação de responsabilidades
- [x] Organizar Services / Use Cases
- [x] Trabalhar com Repository Pattern
- [x] Melhorar contratos entre camadas
- [x] Evoluir tratamento de erros
- [ ] Aumentar cobertura de testes

### Sprint 4 — Node.js HTTP

- [ ] Trabalhar diretamente com o módulo `http`
- [ ] Criar servidor HTTP sem Express
- [ ] Implementar roteamento
- [ ] Trabalhar manualmente com Request / Response
- [ ] Processar JSON
- [ ] Trabalhar com Headers
- [ ] Trabalhar com Status Codes
- [ ] Entender o funcionamento interno de uma API HTTP

### Sprint 5+ — Persistência

- [ ] Introduzir banco de dados
- [ ] Criar camada de persistência
- [ ] Implementar Repository
- [ ] Migrations / estrutura de banco
- [ ] Queries
- [ ] Relacionamentos
- [ ] Tratamento de erros de persistência

### Futuras etapas

- [ ] Autenticação
- [ ] Autorização
- [ ] JWT
- [ ] Paginação
- [ ] Filtros
- [ ] Ordenação
- [ ] Documentação da API
- [ ] Testes de integração
- [ ] Docker
- [ ] Deploy
- [ ] Monitoramento
- [ ] CI/CD

---

## 📈 Evolução do projeto

O Task Flow foi pensado para evoluir junto com o conhecimento adquirido durante os estudos de backend.

A ideia é começar com uma aplicação simples e aumentar gradualmente sua complexidade:

```text
CRUD em memória
      │
      ▼
Node.js + Express
      │
      ▼
JavaScript / Node.js Deep Dive
      │
      ▼
Arquitetura
      │
      ▼
HTTP nativo do Node.js
      │
      ▼
Banco de dados
      │
      ▼
Testes
      │
      ▼
Autenticação
      │
      ▼
Docker
      │
      ▼
Deploy
      │
      ▼
API Backend completa
```

Dessa forma, cada etapa adiciona um novo conceito sem esconder o funcionamento das camadas anteriores atrás de abstrações.

---

## 🎓 Projeto de estudo

O **Task Flow** faz parte da jornada de estudos de backend e foi desenvolvido com foco em aprendizado prático.

Em vez de utilizar frameworks e bibliotecas para abstrair todo o funcionamento interno, algumas etapas do projeto são deliberadamente implementadas utilizando APIs nativas do Node.js.

Isso permite compreender melhor o que acontece por baixo de uma aplicação backend.

---

## 📌 Status do projeto

🚧 **Em desenvolvimento**

O projeto está sendo desenvolvido incrementalmente através de Sprints.

Novas funcionalidades, melhorias de arquitetura, testes e tecnologias serão adicionadas conforme o roadmap for avançando.

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.

Consulte o arquivo `LICENSE` para mais informações.

---

## 👨‍💻 Autor

Desenvolvido por **Vinícius Joaquim dos Santos**

GitHub:

https://github.com/Vinicius-J

LinkedIn:

https://www.linkedin.com/in/vinicius-j/
