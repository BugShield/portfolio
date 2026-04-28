# Generate Tests

Gere um arquivo Playwright + TypeScript completo para uma feature.

**Uso:** `/qa:test-gen <featureName>`
**Exemplo:** `/qa:test-gen landing`

---

## Passo 1 — Mapeie a superfície testável

Leia todos os arquivos em `frontend/src/features/<featureName>/`:
- Colete todos os valores de `data-testid`
- Liste todas as interações do usuário: cliques, submits, navegação, estados de sucesso/erro
- Note viewports críticos: mobile (375px) e desktop (1440px)

## Passo 2 — Gere o arquivo de teste

**Caminho:** `frontend/tests/<featureName>/<featureName>.spec.ts`

**Estrutura obrigatória:**

```ts
import { test, expect } from '@playwright/test';

test.describe('<FeatureName>', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // testes aqui
});
```

**Regras de seleção — sem exceção:**
- Usar sempre `page.getByTestId('...')` como seletor primário
- Nunca usar CSS selectors, XPath ou texto visível como seletor principal
- Para verificar texto: `expect(locator).toContainText('...')` após selecionar pelo testid

## Passo 3 — Cenários obrigatórios (sempre incluir)

1. **Page load** — página renderiza sem erros de console; seções principais visíveis
2. **CTA principal visível no mobile** — viewport 375px, botão/link primário visível sem scroll
3. **Fluxo do lead modal** — abrir → preencher nome, email, inquiry → submeter → estado de sucesso visível → modal fecha
4. **Download do resume** — botão dispara response de download
5. **Social dock** — links de X, LinkedIn e GitHub presentes e com `href` não vazio

Adicione cenários específicos da feature com base no que encontrou no Passo 1.

## Passo 4 — Relatório de cobertura

Após o arquivo de teste, gere uma tabela:

| data-testid | Coberto em |
|---|---|
| `hero-button-cta` | "CTA principal visível no mobile" |
| `lead-modal-input-name` | "Fluxo do lead modal" |
| ... | ... |

`data-testid` sem cobertura recebe `⚠️ SEM COBERTURA`.

## Passo 5 — Config check

Se `frontend/playwright.config.ts` não existir, gere também um config mínimo:

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:5173',
  },
});
```

Note qualquer ajuste necessário no `tsconfig` para incluir a pasta `tests/`.
