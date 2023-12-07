import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { fa } from 'vuetify/iconsets/fa4';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import 'vuetify/styles';

import App from './App.vue';
import router from './router';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      fa
    }
  }
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
