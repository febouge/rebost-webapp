<template>
<v-app id="app">
  <rebost-header></rebost-header>
  <navigation-bar></navigation-bar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
</v-app>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import NavigationBar from './components/navigation-bar.vue';
import RebostHeader from './components/rebost-header.vue';

@Component({
  name: 'app',
  components: {
    NavigationBar,
    RebostHeader,
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
