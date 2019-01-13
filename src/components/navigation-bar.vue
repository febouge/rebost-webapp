<template>
  <v-navigation-drawer
  :clipped="$vuetify.breakpoint.lgAndUp"
  :value="drawer"
  dark
  fixed
  app
  >
  <v-list dense>
    <template v-for="(item, i) in drawerItems">
      <v-list-tile
      :key="i"
      @click="navigateTo(item.path)"
      >
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="grey--text">
          {{ item.text }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </template>
  </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { LAYOUT_MODULE } from '@/store/constants/layout';
import { DrawerItem } from '@/interfaces/drawer-item';

@Component({
  name: 'navigation-bar',
})
export default class NavigationBar extends Vue {

  @State('showDrawer', {namespace: LAYOUT_MODULE})
  public drawer!: boolean;

  public drawerItems: DrawerItem[] = [
    {
      text: 'Home',
      path: '/',
      icon: 'home',
    },
    {
      text: 'Recipes',
      path: '/recipes',
      icon: 'book',
    },
  ];

  public navigateTo(path: string): void {
    this.$router.push(path);
  }
}
</script>
