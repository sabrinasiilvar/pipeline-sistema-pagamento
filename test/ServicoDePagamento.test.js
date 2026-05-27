const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', () => {
  let servico;

  beforeEach(() => {
    servico = new ServicoDePagamento();
  });

  it('deve registrar pagamento com categoria "cara" quando valor maior que 100', () => {
    servico.pagar('0987-7656-3475', 'Samar', 156.87);
    const ultimo = servico.consultarUltimoPagamento();

    assert.deepStrictEqual(ultimo, {
      codigoBarras: '0987-7656-3475',
      empresa: 'Samar',
      valor: 156.87,
      categoria: 'cara',
    });
  });

  it('deve registrar pagamento com categoria "padrão" quando valor menor ou igual a 100', () => {
    servico.pagar('1234-5678-9012', 'Empresa X', 100.00);
    const ultimo = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimo.categoria, 'padrão');
  });

  it('deve retornar o último pagamento realizado', () => {
    servico.pagar('0001', 'Empresa A', 50.00);
    servico.pagar('0002', 'Empresa B', 200.00);

    assert.strictEqual(servico.consultarUltimoPagamento().codigoBarras, '0002');
  });
});
