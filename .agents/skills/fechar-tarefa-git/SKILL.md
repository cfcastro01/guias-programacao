---
name: fechar-tarefa-git
description: Fechar uma tarefa já definida com revisão final do lote, checks, commit com mensagem fornecida e push para a branch remota correspondente.
---

# Fechar tarefa com Git

Use o escopo definido no prompt e na conversa e a mensagem informada em `Commit:`. Não decida o conteúdo da tarefa nem invente a mensagem. Se faltar informação essencial, peça antes de fazer stage, commit ou push.

## Conferência e checks

1. Leia e siga `AGENTS.md` e as regras locais aplicáveis.
2. Execute `git branch --show-current`, `git status`, `git diff --stat` e revise os diffs, incluindo alterações já staged e arquivos não rastreados. Confira a branch solicitada, quando houver, e seu upstream com `git rev-parse --abbrev-ref --symbolic-full-name '@{u}'`. Não troque branches; se não houver upstream ou o destino for ambíguo, esclareça o remoto e a branch antes de publicar.
3. Delimite os arquivos do lote pelo escopo autorizado. Se encontrar arquivos estranhos, alterações fora do escopo ou mudanças alheias misturadas no mesmo arquivo, pare e informe o problema sem descartar, mover ou incluir essas alterações.
4. Rode os checks relevantes já existentes para a tarefa e `git diff --check`, usando os validadores disponíveis no ambiente. Se um validador preferencial estiver indisponível, use uma alternativa equivalente quando possível e registre no relatório final qual validação foi usada. A ausência de Python, por si só, não é falha da tarefa. Se algum check falhar ou uma validação necessária não puder ser realizada nem substituída por equivalente, pare e informe; não prossiga para commit ou push.

## Stage, commit e push

1. Faça stage somente dos caminhos revisados com `git add -- caminho1 caminho2`. Não use `git add .`, `git add -A` ou commit com `-a`.
2. Execute `git status`, `git diff --cached --check` e `git diff --cached --stat`. Revise também `git diff --cached`: confirme que o staged contém exatamente o lote autorizado. Se houver divergência, pare e avise antes do commit.
3. Crie o commit com a mensagem exata recebida no prompt. Não crie commit vazio nem altere commits anteriores.
4. Faça push explícito para o remoto e a branch correspondentes à branch atual, conforme o upstream ou destino confirmado. Nunca use `--force`, `--force-with-lease` ou qualquer forma de push forçado. Se o push falhar, informe a falha; não faça pull, rebase ou merge automaticamente para resolvê-la.
5. Execute `git status` e `git log -3 --oneline` para conferir o estado final.

## Entrega

Informe hash e mensagem do commit, arquivos incluídos, checks executados e seus resultados, resultado do push com destino e estado final do Git. Se interromper o fluxo, indique o motivo e quais etapas foram concluídas. Não avance para outra tarefa.

## Exemplo

```text
$fechar-tarefa-git

Commit: feat: adiciona projeto prático 2
```
