---
name: criar-aula-guia
description: Criar uma aula solicitada em um curso do projeto Guias de Programação, seguindo o modelo daquele curso e os mecanismos existentes de exercício e progresso. Não usar para auditorias ou tarefas de Git.
---

# Criar aula do guia

Receba curso, módulo (quando houver), número, título e objetivo ou tópicos da aula. Pergunte apenas por informações essenciais que não possam ser inferidas do pedido e do sumário. Crie somente a aula solicitada, sem antecipar a próxima.

## Leitura mínima

1. Leia `AGENTS.md` na raiz e localize o curso em `cursos/`.
2. Consulte regras locais do curso, se existirem, e seu arquivo `MODELO_DE_AULA*.md`. Priorize as orientações do projeto, as regras locais, o modelo e, por último, as aulas anteriores. Respeite o pedido explícito do usuário.
3. Leia o trecho do sumário e apenas as aulas ou seções necessárias daquele curso para manter o padrão didático e visual. Não revise o projeto inteiro nem imponha o modelo de outro curso. Se o curso ou modelo não puder ser identificado, esclareça antes de escrever.
4. Consulte os trechos de CSS/JS responsáveis pelo comportamento somente quando necessário. Confira `git status` para reconhecer alterações preexistentes e preservá-las.

## Criação

- Siga o modelo do curso. Escreva para iniciantes, com frases diretas, termos técnicos explicados em português e exemplos curtos. Preserve **Como ler em português**; inclua exercício e resposta comentada quando fizer sentido, sem alongar o conteúdo.
- Reutilize a estrutura HTML, os estilos e os mecanismos de exercício, resposta oculta e progresso existentes. Preserve navegação por teclado, foco visível e atributos de acessibilidade. Não crie dependências, sistemas paralelos ou refatorações fora do escopo.
- Antes de inserir, confira se o número, título ou identificadores já existem; não sobrescreva uma aula publicada. Use o padrão de identificadores do curso, sem colisões. Quando aplicável, mantenha o mesmo `data-course-id`, use `aula-N` para conclusão e `aula-N-exercicio` para a escolha, adaptando ao padrão existente.
- Mantenha exercício e conclusão independentes entre si e das outras aulas. Não altere o formato nem as chaves atuais do armazenamento no navegador.
- Atualize somente o item solicitado no sumário, com link para a nova aula. Preserve as aulas publicadas, os tópicos futuros e os cursos não relacionados.
- Atualize apenas documentação já usada no fluxo do projeto e que tenha ficado desatualizada, como README do curso ou CHANGELOG. Não crie documentação redundante.

## Validação e entrega

- Execute apenas validações técnicas: `node --check script.js`, quando aplicável, e dos arquivos JS alterados; `git diff --check`; verificação de IDs HTML duplicados e links internos, incluindo destinos locais, âncoras, `for` e `aria-controls`.
- Confira os identificadores de curso, aula e exercício no sumário e nos controles, sua compatibilidade com o código existente e a ausência de colisões com outras aulas. Revise o diff para confirmar o escopo, distinguindo alterações preexistentes.
- Não solicite abrir o navegador nem tente abri-lo ou controlá-lo. A validação visual e de interação é manual pelo usuário. Informe a URL correspondente em `http://localhost:8000/`, com a âncora da aula; não afirme que o servidor está ativo sem evidência. Preserve a execução com `npx serve . -l 8000`.
- Ao terminar, informe arquivos alterados, conteúdo criado, exercício/progresso, testes e resultados, URL e pendências reais, incluindo a validação manual. Não apresente checagens estáticas como testes de interação.
- Pare antes de commit ou push. Por padrão, não crie nem troque branches, não faça merge ou cherry-pick. Operações de Git que publiquem ou registrem alterações ficam para uma tarefa separada após validação do usuário.

## Exemplo de uso

`$criar-aula-guia Curso: Desenvolvimento de Software com IA. Módulo 1, Aula 4: APIs, HTTP e JSON. Objetivo: explicar os três conceitos e como se relacionam, sem aprofundar métodos ou autenticação.`
