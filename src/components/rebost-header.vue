<template>
<v-app-bar
  clipped-left
  app
  color="secondary"
  fixed>
  <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
  <v-toolbar-title class="ml-0 pl-4">{{ $t('title')}}</v-toolbar-title>
  <v-spacer/>
  <search-field />
  <v-btn icon @click.stop="toggleTheme">
    <v-icon>mdi-compare</v-icon>
  </v-btn>
</v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { TOGGLE_DRAWER, LAYOUT_MODULE } from '../store/constants/layout';
import SearchField from '@/components/search/search-field.vue';

@Component({
  name: 'rebost-header',
  components: {
    SearchField,
  }
})
export default class RebostHeader extends Vue {

  @Action(TOGGLE_DRAWER, {namespace: LAYOUT_MODULE})
  public toggleDrawer!: () => Promise<void>;

  showSearch(): void {
    this.$router.push('/search');
  }

  toggleTheme(): void {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  }
}
</script>
