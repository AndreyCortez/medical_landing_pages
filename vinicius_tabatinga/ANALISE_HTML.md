# Análise da Estrutura HTML do Site

## Como um React SPA funciona

Este projeto usa **React com Vite** como SPA (Single Page Application). O HTML inicial é mínimo — todo o conteúdo é injetado pelo JavaScript após o carregamento.

### O que aparece em "Exibir código-fonte" (Ctrl+U)

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/assets/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Dr. Vinicius Tabatinga - Oftalmologista..." />
    <link href="...fonts..." rel="stylesheet">
    <title>Dr. Vinicius Tabatinga | Oftalmologista</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Ou seja: **só a div vazia e o script**. O restante (Hero, Sobre, Serviços, Local, Blog, Footer) é criado pelo React via JavaScript — por isso não aparece no código-fonte.

---

## Onde ver a estrutura real

### DevTools (F12) → Aba "Elements"

Após o React executar, o DOM passa a ter algo como:

```
body
└── div#root
    └── div.min-h-screen (Layout)
        ├── header (Header + logo + nav)
        ├── main (conteúdo)
        │   ├── section (Hero)
        │   │   └── h1: "Consulta completa: dos óculos ao diagnóstico"
        │   ├── section#sobre (About)
        │   ├── section#servicos (Services) — 4 cards
        │   ├── section (BlogPreview)
        │   └── section#local (LocationSection) ← "Conheça meu local de atendimento"
        └── footer#contato
```

Para conferir: abra DevTools (F12) → Elements → busque por `id="local"` ou `Conheça meu local`.

---

## Conferir se as alterações estão carregando

1. **Hard refresh:** Ctrl+Shift+R (ou Cmd+Shift+R no Mac)
2. **Porta correta:** o dev costuma rodar em `http://localhost:5174/` (se 5173 estiver ocupada)
3. **Console:** DevTools → Console — ver se há erros em vermelho
4. **Teste em aba anônima:** para descartar cache

---

## Estrutura esperada das seções

| Seção       | id       | Conteúdo principal                                       |
|------------|----------|----------------------------------------------------------|
| Hero       | —        | "Consulta completa: dos óculos ao diagnóstico"           |
| Sobre      | #sobre   | "Sobre o Dr. Vinicius"                                   |
| Serviços   | #servicos| 4 especialidades: Oftalmologia Geral, Catarata, Glaucoma, Refrativa |
| Blog       | —        | "Artigos e Notícias"                                     |
| Local      | #local   | "Conheça meu local de atendimento"                       |
| Contato    | #contato | Footer com endereço, horário, WhatsApp                   |

---

## Porta em uso

Se a porta 5173 já estiver em uso, o Vite usa 5174. Para liberar:

```bash
# Encerrar processos nas portas 5173 e 5174
fuser -k 5173/tcp 2>/dev/null
fuser -k 5174/tcp 2>/dev/null

# Reiniciar o dev
cd frontend && npm run dev
```
