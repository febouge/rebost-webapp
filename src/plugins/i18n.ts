import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { enMessages } from '@/i18n/en';

Vue.use(VueI18n);

const messages = {
  en: enMessages,
};

export default new VueI18n({
  locale: 'en',
  messages,
});
