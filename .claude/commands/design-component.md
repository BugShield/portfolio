# New Component

Crie um componente UI seguindo o design system glassmorphism/Apple deste portfolio.

**Uso:** `/design:component <ComponentName> <featureName>`
**Exemplo:** `/design:component TestimonialCard testimonials`

---

## Passo 1 — Contexto visual

Se `$ARGUMENTS` incluir um path de screenshot ou o usuário colar uma descrição visual, essa é a fonte primária. Layout do screenshot > qualquer suposição.

Leia também componentes existentes em `frontend/src/features/landing/components/` para manter consistência visual.

## Passo 2 — Design system obrigatório

**Cards e painéis:**
```
backdrop-blur-md bg-white/95 border border-black/5 rounded-2xl shadow-sm
```

**Botão primário:**
```
px-6 py-3 bg-black text-white rounded-full font-medium
hover:bg-neutral-800 transition-colors duration-200
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
```

**Botão secundário / outline:**
```
px-6 py-3 border border-black/20 text-black rounded-full font-medium
hover:border-black/40 transition-colors duration-200
```

**Gradiente de ícone:**
```
bg-gradient-to-br from-neutral-800 to-neutral-600 rounded-xl p-3
```

**Cores — sem inventar novas:**
- Texto principal: `text-neutral-900`
- Texto secundário: `text-neutral-500`
- Fundo: `bg-neutral-50` ou `bg-white`
- Bordas: `border-neutral-200` ou `border-black/5`

**Espaçamento:** siga a escala Tailwind — prefira `p-6`, `p-8`, `gap-4`, `gap-6`

**Tipografia:**
- Headlines: `text-2xl font-semibold tracking-tight` (mobile) → `text-3xl` (md)
- Body: `text-base text-neutral-600 leading-relaxed`
- Label/caption: `text-sm text-neutral-500`

## Passo 3 — Implementação

**Arquivo:** `frontend/src/features/<featureName>/components/<ComponentName>.tsx`

- Interface `ComponentNameProps` acima do componente
- Export nomeado (não default)
- Mobile-first: base classes para 375px, depois `md:` `lg:`
- Hover: `hover:scale-[1.02] transition-transform duration-300` em cards clicáveis
- Zero inline styles
- HTML semântico

**data-testid obrigatório:**
- Root: `data-testid="<featurename>-<componentname>-root"`
- Todo elemento interativo: `data-testid="<featurename>-<elemento>-<acao>"`

**Acessibilidade:**
- `aria-label` em ícones e botões sem texto visível
- Alt descritivo em imagens
- Focus ring visível em todos os interativos

## Passo 4 — Verificação

```bash
cd frontend && npm run type-check
```

## Passo 5 — Reporte

- Path do arquivo criado
- Lista de `data-testid` adicionados
- Variações responsivas implementadas (mobile / desktop)
