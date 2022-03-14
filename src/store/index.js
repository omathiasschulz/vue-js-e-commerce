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
  // mutações realizam operações com a API
  mutations: {
    /**
     * Mutação que salva os produtos
     */
    loadProducts(state, products) {
      state.products = products;
    },
    /**
     * Mutação que busca na local storage os produtos do carrinho
     */
    loadBag(state, products) {
      state.productsInBag = products;
    },
    /**
     * Mutação que adiciona o produto ao carinho
     */
    addToBag(state, product) {
      state.productsInBag.push(product);
      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag));
    },
    /**
     * Mutação que remove o produto ao carinho
     */
    removeFromBag(state, productId) {
      state.productsInBag = state.productsInBag.filter(
        product => product.id !== productId
      );
      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag));
    },
  },
  // actions são métodos chamados na aplicação que redirencionam
  // para a respectiva mutação
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
     * Action que carrega o carrinho de compra a partir do local storage
     */
    loadBag({ commit }) {
      if (localStorage.getItem('productsInBag')) {
        commit('loadBag', JSON.parse(localStorage.getItem('productsInBag')));
      }
    },
    /**
     * Action que adiciona um produto no carinho
     */
    addToBag({ commit }, product) {
      commit('addToBag', product);
    },
    /**
     * Action que remove um produto do carinho
     */
    removeFromBag({ commit }, productId) {
      if (confirm('Tem certeza que você deseja remover o produto do carrinho?')) {
        commit('removeFromBag', productId);
      }
    },
  },
  modules: {
  },
});
