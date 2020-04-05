<template>
<div>
  <h2>{{ $t('search.title')}}</h2>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component({
  name: 'search',
})
export default class Search extends Vue {


}
</script>
