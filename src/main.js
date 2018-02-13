import Vue from 'vue';
import App from './components/Main/App.vue';
import axios from 'axios';

new Vue({
  render: fn => fn(App)
}).$mount('#app');