<script setup lang="ts">
import { computed, watch, ref } from "vue";
import _ from "lodash";

import Table from "@/components/CustomerStatistics/Table/index.vue";
import { dataStore } from "@/stores/dataStore";
import type { ICustomer } from "@/interfaces/Customer";
import type { SORT_CUSTOMER_TABLE_OPTIONS } from "@/types/sortTableOptions";

const customers = computed(() => dataStore.state.customers);

const resultsPerPage = ref("10");
const customersToShow = ref(customers.value);
const searchInputValue = ref("");
const totalResults = ref(customers.value.length);
const paginationNumber = ref(0);
const sortBy = ref<SORT_CUSTOMER_TABLE_OPTIONS>("createdAt");
const orderBy = ref<"DESC" | "ASC">("DESC");

watch([resultsPerPage, searchInputValue], () => {
  paginationNumber.value = 0;
});

watch(
  [
    customers,
    resultsPerPage,
    searchInputValue,
    paginationNumber,
    sortBy,
    orderBy,
  ],
  () => {
    if (searchInputValue.value.length > 0) {
      customersToShow.value = customers.value.filter((customer) =>
        customer.customerName
          .toLocaleLowerCase()
          .includes(searchInputValue.value.toLocaleLowerCase())
      );

      customersToShow.value = sortCustomer(customersToShow.value);

      totalResults.value = customersToShow.value.length;
      customersToShow.value = customersToShow.value.slice(
        paginationNumber.value * Number(resultsPerPage.value),
        Number(resultsPerPage.value) * (paginationNumber.value + 1)
      );
    } else {
      totalResults.value = customers.value.length;
      customersToShow.value = sortCustomer(customers.value);
      customersToShow.value = customersToShow.value.slice(
        paginationNumber.value * Number(resultsPerPage.value),
        Number(resultsPerPage.value) * (paginationNumber.value + 1)
      );
    }
  }
);

function sortCustomer(customersToSort: ICustomer[]): ICustomer[] {
  switch (sortBy.value) {
    case "customerName": {
      const customersSorted = _.sortBy(
        customersToSort,
        (customer) => customer.customerName
      );
      return orderBy.value === "DESC"
        ? customersSorted
        : customersSorted.reverse();
    }
    case "portals": {
      const customersSorted = _.sortBy(customersToSort, (customer) =>
        customer.portals.length > 0 ? customer.portals[0].length : -1
      );

      return orderBy.value === "DESC"
        ? customersSorted.reverse()
        : customersSorted;
    }
    case "createdAt": {
      const customersSorted = _.sortBy(
        customersToSort,
        (customer) => customer.contract.createdAt
      );

      return orderBy.value === "DESC"
        ? customersSorted.reverse()
        : customersSorted;
    }
    case "totalValue": {
      const customersSorted = _.sortBy(
        customersToSort,
        (customer) => customer.contract.totalValue
      );

      return orderBy.value === "DESC"
        ? customersSorted.reverse()
        : customersSorted;
    }
    case "paymentMethod": {
      const customersSorted = _.sortBy(customersToSort, (customer) =>
        customer.contract.paymentMethod !== undefined
          ? customer.contract.paymentMethod
          : -1
      );

      return orderBy.value === "DESC"
        ? customersSorted
        : customersSorted.reverse();
    }
  }

  const customersSorted = _.sortBy(
    customersToSort,
    (customer) => customer[sortBy.value]
  );

  return orderBy.value === "DESC" ? customersSorted.reverse() : customersSorted;
}

function sortTable(sortByEmit: SORT_CUSTOMER_TABLE_OPTIONS) {
  if (sortByEmit === sortBy.value) {
    orderBy.value = orderBy.value === "DESC" ? "ASC" : "DESC";
  } else {
    orderBy.value = "DESC";
  }

  sortBy.value = sortByEmit;
}
</script>

<template>
  <div class="customer-statistics">
    <h2 class="customer-statistics__title">Estatísticas de clientes</h2>

    <div class="customer-statistics__content">
      <div class="customer-statistics__table-handler">
        <p class="table-handler__results-page">
          Exibir
          <select
            class="table-handler__page-number-select"
            v-model="resultsPerPage"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          resultados por página
        </p>

        <input
          v-model="searchInputValue"
          class="table-handler__search-input"
          type="text"
          placeholder="Pesquisar cliente"
        />
      </div>
      <div class="customer-statistics__table">
        <Table
          :customers="customersToShow"
          @sortTable="(sortBy) => sortTable(sortBy)"
        />
        <span class="table__no-customer-found" v-if="totalResults < 1"
          >Nenhum cliente encontrado</span
        >
      </div>
      <div class="customer-statistics__footer">
        <p class="customer-statistics__total-results">
          Mostrando de
          <strong>{{ Number(resultsPerPage) * paginationNumber + 1 }}</strong>
          até
          <strong>{{
            Number(resultsPerPage) * (paginationNumber + 1) <= totalResults
              ? customersToShow.length * (paginationNumber + 1)
              : totalResults
          }}</strong>
          de <strong>{{ totalResults }}</strong> registros
        </p>
        <div class="customer-statistics__pagination">
          <button
            class="pagination__button"
            v-on:click="paginationNumber -= 1"
            :disabled="paginationNumber < 1"
          >
            Anterior
          </button>
          <span class="pagination__number">{{ paginationNumber + 1 }}</span>
          <button
            class="pagination__button"
            v-on:click="paginationNumber += 1"
            :disabled="
              (paginationNumber + 1) * Number(resultsPerPage) > totalResults
            "
          >
            Próximo
          </button>
        </div>
        <div class="customer-statistics__invisible-block"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
