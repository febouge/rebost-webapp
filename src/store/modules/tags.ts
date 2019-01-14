import { Vue } from 'vue-property-decorator';
import {ActionTree, GetterTree, Module, MutationTree} from 'vuex';
import TagsApi from '@/api/tags-api';
import { Tag } from '@/api/interfaces/tag';
import {
  TAGS,
  TAGS_FIND,
} from '@/store/constants/tags';
import { TagState } from '@/store/types/tag-state';
import { RootState } from '@/store/types/root-state';

const tagsApi = new TagsApi();

const tagsState: TagState = {
  tags: [],
};

const tagsGetters: GetterTree<TagState, RootState> = {};

const tagsMutations: MutationTree<TagState> = {
  [TAGS]: (state: TagState, tags: Tag[]) => {
    Vue.set(state, 'tags', tags);
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
};

export const TagsModule: Module<TagState, RootState> = {
  state: tagsState,
  getters: tagsGetters,
  mutations: tagsMutations,
  actions: tagsActions,
  namespaced: true,
};
