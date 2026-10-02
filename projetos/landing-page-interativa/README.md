# Projeto Prático 1 — Landing Page Interativa

## Objetivo

Construir aos poucos o **Café Origem**, uma landing page (página de apresentação)
de uma cafeteria fictícia, aplicando DOM, eventos, classes e estados visuais das
Aulas 11–13 do JavaScript Iniciante.

## Como este projeto funciona

- **original/** guarda a Etapa 1 aprovada como referência para comparação e recuperação.
- **exercicio/** começa como uma cópia funcional dessa mesma etapa e é a versão de trabalho do aluno.

As duas versões abrem independentemente. Cada uma possui seus próprios arquivos
HTML, CSS e JavaScript, com o mesmo visual e conteúdo inicial.
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

Os botões de menu, seleção de preparo e Ver mais continuam desativados. A navegação
fica visível no celular e a história aparece inteira. Os dois script.js contêm
apenas o comentário original, sem interações. Esta reorganização não cria uma
nova etapa nem adiciona controle de conclusão ao projeto.

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
Nesta etapa, observe a estrutura e os links; ainda não adicione interações.

## Etapas

1. **Estrutura e visual — concluída:** HTML, CSS e responsividade.
2. **Menu mobile — próxima:** abrir e fechar a navegação.
3. **Estado ativo:** destacar o método de preparo escolhido.
4. **Conteúdo expansível:** mostrar e ocultar parte da história.
5. **Revisão final:** conferir comportamento, teclado e responsividade.

Os conceitos futuros incluem encontrar elementos no DOM, reagir a cliques e
alternar classes CSS. O HTML já prepara menu-button e site-navigation;
method-card e method-select; story-button e story-content.
O controle de conclusão só será considerado quando todas as etapas estiverem prontas.

## Formato das próximas etapas

1. **Objetivo:** o que será aprendido.
2. **Arquivos usados:** indicar os caminhos de exercicio/index.html,
   exercicio/styles.css e/ou exercicio/script.js necessários à tarefa.
3. **Sua tarefa:** passos para o aluno realizar.
4. **Como testar:** o que fazer no navegador depois de salvar e recarregar.
5. **Resultado esperado:** o comportamento que deve ser observado.
6. **Compare com o original:** diferenças entre a base da Etapa 1 e sua versão modificada.
7. **Resposta comentada:** conferir depois da tentativa, entendendo por que a solução funciona.
