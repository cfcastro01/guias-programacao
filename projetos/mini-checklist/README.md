# Projeto Prático 2 — Mini Checklist

## Objetivo e estado atual

Construir aos poucos uma lista de tarefas com HTML, CSS e JavaScript puro,
aplicando os conceitos do JavaScript Iniciante.

**Etapa 1 — Estrutura e visual: disponível.** Campo Nova tarefa, botão Adicionar,
área da lista e estado vazio. O CSS prevê tarefas concluídas com a classe
`is-completed`. O layout se adapta ao celular, com rótulos e foco visível.

O botão Adicionar está desativado nesta etapa. O campo permite digitar, mas
nenhuma tarefa é adicionada, concluída ou salva. `script.js` contém apenas um
comentário; não há eventos nem uso de localStorage no projeto.

## Versões e arquivos

```text
mini-checklist/
├── original/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── exercicio/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── README.md
```

- **original/** é a referência fixa da Etapa 1. Não recebe soluções futuras.
- **exercicio/** começa idêntica ao original e é a versão de trabalho do aluno.
- **index.html** organiza o conteúdo; **styles.css** define o visual;
  **script.js** receberá as interações nas próximas etapas.

Faça mudanças somente em `exercicio/`. Compare com `original/` para consultar
a base, preservando suas alterações ao recuperar qualquer arquivo.

## Como abrir e conferir

Na raiz do repositório, use `npx serve . -l 8000`.

- [Versão de exercício](http://localhost:8000/projetos/mini-checklist/exercicio/)
- [Referência original](http://localhost:8000/projetos/mini-checklist/original/)
- [Etapa no curso](http://localhost:8000/cursos/javascript-iniciante/#projeto-2-etapa-1)

Compare as versões na mesma largura. Confira a leitura em celular e desktop,
o rótulo do campo, o estado vazio e o foco usando Tab. O botão desativado não
entra na sequência de Tab. Enter no campo não deve enviar nem recarregar a página.

## Preparação para as próximas interações

O HTML oferece `new-task`, `add-task`, `task-list` e `empty-state` para encontrar
os elementos pelo DOM. O CSS oferece `task-item`, `task-checkbox`, `task-text`
e `task-item.is-completed` para os itens futuros. Ainda não há tarefas na lista.

Adicionar, concluir e persistir tarefas ficam para próximas etapas. A conclusão
da Etapa 1 é marcada manualmente no curso, com o progresso existente e o
identificador `projeto-2-etapa-1`, sem marcar outras aulas ou o projeto inteiro.
