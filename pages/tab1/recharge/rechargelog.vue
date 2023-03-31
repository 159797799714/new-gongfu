<template>
	<view id="app">
		<view data-v-0d5a01d2="" class="Withdrawal">

			<view data-v-0d5a01d2="" class=" van-tabs--line">
				<view class="van-tabs__content">
					<view data-v-0d5a01d2="" role="tabpanel" class="van-tab__pane" style="">
						<view data-v-0d5a01d2="">
							<view data-v-0d5a01d2="" role="feed" class="van-list">
								<view data-v-0d5a01d2=""
									class="van-cell-group van-cell-group--inset van-hairline--top-bottom">
									<view v-for="(item, index) in logList" :key="index" data-v-0d5a01d2=""
										class="van-cell">
										<view data-v-0d5a01d2="" class="van-cell__title">
											<view data-v-0d5a01d2="" class="flex-line"
												style="justify-content: space-between; width: 100%;">
												<view data-v-0d5a01d2="" class="flex-line" style="font-size: 16px;">
													<text data-v-0d5a01d2="">充值金额：</text><text
														data-v-0d5a01d2="">{{item.money}}¥</text>
												</view><text data-v-0d5a01d2="" class="shouyi-money"><text
														style="color: #3CA6EE;font-weight: 600">{{statusObj(item.status)}}</text></text>
											</view>
											<!---->
											<view data-v-0d5a01d2="" class="van-cell__label">
												<view data-v-0d5a01d2="" class="flex-line"
													style="justify-content: space-between; width: 100%;"><text
														data-v-0d5a01d2="" class="bill-title">
														{{item.order_sn || '--'}} </text><text data-v-0d5a01d2=""
														class="bill-title"> {{item.createtime}} </text></view>
											</view>
										</view>
									</view>
								</view>
								<!-- <view class="van-list__finished-text">没有更多了</view> -->
								<view class="van-list__placeholder"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!---->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logList: [],
				statusObj: status => {
					const obj = {
						0: '待付款',
						1: '成功',
						2: '失败'
					}
					return obj[status] || ''
				}
			}
		},
		onLoad() {
			this.getRechargeRecord()
		},
		methods: {
			async getRechargeRecord() {
				uni.showLoading()
				let res = await this.$API.getRechargeRecord()
				this.logList = res || []
			},
		}
	}
</script>

<style scoped>
	@import url("/static/tab1/recharge/rechargelog/style/29.7e543061.css");
	@import url("/static/tab1/recharge/rechargelog/style/251.b4f461d6.css");
	@import url("/static/tab1/recharge/rechargelog/style/988.45f0cae4.css");
	@import url("/static/tab1/recharge/rechargelog/style/app.2b4d12a5.css");

	.van-list__finished-text {
		text-align: center;
	}
</style>
