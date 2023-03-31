<template>
	<view id="app">
		<view data-v-3fa4401b="" class="Bill">
			<!-- 现金明细 -->
			<view v-if="pageData.money_type == 'cash_money,recharge_money'" data-v-dae63204="" class="bill-margin">
				<view data-v-dae63204="" class="bill-head-title">
					<view data-v-dae63204="" class="left-box">现金余额：<view data-v-dae63204="" class="shouyi-money">
							{{userInfo.cash_money}}
							<text data-v-dae63204="">￥</text>
						</view>
					</view>
					<view data-v-dae63204="" class="right-box" @click="activeAction(userInfo.cash_money, 'cash_money')">
						<view data-v-dae63204="" class="btn">提现</view>
					</view>
				</view>
				<view data-v-dae63204="" class="bill-head-title">
					<view data-v-dae63204="" class="left-box">充值余额：<view data-v-dae63204="" class="shouyi-money">
							{{userInfo.recharge_money}}
							<text data-v-dae63204="">￥</text>
						</view>
					</view>
					<view data-v-dae63204="" class="right-box" @click="activeAction(userInfo.recharge_money, 'recharge_money')">
						<view data-v-dae63204="" class="btn">转账</view>
					</view>
				</view>
			</view>

			<!-- 圆梦基金明细 -->
			<view v-else-if="pageData.money_type == 'fund_money'" data-v-dae63204="" class="bill-margin">
				<view data-v-dae63204="" class="bill-head-title">
					<view data-v-dae63204="" class="left-box">圆梦基金余额：<view data-v-dae63204="" class="shouyi-money">
							{{userInfo.fund_money}}
							<text data-v-dae63204="">￥</text>
						</view>
					</view>
					<view data-v-dae63204="" class="right-box" @click="withOut(userInfo.fund_money, 'fund_money')">
						<view data-v-dae63204="" class="btn">提现</view>
					</view>
				</view>
			</view>


			<view data-v-3fa4401b="" class="van-tabs van-tabs--line">
				<view class="van-tabs__content">
					<view data-v-3fa4401b="" role="tabpanel" class="van-tab__pane" style="">
						<view data-v-3fa4401b="" role="feed" class="van-list">
							<view v-for="(item, index) in billList" :key="index" data-v-3fa4401b=""
								class="van-cell-group van-cell-group--inset van-hairline--top-bottom" style="margin-top: 20px;">
								<view data-v-3fa4401b="" class="van-cell">
									<view data-v-3fa4401b="" class="van-cell__title">
										<view data-v-3fa4401b="" class="flex-line" style="justify-content: space-between; width: 100%;">
											<view data-v-3fa4401b="" class="flex-line" style="font-size: 18px;"><text data-v-3fa4401b=""
													:class="['shouyi', item.money < 0? 'kuisun': '']"></text><text
													data-v-3fa4401b="">{{item.memo}}</text></view>
											<text data-v-3fa4401b="" class="shouyi-money shouyi-money"
												:style="item.money < 0 ? 'color: #05f429;': ''">{{item.money >= 0? `+${item.money}`: item.money}}</text>
										</view>
										<view data-v-3fa4401b="" class="van-cell__label">
											<view data-v-3fa4401b="" class="flex-line" style="justify-content: space-between; width: 100%;">
												<text data-v-3fa4401b="" class="bill-title"> {{item.order_sn}}
												</text>
												<text data-v-3fa4401b="" class="bill-title">
													{{$DateFormat(item.createtime)}}
												</text>
											</view>
										</view>
									</view>
								</view>
							</view>
							<view v-if="total === billList.length" class="van-list__finished-text">没有更多了</view>
							<view class="van-list__placeholder"></view>
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

				billList: [],
				total: 1,
				pageData: {
					page: 1,
					page_size: 10,
					money_type: ''
				},
				userInfo: {},
				payList: [],
				hadCard: true,
				hadAlipay: false
			}
		},
		onLoad(option) {
			let {
				type
			} = option
			console.log('type', type)
			type = decodeURIComponent(type) || ''
			this.pageData.money_type = type
			this.getBillList()

			switch (type) {
				case 'cash_money,recharge_money':
					uni.setNavigationBarTitle({
						title: '现金明细'
					})
					break;
				case 'figure_money':
					uni.setNavigationBarTitle({
						title: '数字人民币明细'
					})
					break;
				case 'fund_money':
					uni.setNavigationBarTitle({
						title: '圆梦基金明细'
					})
					break;
				default:

					break;
			}
		},
		onShow() {
			this.getUserInfo()
		},
		computed: {
			allCashMoney() {
				let {
					cash_money = 0, recharge_money = 0
				} = this.userInfo
				cash_money = Number(cash_money || 0)
				recharge_money = Number(recharge_money || 0)
				return (cash_money + recharge_money).toFixed(2)
			}
		},
		onReachBottom() {
			this.getBillList(true)
		},
		methods: {
			async getUserInfo() {
				uni.showLoading()
				let res = await this.$API.findUserInfo()
				this.userInfo = res || {}
			},
			async getBillList(loadMore) {
				uni.showLoading()
				this.pageData.page = loadMore ? this.pageData.page : 1
				let res = await this.$API.getMoneyLog(this.pageData)
				if (!res) return
				let {
					total,
					list
				} = res
				list = list || []
				this.billList = loadMore ? this.billList.concat(list) : list
				this.total = total
				return
			},
			activeAction(money, type) {
				if (!(money > 0)) return this.$textToast('余额不足')
				if (type === 'cash_money') {
					this.$goPages('/pages/tab5/withdrawal')
				} else if (type === 'recharge_money') {
					this.$goPages('/pages/tab5/zhuanzhang')
				}
			},
			async withOut(money, type) {
				let that = this
				if (!(money > 0)) return this.$textToast('余额不足')
				
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
	@import url('/static/tab5/bill/style/238.c11e87dc.css');
	@import url('/static/tab5/bill/style/508.f0cf6622.css');

	/* @import url('/static/tab5/bill/style'); */
	@import url('/static/tab5/bill/style/636.90d9a496.css');
	/* @import url('/static/tab5/bill/style'); */

	.van-list__finished-text {
		text-align: center;
	}

	.kuisun::before {
		background: #05f429 !important;
	}

	.bill-margin {
		margin-top: 0 !important;
	}

	.Bill {
		height: auto !important;
	}

	.left-box {
		display: inline-block;
		width: 63%;
		font-size: 17px;
		vertical-align: middle;
	}

	.right-box {
		display: inline-block;
		width: 37%;
		text-align: right;
	}

	.shouyi-money {
		font-weight: 600;
		padding: 6px 0;
	}

	.btn {
		border: 1px solid red;
		padding: 6px 30px;
		border-radius: 6px;
		background-color: #de0d0d;
		color: #fff;
		text-align: center;
	}
</style>