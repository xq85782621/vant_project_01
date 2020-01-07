import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible'
import Axios from 'axios';

import 'normalize.css';

Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$axios = Axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')