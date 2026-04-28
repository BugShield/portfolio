# Bug Fix

Investigue e corrija um bug de forma sistemática.

**Uso:** `/dev:bugfix <descrição do bug>`
**Exemplo:** `/dev:bugfix modal não fecha após submit em mobile Safari`

---

## Passo 1 — Reproduza e isole

Antes de tocar em qualquer código:
- Descreva exatamente o comportamento errado vs. o esperado
- Identifique em qual componente/feature o bug ocorre
- Verifique se é reproduzível apenas em condição específica (viewport, browser, estado)

## Passo 2 — Leia o contexto completo

- Leia o componente afetado por inteiro
- Trace o fluxo de estado: onde o dado nasce, onde é transformado, onde é consumido
- Se envolver props, leia o componente pai também
- Rode `cd frontend && npm run type-check` — erros de tipo frequentemente são a causa raiz

## Passo 3 — Hipótese antes de fix

Declare a causa raiz antes de escrever qualquer código:

```
Causa raiz: <explicação>
Fix proposto: <o que vai mudar e por quê>
Risco colateral: <o que pode ser afetado>
```

Se a causa raiz não estiver clara, pergunte ao usuário antes de assumir.

## Passo 4 — Fix cirúrgico

- Altere **somente** o necessário para corrigir o bug
- Não aproveite para refatorar código ao redor — isso é escopo separado
- Não remova `data-testid` existentes
- Não mude nomes de props ou tipos públicos

## Passo 5 — Verificação

```bash
cd frontend && npm run type-check && npm run lint
```

Se existirem testes Playwright em `frontend/tests/`, rode-os para confirmar que nada quebrou.

## Passo 6 — Reporte

- Causa raiz encontrada
- O que foi alterado (arquivo + linha)
- Como testar manualmente que o bug foi corrigido
- Se o bug sugere que um `data-testid` está faltando, aponte — mas não adicione sem pedir
