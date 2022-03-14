import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  // dados da aplicação
  state: {
    products: [],
    productsInBag: [],
  },
  getters: {
  },
  mutations: {
    /**
     * Mutação que salva os produtos
     */
    loadProducts(state, products) {
      state.products = products;
    },
    /**
     * Mutação que adiciona o produto ao carinho
     */
    addToBag(state, product) {
      state.productsInBag.push(product);
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
    /**
     * Action que adiciona um produto no carinho
     */
    addToBag({ commit }, product) {
      commit('addToBag', product);
    }
  },
  modules: {
  },
});
