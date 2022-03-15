<script setup lang="ts">
import type { ICustomer } from "@/interfaces/Customer";

interface ICustomerTableProps {
  customers: ICustomer[];
}

const { customers } = defineProps<ICustomerTableProps>();

function formatDate(date: string) {
  return new Date(date).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
</script>

<template>
  <table class="customer-table">
    <caption class="customer-table__caption">
      Tabela contendo estatísticas de clientes
    </caption>
    <thead class="customer-table__header">
      <tr>
        <th class="customer-table__client" scope="col">Cliente</th>
        <th class="customer-table__contract" scope="col">Contrato</th>
        <th class="customer-table__acquisition-date" scope="col">Data de aquisição</th>
        <th class="customer-table__payment-method" scope="col">Formar de pagamento</th>
        <th class="customer-table__users" scope="col">Usuários</th>
        <th class="customer-table__last-lead" scope="col">Último recebimento de lead</th>
        <th class="customer-table__last-property" scope="col">
          Último cadastro de imóvel
        </th>
        <th class="customer-table__customers" scope="col">Clientes</th>
        <th class="customer-table__calls" scope="col">Atendimentos</th>
        <th class="customer-table__properties" scope="col">Imóveis</th>
        <th class="customer-table__outdated-properties" scope="col">
          Imóveis desatualizados
        </th>
        <th class="customer-table__inactive-properties" scope="col">Imóveis inativos</th>
        <th class="customer-table__images" scope="col">Imagens</th>
        <th class="customer-table__condominiums" scope="col">Condomínios</th>
        <th class="customer-table__portals" scope="col">Portais</th>
        <th class="customer-table__notes" scope="col">Notas promissórias</th>
      </tr>
    </thead>
    <tbody class="customer-table__body">
      <tr
        class="customer-table__row"
        v-for="customer in customers"
        :key="Math.random().toString(16).slice(2)"
      >
        <td class="customer-table__data">{{ customer.customerName }}</td>
        <td class="customer-table__data">{{ customer.contract.totalValue }}</td>
        <td class="customer-table__data">
          {{ formatDate(customer.contract.createdAt) }}
        </td>
        <td class="customer-table__data">
          {{ customer.contract.paymentMethod || "Null" }}
        </td>
        <td class="customer-table__data">{{ customer.users }}</td>
        <td class="customer-table__data">{{ formatDate(customer.lastLead) }}</td>
        <td class="customer-table__data">{{ formatDate(customer.lastProperty) }}</td>
        <td class="customer-table__data">{{ customer.customers }}</td>
        <td class="customer-table__data">{{ customer.calls }}</td>
        <td class="customer-table__data">{{ customer.properties }}</td>
        <td class="customer-table__data">{{ customer.outdatedProperties }}</td>
        <td class="customer-table__data">{{ customer.inactiveProperties }}</td>
        <td class="customer-table__data">{{ customer.images }}</td>
        <td class="customer-table__data">{{ customer.condominiums }}</td>
        <td class="customer-table__data">{{ customer.portals.join(", ") }}</td>
        <td class="customer-table__data">{{ customer.notes }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.customer-table {
  border-collapse: collapse;
  font-size: 1.4rem;
}

.customer-table__caption {
  opacity: 0;
  max-height: 0;
}

.customer-table__header {
  background-color: var(--color-background-table-header);
  color: var(--color-text-table-header);
  max-height: 48px;
  height: 48px;
}

.customer-table__client {
  min-width: 188px;
}

.customer-table__contract {
  min-width: 150px;
}

.customer-table__acquisition-date {
  min-width: 176px;
}

.customer-table__payment-method {
  min-width: 242px;
}

.customer-table__users {
  min-width: 118px;
}

.customer-table__last-lead {
  min-width: 210px;
}

.customer-table__last-property {
  min-width: 210px;
}

.customer-table__customers {
  min-width: 146px;
}

.customer-table__calls {
  min-width: 180px;
}

.customer-table__properties {
  min-width: 162px;
}

.customer-table__outdated-properties {
  min-width: 210px;
}

.customer-table__inactive-properties {
  min-width: 180px;
}

.customer-table__images {
  min-width: 186px;
}

.customer-table__condominiums {
  min-width: 174px;
}

.customer-table__portals {
  min-width: 166px;
}

.customer-table__notes {
  min-width: 210px;
}

.customer-table__row {
  box-shadow: inset 0px 1px 0px var(--color-box-shadow-table),
    inset 0px -1px 0px var(--color-box-shadow-table);
  line-height: 48px;
  background-color: var(--color-background-table-row-primary);
}

.customer-table__row:nth-child(odd) {
  background-color: var(--color-background-table-row-alternate);
}

td,
th {
  white-space: nowrap;
}

.customer-table__data {
  text-align: center;
  color: var(--color-text);
}
</style>
