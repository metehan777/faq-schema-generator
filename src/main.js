import Vue from 'vue';
import App from './App.vue';

import {
  MdApp,
  MdButton,
  MdContent,
  MdTabs,
  MdToolbar,
  MdIcon,
  MdCard,
  MdTooltip,
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdApp);
Vue.use(MdToolbar);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdIcon);
Vue.use(MdCard);
Vue.use(MdTooltip);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');