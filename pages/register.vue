<template>
	<view id="app">
		<view data-v-001a8a65="" class="login app-content">
			<view data-v-001a8a65="" class="login-content" style="height: 80%;">
				<view data-v-001a8a65="" class="login-top">
					<view data-v-001a8a65="" class="van-image van-image--round" style="width: 100%;">
						<image src="/static/login/logo.8bf3e854.jpg" mode="widthFix" class="van-image__img">
					</view>
				</view>
				<view data-v-001a8a65="" style="width: 100%; height: 100%;">
					<view data-v-001a8a65="" class="van-cell-group van-cell-group--inset van-hairline--top-bottom">
						<view data-v-001a8a65="" class="van-cell van-field">
							<view class="van-cell__title van-field__label"><span>手机号</span></view>
							<view class="van-cell__value van-field__value">
								<view class="van-field__body"><input type="text" v-model="formData.mobile" placeholder="请输入手机号"
										class="van-field__control"></view>
							</view>
						</view>
					</view>
					<view data-v-001a8a65="" class="mt15 van-cell-group van-cell-group--inset van-hairline--top-bottom">
						<view data-v-001a8a65="" class="van-cell van-field">
							<view class="van-cell__title van-field__label"><span>验证码</span></view>
							<view class="van-cell__value van-field__value">
								<view class="van-field__body"><input v-model="formData.captcha" type="text" placeholder="验证码"
										class="van-field__control"></view>
							</view>
							<view data-v-001a8a65="" class="van-image" @click="changeCaptcha"
								style="width: 100px; height: 48px; margin-top: -13px;" v-html="captchaContent">
							</view>
						</view>
					</view>
					<view data-v-001a8a65="" class="mt15 van-cell-group van-cell-group--inset van-hairline--top-bottom">
						<view data-v-001a8a65="" class="input-type van-cell van-field">
							<view class="van-cell__title van-field__label"><span>密码</span></view>
							<view class="van-cell__value van-field__value">
								<view class="van-field__body">
									<input v-if="isHide1" v-model="formData.password" type="password" placeholder="请输入密码"
										class="van-field__control" />
									<input v-else v-model="formData.password" type="text" placeholder="请输入密码"
										class="van-field__control" />
									<view class="van-field__right-icon" @click="isHide1 = !isHide1"><i
											:class="['van-icon', isHide1? 'van-icon-eye': 'van-icon-eye-o']"></i>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view data-v-001a8a65="" class="mt15 van-cell-group van-cell-group--inset van-hairline--top-bottom">
						<view data-v-001a8a65="" class="input-type van-cell van-field">
							<view class="van-cell__title van-field__label"><span>确认密码</span></view>
							<view class="van-cell__value van-field__value">
								<view class="van-field__body">
									<input v-if="isHide2" v-model="formData.confirm_password" type="password" placeholder="请输入密码"
										class="van-field__control" />
									<input v-else v-model="formData.confirm_password" type="text" placeholder="请输入密码"
										class="van-field__control" />
									<view class="van-field__right-icon" @click="isHide2 = !isHide2"><i
											:class="['van-icon', isHide2? 'van-icon-eye': 'van-icon-eye-o']"></i>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view data-v-001a8a65="" class="mt15 van-cell-group van-cell-group--inset van-hairline--top-bottom">
						<view data-v-001a8a65="" class="input-type van-cell van-field">
							<view class="van-cell__title van-field__label"><span>邀请码</span></view>
							<view class="van-cell__value van-field__value">
								<view class="van-field__body"><input v-model="formData.invite_code" type="text" placeholder="请输入邀请码"
										class="van-field__control"></view>
							</view>
						</view>
					</view>

					<view data-v-001a8a65="" class="mt15" style="font-size: 14px; margin-left: 20px;">
						<view data-v-001a8a65="" role="radiogroup" class="van-radio-group">
							<view data-v-001a8a65="" role="radio" tabindex="0" aria-checked="true" class="van-radio">
								<view class="van-radio__icon van-radio__icon--round van-radio__icon--checked" style="font-size: 15px;">
									<i class="van-icon van-icon-success"
										style="border-color: rgb(131, 131, 131); background-color: rgb(131, 131, 131);">

									</i>
								</view><span class="van-radio__label"><span data-v-001a8a65="" style="font-size: 15px;">您选择后即代表同意
										<a data-v-001a8a65="" class="xieyi"
											@click="$goPages('/pages/tab1/userNeedKnow')">用户协议v.1.1.6</a></span></span>
							</view>
						</view>
					</view>
					<button data-v-001a8a65="" @click="register"
						class="long-btn mt15 van-button van-button--primary van-button--normal van-button--block"
						:style="cansubmit? 'color: white; background: rgb(245, 108, 106); border-color: rgb(245, 108, 106);': 'color: white; background: rgb(239, 155, 153); border-color: rgb(239, 155, 153);'">
						<view data-v-001a8a65="" class="van-button__content"><span data-v-001a8a65="" class="van-button__text"> 立即开户
							</span></view>
					</button>
					<view data-v-001a8a65="" class="login-other mt15" @click="goLogin"><span data-v-001a8a65="">已有账号，立即登录</span>
					</view>
				</view>
			</view>
			<view data-v-001a8a65="" class="login-bottom" @click="$goPages('/pages/tab1/kefu')"><span data-v-001a8a65=""
					class="kf-text"><i data-v-001a8a65="" class="van-icon van-icon-service">

					</i>我的客服</span></view>
		</view>

	</view>

	</view>
</template>

<script>
	import {
		iconToast
	} from "@/common/utils"
	export default {
		data() {
			return {
				isHide1: true,
				isHide2: true,

				cansubmit: false, // 
				isLogining: false, // 是否在登录中

				captchaContent: '',

				formData: {
					mobile: '',
					captcha: '',
					password: '',
					confirm_password: '',
					invite_code: ''
				}
			}
		},
		watch: {
			'formData.mobile'(newVal) {
				this.checkSubmit()

			},
			'formData.captcha'(newVal) {
				this.checkSubmit()
			},
			'formData.password'(newVal) {
				this.checkSubmit()

			},
			'formData.confirm_password'(newVal) {
				this.checkSubmit()
			},
			'formData.invite_code'(newVal) {
				this.checkSubmit()

			},

		},
		onLoad(option) {
			console.log('注册页接收到参数option', option)
			let {
				code
			} = option
			this.formData.invite_code = code




		},
		onReady() {
			console.log('11')
			this.changeCaptcha()
		},
		methods: {
			checkSubmit(toast) {
				for (var item in this.formData) {
					this.formData[item] = this.formData[item] ? this.formData[item].toString() : ''
				}
				if (this.formData.mobile.length !== 11) {
					toast && iconToast('请输入11位的手机号码', 'love')
					this.cansubmit = false
					return false
				}
				if (this.formData.captcha.length < 3) {
					toast && iconToast('请输入正确的图形验证码', 'love')
					this.cansubmit = false
					return false
				}
				if (this.formData.password.length < 6) {
					toast && iconToast('密码不能少于6位', 'love')
					this.cansubmit = false
					return false
				}
				if (this.formData.confirm_password.length < 6) {
					toast && iconToast('确认密码不能少于6位', 'love')
					this.cansubmit = false
					return false
				}
				if (!this.formData.invite_code) {
					toast && iconToast('请输入邀请码', 'love')
					this.cansubmit = false
					return false
				}
				this.cansubmit = true
				return true
			},

			async register() {

				console.log('登录登录登录')
				if (!this.checkSubmit('toast')) return

				this.isLogining = true

				let res = await this.$API.register(this.formData)
				this.isLogining = false

				if (!res) return this.changeCaptcha()

				this.$store.commit('loginIn', res.userinfo.token)

				this.$store.commit('setMobile', res.userinfo.mobile)
				uni.showToast({
					title: '开户成功',
					duration: 1500,
					mask: true,
					icon: 'success',
					success() {
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/tabBar/index'
							});
						}, 1000)
					}
				})


			},
			async changeCaptcha() {
				// let res = await this.$API.captcha()
				// if (!res) return
				// console.log('返回的', res)
				const t = Math.random()
				this.captchaContent = `<img src=https://api.zggf2023.com/captcha?t=${t} style="height: 100%;width: 100%;" />`

			},
			goLogin() {
				uni.redirectTo({
					url: '/pages/login'
				})
			}
		}
	}
</script>

<style scoped>
	@import url("/static/register/style/197.c3d463d8.css");
	@import url("/static/register/style/482.181a18d0.css");
	@import url("/static/register/style/497.2065aba0.css");
	@import url("/static/register/style/539.79955ce2.css");
	@import url("/static/register/style/app.2b4d12a5.css");
</style>