# Section: Certificates

## Objetivo
Criar uma section de **Certificados** posicionada **imediatamente após a section de Education**, com uma proposta visual diferente do padrão "lista de cards": exibir **ícones representando as fontes/categorias dos certificados** e, ao clicar, revelar a lista detalhada da categoria.

## Conceito visual
Linha (ou grid pequeno) de ícones clicáveis. Cada ícone representa um emissor ou categoria. Hover mostra tooltip com o nome. Click abre a lista de certificados daquela categoria.

## Categorias e ícones sugeridos
1. **Anthropic / Claude Code** → logo oficial do Claude
2. **Outras IAs** → ícone genérico de IA, OU logos individuais (OpenAI, Google, etc.)
3. **QA & Test Automation** → ícone relacionado (check/bug/shield)
4. **Outros** *(opcional)* → certificados gerais de tecnologia

## Comportamento de interação — escolher 1 das opções

### Opção A — Modal / Drawer (recomendada se houver vários itens por categoria)
- Click no ícone abre um modal centralizado (ou drawer lateral à direita).
- Lista interna rolável.
- Fecha com ESC, click no overlay, ou botão "X".

### Opção B — Accordion in-place
- Click expande a lista logo abaixo dos ícones, sem sair da página.
- Mais leve, mantém o usuário no fluxo da landing.
- Apenas uma categoria expandida por vez.

### Opção C — Tabs
- Cada ícone funciona como aba; a lista da aba ativa aparece abaixo.
- Boa opção se quiser que sempre tenha uma categoria visível por padrão.

> **Sugestão**: começar pela **Opção B (accordion)** — mais leve, não exige nova página, e mantém a estética de landing one-page.

## Estrutura de cada item da lista
- Nome do certificado/curso
- Emissor (ex: Anthropic, DeepLearning.AI, etc.)
- Data de conclusão
- Link de verificação (opcional, se existir)
- Badge/imagem mini do certificado (opcional)

## Design system
- Reaproveitar componentes existentes (cards, modais, hover states, tipografia).
- Ícones com **tamanho uniforme** entre si (ex: 48–64px desktop, 40px mobile).
- Hover com feedback claro: leve scale, mudança de opacidade ou brilho + **tooltip com nome da categoria**.
- Estado ativo (categoria selecionada) visualmente diferenciado.
- Suporte a dark/light mode coerente com o resto da página.

## Acessibilidade
- Cada ícone com `aria-label` descritivo (ex: "Ver certificados da Anthropic").
- Navegação por teclado: Tab entre ícones, Enter/Space para abrir, Esc para fechar modal/accordion.
- Foco visível.
- Tooltip também acessível via foco de teclado (não só hover).

## Responsividade
- Desktop: ícones em linha horizontal centralizada.
- Mobile: manter em linha se couber; caso contrário, grid 2 colunas.
- Modal/accordion ocupa largura total no mobile.

## Dados (a serem preenchidos depois)
Deixar a estrutura pronta com um array/objeto mockado de certificados por categoria, fácil de substituir pelos dados reais quando eu te passar a lista (nome, emissor, data, link).

```ts
// exemplo de shape dos dados
const certificates = {
  anthropic: [
    { name: "...", issuer: "Anthropic", date: "2025-XX", url: "..." },
  ],
  otherAI: [...],
  qa: [...],
  others: [...],
};
```

## Restrições
- Não inventar certificados nem datas — apenas estruturar a UI com placeholders claros.
- Não quebrar a estética da landing: a section deve parecer parte do mesmo design, não um anexo.