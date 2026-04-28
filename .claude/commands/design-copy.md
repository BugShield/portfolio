# Refine Copy

Reescreva copy de UI seguindo o tom premium deste portfolio.

**Uso:** `/design:copy` — cole o texto ou informe o arquivo após o comando
**Exemplo:** `/design:copy frontend/src/features/landing/components/Hero.tsx`

---

## Tom e voz

Público-alvo: CTOs e VPs of Engineering. O portfólio posiciona Gabriel como líder de categoria única em AI-Native Quality Engineering.

**Princípios:**
- Frases curtas e diretas. Máximo 2 cláusulas por sentença.
- Declarações confiantes — sem hedging ("I try to", "I believe", "I'm passionate about")
- Foco em outcome e ROI, não em atividades ("reduziu time-to-market em 40%", não "eu faço testes")
- Minimalismo Apple: cada palavra precisa ganhar seu lugar

**Vocabulário preferido:**
- "Quality Engineering" (nunca só "Testing")
- "Autonomous Testing" (nunca "Automated Testing")
- "AI-Native", "Self-healing", "Quality Gates", "Engineering Excellence"
- "Architect", "Engineer", "Strategist" (nunca "Tester")

**Frases proibidas → substituições:**
| ❌ Evitar | ✅ Usar |
|---|---|
| passionate about | committed to engineering excellence |
| I help teams | I architect systems that... |
| automated testing | autonomous testing |
| QA tester | Quality Engineer / AI-Native Strategist |
| I have X years of experience | [declare o resultado direto] |
| contact me | Schedule a Strategy Sync |

**CTAs:**
- Download: "Download Resume" (não "View CV", não "See Resume")
- Lead modal headline: "Strategy Sync" ou "Let's Engineer Excellence"
- Lead modal sub: proposta de valor concreta, não "fill out this form"

## Instrução

1. Se `$ARGUMENTS` for um path, leia o arquivo e extraia todo texto de UI (JSX strings, placeholders, aria-labels)
2. Se for texto colado, processe diretamente
3. Reescreva seguindo as regras acima
4. Entregue uma tabela diff:

| Localização | Original | Reescrito |
|---|---|---|
| Hero headline | ... | ... |
| Modal CTA button | ... | ... |

5. Se o copy já estiver em conformidade, diga explicitamente — não mude por mudar.
6. **Não edite código** — entregue apenas o copy para o usuário aplicar.
