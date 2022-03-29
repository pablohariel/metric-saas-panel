<script setup lang="ts">
import type { ICustomer } from "@/interfaces/Customer";
import type { SORT_CUSTOMER_TABLE_OPTIONS } from "@/types/sortTableOptions";

import { formatDate } from "@/utils/table/formatDate";
import { formatPaymentMethod } from "@/utils/table/formatPaymentMethod";

interface ICustomerTableProps {
  customers: ICustomer[];
}

const props = defineProps<ICustomerTableProps>();

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
          Valor do Contrato
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
        <th
          class="customer-table__users"
          scope="col"
          @click="() => sortTable('users')"
        >
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
        <th
          class="customer-table__calls"
          scope="col"
          @click="() => sortTable('calls')"
        >
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
        <th
          class="customer-table__images"
          scope="col"
          @click="() => sortTable('images')"
        >
          Total de imagens
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
        <th
          class="customer-table__notes"
          scope="col"
          @click="() => sortTable('notes')"
        >
          Notas promissórias
        </th>
      </tr>
    </thead>
    <tbody class="customer-table__body">
      <tr
        class="customer-table__row"
        v-for="customer in props.customers"
        :key="customer.contract.createdAt + Math.random()"
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
        <td class="customer-table__data">
          {{ formatDate(customer.lastLead) }}
        </td>
        <td class="customer-table__data">
          {{ formatDate(customer.lastProperty) }}
        </td>
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
@import "./styles.css";
</style>
