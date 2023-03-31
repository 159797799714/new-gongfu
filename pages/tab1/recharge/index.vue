<template>
	<view id="app">
		<view data-v-288b95dd="" class="Recharge  head-top">
			<view data-v-288b95dd="" class="van-nav-bar van-hairline--bottom">
				<view class="van-nav-bar__content">
					<view class="van-nav-bar__left" @click="goBack">
						<text class="van-icon van-icon-arrow-left van-nav-bar__arrow"></text>
					</view>
					<view class="van-nav-bar__title van-ellipsis">充值</view>
					<view class="van-nav-bar__right" @click="$goPages('/pages/tab1/recharge/rechargelog')">
						<text class="van-nav-bar__text">记录</text>
					</view>
				</view>
			</view>
			<view data-v-288b95dd="" class="pay-type"><text data-v-288b95dd=""
					style="color: rgb(157, 165, 173); font-size: 18px; font-weight: 600; padding-left: 20px;">
					请选择支付方式 </text>
				<view data-v-288b95dd="" role="radiogroup" class="van-radio-group" style="margin-top: 20px;">
					<view data-v-288b95dd="" role="button" tabindex="0"
						class="van-cell van-cell--clickable van-cell--large" @click="goPay(1)">
						<view data-v-288b95dd="" class="van-cell__title">
							<view data-v-288b95dd=""
								style="display: flex; justify-content: space-between; align-items: center;">
								<view data-v-288b95dd="" style="display: flex; align-items: center;"><text
										data-v-288b95dd="" style="color: rgb(2, 122, 255); font-size: 32px;"><i
											data-v-288b95dd="" class="van-icon van-icon-alipay">

										</i></text>
									<view data-v-288b95dd=""
										style="display: flex; flex-direction: column; font-size: 16px; margin-left: 1rem;">
										<text data-v-288b95dd="">支付宝支付</text><text data-v-288b95dd=""
											style="font-size: 14px; color: rgb(157, 165, 173);"></text>
									</view>
								</view>
							</view>
						</view><i data-v-288b95dd="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
					</view>
					<view data-v-288b95dd="" role="button" tabindex="0"
						class="van-cell van-cell--clickable van-cell--large" @click="goPay(3)">
						<view data-v-288b95dd="" class="van-cell__title">
							<view data-v-288b95dd=""
								style="display: flex; justify-content: space-between; align-items: center;">
								<view data-v-288b95dd="" style="display: flex; align-items: center;"><text
										data-v-288b95dd="" style="color: rgb(18, 211, 31); font-size: 32px;"><i
											data-v-288b95dd="" class="van-icon van-icon-wechat">

										</i></text>
									<view data-v-288b95dd=""
										style="display: flex; flex-direction: column; font-size: 16px; margin-left: 1rem;">
										<text data-v-288b95dd="">微信支付</text><text data-v-288b95dd=""
											style="font-size: 14px; color: rgb(157, 165, 173);"></text>
									</view>
								</view>
							</view>
						</view><i data-v-288b95dd="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
					</view>

					<view data-v-288b95dd="" role="button" tabindex="0"
						class="van-cell van-cell--clickable van-cell--large" @click="goPay(2)">
						<view data-v-288b95dd="" class="van-cell__title">
							<view data-v-288b95dd=""
								style="display: flex; justify-content: space-between; align-items: center;">
								<view data-v-288b95dd="" style="display: flex; align-items: center;"><text
										data-v-288b95dd="" style="color: rgb(18, 211, 31); font-size: 32px;">
										<view data-v-288b95dd="" class="van-image" style="width: 32px; height: 32px;">
											<image src="/static/tab1/recharge/yinlian.7f4efda3.png"
												class="van-image__img" />
										</view>
									</text>
									<view data-v-288b95dd=""
										style="display: flex; flex-direction: column; font-size: 16px; margin-left: 1rem;">
										<text data-v-288b95dd="">银行卡充值</text><text data-v-288b95dd=""
											style="font-size: 14px; color: rgb(157, 165, 173);"></text>
									</view>
								</view>
							</view>
						</view><i data-v-288b95dd="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
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
				userInfo: {
					level_id: 1
				}
			}
		},
		onLoad() {
			this.getUserInfo()
		},
		methods: {

			async getUserInfo() {
				uni.showLoading()
				let res = await this.$API.findUserInfo()
				this.userInfo = res || {}
			},
			goPay(channel) {
				// channel: 1=支付宝,2=银行卡,3=微信
				if (channel === 2 && this.userInfo.level_id < 2) return this.$textToast('共富一级及以上可以申请银行卡充值通道')
				uni.navigateTo({
					url: `/pages/tab1/recharge/pay?channel=${channel}`,
				})
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style scoped>
	@import url("/static/tab1/recharge/style/29.7e543061.css");
	@import url("/static/tab1/recharge/style/147.520bb24f.css");
	@import url("/static/tab1/recharge/style/351.f071f8d9.css");
	@import url("/static/tab1/recharge/style/482.181a18d0.css");
	@import url("/static/tab1/recharge/style/791.20153ef8.css");
	@import url("/static/tab1/recharge/style/app.2b4d12a5.css");

	.van-nav-bar__arrow {
		font-size: 24px;
		color: #000;
	}
</style>