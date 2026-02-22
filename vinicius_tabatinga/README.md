# Projeto: Landing Page Dr. Vinicius Tabatinga

Este projeto visa estabelecer uma presença digital premium para o Dr. Vinicius Tabatinga, oftalmologista, integrando uma landing page de alta conversão com um sistema de blog auto-gerenciável via Markdown.

## 1. Análise de Viabilidade Técnica

A arquitetura utiliza um desacoplamento entre frontend (React) e backend (FastAPI/Python):

*   **Desempenho (Vite + Tailwind):** Tempo de carregamento quase instantâneo.
*   **Escalabilidade (SQLite):** Ideal para o volume de dados de um site médico.
*   **Gerenciamento (Markdown):** Foco no conteúdo, preservando a consistência visual.
*   **Segurança:** FastAPI com validação automática e proteção contra injeções.

## 2. Detalhes de Implementação

### 2.1. Landing Page (Frontend)
*   **Design System:** Utilização de CSS Variables para o tema "Medical Premium".
*   **Hero Section:** Call to Action (CTA) focado em agendamento via WhatsApp.
*   **Serviços:** Grid interativo de especialidades (Catarata, Glaucoma, Cirurgia Refrativa).
*   **Responsividade:** Layout *Mobile-First* garantindo que pacientes possam navegar facilmente via smartphones.

### 2.2. Sistema de Blog (Backend & Frontend)
*   **Markdown Engine:** O backend armazena o Markdown puro. O frontend utiliza `react-markdown` com plugins para syntax highlighting e tabelas.
*   **SEO de Artigos:** Cada post gera seu próprio conjunto de meta tags baseado no título e descrição do Markdown.
*   **Slugification:** Geração automática de URLs amigáveis (ex: `/blog/cuidados-pos-operatorios-catarata`).

### 2.3. Área Administrativa (Backend)
*   **Autenticação:** Sistema de JWT simples para proteger os endpoints de escrita.
*   **Editor:** Campo de texto com split-screen para preview do Markdown em tempo real.

## 3. Milestones e Cronograma

| Milestone | Descrição | Status |
| :--- | :--- | :--- |
| **M1** | Fundação, Setup e Identidade Visual | [ ] |
| **M2** | Backend, SQLite e API Blog | [ ] |
| **M3** | Landing Page e Blog Viewer | [ ] |
| **M4** | Editor Administrativo e Auth | [ ] |
| **M5** | SEO, Otimização e Entrega | [ ] |

## 4. Checklist de Compleção (Features)

### Frontend
- [ ] Implementar Hero Section com CTA
- [ ] Implementar Seção "Sobre o Dr. Vinicius"
- [ ] Listagem de Serviços/Especialidades
- [ ] Feed de notícias do Blog na Home
- [ ] Página de leitura de Post (Markdown)
- [ ] Rodapé com Informações de Contato e Mapa

### Backend
- [ ] Setup do banco de dados SQLite
- [ ] API para listagem de posts (paginada)
- [ ] API para leitura de post individual por slug
- [ ] Sistema de autenticação administrativa
- [ ] Endpoint para criação/edição de posts

## 5. Checklist de Testes e Qualidade

### Funcional
- [ ] O formulário de contato envia os dados corretamente?
- [ ] Os links de WhatsApp abrem com a mensagem pré-definida?
- [ ] O Markdown renderiza imagens e links sem erros?
- [ ] A navegação entre páginas é suave (SPA)?

### Técnico & SEO
- [ ] Lighthouse: Score de Performance > 90?
- [ ] Lighthouse: Score de SEO > 90?
- [ ] As imagens estão otimizadas (WebP/Lazy Loading)?
- [ ] O site é totalmente acessível (Aria labels, contraste)?
- [ ] SSL configurado e funcionando?

## 6. Identidade Visual

Consulte o **[Plano de Identidade Visual](PLANO_IDENTIDADE_VISUAL.md)** para detalhes completos sobre logos, símbolos, destaques e marca d'água em `reference/`.

## 7. Tecnologias
*   **Frontend:** React, Vite, Tailwind CSS, Lucide React, React-Markdown.
*   **Backend:** Python, FastAPI, SQLModel, Uvicorn, PyJWT.
*   **Banco de Dados:** SQLite.

## 8. Como Rodar o Projeto

O frontend usa o proxy do Vite para enviar requisições `/api` ao backend. **É necessário rodar os dois servidores:**

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload --port 8001
```
*Se a porta estiver em uso, tente 8002, 8003, etc. E atualize o proxy em `frontend/vite.config.js` com a porta escolhida.*

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Acesse **http://localhost:5173**. O feed do blog aparecerá quando o backend estiver rodando.

### Configuração do site
As informações de contato, mensagem padrão do WhatsApp e nome do site ficam em `backend/config/site_config.json`. O frontend busca essas configurações via `GET /api/config`. O campo `contact.map_embed_url` deve conter a URL do iframe do Google Maps (obtenha em Google Maps → Compartilhar → Incorporar um mapa). Para SEO, execute `npm run sync-seo` (ou `python scripts/sync_seo.py`) após alterar o arquivo — isso atualiza as meta tags e o JSON-LD no `index.html`.

Para popular um post de exemplo:
```bash
cd backend
python seed.py
```
