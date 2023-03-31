import App from './App'
import messages from './locale/index'

import API from './api/api.js'
import store from './store/index.js'


import {
	iconToast,
	DateFormat
} from "@/common/utils"


let i18nConfig = {
	locale: uni.getLocale(),
	messages
}

Vue.prototype.$API = API
Vue.prototype.$store = store
Vue.prototype.$textToast = iconToast
Vue.prototype.$DateFormat = DateFormat
Vue.prototype.$goPages = url => {
	uni.navigateTo({
		url
	})
}

// #ifndef VUE3
import Vue from 'vue'
import VueI18n from './lang/vue-i18nV8.js'
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	i18n,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import {
	createI18n
} from './lang/vue-i18nV8.js'
const i18n = createI18n(i18nConfig)
export function createApp() {
	const app = createSSRApp(App)
	app.use(i18n)
	return {
		app
	}
}
// #endif