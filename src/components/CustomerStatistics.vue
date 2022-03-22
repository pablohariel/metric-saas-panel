<script setup lang="ts">
import { computed, watch, ref } from "vue";
import _ from "lodash";

import Table from "./Table.vue";
import { useStore } from "@/store";
import type { ICustomer } from "@/interfaces/Customer";
import type { SORT_CUSTOMER_TABLE_OPTIONS } from "@/types/sortTableOptions";

const store = useStore();
const customers = computed(() => store.state.customers);

const resultsPerPage = ref<String>("10");
const customersToShow = ref<ICustomer[]>(customers.value);
const searchInputValue = ref<String>("");
const totalResults = ref<Number>(customers.value.length);
const paginationNumber = ref<number>(0);
const sortBy = ref<SORT_CUSTOMER_TABLE_OPTIONS>("createdAt");

watch([resultsPerPage, searchInputValue], () => {
  paginationNumber.value = 0;
});

watch([customers, resultsPerPage, searchInputValue, paginationNumber, sortBy], () => {
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
});

function sortCustomer(customersToSort: ICustomer[]): ICustomer[] {
  switch (sortBy.value) {
    case "customerName": {
      const customersSorted = _.sortBy(
        customersToSort,
        (customer) => customer.customerName
      );

      return customersSorted;
    }
    case "portals": {
      const customersSorted = _.sortBy(customersToSort, (customer) =>
        customer.portals.length > 0 ? customer.portals[0].length : -1
      );

      return customersSorted.reverse();
    }
    case "createdAt": {
      const customersSorted = _.sortBy(
        customersToSort,
        (customer) => customer.contract.createdAt
      );

      return customersSorted.reverse();
    }
    case "totalValue": {
      const customersSorted = _.sortBy(
        customersToSort,
        (customer) => customer.contract.totalValue
      );

      return customersSorted.reverse();
    }
    case "paymentMethod": {
      const customersSorted = _.sortBy(customersToSort, (customer) =>
        customer.contract.paymentMethod !== undefined
          ? customer.contract.paymentMethod
          : -1
      );

      return customersSorted;
    }
  }

  const customersSorted = _.sortBy(customersToSort, (customer) => customer[sortBy.value]);

  return customersSorted.reverse();
}

function sortTable(sortByEmit: SORT_CUSTOMER_TABLE_OPTIONS) {
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
          <select class="table-handler__page-number-select" v-model="resultsPerPage">
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
        <Table :customers="customersToShow" @sortTable="(sortBy) => sortTable(sortBy)" />
        <span class="table__no-customer-found" v-if="totalResults < 1"
          >Nenhum cliente encontrado</span
        >
      </div>
      <div class="customer-statistics__footer">
        <p class="customer-statistics__total-results">
          Mostrando <strong>{{ customersToShow.length }}</strong> de
          <strong>{{ totalResults }}</strong> registros
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
            :disabled="(paginationNumber + 1) * Number(resultsPerPage) > totalResults"
          >
            Próximo
          </button>
        </div>
        <div class="customer-statistics__invisible-block"></div>
      </div>
    </div>
  </div>
</template>

<style>
.customer-statistics {
  margin-bottom: 100px;
  margin-top: 60px;
}

.customer-statistics__title {
  font-size: 3.2rem;
}

.customer-statistics__content {
  margin-top: 10px;
}

.customer-statistics__table-handler {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.table-handler__results-page {
  color: #606060;
}

.table-handler__page-number-select {
  background-color: transparent;
  border: none;
  padding: 0;
  width: 44px;
  color: var(--color-text);
}

.table-handler__search-input {
  border: none;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  height: 40px;
  padding: 10px;
  border-radius: 10px;
}

.table-handler__search-input:focus {
  outline: none;
}

.customer-statistics__table {
  max-width: 80vw;
  overflow: scroll;
  overflow-y: hidden;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1352);
  min-height: 60vh;
}

.table__no-customer-found {
  padding: 20px;
  margin-top: 40px;
}

.customer-statistics__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.customer-statistics__total-results {
  flex: 1;
  font-size: 1.2rem;
}

.customer-statistics__total-results strong {
  font-weight: 600;
}

.customer-statistics__pagination {
  flex: 1;
  display: flex;
  justify-content: center;
}

.pagination__number {
  height: 38px;
  width: 44px;
  background-color: var(--color-background);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1352);
  border-radius: 10px;
  color: var(--color-text);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
  margin-right: 14px;
}

.pagination__button {
  border: none;
  background-color: transparent;
  color: var(--color-text);
  cursor: pointer;
}

.pagination__button:disabled {
  opacity: 50%;
  cursor: initial;
}

.customer-statistics__invisible-block {
  flex: 1;
}
</style>
