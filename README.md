# NLW Agents (Back-End)

Este projeto é o **back-end** da aplicação **NLW Agents**, desenvolvido durante o evento **NLW (Next Level Week)** promovido pela [Rocketseat](https://www.rocketseat.com.br/).

A API permite a criação de salas, envio de perguntas e utiliza **inteligência artificial** para gerar respostas com base em áudios transcritos.

## 🚀 Tecnologias e Ferramentas

- **Node.js**
- **Fastify** – framework leve e performático
- **TypeScript**
- **Drizzle ORM** – mapeamento objeto-relacional
- **PostgreSQL + pgvector** – banco de dados com suporte a vetores
- **Zod** – validação de dados
- **OpenAI / Gemini API** – geração de embeddings e respostas (dependendo da implementação)
- **Docker** – para ambiente de banco de dados

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
### 2. Suba o banco de dados com Docker:
```bash
docker compose up -d
```
### 3. Instale as dependências:
```bash
npm install
# ou
yarn
```

### 4. Configurar variáveis de ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```bash
# Porta onde o servidor HTTP será iniciado
PORT=3333

# URL de conexão com o banco de dados
# Exemplo SQLite: "file:./dev.db"
# Exemplo PostgreSQL: "postgresql://usuario:senha@localhost:5432/nome_do_banco"
DATABASE_URL=""

# Chave de API da Gemini (Google AI)
# Gere sua chave gratuita em: https://aistudio.google.com/app/apikey
GEMINI_API_KEY=""
```
Altere a PORT se necessário.

### 5. Gere e aplique as migrations:
```bash
npm run db:generate
npm run db:migrate

```
## 6. (Opcional) Popule o banco com dados falsos:

```bash
npm run db:seed
```

## 7. Inicie o servidor:
```bash
npm run dev
```

A API estará disponível em: http://localhost:3333



## 📁 Estrutura do Projeto
```bash
├── src/                       # Código fonte principal
│   ├── db/                    # Configuração do banco de dados, migrations, seeds
│   ├── http/                  # Rotas HTTP e configuração do servidor web
│   │   └── routes/            # Arquivos das rotas da API
│   ├── services/              # Serviços e lógica de negócio, integrações externas (ex: Gemini)
│   ├── env.ts                 # Configuração e carregamento das variáveis de ambiente
│   └── server.ts              # Arquivo principal que inicializa o servidor
│
├── .env.example               # Exemplo de arquivo .env para configuração do ambiente
├── .gitignore                 # Arquivos e pastas ignorados pelo Git
├── README.md                  # Documentação do projeto
├── biome.jsonc                # Configuração do Biome (formatter/linter)
├── client.http                # Arquivo para testes HTTP (ex: para o REST Client VSCode)
├── docker-compose.yml         # Configuração do Docker Compose para containers (ex: PostgreSQL)
├── drizzle.config.ts          # Configuração do Drizzle ORM (banco de dados)
├── package.json               # Dependências e scripts do projeto
├── package-lock.json          # Versões fixas das dependências
└── tsconfig.json              # Configuração do TypeScript
```
## 🧪 Endpoints Principais
**GET /rooms** – Listar salas

**POST /rooms** – Criar nova sala

**POST /rooms/:roomId/questions** – Enviar pergunta para uma sala

## 📄 Licença
Este projeto é educacional e foi desenvolvido durante o evento NLW Agents da Rocketseat.