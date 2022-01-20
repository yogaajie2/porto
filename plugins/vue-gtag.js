import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: { id: 'G-4BMNJS3TN4' },
    appName: 'momentum-design',
    // eslint-disable-next-line no-undef
    enabled: process.env.NODE_ENV === 'production',
    pageTrackerScreenviewEnabled: true
  }, app.router)
}
