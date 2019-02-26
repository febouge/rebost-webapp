<template>
<div>
  <h2>{{ $t('navigation.tags')}}</h2>
  <v-btn @click="findTags">Load</v-btn>
  <v-container>
    <v-layout row>
      <v-flex xs10>
        <v-text-field
          v-bind:label="$t('tags.addTag')"
          v-model="addTagText"
          >
        </v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn @click="newTag">
          {{ $t('buttons.add')}}
          <v-icon>add</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
  <v-data-table
    :headers="headers"
    :items="tags"
    class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td>
        <v-btn @click="deleteTag(props.item.id)" fab small color="secondary">
          <v-icon dark>delete</v-icon>
        </v-btn>
      </td>
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
  TAG_NEW,
  TAG_DELETE,
} from '@/store/constants/tags';

@Component({
  name: 'tags-main',
})
export default class TagsMain extends Vue {

  @State('tags', {namespace: TAGS_MODULE})
  public tags!: Tag[];

  @Action(TAGS_FIND, {namespace: TAGS_MODULE})
  public findTags!: () => Promise<void>;

  @Action(TAG_DELETE, {namespace: TAGS_MODULE})
  public deleteTag!: (tagId: number) => Promise<void>;

  @Action(TAG_NEW, {namespace: TAGS_MODULE})
  public createTag!: (tag: Tag) => Promise<void>;

  public addTagText: string = '';

  public headers = [
    { text: 'Name', value: 'name' },
    { text: 'Actions', value: 'actions'},
  ];

  public newTag() {
    this.createTag({
      id: null,
      name: this.addTagText,
    });
    this.addTagText = '';
  }
}
</script>
