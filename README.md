## 👤 Usuários / Pessoas

* **Usuários**

  * id
  * nome
  * email
  * senha
  * tipo (admin, corretor, cliente)

* **Clientes**

  * id
  * usuario_id
  * telefone
  * cpf/cnpj

* **Corretores**

  * id
  * usuario_id
  * creci
  * comissão (%)

----------------------------------------------------------------------

## 🏠 Imóveis

* **propriedades**

  * id
  * título
  * descrição
  * tipo (casa, apto, terreno)
  * finalidade (venda, aluguel)
  * valor
  * status (disponível, reservado, vendido, alugado)
  * cidade
  * rua
  * bairro
  * número
  * complemento
  * cep
  * proprietário

---------------------------------------------------------------------

## 🧑 Proprietários

* **proprietários**

  * id
  * nome
  * telefone
  * cpf/cnpj

---------------------------------------------------------------------

## 📄 Contratos

* **contratos**

  * id
  * propriedade_id
  * cliente_id
  * corretor_id
  * tipo (venda/aluguel)
  * data_inicio
  * data_fim (se aluguel)
  * valor
  * status

---------------------------------------------------------------------

## 💰 Financeiro

* **pagamentos**

  * id
  * contrato_id
  * valor
  * data_vencimento
  * data_pagamento
  * status

* **comissões**

  * id
  * corretor_id
  * contrato_id
  * valor
  * status (pendente/pago)

---------------------------------------------------------------------

## 📅 Atendimento / CRM

* **leads**

  * id
  * nome
  * telefone
  * origem (site, whatsapp, etc)
  * interesse (compra/aluguel)

* **visitas**

  * id
  * propriedade_id
  * cliente_id
  * corretor_id
  * data
  * status

* **proposta**

  * id
  * propriedade_id
  * cliente_id
  * valor_oferta
  * status (pendente, aceita, recusada)

---------------------------------------------------------------------

# 🔄 **Fluxos principais do sistema**

## 1. 📥 Captação de imóvel

1. Cadastra proprietário
2. Cadastra imóvel
3. Define corretor responsável
4. Publica imóvel

---

## 2. 🔍 Atendimento de cliente

1. Lead entra (site / manual)
2. Corretor assume
3. Cliente agenda visita
4. Registra feedback

---

## 3. 💬 Proposta

1. Cliente envia proposta
2. Proprietário analisa
3. Pode:

   * aceitar
   * recusar
   * contra-proposta

---

## 4. 📝 Fechamento

1. Gera contrato
2. Define pagamento
3. Atualiza status do imóvel:

   * vendido ou alugado

---

## 5. 💰 Financeiro

### Venda:

* pagamento único ou parcelado

### Aluguel:

* geração mensal de cobranças
* controle de inadimplência

---

## 6. 💵 Comissão

1. Sistema calcula comissão
2. Gera registro
3. Marca como pago após liquidação
  * financeiro

