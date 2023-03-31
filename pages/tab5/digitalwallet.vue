<template>
	<view data-v-d7962c82="" class="wallet">
		<view data-v-d7962c82="" style="position: relative;">
			<view data-v-d7962c82="" class="wallet-top">
				<view data-v-d7962c82="" class="wallet-top-msg">
					<view data-v-d7962c82="" class="flex-line-between">{{userInfo.nickname}} </view>
					<view data-v-d7962c82="" class="flex-line-between-2">由中国人民银行提供钱包服务</view>
				</view>
				<view data-v-d7962c82="" class="wallet-top-msg-2" @click="$goPages('/pages/tab5/bill?type=figure_money')"> 明细
				</view>
			</view>
			<view data-v-d7962c82="" class="wallet-content">
				<view data-v-d7962c82="" class="wallet-content-2">
					<view data-v-d7962c82="" class="wallet-tips"><span data-v-d7962c82="" class="wallet-title">钱包余额</span>
						<i data-v-d7962c82="" @click="hide = !hide"
							:class="['van-icon', hide? 'van-icon-closed-eye': 'van-icon-eye']"></i>
					</view>
					<view data-v-d7962c82="" class="wallet-money"><span data-v-d7962c82="" class="money-icon">¥</span><span
							data-v-d7962c82="" class="money-money"
							style="vertical-align: middle; padding-left: 10px;">{{hide? '****': money}}</span></view>
					<view data-v-d7962c82="" class="wallet-button">
						<view data-v-d7962c82="" class="wallet-btn">
							<button data-v-d7962c82="" @click="$goPages('/pages/tab5/zhuanzhang')"
								class="wallet-btn-1 mt15 van-button van-button--default van-button--normal van-button--block"
								style="border-radius: 6px;">
								<view data-v-d7962c82="" class="van-button__content">
									<view data-v-d7962c82="" class="van-button__text">
										<text data-v-d7962c82="" style="color: rgb(12, 12, 12);">转账</text>
									</view>
								</view>
							</button>
						</view>
						<view data-v-d7962c82="" class="wallet-btn right">
							<button data-v-d7962c82="" @click="goWithOut(userInfo.figure_money, 'figure_money')"
								class="wallet-btn-1 mt15 van-button van-button--default van-button--normal van-button--block"
								style="background-color: rgb(221, 68, 60); border-radius: 10px;">
								<view data-v-d7962c82="" class="van-button__content"><span data-v-d7962c82=""
										class="van-button__text"><span data-v-d7962c82=""
											style="color: rgb(255, 255, 255);">提现</span></span></view>
							</button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money: '0.00',
				userInfo: {},
				hide: false
			}
		},
		onLoad(option) {
			this.money = option.type || '0.00'
		},
		onShow() {
			this.getUserInfo()
		},
		methods: {
			async getUserInfo() {
				uni.showLoading()
				let res = await this.$API.findUserInfo()
				const data = res || {}
				this.money = data.figure_money || '0.00'
				this.userInfo = data
			},
			async goWithOut(money, type) {
				let that = this
				await this.getPayment()
				if (this.userInfo.is_realname == 0) {
					this.$textToast('请先实名')
					return
				}
				if (!this.hadCard) {
					this.$textToast('请绑定银行卡')
					setTimeout(() => {
						this.$goPages('/pages/tab5/bindAccount?type=2')
					}, 1000)
					return
				}
				uni.showLoading()
				let res = await this.$API.withdraw({
					money: Number(money),
					money_type: type
				})
				if (res) {
					this.$textToast('提现成功')
					setTimeout(() => {
						that.getUserInfo()
					}, 1000)
				}
					

			},
			
			async getPayment() {
				uni.showLoading()
				let res = await this.$API.getPayment({noToast: true})
				const data = res || []
				this.payList = data
				console.log('data', data)
				this.hadCard = data.length > 0 ? data.filter(item => item.channel == 2).length > 0 : true
				return
			},
		}
	}
</script>

<style scoped>
	@import url('/static/tab5/digitalwallet/style/960.40c1f840.css');
</style>