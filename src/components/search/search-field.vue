<template>
  <v-btn v-if="!expanded" icon @click.stop="expanded = true">
    <v-icon>mdi-magnify</v-icon>
  </v-btn>
  <v-text-field
    v-else
    flat
    solo
    rounded
    hide-details
    clearable
    prepend-inner-icon="mdi-magnify"
    :label="$t('buttons.search')"
    @blur="expanded = false"
    @keypress.enter="search"
    v-model="searchText"
    />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { SEARCH_PATH } from '@/router';

@Component({
  name: 'search-field',
})
export default class SearchField extends Vue {

  public expanded: boolean = false;

  public searchText: string = '';

  public search(): void {
    if (!this.searchText) {
      return
    }
    if (this.$route.path !== SEARCH_PATH) {
      this.$router.push(SEARCH_PATH);
    }
  }
}
</script>
