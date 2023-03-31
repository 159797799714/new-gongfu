<template>
	<view id="app">
		<view data-v-fe10f296="" class="login app-content">
			<view data-v-fe10f296="" class="login-content" style="margin-top: 60px; height: 100%; position: relative;">
				<view data-v-fe10f296="" class="login-top">
					<view data-v-fe10f296="" class="logo-img van-image">
						<image src="/static/login/logo.8bf3e854.jpg" class="van-image__img" mode="widthFix" />
					</view>
					<view data-v-fe10f296="" class="login-title" @click="$goPages('/pages/tab1/kefu')">
						<view data-v-fe10f296="" class="msg-img van-image">
							<image src="/static/login/message.png" mode="widthFix" class="van-image__img" />
						</view>
					</view>
				</view>
				<view data-v-fe10f296="" style="width: 100%; margin: 30px auto;">
					<view data-v-fe10f296="" style="margin: 20px 0px 50px;">
						<view data-v-fe10f296="" class="van-cell-group van-cell-group--inset van-hairline--top-bottom">
							<view data-v-fe10f296="" class="van-cell van-field">
								<view class="van-cell__title van-field__label"><text>手机号</text></view>
								<view class="van-cell__value van-field__value">
									<view class="van-field__body">
										<input v-model="formData.mobile" type="number" placeholder="请输入手机号"
											class="van-field__control" />
									</view>
								</view>
							</view>
						</view>
						<view data-v-fe10f296=""
							class="mt15 van-cell-group van-cell-group--inset van-hairline--top-bottom">
							<view data-v-fe10f296="" class="input-type van-cell van-field">
								<view class="van-cell__title van-field__label"><text>密码</text></view>
								<view class="van-cell__value van-field__value">
									<view class="van-field__body">
										<input v-if="isHide" v-model="formData.password" type="password"
											placeholder="请输入密码" class="van-field__control" />
										<input v-else v-model="formData.password" type="text" placeholder="请输入密码"
											class="van-field__control" />
										<view class="van-field__right-icon" @click="isHide = !isHide"><i
												:class="['van-icon', isHide? 'van-icon-eye': 'van-icon-eye-o']"></i>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<button data-v-fe10f296="" @click="login"
					class="long-btn mt15 van-button van-button--primary van-button--normal van-button--block"
					:style="cansubmit? 'color: white; background: rgb(245, 108, 106); border-color: rgb(245, 108, 106);': 'color: white; background: rgb(239, 155, 153); border-color: rgb(239, 155, 153);'">
					<view data-v-fe10f296="" class="van-button__content">
						<text data-v-fe10f296="" class="van-button__text"> 登录 </text>
					</view>
				</button>
				<button data-v-fe10f296="" @click="$goPages('/pages/register')"
					class="long-btn mt15 register-btn van-button van-button--default van-button--normal van-button--block">
					<view data-v-fe10f296="" class="van-button__content"><text data-v-fe10f296=""
							class="van-button__text"><text data-v-fe10f296=""
								style="color: rgb(215, 22, 25);">立即开户</text></text></view>
				</button>
			</view>
			<view data-v-fe10f296="" class="login-bottom kf-text"><text data-v-fe10f296=""
					@click="forgetPwd">忘记密码</text><text data-v-fe10f296="" style="margin: 0px 10px;">|</text><text
					data-v-fe10f296="" @click="$goPages('/pages/tab1/kefu')">我的客服</text>
			</view>
		</view>


		<!-- 登录中遮罩层 -->
		<view v-show="isLogining" data-v-fe10f296="" class="van-overlay">
			<view data-v-fe10f296="" class="van-loading van-loading--circular van-loading--vertical"
				style="margin-top: 30vh;"><text data-v-fe10f296=""
					class="van-loading__spinner van-loading__spinner--circular" style="color: rgb(0, 148, 255);"><svg
						data-v-fe10f296="" viewBox="25 25 50 50" class="van-loading__circular">
						<circle data-v-fe10f296="" cx="50" cy="50" r="20" fill="none"></circle>
					</svg></text><text data-v-fe10f296="" class="van-loading__text" style="color: rgb(0, 148, 255);">
					登录中,请稍等 </text></view>
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
				isHide: true,
				cansubmit: false, // 
				isLogining: false, // 是否在登录中

				formData: {
					mobile: '',
					password: ''
				}
			}
		},
		watch: {
			'formData.mobile'(newVal) {
				this.checkSubmit()

			},
			'formData.password'(newVal) {
				this.checkSubmit()
			},

		},
		onLoad(option) {
			console.log('---')
			const {
				toastText
			} = option
			if (toastText) this.$textToast(toastText, 'success')
		},
		methods: {
			checkSubmit(toast) {
				for (var item in this.formData) {
					this.formData[item] = this.formData[item].toString()
				}
				if (this.formData.mobile.length !== 11) {
					toast && iconToast('请输入11位的手机号码', 'love')
					this.cansubmit = false
					return false
				}
				if (this.formData.password.length < 6) {
					toast && iconToast('账户密码不能少于6位', 'love')
					this.cansubmit = false
					return false
				}
				this.cansubmit = true
				return true
			},
			async login() {

				console.log('登录登录登录')
				if (!this.checkSubmit('toast')) return

				this.isLogining = true

				let res = await this.$API.login(this.formData)
				this.isLogining = false

				console.log('-----', res)

				if (!res) return

				this.$store.commit('loginIn', res.userinfo.token)
				this.$store.commit('setMobile', res.userinfo.mobile)

				uni.showToast({
					title: '登录成功',
					duration: 1500,
					mask: true,
					icon: 'success',
					success() {
						setTimeout(() => {
							uni.switchTab({
								url: '/pages/tabBar/index'
							});
						}, 1400)
					}
				})
			},
			forgetPwd() {
				uni.showModal({
					title: '提示',
					content: '请您联系客服，进行密码修改',
					showCancel: false,
					confirmColor: '#ee0a24',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定')
						}
					}
				});
			}
		}
	}
</script>

<style scoped>
	@import url("/static/login/style/197.c3d463d8.css");
	@import url("/static/login/style/482.181a18d0.css");
	@import url("/static/login/style/app.2b4d12a5.css");
</style>