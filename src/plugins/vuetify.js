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
          base: '#1C6DD0',      // primary.main
          lighten1: '#3F95FF',  // primary.light
          lighten2: '#EEF6FF',  // button.selected
          darken1: '#08458F'    // primary.dark
        },
        gray: {
          base: '#F9FAFB',      // gray 50
          darken1: '#F3F4F6',   // gray 100
          darken2: '#E5E7EB',   // gray 200
          darken3: '#E0E0E0'    // buttn.disabled
        },
        text: {
          base: '#202020',      // text.primary
          lighten1: '#6B7280',  // text.secondary
          lighten2: '#D1D5DB'   // text.disable
        }
      }
    }
  }
});
