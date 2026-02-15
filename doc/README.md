# 🤖 AI-Native Development & QA Engine

> **Sistema completo de desenvolvimento frontend e automação de QA usando IA**  
> Transforme requisitos funcionais em código React + testes E2E automatizados em minutos.

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Pré-requisitos](#pré-requisitos)
4. [Fluxo de Trabalho Completo](#fluxo-de-trabalho-completo)
5. [Guia Passo a Passo](#guia-passo-a-passo)
6. [Comandos Rápidos](#comandos-rápidos)
7. [Troubleshooting](#troubleshooting)
8. [Boas Práticas](#boas-práticas)

---

## 🎯 Visão Geral

Este projeto utiliza **prompts estruturados** para guiar IAs (como Claude via Cursor) a:

- ✅ Implementar interfaces React pixel-perfect a partir de prints do Figma
- ✅ Seguir padrões de código rigorosos (TypeScript, Tailwind, Acessibilidade)
- ✅ Gerar planos de teste completos (casos de teste manuais)
- ✅ Automatizar testes E2E com Playwright
- ✅ Gerar relatórios de execução

**Resultado:** Um time enxuto focado em backend e requisitos, enquanto a IA cuida do frontend e QA.

---

## 📁 Estrutura do Projeto

```
.
├── .cursorrules                    # Configuração global do Cursor (o "maestro")
├── README.md                       # Este arquivo
├── app/                            # Aplicação React + Vite
│   ├── src/
│   │   └── features/               # Código organizado por feature
│   │       └── [FEATURE_NAME]/
│   │           ├── components/     # Componentes da feature
│   │           ├── pages/          # Páginas completas
│   │           ├── services/       # Chamadas de API
│   │           ├── hooks/          # Custom hooks
│   │           └── types/          # TypeScript types
│   └── tests/
│       └── playwright/             # Testes E2E gerados automaticamente
│           └── [FEATURE_NAME].spec.ts
└── doc/                            # Documentação e Inteligência
    ├── dev/                        # Regras de desenvolvimento
    │   ├── frontend-rules.md       # Padrões de código React/TS
    │   ├── api-integration-rules.md
    │   ├── state-management-guide.md
    │   ├── refactoring-rules.md
    │   └── design-system-tokens.md
    └── qa/                         # Sistema de QA
        ├── testing-rules.md        # Princípios globais de teste
        ├── prompts/                # Motores de IA
        │   ├── generate-test-case.md
        │   ├── playwright-master-prompt.md
        │   ├── super-master-prompt.md
        │   └── generate-report.md
        ├── requirements/           # Input: Requisitos funcionais
        │   ├── screenshots/        # Prints do Figma
        │   └── [feature].feature.md
        ├── test-cases/             # Output: Planos de teste (.md)
        │   └── test-case-[feature].md
        └── reports/                # Output: Relatórios de execução
            └── report-[feature]-[date].md
```

---

## 🛠️ Pré-requisitos

### Ferramentas Necessárias

| Ferramenta | Versão | Link |
|------------|--------|------|
| Node.js | 18+ | [nodejs.org](https://nodejs.org) |
| Cursor IDE | Latest | [cursor.sh](https://cursor.sh) |
| Playwright | Latest | Instalado via `npm install` |
| Figma | - | [figma.com](https://figma.com) |

### Configuração Inicial

```bash
# 1. Clone o repositório
git clone [seu-repo]
cd [seu-projeto]

# 2. Instale as dependências
npm install

# 3. Instale os browsers do Playwright
npx playwright install

# 4. Verifique se o .cursorrules está na raiz
ls -la .cursorrules
```

---

## 🔄 Fluxo de Trabalho Completo

```
┌─────────────────────────────────────────────────────────────────┐
│                    CICLO DE DESENVOLVIMENTO                      │
└─────────────────────────────────────────────────────────────────┘

1. PRODUTO/PO
   └─> Escreve requisito funcional (.feature.md)
   └─> Anexa prints do Figma

2. BACKEND
   └─> Implementa API
   └─> Atualiza o .feature.md com endpoints reais

3. FRONTEND (VOCÊ + IA)
   └─> Usa a Engine de Prompts para gerar UI
   └─> Revisa e ajusta se necessário

4. QA (IA AUTOMÁTICA)
   └─> Gera plano de teste
   └─> Gera automação Playwright
   └─> Executa testes

5. ENTREGA
   └─> Gera relatório
   └─> Commit do código + testes
```

---

## 📖 Guia Passo a Passo

### FASE 1: Discussão e Requisitos

#### 1.1. Reunião de Kickoff da Feature
**Participantes:** PO, Backend, Frontend (você)

**Checklist da reunião:**
- [ ] Qual o objetivo da feature?
- [ ] Quais são os fluxos principais (happy path)?
- [ ] Quais validações de campo são necessárias?
- [ ] Quais são os cenários de erro?
- [ ] Existe design no Figma?

#### 1.2. Criação do Documento de Requisitos
**Responsável:** PO ou você

**Arquivo:** `doc/qa/requirements/[feature-name].feature.md`

**Template:** Use o arquivo `doc/qa/requirements/template-requirements.md`

**Exemplo de nome:** `login.feature.md`, `user-profile.feature.md`

```bash
# Copie o template
cp doc/qa/requirements/template-requirements.md doc/qa/requirements/minha-feature.feature.md

# Edite o arquivo
code doc/qa/requirements/minha-feature.feature.md
```

**O que preencher:**
- ✅ Nome da feature (kebab-case)
- ✅ Rota da página (ex: `/login`)
- ✅ Descrição clara do que a tela faz
- ✅ Lista de elementos da UI
- ✅ Fluxos de usuário (passo a passo)
- ✅ Validações de campo (com mensagens de erro)
- ✅ Endpoints da API (deixe em branco se o backend ainda não fez)
- ✅ Estados (loading, success, error, empty)

#### 1.3. Captura de Prints do Figma
**Responsável:** Você ou Designer

**Pasta:** `doc/qa/requirements/screenshots/`

**Como tirar prints de qualidade:**

1. No Figma, selecione o frame da tela
2. Use `Cmd/Ctrl + Shift + C` (Copy as PNG) OU tire screenshot
3. Salve com nome descritivo:
   - `[feature]-desktop.png`
   - `[feature]-mobile.png`
   - `[feature]-modal-open.png` (se houver estados)

**Exemplo:**
```
doc/qa/requirements/screenshots/
├── login-desktop.png
├── login-mobile.png
└── login-error-state.png
```

**Dica:** Se houver estados de hover, focus, ou modais abertos, tire prints separados!

---

### FASE 2: Backend Implementa a API

#### 2.1. Backend Desenvolve os Endpoints
**Responsável:** Time de Backend

**O que eles devem entregar:**
- ✅ Endpoints funcionando (pode ser em dev/staging)
- ✅ Documentação da API (Swagger, Postman, ou texto)
- ✅ Exemplos de request/response
- ✅ Códigos de erro possíveis

#### 2.2. Atualização do Documento de Requisitos
**Responsável:** Backend ou você

**Edite o arquivo:** `doc/qa/requirements/[feature].feature.md`

**Seção a preencher:**

```markdown
## API Endpoints

| Method | Endpoint | Request Body | Success Response | Error Response |
|--------|----------|-------------|-----------------|----------------|
| POST | `/api/auth/login` | `{ email: string, password: string }` | `200: { token: string, user: {...} }` | `401: { message: "Invalid credentials" }` |
| GET | `/api/user/profile` | — | `200: { id, name, email }` | `401: Unauthorized` |
```

**Importante:** Inclua exemplos reais de payloads!

---

### FASE 3: Desenvolvimento do Frontend (Você + IA)

#### 3.1. Abra o Cursor no Projeto

```bash
# Certifique-se de estar na raiz do projeto
cursor .
```

#### 3.2. Comando para Implementar a UI

**No chat do Cursor, digite:**

```
Implementar UI da feature [nome-da-feature].

Contexto:
- Requisitos: @[nome-da-feature].feature.md
- Regras de frontend: @frontend-rules.md
- Prints anexados: [arraste os prints do Figma aqui]

Siga a arquitetura de features e adicione data-testid em todos os elementos interativos.
```

**Exemplo real:**

```
Implementar UI da feature login.

Contexto:
- Requisitos: @login.feature.md
- Regras de frontend: @frontend-rules.md
- Prints anexados: [arraste login-desktop.png e login-mobile.png]

Siga a arquitetura de features e adicione data-testid em todos os elementos interativos.
```

#### 3.3. O que a IA vai fazer

A IA vai:
1. Ler o `.cursorrules` (que já carrega as regras automaticamente)
2. Analisar o requisito funcional
3. Analisar os prints do Figma
4. Criar a estrutura de pastas:
   ```
   app/src/features/login/
   ├── components/
   ├── pages/
   ├── services/
   ├── hooks/
   └── types/
   ```
5. Gerar os componentes React com:
   - TypeScript estrito
   - Tailwind CSS (mobile-first)
   - `data-testid` em todos os elementos
   - Acessibilidade (ARIA labels, keyboard nav)
   - Integração com a API (usando os endpoints do requisito)

#### 3.4. Revisão do Código Gerado

**Checklist de revisão:**

- [ ] A UI está fiel ao print do Figma?
- [ ] Todos os botões/inputs têm `data-testid`?
- [ ] As validações de campo estão implementadas?
- [ ] Os estados de loading/error estão visíveis?
- [ ] O código está na pasta `features/[nome]/`?
- [ ] Não há `console.log` ou código comentado?

**Se algo estiver errado:**

```
Ajuste o componente LoginButton:
- O botão deve ser azul (#0055ff) em vez de verde
- Adicione um estado de loading com spinner
```

#### 3.5. Teste Manual Rápido

```bash
# Rode o projeto
npm run dev

# Acesse no navegador
# Teste os fluxos principais manualmente
```

---

### FASE 4: Automação de QA (IA Automática)

#### 4.1. Comando para Gerar Testes Completos

**No chat do Cursor, digite:**

```
QA Full Cycle [nome-da-feature]
```

**Exemplo:**

```
QA Full Cycle login
```

#### 4.2. O que a IA vai fazer

A IA vai executar o `@super-master-prompt.md`, que faz:

**Passo 1: Gerar Plano de Teste**
- Lê o `@login.feature.md`
- Aplica as regras de `@testing-rules.md`
- Gera um documento completo em:
  ```
  doc/qa/test-cases/test-case-login.md
  ```

**Passo 2: Gerar Automação Playwright**
- Lê o plano de teste gerado
- Aplica as regras de `@playwright-master-prompt.md`
- Gera o arquivo de teste em:
  ```
  app/tests/playwright/login.spec.ts
  ```

#### 4.3. Salvando os Arquivos Gerados

A IA vai retornar dois blocos de código:

**Bloco 1: Plano de Teste**
```markdown
---
FILE: doc/qa/test-cases/test-case-login.md
---

# Test Cases: Login

[... conteúdo completo ...]
```

**Bloco 2: Automação Playwright**
```typescript
---
FILE: app/tests/playwright/login.spec.ts
---

import { test, expect } from '@playwright/test';

[... código completo ...]
```

**Como salvar:**

1. Copie o conteúdo do Bloco 1
2. Crie o arquivo `doc/qa/test-cases/test-case-login.md`
3. Cole o conteúdo
4. Repita para o Bloco 2

**Atalho no Cursor:**
- A IA pode ter um botão "Apply" ou "Save" — use-o!

#### 4.4. Executando os Testes

```bash
# Rode todos os testes
npx playwright test

# Rode apenas a feature específica
npx playwright test login.spec.ts

# Rode com interface visual (debug)
npx playwright test --ui

# Rode e abra o relatório HTML
npx playwright test
npx playwright show-report
```

#### 4.5. Analisando os Resultados

**Se todos os testes passarem:**
```
✅ 15 passed (12.3s)
```
→ Prossiga para a Fase 5 (Relatório)

**Se houver falhas:**
```
❌ 2 failed
   login.spec.ts:45 - TC-003: Email validation
   login.spec.ts:67 - TC-007: Error message display
```

**Como debugar:**

1. Veja o trace do Playwright:
   ```bash
   npx playwright show-trace trace.zip
   ```

2. Identifique o problema:
   - **Seletor quebrado?** → Verifique se o `data-testid` está correto no código
   - **Lógica errada?** → Bug no código React
   - **Teste errado?** → Ajuste o `.spec.ts`

3. Peça ajuda à IA:
   ```
   O teste TC-003 falhou com este erro:
   [cole o log do erro]
   
   Analise e corrija o problema.
   ```

---

### FASE 5: Relatório e Entrega

#### 5.1. Gerar Relatório de QA

**No chat do Cursor, digite:**

```
Gerar relatório de QA para [feature].

Log de execução:
[cole o output completo do terminal aqui]
```

**Exemplo:**

```
Gerar relatório de QA para login.

Log de execução:
Running 15 tests using 3 workers
✓ TC-001: Page loads without errors (1.2s)
✓ TC-002: User can login with valid credentials (2.3s)
✗ TC-003: Email validation shows error (0.8s)
  Error: Locator not found: data-testid=email-error
...
```

#### 5.2. A IA vai gerar

**Arquivo:** `doc/qa/reports/report-login-2026-02-11.md`

**Conteúdo:**
```markdown
# QA Report: Login Feature
**Date:** 2026-02-11
**Status:** ⚠️ Partial Pass (13/15)

## Summary
- Total Tests: 15
- Passed: 13 (87%)
- Failed: 2 (13%)

## Failed Tests
### TC-003: Email validation shows error
- **Reason:** Seletor `data-testid=email-error` não encontrado
- **Action:** Adicionar o `data-testid` no componente de erro

### TC-007: Error message display
- **Reason:** Mensagem de erro não aparece após falha de API
- **Action:** Verificar lógica de tratamento de erro no service

## Recommendations
- Adicionar testes de acessibilidade (keyboard navigation)
- Melhorar feedback visual no estado de loading
```

#### 5.3. Commit e Push

```bash
# Adicione todos os arquivos gerados
git add app/src/features/login/
git add app/tests/playwright/login.spec.ts
git add doc/qa/test-cases/test-case-login.md
git add doc/qa/reports/report-login-2026-02-11.md

# Commit
git commit -m "feat: implement login feature with E2E tests"

# Push
git push origin feature/login
```

#### 5.4. Abra o Pull Request

**Título:** `feat: Login feature with automated tests`

**Descrição:**
```markdown
## Feature: Login

### Implementado
- ✅ UI pixel-perfect conforme Figma
- ✅ Validações de campo (email, senha)
- ✅ Integração com API `/api/auth/login`
- ✅ Estados de loading e erro
- ✅ Acessibilidade (keyboard nav, ARIA labels)

### Testes
- ✅ 15 casos de teste automatizados
- ✅ Cobertura: Smoke, Happy Path, Validações, Erros, Edge Cases
- ✅ Relatório: 87% de sucesso (2 ajustes necessários)

### Arquivos
- Código: `app/src/features/login/`
- Testes: `app/tests/playwright/login.spec.ts`
- Plano de Teste: `doc/qa/test-cases/test-case-login.md`
- Relatório: `doc/qa/reports/report-login-2026-02-11.md`
```

---

## ⚡ Comandos Rápidos

### Desenvolvimento

```bash
# Iniciar o projeto
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

### Testes

```bash
# Rodar todos os testes
npx playwright test

# Rodar uma feature específica
npx playwright test login.spec.ts

# Modo debug (visual)
npx playwright test --ui

# Rodar em modo headed (ver o browser)
npx playwright test --headed

# Gerar relatório HTML
npx playwright show-report
```

### Comandos da IA no Cursor

| Comando | O que faz |
|---------|-----------|
| `Implementar UI da feature [nome]` | Gera o código React da feature |
| `QA Full Cycle [nome]` | Gera plano de teste + automação Playwright |
| `Gerar relatório de QA para [nome]` | Analisa logs e gera relatório em Markdown |
| `Revisar código de [componente]` | Aplica as regras de refactoring |
| `Adicionar validação em [campo]` | Adiciona lógica de validação |

---

## 🐛 Troubleshooting

### Problema: A IA não está seguindo as regras

**Solução:**
1. Verifique se o `.cursorrules` está na raiz do projeto
2. Reinicie o Cursor
3. No chat, mencione explicitamente: `@frontend-rules.md`

### Problema: Testes falhando por seletores não encontrados

**Causa:** O código React não tem os `data-testid` corretos

**Solução:**
```
Adicione data-testid="email-input" no campo de email do componente LoginForm
```

### Problema: A IA está gerando código muito diferente do padrão

**Solução:**
1. Mostre um exemplo de código existente:
   ```
   Siga o mesmo padrão deste componente:
   @app/src/features/signup/components/SignupForm.tsx
   ```

### Problema: Prints do Figma não estão sendo respeitados

**Solução:**
1. Tire prints maiores e mais claros
2. Anote as cores exatas no requisito:
   ```markdown
   ## Design Tokens
   - Primary Color: #0055ff
   - Button Radius: 8px
   ```

### Problema: Testes passam localmente mas falham no CI

**Causa:** Diferenças de ambiente (viewport, timing)

**Solução:**
1. Configure o `playwright.config.ts`:
   ```typescript
   use: {
     viewport: { width: 1280, height: 720 },
     actionTimeout: 10000,
   }
   ```

---

## ✨ Boas Práticas

### Para Requisitos

- ✅ Seja específico nas validações (não diga "validar email", diga "validar formato de email e mostrar mensagem 'Email inválido'")
- ✅ Inclua exemplos de dados válidos e inválidos
- ✅ Descreva todos os estados (loading, success, error, empty)
- ✅ Anexe prints de TODOS os estados visuais

### Para Desenvolvimento

- ✅ Sempre revise o código gerado antes de commitar
- ✅ Teste manualmente os fluxos principais
- ✅ Verifique se os `data-testid` estão presentes
- ✅ Rode os testes localmente antes de fazer push

### Para Testes

- ✅ Rode os testes após cada mudança no código
- ✅ Se um teste falhar, corrija imediatamente (não acumule)
- ✅ Mantenha os testes independentes (um não deve depender do outro)
- ✅ Use dados de teste realistas

### Para Comunicação com o Time

- ✅ Compartilhe o relatório de QA no PR
- ✅ Se houver falhas, explique o motivo e o plano de correção
- ✅ Documente decisões técnicas importantes no requisito

---

## 🎓 Dicas para Novos Membros

### Primeira Feature

1. Comece com uma feature simples (ex: página estática)
2. Siga este README passo a passo
3. Peça revisão de código de um membro experiente
4. Observe como a IA responde aos comandos

### Aprendendo os Padrões

1. Leia os arquivos em `doc/dev/` (são curtos!)
2. Veja exemplos de features já implementadas em `app/src/features/`
3. Compare o código gerado pela IA com o código existente

### Quando Pedir Ajuda

- ❓ Se a IA gerar código muito diferente do padrão
- ❓ Se os testes falharem e você não souber o motivo
- ❓ Se o requisito estiver ambíguo
- ❓ Se você não souber como testar algo manualmente

---

## 📚 Recursos Adicionais

### Documentação Oficial

- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Playwright](https://playwright.dev)
- [Cursor](https://cursor.sh/docs)

### Arquivos de Referência Interna

- `doc/dev/frontend-rules.md` — Padrões de código
- `doc/qa/testing-rules.md` — Princípios de teste
- `doc/qa/requirements/template-requirements.md` — Template de requisito

---

## 🚀 Próximos Passos

Agora que você entendeu o fluxo, experimente:

1. **Sua primeira feature:**
   ```bash
   # Crie um requisito simples
   cp doc/qa/requirements/template-requirements.md doc/qa/requirements/minha-feature.feature.md
   
   # Edite e preencha
   code doc/qa/requirements/minha-feature.feature.md
   
   # No Cursor, execute:
   # "Implementar UI da feature minha-feature"
   # "QA Full Cycle minha-feature"
   ```

2. **Customize as regras:**
   - Adicione suas próprias convenções em `doc/dev/frontend-rules.md`
   - Ajuste os prompts em `doc/qa/prompts/` conforme necessário

3. **Compartilhe feedback:**
   - O que funcionou bem?
   - O que pode melhorar?
   - Quais comandos você mais usa?

---

## 📞 Suporte

**Dúvidas?** Fale com:
- [Seu nome] — Líder técnico
- [Nome do colega] — Especialista em QA

**Problemas com a Engine?**
- Abra uma issue no repositório
- Documente o comando usado e o resultado inesperado

---

**Versão:** 1.0.0  
**Última atualização:** 2026-02-11  
**Mantido por:** [Seu nome]