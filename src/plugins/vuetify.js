import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import '@/styles/global.scss';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: false,
    themes: {
      light: {
        primary: {
          base: '#1C6DD0',
          lighten1: '#3F95FF',
          lighten2: '#EEF6FF',
          darken1: '#08458F'
        },
        gray: {
          base: '#F9FAFB',
          darken1: '#F3F4F6',
          darken2: '#E5E7EB'
        },
        text: {
          base: '#202020',
          lighten1: '#6B7280',
          lighten2: '#D1D5DB'
        }
      }
    }
  }
});
