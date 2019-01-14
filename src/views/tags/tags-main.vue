<template>
<div>
  <h2>{{ $t('navigation.tags')}}</h2>
  <v-btn @click="findTags">Load</v-btn>
  <v-data-table
    :headers="headers"
    :items="tags"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
    </template>
  </v-data-table>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { Tag } from '@/api/interfaces/tag';
import {
  TAGS_MODULE,
  TAGS_FIND,
} from '@/store/constants/tags';

@Component({
  name: 'tags-main',
})
export default class TagsMain extends Vue {

  @State('tags', {namespace: TAGS_MODULE})
  public tags!: Tag[];

  @Action(TAGS_FIND, {namespace: TAGS_MODULE})
  public findTags!: () => Promise<void>;

  public headers = [
    { text: 'Name', value: 'name' }
  ];
}
</script>
