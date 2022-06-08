import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

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
          darken1: '#08458F'
        },
        gray: {
          base: '#F9FAFB',
          darken1: '#F3F4F6',
          darken2: '#E5E7EB'
        }
      }
    }
  }
});
