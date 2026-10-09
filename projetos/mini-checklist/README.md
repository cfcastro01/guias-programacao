# Projeto Prático 2 — Mini Checklist

## Objetivo e estado atual

Construir aos poucos uma lista de tarefas com HTML, CSS e JavaScript puro,
aplicando os conceitos do JavaScript Iniciante.

**Etapa 1 — Estrutura e visual: disponível.** Campo Nova tarefa, botão Adicionar,
área da lista e estado vazio. O CSS prevê tarefas concluídas com a classe
`is-completed`. O layout se adapta ao celular, com rótulos e foco visível.

**Etapa 2 — Adicionar tarefas: disponível como exercício guiado.** Em `exercicio/`,
o botão Adicionar está habilitado e `script.js` contém somente instruções.
O aluno implementará um array de objetos, validação de texto, inclusão e renderização.
Até escrever essa solução, o botão não adiciona tarefas.

**Etapa 3 — Marcar tarefa como concluída: disponível como exercício guiado.**
O aluno continuará sua solução da Etapa 2 para alternar `concluida` no objeto,
renderizar o checkbox e a classe `is-completed` e preservar o foco no controle.
O arquivo fornecido mantém apenas instruções das duas etapas. Persistir fica
para uma próxima etapa; ainda não há localStorage no projeto.

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
- **exercicio/** começou idêntica ao original e agora está preparada para as Etapas 2 e 3.
- **index.html** organiza o conteúdo; **styles.css** define o visual;
  **script.js** é onde o aluno escreverá as interações das Etapas 2 e 3.

Faça mudanças somente em `exercicio/`. Compare com `original/` para consultar
a base, preservando suas alterações ao recuperar qualquer arquivo.

## Como abrir e conferir

Na raiz do repositório, use `npx serve . -l 8000`.

- [Versão de exercício](http://localhost:8000/projetos/mini-checklist/exercicio/)
- [Referência original](http://localhost:8000/projetos/mini-checklist/original/)
- [Etapa 1 no curso](http://localhost:8000/cursos/javascript-iniciante/#projeto-2-etapa-1)
- [Etapa 2 no curso](http://localhost:8000/cursos/javascript-iniciante/#projeto-2-etapa-2)
- [Etapa 3 no curso](http://localhost:8000/cursos/javascript-iniciante/#projeto-2-etapa-3)

Compare as versões na mesma largura. Confira a leitura em celular e desktop,
o rótulo do campo, o estado vazio e o foco usando Tab. No original, o botão
desativado não entra na sequência de Tab; no exercício, ele pode receber foco.
Enter no campo não deve enviar nem recarregar a página.

## Preparação para as próximas interações

O HTML oferece `new-task`, `add-task`, `task-list` e `empty-state` para encontrar
os elementos pelo DOM. O CSS oferece `task-item`, `task-checkbox`, `task-text`
e `task-item.is-completed` para os itens. A Etapa 2 usa `task-item` e `task-text`;
a Etapa 3 acrescenta o checkbox rotulado e o visual concluído. No exercício,
o rótulo da tarefa tem um ajuste de CSS para manter o alinhamento do item.

## Etapa 2 — Sua tarefa

Edite somente `exercicio/script.js`. As dicas e a resposta comentada expansível
estão no curso; o arquivo não contém a solução pronta.

1. Crie `tarefas = []` e encontre os quatro elementos no DOM.
2. No clique do botão, leia o texto com `trim()` e ignore entradas vazias.
3. Inclua com `push()` um objeto `{ texto: "...", concluida: false }`.
4. Renderize o array como itens da lista, atualize o aviso vazio, limpe e foque o campo.

Depois de implementar, teste texto vazio, só espaços e duas inclusões seguidas.
O primeiro item não deve duplicar. A lista deve voltar a ficar vazia ao recarregar:
não há persistência nesta etapa. Teste também o botão por teclado com Enter ou
Espaço; Enter no campo ainda não adiciona tarefas.

## Etapa 3 — Sua tarefa

Continue em `exercicio/script.js`, preservando seu array e a inclusão já feita.
Não cole novamente toda a solução da Etapa 2 nem duplique o evento de Adicionar.

1. Em `renderizarTarefas()`, crie um checkbox rotulado para cada objeto.
2. Use `tarefa.concluida` para definir `checked` e a classe `is-completed`.
3. No evento `change`, atribua o estado do checkbox ao objeto correspondente.
4. Renderize novamente e restaure o foco no checkbox da mesma tarefa.

A resposta expansível substitui somente a função de renderização. Teste duas
tarefas, marque e desmarque a segunda e confira que a primeira não muda.
Depois, conclua uma tarefa e adicione outra: o estado anterior deve permanecer,
e a nova tarefa começa pendente. Teste o rótulo e o uso de Tab e Espaço.
Mesmo com todas concluídas, o aviso vazio fica escondido; ao recarregar, a lista
fica vazia novamente. Não implemente localStorage nesta etapa.

As Etapas 1, 2 e 3 têm conclusões manuais independentes no curso, usando o progresso
existente e os identificadores `projeto-2-etapa-1`, `projeto-2-etapa-2` e `projeto-2-etapa-3`.
Nenhuma delas marca outras aulas nem o projeto inteiro.
