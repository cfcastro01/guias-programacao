# Guias de Programação

Projeto local de cursos e projetos práticos para quem está começando a programar. O curso **JavaScript Iniciante** possui treze aulas disponíveis e as Etapas 1, 2, 3 e 4 da Landing Page Interativa. O curso **Desenvolvimento de Software com IA** possui sua estrutura inicial e a primeira aula publicada.

## Tecnologias

- HTML
- CSS
- JavaScript puro

O projeto não utiliza dependências externas, frameworks ou banco de dados. O
progresso das aulas concluídas é salvo somente no navegador, com
`localStorage`.

## Estrutura

```text
guias-programacao/
├── index.html
├── styles.css
├── script.js
├── README.md
├── ROADMAP.md
├── AGENTS.md
├── CHANGELOG.md
├── cursos/
│   ├── javascript-iniciante/
│   │   ├── index.html
│   │   ├── README.md
│   │   └── MODELO_DE_AULA.md
│   └── desenvolvimento-software-ia/
│       ├── index.html
│       ├── README.md
│       └── MODELO_DE_AULA_IA.md
└── projetos/
    ├── landing-page-interativa/
    │   ├── original/
    │   │   ├── index.html
    │   │   ├── styles.css
    │   │   └── script.js
    │   ├── exercicio/
    │   │   ├── index.html
    │   │   ├── styles.css
    │   │   └── script.js
    │   └── README.md
    └── mini-checklist/
        └── README.md
```

- O `index.html` da raiz apresenta os cursos disponíveis.
- Cada pasta em `cursos/` possui a página inicial do respectivo curso.
- `styles.css` é compartilhado pelas três páginas e `script.js` atende às interações das aulas de JavaScript.
- `AGENTS.md` orienta futuras alterações realizadas por IA/Codex.
- `CHANGELOG.md` registra as principais mudanças do projeto.
- `ROADMAP.md` apresenta as próximas etapas e possibilidades futuras.
- `cursos/` organiza cada curso em uma pasta própria.
- Cada curso possui seu próprio modelo didático dentro da respectiva pasta.
- `projetos/` organiza cada projeto prático; a Landing Page Interativa usa seus próprios arquivos HTML, CSS e JavaScript.
- Os READMEs internos registram o escopo, a etapa atual e os próximos passos.

## Como abrir em localhost

Abra um terminal nesta pasta e execute:

```bash
npx serve . -l 8000
```

Depois, acesse [http://localhost:8000](http://localhost:8000) no navegador.

Para encerrar o servidor, volte ao terminal e pressione `Ctrl + C`.

Na primeira execução, o `npx` pode pedir confirmação para baixar temporariamente o servidor `serve`. Ele é usado apenas para servir os arquivos locais e não faz parte do código do site.

## Escopo atual

Esta é apenas a estrutura inicial. As Aulas 1 a 13 estão na página do curso JavaScript Iniciante. Cada aula disponível pode ser
marcada como concluída, e esse estado permanece salvo localmente no navegador.
O sumário também apresenta as aulas 14 a 16 e o Mini Checklist como conteúdos
planejados. O Projeto Prático 1 já possui uma seção após a Aula 13 e sua
**Etapa 1 — Estrutura e visual** está disponível: uma landing page estática da
cafeteria fictícia Café Origem. A **Etapa 2 — Menu mobile** oferece HTML e CSS
preparados e uma tarefa guiada para o aluno escrever o JavaScript, com dicas e
resposta expansível no curso. A **Etapa 3 — Estado ativo** prepara os botões dos
três métodos e o CSS de destaque, com exercício de seleção exclusiva, dicas e
resposta comentada expansível. A **Etapa 4 — Conteúdo expansível** prepara a
história fechada e o botão acessível, com tarefa para alternar o conteúdo e atualizar
texto e aria-expanded. O script de exercício não contém soluções prontas,
e as Etapas 1, 2, 3 e 4 têm marcações independentes de conclusão no progresso local.
Ainda não há marcação de conclusão geral do projeto. Trabalhe na [versão de exercício](projetos/landing-page-interativa/exercicio/)
e use o [original](projetos/landing-page-interativa/original/) para comparação.
A pasta original preserva a Etapa 1; as próximas atividades serão feitas somente
em exercicio. Consulte o [README do projeto](projetos/landing-page-interativa/README.md)
para abrir as duas versões no navegador ou no servidor local.
O curso Desenvolvimento de Software com IA possui a primeira aula publicada e as demais
aulas planejadas em seu sumário. A aula disponível também pode ser marcada como
concluída no progresso local.

## Evolução futura

Consulte o [ROADMAP.md](ROADMAP.md) para acompanhar as próximas etapas e as
ideias que ainda não fazem parte do escopo atual.
