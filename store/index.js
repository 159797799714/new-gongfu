import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: uni.getStorageSync('token'),
		lang: uni.getStorageSync('lang') || 'cn',
		mobile: uni.getStorageSync('mobile') || '',
		headHeight: '20px'
	},
	mutations: {
		loginIn(state, token) {
			state.token = token
			uni.setStorage({
				key: 'token',
				data: token
			})
		},
		setLang(state, lang) {
			state.lang = lang
			uni.setStorage({
				key: 'lang',
				data: lang
			})
		},
		setMobile(state, mobile) {
			state.mobile = mobile
			uni.setStorage({
				key: 'mobile',
				data: mobile
			})
		},
		loginOut(state, toastText = '您已安全退出登录') {
			state.token = ''
			state.lang = 'cn'
			state.mobile = ''
			uni.clearStorageSync();
			uni.reLaunch({
				url: `/pages/login?toastText=${toastText}`
			})
		},
		setHeadHeight(state, height) {
			state.headHeight = height
		}
	},
	actions: {

	},
	getters: {}
})
export default store
