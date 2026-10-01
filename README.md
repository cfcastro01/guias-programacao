# Guias de Programação

Projeto local de cursos e projetos práticos para quem está começando a programar. A versão atual apresenta o curso **JavaScript Iniciante**, com nove aulas disponíveis, e a estrutura inicial do curso **Desenvolvimento de Software com IA**.

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
- `projetos/` reserva uma pasta para cada projeto prático.
- Os READMEs internos registram somente o escopo planejado, sem antecipar o conteúdo completo.

## Como abrir em localhost

Abra um terminal nesta pasta e execute:

```bash
npx serve . -l 8000
```

Depois, acesse [http://localhost:8000](http://localhost:8000) no navegador.

Para encerrar o servidor, volte ao terminal e pressione `Ctrl + C`.

Na primeira execução, o `npx` pode pedir confirmação para baixar temporariamente o servidor `serve`. Ele é usado apenas para servir os arquivos locais e não faz parte do código do site.

## Escopo atual

Esta é apenas a estrutura inicial. As Aulas 1 a 9 estão na página do curso JavaScript Iniciante. Cada aula disponível pode ser
marcada como concluída, e esse estado permanece salvo localmente no navegador.
O sumário também apresenta as aulas 10 a 16 e os dois projetos práticos como
conteúdos planejados, ainda sem links ou controles de progresso. O curso
Desenvolvimento de Software com IA possui inicialmente apenas seu sumário; suas
aulas serão publicadas aos poucos e ainda não participam do progresso local.

## Evolução futura

Consulte o [ROADMAP.md](ROADMAP.md) para acompanhar as próximas etapas e as
ideias que ainda não fazem parte do escopo atual.
