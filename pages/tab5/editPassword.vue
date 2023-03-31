<template>
	<view data-v-6eb64883="">
		<form v-if="!isFirstSet" data-v-6eb64883="" class="van-form">
			<view data-v-6eb64883="" class="van-cell-group van-cell-group--inset van-hairline--top-bottom">
				<view data-v-6eb64883="" class="van-cell van-field">
					<view class="van-cell__title van-field__label"><span>原密码</span></view>
					<view class="van-cell__value van-field__value">
						<view class="van-field__body">
							<input type="password" v-model="passwordData.old_password" :maxlength="iptLength" name="oldPassword"
								placeholder="请输入原密码" :placeholder-style="rules.old_password ? '': 'color: #ee0a24;'"
								class="van-field__control">
						</view>
					</view>
				</view>
				<view data-v-6eb64883="" class="van-cell van-field">
					<view class="van-cell__title van-field__label"><span>新密码</span></view>
					<view class="van-cell__value van-field__value">
						<view class="van-field__body">
							<input type="password" v-model="passwordData.new_password" :maxlength="iptLength" name="newPassword"
								placeholder="请输入新密码" :placeholder-style="rules.new_password ? '': 'color: #ee0a24;'"
								class="van-field__control">
						</view>
					</view>
				</view>
			</view>
			<view data-v-6eb64883="" style="margin: 16px;">
				<button data-v-6eb64883="" type="submit" @click="editAction"
					class="van-button van-button--primary van-button--normal van-button--block van-button--round"
					style="color: white; background: linear-gradient(to right, rgb(255, 96, 52), rgb(238, 10, 36)); border: 0px;">
					<view data-v-6eb64883="" class="van-button__content"><span data-v-6eb64883="" class="van-button__text"> 立即修改
						</span></view>
				</button>
			</view>
		</form>

		<!-- 第一次设置 -->
		<keyInput :visable="isFirstSet ? true: false" :payPassword.sync="payPassword" @submit="buyProject">
		</keyInput>

	</view>
</template>

<script>
	import keyInput from '@/components/keyInput.vue'
	export default {
		components: {
			keyInput,
		},
		data() {
			return {
				// payData: {
				// 	old_pay_password: '',
				// 	new_pay_password: ''
				// },
				type: '', // type空为登录密码 pay为支付密码
				passwordData: {
					old_password: '',
					new_password: '',
				},
				set_pay_password: 0,
				// true代表有值，false代表飘红
				rules: {
					old_password: true,
					new_password: true,
				},
				iptLength: 100,
				isFirstSet: false, // 是否是修改老支付密码
				payPassword: ''
			}
		},
		onLoad(option) {
			const {
				type,
				isFirstSet
			} = option
			console.log('type', type, isFirstSet)
			this.type = type
			this.isFirstSet = isFirstSet
			this.set_pay_password = isFirstSet ? 1 : 0
			if (isFirstSet) {
				uni.setNavigationBarTitle({
					title: '设置支付密码'
				})
				return
			}

			this.iptLength = type ? 6 : 100
			uni.setNavigationBarTitle({
				title: type ? '修改支付密码' : '修改登录密码'
			})
		},
		onShow(option) {
			this.getUserInfo()
		},
		methods: {
			async getUserInfo() {
				uni.showLoading()
				let res = await this.$API.findUserInfo()
				const obj = res || {}
				this.userInfo = obj
				this.isFirstSet = obj.set_pay_password < 1 ? true : ''
				// this.isFirstSet = 1 < 1 ? true : ''
			},
			async editAction() {
				let that = this
				// 先判断都不为空
				for (let key in this.passwordData) {
					this.rules[key] = !(!this.passwordData[key])
				}
				// 为空不执行
				if (Object.values(this.rules).indexOf(false) !== -1) {
					console.log('this.rules', this.rules)
					return
				}

				if (this.passwordData.new_password.length < 6) return this.$textToast('新密码长度不能少于6位', 'none')

				uni.showLoading()

				const params = this.type === 'pay' ? {
					old_pay_password: this.passwordData.old_password,
					new_pay_password: this.passwordData.new_password
				} : this.passwordData

				let res = await this.$API.profile({
					...params,
					set_pay_password: 0
				})
				if (!res) return

				if (this.type === 'pay') {
					this.$textToast('修改成功', 'success')
				}

				setTimeout(() => {
					if (!that.type) { // 修改密码成功
						return that.$store.commit('loginOut', '密码修改成功，请重新登录')
					}
					uni.navigateBack({
						delta: 1
					})
				}, 1000)
			},
			async buyProject() {
				if (this.payPassword.length < 6) return this.$textToast('密码长度不能少于6位', 'none')

				uni.showLoading()

				const params = {
					set_pay_password: 1,
					new_pay_password: this.payPassword
				}

				let res = await this.$API.profile(params)
				if (!res) return

				this.$textToast('支付密码设置成功', 'success')

				setTimeout(() => {
					uni.navigateBack({
						delta: 1
					})
				}, 1000)
			}
		}
	}
</script>

<style scoped>

</style>