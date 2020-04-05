<template>
<v-navigation-drawer
  :value="drawer"
  clipped
  dark
  app
  >
  <v-list dense>
    <v-list-item v-for="(item, i) in drawerItems" @click="navigateTo(item.path)">
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ $t(item.text) }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { LAYOUT_MODULE } from '@/store/constants/layout';
import { DrawerItem } from '@/interfaces/drawer-item';
import { ROOT_PATH, RECIPES_PATH, TAGS_PATH } from '@/router';

@Component({
  name: 'navigation-bar',
})
export default class NavigationBar extends Vue {

  @State('showDrawer', {namespace: LAYOUT_MODULE})
  public drawer!: boolean;

  public drawerItems: DrawerItem[] = [
    {
      text: 'navigation.home',
      path: ROOT_PATH,
      icon: 'home',
    },
    {
      text: 'navigation.recipes',
      path: RECIPES_PATH,
      icon: 'book',
    },
    {
      text: 'navigation.tags',
      path: TAGS_PATH,
      icon: 'bookmark',
    },
  ];

  public navigateTo(path: string): void {
    this.$router.push(path);
  }
}
</script>
