# Starter Kit — Site Sua Empresa

Kit pronto para publicar um site profissional, acessível e performático, com **dois programas** (Conformidade Clínica & Eficiência Energética), **SEO**, **LGPD** e **deploy** simples.

## 🧩 O que vem dentro
- `index.html` — Home com herói, provas e CTAs segmentados.
- `servicos.html` — Entregáveis dos dois programas com âncoras `#conformidade` e `#eficiencia`.
- `sobre.html`, `contato.html`, `blog.html`, `politica-de-privacidade.html`, `obrigado.html`.
- `assets/css/main.css` — layout responsivo e acessibilidade básica.
- `assets/js/rotator.js` — animação de frase (respeita `prefers-reduced-motion`).
- `robots.txt`, `sitemap.xml` — SEO técnico essencial.

## ⚙️ Como usar
1. **Procure e substitua**:
   - `Sua Empresa` → nome real.
   - `{ BASE_URL }` → ex.: `https://www.seudominio.com`.
   - `<SEU_NUMERO_WHATSAPP>` → só os dígitos com DDI/DDD.
   - `<SEU_NOME>` → responsável técnico.
2. **Formulário**: troque a action de `contato.html` por seu serviço (Formspree, Netlify, Vercel Functions) e ajuste o redirecionamento para `/obrigado.html`.
3. **Publicar**: Vercel, Netlify, Cloudflare Pages ou GitHub Pages. Garanta HTTPS.
4. **Headers recomendados** (configure na plataforma):
   - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: SAMEORIGIN`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'`
   > Ajuste a CSP se incluir scripts de terceiros (analytics, etc.).

## 🧪 Checks rápidos (Lighthouse)
- Acessibilidade ≥ 90, SEO ≥ 90, Performance ≥ 90 (laboratório).
- Core Web Vitals (alvo lab): LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.

## 🧯 Notas
- A menção a **Especialista em Engenharia Clínica (Einstein)** é **formação**, não afiliação institucional.
- Não operamos laboratório de **calibração** (deixar claro em "Serviços").
