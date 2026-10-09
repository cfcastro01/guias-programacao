# Projeto Prático 2 — Mini Checklist

## Objetivo e estado atual

Construir aos poucos uma lista de tarefas com HTML, CSS e JavaScript puro,
aplicando os conceitos do JavaScript Iniciante.

**Projeto completo como conteúdo:** as cinco etapas estão disponíveis no curso.
As soluções continuam sendo escritas pelo aluno; nenhuma conclusão é automática.

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
O arquivo fornecido mantém apenas instruções para o aluno implementar.

**Etapa 4 — Salvar tarefas com localStorage: disponível como exercício guiado.**
O aluno recuperará as tarefas ao abrir e salvará após adicionar, marcar ou desmarcar,
usando JSON e a chave exclusiva `guias-programacao-mini-checklist-tarefas`.
Sem dados salvos, a lista começa vazia. Não há exclusão, filtros ou outros controles.

**Etapa 5 — Revisão final: disponível.** Mapa do código e do fluxo completo,
atividade de interpretação com resposta expansível e checklist de testes finais.
Não altera os arquivos de exercício nem acrescenta funcionalidades.

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
- **exercicio/** começou idêntica ao original e agora está preparada para as Etapas 2, 3 e 4.
- **index.html** organiza o conteúdo; **styles.css** define o visual;
  **script.js** é onde o aluno escreverá as interações e a persistência das Etapas 2, 3 e 4.

Faça mudanças somente em `exercicio/`. Compare com `original/` para consultar
a base, preservando suas alterações ao recuperar qualquer arquivo.

## Como abrir e conferir

Na raiz do repositório, use `npx serve . -l 8000`.

- [Versão de exercício](http://localhost:8000/projetos/mini-checklist/exercicio/)
- [Referência original](http://localhost:8000/projetos/mini-checklist/original/)
- [Etapa 1 no curso](http://localhost:8000/cursos/javascript-iniciante/#projeto-2-etapa-1)
- [Etapa 2 no curso](http://localhost:8000/cursos/javascript-iniciante/#projeto-2-etapa-2)
- [Etapa 3 no curso](http://localhost:8000/cursos/javascript-iniciante/#projeto-2-etapa-3)
- [Etapa 4 no curso](http://localhost:8000/cursos/javascript-iniciante/#projeto-2-etapa-4)
- [Etapa 5 no curso](http://localhost:8000/cursos/javascript-iniciante/#projeto-2-etapa-5)

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

## Etapa 4 — Sua tarefa

Continue sua solução da Etapa 3 em `exercicio/script.js`. A resposta expansível
mostra os pontos de alteração, sem duplicar todo o código anterior.

1. Use a chave `guias-programacao-mini-checklist-tarefas`, separada do progresso.
2. Antes da primeira renderização, recupere com `getItem()` e `JSON.parse()`.
   Se o retorno for `null`, mantenha o array vazio.
3. Crie `salvarTarefas()` com `setItem()` e `JSON.stringify(tarefas)`.
4. Chame essa função depois do `push()` e depois de atualizar `concluida` no `change`.
   Preserve a renderização, o estado vazio e o foco.

Use o mesmo navegador e origem, incluindo a porta 8000. Adicione duas tarefas,
conclua uma e recarregue: textos e estados devem permanecer. Desmarque e recarregue
para conferir também o caminho inverso; adicione outra e confira a lista completa.
Entradas vazias continuam sem criar tarefas. Teste teclado e tela estreita.

Para testar novamente sem dados, remova **somente a chave do projeto** no Console
com `localStorage.removeItem("guias-programacao-mini-checklist-tarefas")` e recarregue.
Isso apaga as tarefas salvas do exercício. Não use `localStorage.clear()`, que também
apagaria o progresso do site. Não adicione exclusão ou filtros à interface.

## Etapa 5 — Revisão final

Leia sua solução das Etapas 2–4 e localize o array, os objetos, as três funções
principais, os eventos, a atualização do DOM, a classe `is-completed` e o localStorage.
Acompanhe a abertura da página e depois as ações de adicionar, concluir e desmarcar:
dados mudam, são salvos e voltam a ser representados na interface.

A atividade no curso usa um recorte do evento do checkbox, sem pedir código novo.
Confira a resposta expansível e execute manualmente o checklist final: lista sem
dados, entradas vazias, inclusões seguidas, conclusão independente, recarga após
cada mudança, foco por teclado, tela estreita e texto longo.
Não adicione exclusão, filtros, edição ou outras ações nesta revisão.

As Etapas 1, 2, 3, 4 e 5 têm conclusões manuais independentes no curso, usando o progresso
existente e os identificadores `projeto-2-etapa-1`, `projeto-2-etapa-2`, `projeto-2-etapa-3`
e `projeto-2-etapa-4`, além de `projeto-2-etapa-5`. Os dados do checklist usam uma chave separada.
Nenhuma delas marca outras aulas nem o projeto inteiro.
