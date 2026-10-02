# Projeto Prático 1 — Landing Page Interativa

## Objetivo

Construir aos poucos o **Café Origem**, uma landing page (página de apresentação)
de uma cafeteria fictícia, aplicando DOM, eventos, classes e estados visuais das
Aulas 11–13 do JavaScript Iniciante.

## Como este projeto funciona

- **original/** guarda a Etapa 1 aprovada como referência para comparação e recuperação.
- **exercicio/** começa como uma cópia funcional dessa mesma etapa e é a versão de trabalho do aluno.

As duas versões abrem independentemente. Cada uma possui seus próprios arquivos
HTML, CSS e JavaScript. A cópia inicial tinha o mesmo visual e conteúdo; agora
exercicio/ está preparado para o aluno desenvolver o menu da Etapa 2.
O original permanece na Etapa 1: não recebe automaticamente a solução de cada etapa.

## Regra de trabalho

Faça as atividades **somente em exercicio/**. Use **original/** para comparar ou
consultar o estado inicial; não edite essa pasta durante os exercícios.
Se precisar recuperar um arquivo, confira qual arquivo de exercício foi alterado
antes de copiá-lo do original. Essa cópia substitui suas alterações naquele arquivo.

## Estrutura de arquivos

~~~text
landing-page-interativa/
├── original/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── exercicio/
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── README.md
~~~

## Tecnologias e estado atual

HTML, CSS e JavaScript puro, sem bibliotecas, backend ou armazenamento de dados.

**Etapa 1 — Estrutura e visual: concluída.** A página tem cabeçalho, apresentação,
sobre, três métodos de preparo, história, convite à visita e rodapé. A xícara é
feita com CSS. O layout é responsivo e os links internos funcionam.

**Etapa 2 — Menu mobile: atual.** Em exercicio/, o botão menu-button foi habilitado
e possui aria-controls e aria-expanded="false". A navegação site-navigation começa
fechada abaixo de 700px; a classe aberto a mostra. Em desktop, permanece visível.
O aluno implementará o JavaScript em exercicio/script.js, que contém apenas a tarefa.
Até essa implementação, o botão não abre o menu.

O original continua intacto na Etapa 1, com navegação visível e botão desativado.
Seleção de preparo e Ver mais continuam desativados nas duas versões.
Na página do curso, as Etapas 1 e 2 podem ser marcadas como concluídas de forma
independente, depois de realizar cada tarefa. O progresso usa a mesma chave
`guias-programacao-progress` das aulas e permanece salvo neste navegador.

## Como abrir

Abra **exercicio/index.html** diretamente no navegador para trabalhar.
Abra **original/index.html** em outra aba para comparação.

Ou, na raiz do repositório, execute:

~~~powershell
npx serve . -l 8000
~~~

- [Abrir versão de exercício](http://localhost:8000/projetos/landing-page-interativa/exercicio/)
- [Ver projeto original para comparação](http://localhost:8000/projetos/landing-page-interativa/original/)

O rodapé das duas versões permite voltar ao curso.

## Como fazer os exercícios

Abra a pasta **exercicio/** no seu editor de código. Cada etapa indicará o arquivo,
a mudança pedida, a forma de testar e o resultado esperado.

- **index.html:** estrutura e elementos da página.
- **styles.css:** aparência, layout e estados visuais.
- **script.js:** comportamento e interação com JavaScript, nas próximas etapas.
- **Console do navegador:** apoio para testar pequenas expressões, conferir valores,
  ler erros e depurar (investigar a causa de um problema).

Escreva as soluções nos arquivos reais de exercício. O Console não é o local
principal para construir o projeto. Salve o arquivo editado e recarregue a versão
de exercício no navegador. Compare com o original usando a mesma largura de janela.
Na Etapa 2, escreva o JavaScript do menu. A resposta comentada está oculta no curso
e deve ser consultada depois da tentativa. Não implemente ainda cards ou história.

## Etapas

1. **Estrutura e visual — concluída:** HTML, CSS e responsividade.
2. **Menu mobile — atual:** abrir e fechar a navegação.
3. **Estado ativo:** destacar o método de preparo escolhido.
4. **Conteúdo expansível:** mostrar e ocultar parte da história.
5. **Revisão final:** conferir comportamento, teclado e responsividade.

Os conceitos futuros incluem encontrar elementos no DOM, reagir a cliques e
alternar classes CSS. O HTML já prepara menu-button e site-navigation;
method-card e method-select; story-button e story-content.
Não há controle de conclusão geral do projeto; ele será tratado quando todas as etapas estiverem prontas.

## Etapa 2 — Menu mobile

Objetivo: conectar as Aulas 11 (DOM), 12 (eventos) e 13 (classes e estados visuais)
com a lógica **encontrar → ouvir → alterar**.

Arquivos usados, sempre em projetos/landing-page-interativa/:

- exercicio/index.html: botão e navegação já preparados; confira os IDs.
- exercicio/styles.css: estados fechado e aberto já preparados.
- exercicio/script.js: arquivo em que você escreverá a interação.

Encontre o botão e a navegação, guarde os elementos em variáveis, crie uma função
para alternar a classe aberto e registre o clique. Atualize também aria-expanded
para acompanhar a classe. O atributo informa o estado para leitores de tela;
a classe e o CSS controlam o visual.

Salve, recarregue a versão de exercício e teste abaixo de 700px: clique para abrir
e clique novamente para fechar. Teste Tab, Enter e Espaço. A partir de 700px,
a navegação deve continuar visível. Use o Console para investigar erros.

Compare com original/ na mesma largura: ele mantém a Etapa 1 e não recebe a solução.
O exercício só terá o menu funcional depois da sua implementação.
Consulte [a Etapa 2 no curso](../../cursos/javascript-iniciante/#projeto-1-etapa-2)
para a tarefa completa, dicas, diagnóstico e resposta expansível.

## Formato das próximas etapas

1. **Objetivo:** o que será aprendido.
2. **Arquivos usados:** indicar os caminhos de exercicio/index.html,
   exercicio/styles.css e/ou exercicio/script.js necessários à tarefa.
3. **Sua tarefa:** passos para o aluno realizar.
4. **Como testar:** o que fazer no navegador depois de salvar e recarregar.
5. **Resultado esperado:** o comportamento que deve ser observado.
6. **Compare com o original:** diferenças entre a base da Etapa 1 e sua versão modificada.
7. **Resposta comentada:** conferir depois da tentativa, entendendo por que a solução funciona.
