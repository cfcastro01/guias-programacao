# Guias de Programação

Projeto local de cursos e projetos práticos para quem está começando a programar. A versão atual apresenta o curso **JavaScript Iniciante**, com um sumário provisório e a primeira aula.

## Tecnologias

- HTML
- CSS
- JavaScript puro

O projeto não utiliza dependências externas, frameworks ou banco de dados.

## Estrutura

```text
guias-programacao/
├── index.html
├── styles.css
├── script.js
├── README.md
├── AGENTS.md
├── CHANGELOG.md
├── cursos/
│   └── javascript-iniciante/
│       ├── README.md
│       └── MODELO_DE_AULA.md
└── projetos/
    ├── landing-page-interativa/
    │   └── README.md
    └── mini-checklist/
        └── README.md
```

- Os arquivos da raiz formam a página funcional atual.
- `AGENTS.md` orienta futuras alterações realizadas por IA/Codex.
- `CHANGELOG.md` registra as principais mudanças do projeto.
- `cursos/` organiza cada curso em uma pasta própria.
- `MODELO_DE_AULA.md` define o padrão didático das aulas de JavaScript Iniciante.
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

Esta é apenas a estrutura inicial. A Aula 1 está na página principal para facilitar o desenvolvimento neste começo. Quando houver mais conteúdo, cada curso ou projeto poderá receber suas próprias páginas dentro da pasta correspondente.
