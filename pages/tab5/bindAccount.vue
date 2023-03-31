<template>
	<view data-v-ba3a8b40="">
		<form data-v-ba3a8b40="" class="van-form">
			<view v-if="type == 2" data-v-ba3a8b40=""
				class="van-cell-group van-cell-group--inset van-hairline--top-bottom">
				<view data-v-ba3a8b40="" class="van-cell van-field">
					<view class="van-cell__title van-field__label"><span>开户人姓名</span></view>
					<view class="van-cell__value van-field__value">
						<view class="van-field__body">
							<input type="text" name="bankUserName" v-model="FormData.username" placeholder="请填写开户人姓名"
							:placeholder-style="rules.username ? '': 'color: #ee0a24;'"	class="van-field__control"></view>
					</view>
				</view>
				<view data-v-ba3a8b40="" class="van-cell van-field">
					<view class="van-cell__title van-field__label"><span>银行名称</span></view>
					<view class="van-cell__value van-field__value">
						<view class="van-field__body">
							<input type="text" name="bankName" v-model="FormData.bank_name" placeholder="请填写银行名称"
							:placeholder-style="rules.bank_name ? '': 'color: #ee0a24;'"	class="van-field__control"></view>
					</view>
				</view>
				<view data-v-ba3a8b40="" class="van-cell van-field">
					<view class="van-cell__title van-field__label"><span>银行卡号</span></view>
					<view class="van-cell__value van-field__value">
						<view class="van-field__body">
							<input type="text" name="银行卡号" v-model="FormData.account" placeholder="请填写银行卡号"
							:placeholder-style="rules.account ? '': 'color: #ee0a24;'"	class="van-field__control"></view>
					</view>
				</view>
				<view data-v-ba3a8b40="" class="van-cell van-field">
					<view class="van-cell__title van-field__label"><span>支行名称</span></view>
					<view class="van-cell__value van-field__value">
						<view class="van-field__body">
							<input type="text" name="branchBank" v-model="FormData.subbranch_name" placeholder="请填写支行名称"
							:placeholder-style="rules.subbranch_name ? '': 'color: #ee0a24;'"	class="van-field__control"></view>
					</view>
				</view>
			</view>
			<view v-else data-v-13466a0a=""
				class="van-cell-group van-cell-group--inset van-hairline--top-bottom">
				<view data-v-13466a0a="" class="username van-cell van-field" style="color: rgb(50, 50, 51);">
					<view class="van-cell__title van-field__label"><span>账户姓名</span></view>
					<view class="van-cell__value van-field__value">
						<view class="van-field__body">
							<input type="text" name="" v-model="FormData.username" placeholder="请填写支付宝账户姓名"
							:placeholder-style="rules.username ? '': 'color: #ee0a24;'"	class="van-field__control"></view>
					</view>
				</view>
				<view data-v-13466a0a="" class="van-cell van-field">
					<view class="van-cell__title van-field__label"><span>支付宝账户</span></view>
					<view class="van-cell__value van-field__value">
						<view class="van-field__body">
							<input type="text" name="bankNumber" v-model="FormData.account" placeholder="请填写支付宝账户"
							:placeholder-style="rules.account ? '': 'color: #ee0a24;'"	class="van-field__control"></view>
					</view>
				</view>
			</view>
			<view data-v-ba3a8b40="" style="margin: 16px;">
				<button data-v-ba3a8b40="" type="submit" @click="bindAccount"
					class="van-button van-button--primary van-button--normal van-button--block">
					<view data-v-ba3a8b40="" class="van-button__content"><span data-v-ba3a8b40=""
							class="van-button__text"> 提交 </span></view>
				</button></view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 2, // 1=支付宝,2=银行卡
				FormData: {
					channel: '',
					username: '',
					account: ''
				},
				// true代表有值，false代表飘红
				rules: {
					username: true,
					account: true,
					bank_name: true,
					subbranch_name: true
				}
				
			}
		},
		onLoad(option) {
			let {
				type
			} = option		
			uni.setNavigationBarTitle({
				title: type == 2 ? '绑定银行卡' : '绑定支付宝'
			})
			this.type = type
			this.FormData.channel = type
			if (type == 2) { // 绑定银行卡
				this.FormData.bank_name= '',
				this.FormData.subbranch_name= ''
			}
			this.getUserInfo()
		},
		methods: {
			async getUserInfo() {
				uni.showLoading()
				let res = await this.$API.findUserInfo()
				const data = res || {}
				this.FormData.username = res.nickname
			},
			async bindAccount() {
				// 先判断都不为空
				for (let key in this.FormData) {
					this.rules[key] = !(!this.FormData[key])
				}
				// 为空不执行
				if (Object.values(this.rules).indexOf(false) !== -1) {
					return 
				}
				
				uni.showLoading()
				let res = await this.$API.bindPayment(this.FormData)
				if (!res) return
				this.$textToast('绑定成功', 'success')
				setTimeout(() =>
					uni.navigateBack({delta: 1})
				, 1000)
			},
		}
	}
</script>

<style scoped>
</style>
