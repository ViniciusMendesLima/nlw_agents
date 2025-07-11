# NLW Agents (Back-End)

Este é o back-end do projeto **NLW Agents**, desenvolvido durante o evento **Next Level Week (NLW)** promovido pela **Rocketseat**.  
A aplicação é construída com **Node.js**, utilizando **TypeScript** e bibliotecas modernas para desenvolvimento de APIs.

## 🚀 Tecnologias e Ferramentas

- **Node.js** – Plataforma de execução JavaScript no servidor.
- **TypeScript** – Superset do JavaScript com tipagem estática.
- **Fastify** – Framework web rápido e leve para criação de APIs.
- **Prisma ORM** – Mapeamento objeto-relacional para acesso ao banco de dados.
- **SQLite** – Banco de dados leve e fácil de configurar (ideal para desenvolvimento).
- **Zod** – Validação de dados com segurança de tipos.
- **dotenv** – Gerenciamento de variáveis de ambiente.

## 🧱 Padrões e Organização

- Estrutura modular de pastas.
- Separação clara entre rotas, controllers, schemas e serviços.
- Validação de entrada com **Zod**.
- Acesso ao banco de dados com **Prisma ORM**.
- Variáveis sensíveis gerenciadas com **.env**.

## ▶️ Como rodar o projeto localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/ViniciusMendesLima/nlw_agents.git
cd nlw_agents
```
### 2. Instalar dependências

npm install
### 3. Configurar variáveis de ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```bash
DATABASE_URL="file:./dev.db"
PORT=3333
```
Altere a PORT se necessário.

### 4. Criar o banco de dados e rodar as migrations
```bash
npx prisma migrate dev
```
### 5. Iniciar o servidor em modo desenvolvimento
```bash
npm run dev
```
A API estará disponível em: http://localhost:3333

## 📁 Estrutura do Projeto
```bash
src/
├── http/              # Rotas e controladores
│   └── controllers/
│   └── routes/
├── lib/               # Configurações auxiliares (como o Prisma)
├── schemas/           # Validações com Zod
├── server.ts          # Ponto de entrada da aplicação
prisma/
├── schema.prisma      # Definição do modelo de dados
.env                   # Variáveis de ambiente
```
## 🧪 Scripts úteis
- `npm run dev` — Inicia o servidor com **hot-reload** em ambiente de desenvolvimento.
- `npx prisma studio` — Abre o **painel visual** do Prisma para gerenciamento de dados (acesso via `http://localhost:5555`).
- `npx prisma migrate dev` — Executa as **migrations** e cria o banco de dados com base no schema Prisma.
- `npx prisma generate` — Gera o **cliente Prisma** para comunicação com o banco de dados.

Feito com 💜 durante o NLW da Rocketseat