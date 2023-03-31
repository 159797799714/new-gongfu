import withoutLoginApi from '@/api/withoutLogin.js'
import {
	iconToast
} from '../common/utils.js'
import store from '../store/index.js'

let baseUrl = "https://api.zggf2023.com"

let isLogin = false
export function request(url, paramData = {}, method = 'GET', mode) {
	let token = store.state.token,
		tokenDefault = ''

	// 判断是否需要登录
	let needLogin = withoutLoginApi.indexOf(url) === -1
	if (!token && !needLogin) {
		token = tokenDefault
		console.log('不需要登录', url)
	} else if (!token && needLogin) {
		console.log('需要登录', url)
		uni.redirectTo({
			url: '/pages/login',
			success() {
				console.log('success')
				isLogin = true
			}
		})
	}
	
	
	let {noToast = false} = paramData // 是否toast
	delete paramData.noToast
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url, //仅为示例，并非真实接口地址。
			data: paramData,
			method: method ? method : 'POST',
			header: {
				'content-type': 'application/json;charset=utf-8',
				'lang': store.state.lang,
				'token': token
			},
			timeout: 20000,
			success(res) {
				uni.hideLoading && uni.hideLoading()
				let statusCode = res.statusCode
				console.log('res', res)
				console.log('res.statusCode', res.statusCode, 'res.data', res.data)
				switch (statusCode) {
					case 200:
						const {
							code, data, msg
						} = res.data || {}
						if (code == 1) {
							resolve(data || {})
						} else {
							resolve(null)
							!noToast && iconToast(msg || '请求出错')
						}
						break;
					case 401:
						uni.redirectTo({
							url: '/pages/login',
							success() {
								console.log('success')
								isLogin = true
							}
						})
						break;
					default:
						resolve(null)
						!noToast && iconToast(res.msg || '请求出错')
				}
			},
			fail(err) {
				console.log('请求出错了', err)
				uni.hideLoading && uni.hideLoading()
				iconToast('网络异常')
				resolve(null)
			}
		})
	})
}