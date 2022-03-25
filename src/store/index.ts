import { api } from "@/services/api";
import type { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

import type { IContract } from "../interfaces/Contract";
import type { IPayment } from "../interfaces/Payment";
import type { ICustomer } from "../interfaces/Customer";

interface State {
  contracts: IContract[];
  payments: IPayment[];
  customers: ICustomer[];
}

const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  state: {
    contracts: [],
    payments: [],
    customers: [],
  },

  mutations: {
    setContracts(state, contracts) {
      state.contracts = contracts;
    },

    setPayments(state, payments) {
      state.payments = payments;
    },

    setCustomers(state, customers) {
      state.customers = customers;
    },
  },

  actions: {
    async getContracts(context) {
      const config = {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      };

      const { data } = await api.get<IContract[]>("/contracts.list", config);
      context.commit("setContracts", data);
    },

    async getPayments(context) {
      const config = {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      };

      const { data } = await api.get<IPayment[]>("/payments.list", config);
      context.commit("setPayments", data);
    },

    async getCustomers(context) {
      const config = {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      };

      const { data } = await api.get<ICustomer[]>(
        "/customers.statistics",
        config
      );
      context.commit("setCustomers", data);
    },
  },
});

function useStore() {
  return baseUseStore(key);
}

export { State, key, store, useStore };
