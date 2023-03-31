<template>
	<view id="app">
		<view data-v-175ea6ba="" class="Recharge">
			<view data-v-175ea6ba="" class="my-swipe van-swipe">
				<view class="van-swipe__track">
					<view data-v-175ea6ba="" class="van-swipe-item" style="width: 414px;">
						<view data-v-175ea6ba="" class="van-image" style="width: 100%; height: 100%;">
							<image src="/static/tab1/recharge/pay/recharge.dc9d700d.jpg" class="van-image__img">
						</view>
					</view>
				</view>
			</view>
			<view data-v-175ea6ba="" style="padding-bottom: 70px;">
				<view data-v-175ea6ba=""
					style="margin: 20px 0px 20px 18px; font-size: 16px; font-weight: 600; color: rgb(88, 88, 88);">
					点击选择您要充值的金额</view>
				<view v-if="!moneyList.length" class="no-pay">暂时没有可用支付通道</view>
				<view data-v-175ea6ba="" class="money-grid">
					<view v-for="(item, index) in moneyList" :key="index" id="money-100"
						:class="['money-item', activeMoney == item ?'money-on': '']" @click="activeMoney = item">
						{{item}} 元
					</view>
				</view>
				<view v-if="moneyList.length > 0" data-v-175ea6ba="" class="van-submit-bar">
					<view data-v-175ea6ba="" class="van-submit-bar__bar">
						<view data-v-175ea6ba="" class="money-text"><text data-v-175ea6ba=""
								style="padding-right: 4px;">¥</text>{{activeMoney || '0.00'}}</view>
						<button data-v-175ea6ba="" @click="goPay"
							class="van-button van-button--danger van-button--normal van-button--round van-submit-bar__button van-submit-bar__button--danger">
							<view data-v-175ea6ba="" class="van-button__content"><text data-v-175ea6ba=""
									class="van-button__text">立即支付</text></view>
						</button>
					</view>
				</view>
			</view>
			<view data-v-175ea6ba=""
				style="text-align: center; height: 200px; line-height: 200px; font-weight: 600; color: rgb(88, 88, 88); display: none;">
				暂时没有可用支付通道 </view>
			<view data-v-29e1e5e2="" data-v-175ea6ba="" class="van-overlay" style="display: none;">
				<view data-v-29e1e5e2=""
					style="display: flex; align-items: center; justify-content: center; height: 100%; background-color: white;">
					<view data-v-29e1e5e2="" class="van-loading van-loading--circular van-loading--vertical"><text
							data-v-29e1e5e2="" class="van-loading__spinner van-loading__spinner--circular"
							style="color: rgb(0, 148, 255); width: 8rem; height: 8rem;"><svg data-v-29e1e5e2=""
								viewBox="25 25 50 50" class="van-loading__circular">
								<circle data-v-29e1e5e2="" cx="50" cy="50" r="20" fill="none"></circle>
							</svg></text><text data-v-29e1e5e2="" class="van-loading__text"
							style="color: rgb(0, 148, 255);">数据加载中</text></view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				channel: 1,
				moneyList: [],
				activeMoney: ''
			}
		},
		onLoad(option) {
			console.log('option', option)
			let {
				channel
			} = option
			this.channel = channel || 1

			this.getPayList()
		},
		methods: {
			async getPayList() {
				uni.showLoading()
				let res = await this.$API.getRechargeChannel()
				if (!res || !res.length) return
				try {
					const payArr = (res || []).filter(item => item.channel == this.channel)
					console.log('payArr', payArr)
					const moneyObj = payArr.length ? payArr[0]['money_json'] : {}
					this.moneyList = Object.values(moneyObj)
				} catch {
					this.moneyList = []
				}

				console.log('this.moneyList', this.moneyList)
			},
			async goPay() {
				if (!this.activeMoney) return this.$textToast('请选择您要充值的金额')

				uni.showLoading()
				let res = await this.$API.recharge({
					channel: this.channel,
					money: Number(this.activeMoney)
				})
				if (!res) return
				if (!res.url) return this.$textToast('获取支付页面为空，请稍后重试')
				this.$goPages(`/pages/webview?url=${res.url}`)
			}
		}
	}
</script>

<style scoped>
	@import url("/static/tab1/recharge/pay/style/29.7e543061.css");
	@import url("/static/tab1/recharge/pay/style/251.b4f461d6.css");
	@import url("/static/tab1/recharge/pay/style/app.2b4d12a5.css");
	@import url("/static/tab1/recharge/pay/style/chunk-vendors.57d1fa30.css");

	.money-item {
		text-align: center;
		padding: 20rpx 0;
		border-radius: 5rpx;
		font-size: 36rpx;
		font-weight: 500;
		border: 1rpx solid #efdeac;
	}

	.money-on {
		background: #f01626;
		color: #fff;
	}

	.no-pay {
		text-align: center;
		padding-top: 100px;
		font-size: 20px;
		font-weight: bold;
		color: #cccccc;
	}
</style>