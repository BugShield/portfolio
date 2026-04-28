# New Feature

Implemente uma nova feature do zero seguindo a arquitetura e padrões do projeto.

**Uso:** `/dev:feature <featureName> — <descrição curta>`
**Exemplo:** `/dev:feature testimonials — seção de depoimentos com cards glassmorphism`

---

## Passo 1 — Leia antes de escrever

- Leia `frontend/src/features/landing/` para entender o padrão existente
- Leia `doc/dev/frontend-rules.md` para as regras de arquitetura
- Se houver screenshot em `doc/requirements/screenshots/`, leia antes de qualquer código

## Passo 2 — Scaffold obrigatório

Crie a estrutura completa antes de qualquer implementação:

```
frontend/src/features/<featureName>/
├── types/index.ts          ← interfaces da feature (export tudo)
├── components/             ← componentes específicos da feature
├── pages/<FeatureName>Page.tsx
├── hooks/                  ← custom hooks (criar só se necessário)
├── services/               ← chamadas de API (criar só se necessário)
└── utils/                  ← helpers (criar só se necessário)
```

## Passo 3 — Implementação

**TypeScript**
- Zero `any` — use `unknown` se o tipo for incerto
- `interface` para shapes de objetos, `type` para unions/intersections
- Todos os tipos exportados de `types/index.ts`

**Componentes**
- Uma responsabilidade por componente
- Props interface `ComponentNameProps` acima do componente
- Nenhum inline style — Tailwind only
- HTML semântico: `<main>`, `<section>`, `<article>`, `<nav>`, `<button>`

**Estilo — glassmorphism obrigatório em cards/modais**
```
backdrop-blur-md bg-white/95 border border-black/5 rounded-2xl
```
- Mobile-first: classes base para mobile, depois `md:` `lg:` `xl:`
- Hover: `hover:scale-[1.02] transition-transform duration-200`
- Cantos: `rounded-2xl` ou `rounded-3xl`

**Estado**
- UI state (modais, dropdowns): `useState` local
- Estado compartilhado entre features: `useContext`
- Não criar Redux para estado novo

**Acessibilidade — não negociável**
- `aria-label` em todo botão sem texto visível
- `htmlFor` + `id` em labels de formulário
- Focus visível: `focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`
- Touch targets mínimos: `min-h-[44px] min-w-[44px]`

**data-testid — nunca omitir**
- Root do componente: `data-testid="<featurename>-<componentname>-root"`
- Todo botão, input, link e conteúdo dinâmico: `data-testid="<featurename>-<elemento>-<acao>"`

## Passo 4 — Verificação

```bash
cd frontend && npm run type-check && npm run lint
```

Corrija todos os erros antes de reportar concluído.

## Passo 5 — Reporte

- Arquivos criados (paths relativos)
- Todos os `data-testid` adicionados
- Decisões de design não óbvias tomadas
