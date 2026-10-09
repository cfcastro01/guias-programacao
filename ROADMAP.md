# Roadmap — Guias de Programação

## Agora

- Concluir o curso JavaScript Iniciante.
- Desenvolver aos poucos as aulas do curso Desenvolvimento de Software com IA.
- Manter aulas curtas, progressivas e com exercícios.
- Continuar salvando o progresso local com `localStorage`.
- Desenvolver os projetos práticos no momento adequado da trilha.

## Próximas etapas do JavaScript Iniciante

- Aulas 6–8: dados e coleções.
- Aulas 9–10: repetição e transformação.
- Aulas 11–13: JavaScript na página.
- Projeto prático 1: Landing Page Interativa.
- Aulas 14–15: debug e leitura de código disponíveis; Aula 16: próxima aula de consolidação.
- Projeto prático 2: Mini Checklist.

## Desenvolvimento de Software com IA

- Estrutura inicial organizada em 15 módulos.
- Próxima etapa: definir a primeira aula sem antecipar o restante do conteúdo.
- Manter atividades conceituais e práticas, com atenção à validação e ao uso seguro de agentes.

## Laboratório de JavaScript — migração gradual

As Aulas 1, 2, 4, 5, 6, 8, 9, 10 e 14 usam o laboratório integrado. A Aula 5 valida apresentarPessoa(nome);
as Aulas 1, 4, 9 e 14 validam a saída do programa e as Aulas 6, 8 e 10 comparam valores tipados.
As demais mantêm o fluxo no Console, exceto a Aula 15, que prioriza leitura com escolha salva e resposta expansível.

### Implementado no piloto

- Campo de JavaScript, Executar, Limpar saída, logs, erros e resultado dos testes.
- Aula 2 valida somente tipos e ordem (texto, número finito, booleano, número finito), com valores livres e sem mensagens extras; não confirma uso de variáveis, const ou let. Aulas 3 e 7 permanecem no Console.
- Validação de função com três nomes na Aula 5 e regras de saída nas Aulas 1 e 9, sem analisar código.
- Aula 4 verifica as duas mensagens do caso original em ordem, com até cinco logs de apoio; fronteiras da temperatura e entrada negada ficam como testes manuais, sem comprovar a estrutura das condições.
- Booleanos preservados por tipo no modo values; Aula 8 valida métodos por seus resultados, sem comprovar o uso deles. Aula 7 permanece no Console.
- Comparação de arrays por conteúdo e ordem, números e textos nas Aulas 6 e 10, sem comprovar quais métodos foram usados.
- Saudação com nome livre e mensagens em ordem; complementos opcionais aceitos por configuração.
- Rascunho e última tentativa salvos em guias-programacao-labs.
- Execução em iframe sandbox sem allow-same-origin, com Worker novo por tentativa,
  limite de dois segundos, saída limitada e rede bloqueada por CSP.
- Interface responsiva, foco visível e mensagens de resultado acessíveis.
- Aprovação apenas informativa: o progresso das aulas continua independente.

### Próximas decisões

- Validar o piloto em navegadores desktop e mobile antes de migrar outras aulas.
- Avaliar se exercícios obrigatórios devem liberar o checkbox de conclusão; sem bloqueio agora.
- Manter fora deste MVP HTML/CSS editáveis, DOM, preview, código assíncrono,
  autocomplete, syntax highlighting, dependências e projetos completos.

## Futuro

Como possibilidades posteriores, o projeto poderá considerar cursos de React e
Vue, contas de usuário, progresso sincronizado entre dispositivos, backend,
banco de dados e a evolução do laboratório para HTML/CSS/JavaScript, caso isso
realmente faça sentido.

Esses itens não fazem parte do escopo atual do projeto.
