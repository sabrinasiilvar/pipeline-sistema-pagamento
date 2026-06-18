# Sistema de Pagamento

Sistema desenvolvido em Node.js para registrar e consultar pagamentos via código de barras.

## O que foi feito

- Classe `ServicoDePagamento` com método `pagar()` para registrar pagamentos
- Categorização automática: pagamentos acima de R$ 100 são marcados como **cara**, os demais como **padrão**
- Método `consultarUltimoPagamento()` para buscar o último pagamento registrado
- Testes unitários cobrindo os três comportamentos principais

## Instalação

```bash
npm install
```

## Rodando os testes localmente

```bash
npm test
```

## Relatório de testes

A pipeline gera um relatório em HTML usando o `mochawesome` e publica esse relatório como artefato da execução.

- Relatório local: `reports/mochawesome-report.html`
- Artefato no GitHub Actions: `test-report`

## GitHub Actions

As pipelines foram configuradas em arquivos separados dentro de `.github/workflows`:

- `.github/workflows/01-manual-exec.yml`
- `.github/workflows/02-scheduled-exec.yml`
- `.github/workflows/03-push-exec.yml`
- `.github/workflows/ci-template.yml` (workflow reutilizável)

Cada pipeline usa o mesmo workflow reutilizável e roda os mesmos passos básicos:

1. checkout do código
2. instalação das dependências via `npm install`
3. execução dos testes com `npm test`
4. upload do relatório de teste como artefato da pipeline

### Boas práticas aplicadas

- Timeout curto de 30 minutos definido em cada workflow
- Workflow reutilizável para evitar duplicação de código
- Cache de dependências npm via `actions/setup-node@v4`
- Máquina de execução fixa em `ubuntu-24.04`
- Ações fixadas em versões específicas (`checkout@v4`, `setup-node@v4`, `upload-artifact@v4`)
- Agendamento em horário fora do pico: `02-scheduled-exec.yml` roda toda segunda-feira às 04:00 UTC

### Triggers

- `Execução por Push`: disparada em `push` para `main` e `master`
- `Execução Manual`: disparada manualmente via `workflow_dispatch`
- `Execução Agendada`: disparada manualmente ou automaticamente conforme agendamento semanal

## Objetivo da solução

Esta pipeline fornece integração contínua para o projeto de sistema de pagamento, garantindo que os testes automatizados sejam executados a cada alteração e que o relatório de teste seja preservado na execução do workflow.
