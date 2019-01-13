<template>
  <v-toolbar
  :clipped-left="$vuetify.breakpoint.lgAndUp"
  app
  color="secondary"
  fixed>
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title class="ml-0 pl-3">
      <span class="hidden-sm-and-down">{{ $t('title')}}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-btn icon large>
      <v-avatar size="32px" tile>
        <img
        src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
        alt="Vuetify"
        >
      </v-avatar>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { TOGGLE_DRAWER, LAYOUT_MODULE } from '../store/constants/layout';

@Component({
  name: 'rebost-header',
})
export default class RebostHeader extends Vue {

  @Action(TOGGLE_DRAWER, {namespace: LAYOUT_MODULE})
  public toggleDrawer!: () => Promise<void>;
}
</script>
