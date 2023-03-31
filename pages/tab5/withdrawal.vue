<template>
	<view data-v-5b1812b8="" class="Withdrawal">
		<view data-v-5b1812b8="" style="width: 90%; margin: 30px auto 10px 30px;"><span data-v-5b1812b8=""
				style="color: rgb(157, 165, 173); font-size: 20px; font-weight: 600;"></span>
			<view data-v-5b1812b8="" class="van-cell van-field van-field--label-left"
				style="border-bottom: 1px solid rgb(235, 237, 240);">
				<view class="van-cell__title van-field__label van-field__label--left"><span data-v-5b1812b8=""
						class="money-label">¥</span></view>
				<view class="van-cell__value van-field__value">
					<view class="van-field__body"><input type="digit" v-model="money" inputmode="decimal" placeholder="请输入提现金额"
							placeholder-style="font-size: 46rpx;" class="van-field__control van-field__control--left">
					</view>
				</view>
			</view>
		</view>
		<view data-v-5b1812b8="" class="tips"><span data-v-5b1812b8=""
				style="padding: 16px 0px; font-size: 15px; color: rgb(152, 152, 152);">
				<view data-v-5b1812b8=""> 当前可提现金额：<span data-v-5b1812b8=""
						style="color: rgb(244, 39, 41); font-size: 16px;">{{userInfo.cash_money || '0.00'}} 元</span>
				</view>

				<view data-v-5b1812b8="" style="margin: 8rpx 0;"> 实际到账金额金额：<span data-v-5b1812b8=""
						style="color: rgb(244, 39, 41); font-size: 16px;">{{real_money || '0.00'}} 元</span>
				</view>

			</span><span data-v-5b1812b8="" style="padding-bottom: 10px;">提现说明：</span><span data-v-5b1812b8=""
				style="color: rgb(152, 152, 152);">提现时间：{{config.withdraw_start_time}} -
				{{config.withdraw_end_time}}</span><span data-v-5b1812b8=""
				style="color: rgb(152, 152, 152);">提现金额：满{{config.low_withdraw_money}}元可以提现</span><span data-v-5b1812b8=""
				style="color: rgb(152, 152, 152);">提现费用：每笔{{config.withdraw_rate}}%手续费</span><span data-v-5b1812b8=""
				style="color: rgb(152, 152, 152);">提现渠道：{{config.alipay_max_withdraw_money}}以内提现到支付宝，{{config.bank_min_withdraw_money}}以上提现到银行卡</span>
		</view>
		<view data-v-5b1812b8="" class="van-submit-bar">
			<view data-v-5b1812b8="" class="van-submit-bar__bar"><button data-v-5b1812b8="" @click="withdraw"
					class="van-button van-button--primary van-button--normal van-button--block"
					style="color: white; background: linear-gradient(to right, rgb(238, 10, 36), rgb(169, 37, 50)); border: 0px;">
					<view data-v-5b1812b8="" class="van-button__content"><span data-v-5b1812b8=""
							class="van-button__text">立即提现</span></view>
				</button></view>
		</view>

		<view v-show="isLoading" data-v-29e1e5e2="" data-v-5b1812b8="" class="van-overlay">
			<view data-v-29e1e5e2=""
				style="display: flex; align-items: center; justify-content: center; height: 100%; background-color: white;">
				<view data-v-29e1e5e2="" class="van-loading van-loading--circular van-loading--vertical"><span
						data-v-29e1e5e2="" class="van-loading__spinner van-loading__spinner--circular"
						style="color: rgb(0, 148, 255); width: 8rem; height: 8rem;"><svg data-v-29e1e5e2="" viewBox="25 25 50 50"
							class="van-loading__circular">
							<circle data-v-29e1e5e2="" cx="50" cy="50" r="20" fill="none"></circle>
						</svg></span><span data-v-29e1e5e2="" class="van-loading__text"
						style="color: rgb(0, 148, 255);">提现中请稍等</span></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				config: {},
				userInfo: {},
				isLoading: false,
				money: ''
			}
		},
		onLoad() {
			this.getUserInfo()
			this.getConfig()
		},
		computed: {
			real_money() {


				const cash_money = Number(this.userInfo.cash_money || 0)
				console.log('---', cash_money)
				if (!cash_money || cash_money == 0) return '0.00'

				if (cash_money < this.config.low_withdraw_money) return '0.00'

				if (!this.money) return '0.00'
				const withdraw_rate = this.config.withdraw_rate || 0
				try {
					return this.money * (100 - withdraw_rate) / 100
				} catch {
					return '0.00'
				}

			}
		},
		methods: {
			// 获取公共配置
			async getConfig() {
				uni.showLoading()
				let res = await this.$API.indexCommon()
				if (!res) return
				this.config = res
			},
			async getUserInfo() {
				uni.showLoading()
				let res = await this.$API.findUserInfo()
				this.userInfo = res || {}
			},
			async withdraw() {
				if (!this.money) return this.$textToast('请输入提现金额')
				this.isLoading = true
				let res = await this.$API.withdraw({
					money: this.money,
					money_type: 'cash_money'
				})
				this.isLoading = false
				if (res) {
					this.$textToast('提现成功')
					setTimeout(() => {
						uni.navigateBack({
							delta: 1
						})
					}, 1000)
				}


			},

		}
	}
</script>

<style scoped>
	@import url('/static/tab5/withdrawal/style/730.3a422246.css');
</style>