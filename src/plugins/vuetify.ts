import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

const theme = {
  primary: '#344955',
  secondary: '#F9AA33',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107',
};

Vue.use(Vuetify, {
  iconfont: 'md',
  theme,
});
