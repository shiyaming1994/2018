// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import 'mint-ui/lib/style.min.css'
import { Swipe, SwipeItem } from 'mint-ui';
import { Lazyload } from 'mint-ui'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Lazyload);


Vue.prototype.$axios = Axios;

Vue.config.productionTip = false

NProgress.configure({ showSpinner: false })
router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
