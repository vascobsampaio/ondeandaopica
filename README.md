# 🚇 Onde anda o pica?

[ondeandaopica.pt](https://ondeandaopica.pt) é uma web app que mapeia avistamentos de revisores nos transportes públicos em Portugal.

Atualmente cobre o metro de Lisboa e o metro do Porto, apresentando os avistamentos das últimas 24 horas.

Os relatos são submetidos anonimamente por passageiros e apresentados em tempo quase real. 

## 💻 Stack

Este projeto foi construído com uma filosofia de baixo custo e simplicidade estrutural.

**Arquitetura:** HTML + Vanilla JS → PostgreSQL

| Camada        | Tecnologia              | Função                                              |
|---------------|-------------------------|-----------------------------------------------------|
| Frontend      | HTML + JavaScript       | UI, fetch de dados e renderização                   |
| Backend       | Supabase (Postgres)     | Armazenamento estruturado com RLS                   |
| Realtime      | Supabase Realtime       | Atualizações em tempo real via WebSocket            |
| Notificações  | Supabase Edge Functions | Push notifications via Web Push API (VAPID)         |
| Hosting       | GitHub Pages            | Distribuição sob domínio próprio                    |

## 🤝 Contribuir

Se quiseres ajudar, abre um issue, manda um PR, ou escreve para info@ondeandaopica.pt.

- 💻 Código: Pull requests são bem-vindos, sejam correções ou novas funcionalidades.
- 🎨 UX/UI: Sugestões para tornar a interface mais fluida, especialmente em mobile.
- 🗺️ Expansão: Ajudar a mapear e validar as linhas e direções ferroviárias.


## ⚠️ Disclaimer

Projeto experimental e sem fins lucrativos, criado para partilha informal de informação entre passageiros.

Não tem qualquer afiliação a operadores de transportes públicos ou privados.

_Desenvolvido por um humano, mantido pela comunidade._
