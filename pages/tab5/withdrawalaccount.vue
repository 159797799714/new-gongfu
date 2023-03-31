<template>
	<view data-v-b5c38b8c="">
		<view data-v-b5c38b8c="">
			<view data-v-b5c38b8c="" class="van-cell-group van-cell-group--inset van-hairline--top-bottom">
				<view v-for="(item, index) in payList" :key="index" data-v-b5c38b8c="" class="van-cell">
					<view data-v-b5c38b8c="" class="van-cell__title">
						<!-- // 支付宝 -->
						<view data-v-b5c38b8c="" class="account-title">
							<view v-if="item.channel == 1" data-v-b5c38b8c="" style="color: rgb(2, 122, 255); font-size: 30px;">
								<text data-v-b5c38b8c="" class="van-icon van-icon-alipay">
								</text>
							</view>
							<!-- // 银行卡 -->
							<view v-else-if="item.channel == 2" data-v-b5c38b8c="" style="color: rgb(2, 122, 255); font-size: 30px;">
								<view data-v-b5c38b8c="" class="van-image" style="width: 30px; height: 30px;">
									<image src="/static/tab5/withdrawalaccount/yinlian.7f4efda3.png" mode="widthFix"
										class="van-image__img" />
								</view>
							</view>
							<text data-v-b5c38b8c="">{{item.channel ==1? '支付宝账号': item.bank_name}}</text>
						</view>
						<view data-v-b5c38b8c="" class="van-cell__label">{{item.account}}</view>
					</view>
					<view data-v-b5c38b8c="" class="van-cell__value">
						<text data-v-b5c38b8c="">{{item.username}}</text>
					</view>
				</view>
				<!-- <view data-v-b5c38b8c="" class="van-cell">
					<view data-v-b5c38b8c="" class="van-cell__title">
						<view data-v-b5c38b8c="" class="account-title">
							<view data-v-b5c38b8c=""
								style="color: rgb(2, 122, 255); font-size: 30px;">
								<view data-v-b5c38b8c="" class="van-image" style="width: 30px; height: 30px;">
									<image src="/static/tab5/withdrawalaccount/yinlian.7f4efda3.png" mode="widthFix" class="van-image__img"/>
										
								</view>
							</view>
							<text data-v-b5c38b8c="">建设银行</text></view>
						<view data-v-b5c38b8c="" class="van-cell__label">622682001452455654</view>
					</view>
					<view data-v-b5c38b8c="" class="van-cell__value"><text data-v-b5c38b8c="">陈伟康</text></view>
				</view> -->
			</view>
		</view>

		<view data-v-b5c38b8c="" style="width: 90%; margin: 20px auto;">
			<button v-if="!hadCard" data-v-b5c38b8c=""
				class="van-button van-button--primary van-button--normal van-button--plain van-button--block"
				style="font-size: 18px; font-weight: 600;" @click="goPages('/pages/tab5/bindAccount?type=2')">
				<view data-v-b5c38b8c="" class="van-button__content">
					<i data-v-b5c38b8c="" class="van-icon van-icon-plus van-button__icon">

					</i><text data-v-b5c38b8c="" class="van-button__text"> 绑定银行卡 </text>
				</view>
			</button>
			<button v-if="!hadAlipay" data-v-b5c38b8c=""
				class="van-button van-button--default van-button--normal van-button--plain van-button--block"
				@click="goPages('/pages/tab5/bindAccount?type=1')"
				style="font-size: 18px; font-weight: 600; margin-top: 20px; color: rgb(6, 82, 221); border-color: rgb(6, 82, 221);">
				<view data-v-b5c38b8c="" class="van-button__content"><i data-v-b5c38b8c=""
						class="van-icon van-icon-plus van-button__icon">

					</i><text data-v-b5c38b8c="" class="van-button__text"> 绑定支付宝 </text></view>
			</button>
		</view>


		<view v-if="hadCard || hadAlipay" data-v-b5c38b8c="" class="bangding-tips"> 换绑银行卡和支付宝请联系我的客服 </view>
		<view data-v-b5c38b8c="" style="width: 90%; margin: 20px auto;"></view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				payList: [],
				hadCard: false,
				hadAlipay: false,
				isRealname: 0,
			}
		},
		onLoad(option) {
			const {
				isRealname
			} = option
			console.log('isRelname', isRealname)
			this.isRealname = isRealname || 0

		},
		onShow() {
			if (this.isRealname == 1) {
				this.getPayment()
			} else {
				this.getUserInfo()
			}
		},

		methods: {
			async getUserInfo() {
				uni.showLoading()
				let res = await this.$API.findUserInfo()
				const data = res || {}
				const {
					is_realname
				} = data
				if (is_realname == 1) this.getPayment()
				this.isRealname = is_realname
			},
			async getPayment() {
				uni.showLoading()
				let res = await this.$API.getPayment()
				const data = res || []
				this.payList = data
				this.hadCard = data.length > 0 ? data.filter(item => item.channel == 2).length > 0 : false
				this.hadAlipay = data.length > 0 ? data.filter(item => item.channel == 1).length > 0 : false
			},
			goPages(url) {
				if (this.isRealname != 1) {
					this.$textToast('请您完成实名认证')
					const timer = setTimeout(() => {
						this.$goPages('/pages/tab5/realname')
						clearTimeout(timer)
					}, 1000)
					return
				}
				setTimeout(() =>
					uni.navigateTo({
						url
					}), 1000)
			}
		}
	}
</script>

<style scoped>
	@import url('/static/tab5/withdrawalaccount/style/424.886b9f7f.css');
</style>