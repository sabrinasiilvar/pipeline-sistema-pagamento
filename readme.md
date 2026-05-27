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

## Rodando os testes

```bash
npx mocha test/ServicoDePagamento.test.js
```
