# 🚇 Onde anda o pica?

**O passe pesa na carteira — e a multa ainda mais.** 

"Onde Anda o Pica?" é uma web app leve e anónima que mostra avistamentos recentes de revisores nos transportes públicos em Portugal (começando pelos Metros de Lisboa e Porto).

Os relatos de avistamentos são submetidos por passageiros anónimos e apresentados em tempo quase real, organizados por linha, direção e hora.

- 👉 Live: https://ondeandaopica.pt/
- 👉 Formulário: https://forms.gle/ufkTC7mjBWwSbM7u7

Projeto independente, feito por um humano e mantido pela comunidade.

---

## 🧠 Como funciona

O sistema é propositadamente simples:

1. Utilizadores enviam relatos através de um Google Form.
2. As respostas ficam guardadas num Google Sheets público.
3. Uma página HTML estática consome os dados, aplica lógica de agrupamento em JS e renderiza a interface

**Arquitetura:** Google Form → Google Sheets → HTML + JavaScript

---

## 💻 Stack

- Google Forms — recolha de relatos  
- Google Sheets — armazenamento de dados  
- HTML + CSS — frontend minimalista  
- JavaScript — fetch + lógica de agrupamento  
- GitHub Pages — hosting  

---

## 🛠 Roadmap

- Suporte a outras redes (CP, Fertagus, etc.)
- Heatmap de estações com mais avistamentos
- Notificações push / PWA instalável
- Sistema de reputação ou “confiança” por avistamento

---

## 🤝 Contribuir

Contribuições são muito bem-vindas:

- Sugestões de UX e copy
- Melhorias no código via pull request
- Ideias para melhorias na arquitetura

---

## ⚠️ Disclaimer

Este projeto não tem qualquer afiliação com operadores de transportes públicos ou privados.

É uma ferramenta comunitária, experimental e sem fins lucrativos, criada para partilha informal de informação entre passageiros.
