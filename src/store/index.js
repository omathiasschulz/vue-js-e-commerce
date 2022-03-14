import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  // dados da aplicação
  state: {
    products: [],
  },
  getters: {
  },
  mutations: {
    /**
     * Mutação que salva os produtos
     *
     * @param {*} state
     * @param {*} products
     */
    loadProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    /**
     * Action que carrega os produtos a partir da API
     */
    loadProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          // chama a mutação loadProducts que realiza o save dos produtos
          commit('loadProducts', response.data);
        });
    },
  },
  modules: {
  },
});
