import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// inicia a aplicação passando a tag html com id app para servir de base para construção
createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
