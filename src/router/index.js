import Vue from 'vue';
import Router from 'vue-router';
import FirstPage from '../components/firstPage.vue';
import UserColumns from '../views/UserColumns.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/columns',
      name: 'UserColumns',
      component: UserColumns
    }
  ]
});