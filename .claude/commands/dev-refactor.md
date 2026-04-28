# Refactor

Refatore código existente sem alterar comportamento externo.

**Uso:** `/dev:refactor <caminho ou descrição do que refatorar>`
**Exemplo:** `/dev:refactor frontend/src/features/landing/components/Hero.tsx`

---

## Regra principal

**Não refatore o que não foi pedido.** Escopo = exatamente o que foi especificado em `$ARGUMENTS`.

---

## Passo 1 — Entenda antes de mudar

- Leia o arquivo completo (não só a parte alvo)
- Identifique todos os importadores: `grep -r "ComponentName" frontend/src`
- Anote o comportamento atual (props, eventos emitidos, data-testids)

## Passo 2 — Identifique o que pode melhorar

Avalie apenas estas categorias:

| Categoria | Sinais de problema |
|---|---|
| **DRY** | Bloco de JSX ou lógica repetido 2+ vezes |
| **Responsabilidade única** | Componente faz mais de uma coisa claramente distinta |
| **Types** | `any`, tipos inline duplicados, interfaces fora de `types/` |
| **Dead code** | Imports não usados, variáveis, `console.log`, comentários |
| **Legibilidade** | Handler com lógica inline longa que pode virar função nomeada |

**Não é motivo para refatorar:**
- Preferência de estilo subjetiva
- Código que funciona e está claro o suficiente
- Adicionar abstrações "para o futuro"

## Passo 3 — Plano antes de executar

Liste o que vai mudar e por quê antes de editar qualquer arquivo:

```
[ ] Extrair <X> para componente separado — motivo: tem responsabilidade própria
[ ] Mover interface <Y> para types/index.ts — motivo: duplicada em 2 arquivos
[ ] Remover import não usado <Z>
```

Aguarde confirmação se o escopo for maior do que o esperado.

## Passo 4 — Execute com segurança

- **data-testid nunca muda** — são contratos com os testes E2E
- Props públicas mantidas (mesmo nome, mesmo tipo) — sem breaking changes silenciosos
- Um arquivo por vez, verificando tipos a cada passo

## Passo 5 — Verificação obrigatória

```bash
cd frontend && npm run type-check && npm run lint
```

## Passo 6 — Reporte

- O que mudou e por quê (uma linha por item)
- O que ficou igual e por quê (se não óbvio)
- Se algum `data-testid` existe mas não tem teste ainda — note como `⚠️ sem cobertura`
