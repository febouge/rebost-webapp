import { Vue } from 'vue-property-decorator';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import TagsApi from '@/api/tags-api';
import { Tag } from '@/api/interfaces/tag';
import {
  TAGS,
  TAGS_FIND,
  TAG_NEW,
  TAG_DELETE,
} from '@/store/constants/tags';
import { TagState } from '@/store/types/tag-state';
import { RootState } from '@/store/types/root-state';
import { AxiosResponse } from 'axios';

const tagsApi = new TagsApi();

const tagsState: TagState = {
  tags: [],
};

const tagsGetters: GetterTree<TagState, RootState> = {};

const tagsMutations: MutationTree<TagState> = {
  [TAGS]: (state: TagState, tags: Tag[]) => {
    Vue.set(state, 'tags', tags);
  },
  [TAG_NEW]: (state: TagState, tag: Tag) => {
    state.tags.push(tag);
  },
  [TAG_DELETE]: (state: TagState, tagId: number) => {
    Vue.set(state, 'tags', state.tags.filter((t: Tag) => t.id !== tagId));
  },
};

const tagsActions: ActionTree<TagState, RootState> = {
  [TAGS_FIND]: ({commit}) => {
    tagsApi.find()
      .then((response) => {
        commit(TAGS, response.data);
      })
      .catch(console.log);
  },
  [TAG_NEW]: ({commit}, tag: Tag) => {
    tagsApi.create(tag)
      .then((response: AxiosResponse<Tag>) => {
        if (response.status === 201) {
          commit(TAG_NEW, response.data); 
        } 
      })
      .catch(console.log);
  },
  [TAG_DELETE]: ({commit}, tagId: number) => {
    tagsApi.deleteById(tagId)
      .then(() => commit(TAG_DELETE, tagId))
      .catch(console.log);
  },
};

export const TagsModule: Module<TagState, RootState> = {
  state: tagsState,
  getters: tagsGetters,
  mutations: tagsMutations,
  actions: tagsActions,
  namespaced: true,
};
