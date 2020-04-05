import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import RecipesMain from './views/recipes/recipes-main.vue';
import TagsMain from './views/tags/tags-main.vue';
import Search from './views/search/search.vue';

Vue.use(Router);

export const ROOT_PATH = '/';
export const RECIPES_PATH = '/recipes';
export const TAGS_PATH = '/tags';
export const SEARCH_PATH = '/search';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: ROOT_PATH,
      name: 'home',
      component: Home,
    },
    {
      path: RECIPES_PATH,
      name: 'recipes',
      component: RecipesMain,
    },
    {
      path: TAGS_PATH,
      name: 'tags',
      component: TagsMain,
    },
    {
      path: SEARCH_PATH,
      name: 'search',
      component: Search,
    },
  ],
});
