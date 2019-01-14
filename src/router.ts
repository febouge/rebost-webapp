import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import RecipesMain from './views/recipes/recipes-main.vue';
import TagsMain from './views/tags/tags-main.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipesMain,
    },
    {
      path: '/tags',
      name: 'tags',
      component: TagsMain,
    },
  ],
});
