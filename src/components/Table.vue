<script setup lang="ts">
import type { ICustomer } from "@/interfaces/Customer";
import type { SORT_CUSTOMER_TABLE_OPTIONS } from "@/types/sortTableOptions";

import { formatDate } from "@/utils/table/formatDate";
import { formatPaymentMethod } from "@/utils/table/formatPaymentMethod";

interface ICustomerTableProps {
  customers: ICustomer[];
}

const { customers } = defineProps<ICustomerTableProps>();

const emit = defineEmits(["sortTable"]);

function sortTable(sortBy: SORT_CUSTOMER_TABLE_OPTIONS) {
  emit("sortTable", sortBy);
}
</script>

<template>
  <table class="customer-table">
    <caption class="customer-table__caption">
      Tabela contendo estatísticas de clientes
    </caption>
    <thead class="customer-table__header">
      <tr>
        <th
          class="customer-table__client"
          scope="col"
          @click="() => sortTable('customerName')"
        >
          Cliente
        </th>
        <th
          class="customer-table__contract"
          scope="col"
          @click="() => sortTable('totalValue')"
        >
          Contrato
        </th>
        <th
          class="customer-table__acquisition-date"
          scope="col"
          @click="() => sortTable('createdAt')"
        >
          Data de aquisição
        </th>
        <th
          class="customer-table__payment-method"
          scope="col"
          @click="() => sortTable('paymentMethod')"
        >
          Formar de pagamento
        </th>
        <th class="customer-table__users" scope="col" @click="() => sortTable('users')">
          Usuários
        </th>
        <th
          class="customer-table__last-lead"
          scope="col"
          @click="() => sortTable('lastLead')"
        >
          Último recebimento de lead
        </th>
        <th
          class="customer-table__last-property"
          scope="col"
          @click="() => sortTable('lastProperty')"
        >
          Último cadastro de imóvel
        </th>
        <th
          class="customer-table__customers"
          scope="col"
          @click="() => sortTable('customers')"
        >
          Clientes
        </th>
        <th class="customer-table__calls" scope="col" @click="() => sortTable('calls')">
          Atendimentos
        </th>
        <th
          class="customer-table__properties"
          scope="col"
          @click="() => sortTable('properties')"
        >
          Imóveis
        </th>
        <th
          class="customer-table__outdated-properties"
          scope="col"
          @click="() => sortTable('outdatedProperties')"
        >
          Imóveis desatualizados
        </th>
        <th
          class="customer-table__inactive-properties"
          scope="col"
          @click="() => sortTable('inactiveProperties')"
        >
          Imóveis inativos
        </th>
        <th class="customer-table__images" scope="col" @click="() => sortTable('images')">
          Imagens
        </th>
        <th
          class="customer-table__condominiums"
          scope="col"
          @click="() => sortTable('condominiums')"
        >
          Condomínios
        </th>
        <th
          class="customer-table__portals"
          scope="col"
          @click="() => sortTable('portals')"
        >
          Portais
        </th>
        <th class="customer-table__notes" scope="col" @click="() => sortTable('notes')">
          Notas promissórias
        </th>
      </tr>
    </thead>
    <tbody class="customer-table__body">
      <tr
        class="customer-table__row"
        v-for="customer in customers"
        :key="Math.random().toString(16).slice(2)"
      >
        <td class="customer-table__data">{{ customer.customerName }}</td>
        <td class="customer-table__data">
          {{
            customer.contract.totalValue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </td>
        <td class="customer-table__data">
          {{ formatDate(customer.contract.createdAt) }}
        </td>
        <td class="customer-table__data">
          {{ formatPaymentMethod(customer.contract.paymentMethod) }}
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

<style scoped>
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

.customer-table__header th {
  cursor: pointer;
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
