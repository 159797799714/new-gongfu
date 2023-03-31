<template>
	<view id="app">
		<view data-v-27860fe4="" class="Project">
			<view data-v-27860fe4="" style="position: relative;">
				<view data-v-27860fe4="" class="van-tabs van-tabs--line head-top">
					<view>
						<view class="van-sticky head-top">
							<tabbar :tablist="tabbar" :activeVal.sync="tabActiveIndex" @tabClick="tabClick" />
						</view>
					</view>
					<view v-if="myGongfuList.length || gongfuList.length" class="van-tabs__content">

						<!-- 共富工程 -->
						<view v-show="tabActiveIndex === 0" data-v-27860fe4="" role="tabpanel" class="van-tab__pane">
							<view data-v-27860fe4="">
								<view v-for="(item, index) in gongfuList" :key="index" data-v-27860fe4="" class="project-item">
									<view data-v-27860fe4="" class="flex-line project-item-title">
										<view data-v-27860fe4="">{{item.name}}</view>
										<view data-v-27860fe4=""><button data-v-27860fe4="" @click="getNow(item.progress < 100, item)"
												class="van-button van-button--primary van-button--small"
												style="color: white; background: linear-gradient(to right, rgb(255, 96, 52), rgb(238, 10, 36)); border: 0px;">
												<view data-v-27860fe4="" class="van-button__content"><text data-v-27860fe4=""
														class="van-button__text">
														{{item.progress < 100 ? '立即领取': '名额已满'}} </text>
												</view>
											</button></view>
									</view>
									<view data-v-27860fe4="" class="project-item-info">
										<view data-v-27860fe4="" class="project-item-cotent">
											<view data-v-27860fe4="" class="flex-row project-item-top"><text data-v-27860fe4=""
													class="money-title"></text>
												<view data-v-27860fe4="" class="project-item-money mt10">
													<view data-v-27860fe4="" class="van-badge__wrapper">
														<text data-v-27860fe4="" style="font-size: 30px;">¥</text>
														<text data-v-27860fe4="" style="font-size: 40px;">{{item.buy_money}}</text>

													</view>
												</view>
											</view>
										</view>
										<view data-v-27860fe4="" class="flex-line"
											style="width: 100%; margin-top: -12px; border: 1px solid transparent;">
											<view v-for="(obj, num) in item.income" :key="num" data-v-27860fe4="" class="flex-row"
												style="width: 33.33%;">
												<view data-v-27860fe4="" class="qipao">
													<view data-v-27860fe4="" class="step-money"><text data-v-27860fe4="">¥</text>{{obj.money}}
													</view>
													<text data-v-27860fe4="" class="step-money-label">
														{{obj.money_type}}
													</text>
												</view>
												<view data-v-27860fe4="" class="flex-line mt10" @click="getNow(obj.day ==0, item, obj)">
													<view data-v-27860fe4="" class="step-money-title">
														<text data-v-27860fe4="" color="linear-gradient(to right, #ff6034, #ee0a24)" size="small">
															{{obj.day ==0 ? '立即领取': `${obj.day}天后领取`}}
														</text>
													</view>
												</view>
											</view>
										</view>
										<view data-v-27860fe4="" class="van-progress" style="height: 8px; width: 90%; margin: 0px auto;">
											<view class="van-progress__portion"
												:style="`background: rgb(241, 196, 15);width: ${item.progress}%;`">
												<text class="van-progress__pivot"
													:style="`left: 90%; background: rgb(241, 196, 15); text-align: center;line-height: 20px;`">{{item.progress}}%</text>
											</view>
										</view>
									</view>
								</view>

							</view>
						</view>

						<!-- 我的共富 -->
						<view v-show="tabActiveIndex === 1" data-v-7726bd06="" role="tabpanel" class="van-tab__pane" style="">
							<view v-for="(item, index) in myGongfuList" :key="index" data-v-7726bd06="" class="project-item-2">
								<view data-v-7726bd06="" class="flex-line project-item-title" style="margin-bottom: 8px;">
									<view data-v-7726bd06="">{{item.name}}</view>
									<view data-v-7726bd06=""> {{$DateFormat(item.createtime)}} </view>
								</view>
								<view data-v-7726bd06="" class="project-item-info" style="height: 200px;">
									<view data-v-7726bd06="" class="project-item-cotent">
										<view data-v-7726bd06="" class="flex-row project-item-top">
											<text data-v-7726bd06="" class="money-title"></text>
											<view data-v-7726bd06="" class="project-item-money" style="vertical-align: middle;">
												<text data-v-7726bd06="" style="font-size: 20px; vertical-align: middle;">总领取：</text>
												<text data-v-7726bd06=""
													style="font-size: 36px; vertical-align: middle; display: inline-block; text-align: left;">
													{{item.total_money}} </text>
											</view>
										</view>
									</view>
									<view data-v-7726bd06="" class="flex-line"
										style="width: 100%; margin: 0px auto; border: 1px solid transparent;">
										<view v-for="(obj, num) in item.income" data-v-7726bd06="" class="flex-row" style="width: 33.33%;">
											<view data-v-7726bd06="" class="qipao"><span data-v-7726bd06="" class="step-money"><span
														data-v-7726bd06=""> ¥{{obj.money}}
													</span></span><span data-v-7726bd06="" class="step-money-label">
													{{obj.money_type}} </span></view>
											<view data-v-7726bd06="" class="flex-line mt10"
												@click="showExpireTime(obj.status, obj.day, item.id)">
												<span data-v-7726bd06="" class="left-bor"></span>
												<view data-v-7726bd06="" class="step-money-title" style="background-color: rgb(232, 57, 10);">
													<span data-v-7726bd06="">{{obj.status == 0? '点击领取': '已领取'}}</span>


												</view>
												<span data-v-7726bd06="" class="bor"></span>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>

					</view>
					<view v-else class="blank-title">暂无数据</view>
				</view>

			</view>

			<view data-v-29e1e5e2="" data-v-27860fe4="" class="van-overlay" :style="loading? '': 'display: none;'">
				<view data-v-29e1e5e2=""
					style="display: flex; align-items: center; justify-content: center; height: 100%; background-color: white;">
					<view data-v-29e1e5e2="" class="van-loading van-loading--circular van-loading--vertical">
						<view data-v-29e1e5e2="" class="van-loading__spinner van-loading__spinner--circular"
							style="color: rgb(0, 148, 255); width: 8rem; height: 8rem;"><svg data-v-29e1e5e2="" viewBox="25 25 50 50"
								class="van-loading__circular">
								<circle data-v-29e1e5e2="" cx="50" cy="50" r="20" fill="none"></circle>
							</svg>
						</view>
						<text data-v-29e1e5e2="" class="van-loading__text" style="color: rgb(0, 148, 255);">数据加载中</text>
					</view>
				</view>
			</view>

			<!-- 键盘 -->
			<keyInput :visable.sync="visable" :payPassword.sync="payPassword" @submit="buyProject"></keyInput>

		</view>

	</view>
</template>

<script>
	import tabbar from '@/components/tabbar.vue'
	import keyInput from '@/components/keyInput.vue'
	export default {
		components: {
			tabbar,
			keyInput
		},
		data() {
			return {
				loading: false,
				visable: false,
				payPassword: '', // 支付密码

				tabbar: [{
					label: '共富工程'
				}, {
					label: '我的共富'
				}],
				tabActiveIndex: 0,
				gongfuList: [],
				myGongfuList: [],
				total: 1,
				pageData: {
					page: 1,
					page_size: 10
				},
				isLoadMoreeing: false,

				activeItem: {},
				activeItemLi: {}
			}
		},
		onLoad() {
			this.initPage()
		},
		onReachBottom() {
			this.loadMore()
		},
		onPullDownRefresh() {
			this.initPage()
		},
		methods: {
			loadMore() {
				if (this.tabActiveIndex === 0) return
				if (this.isLoadMoreeing) return
				if (this.myGongfuList.length >= this.total) return this.$textToast('亲，没有更多了')
				this.pageData.page = this.pageData.page + 1
				this.getMyGongfuList(true)
			},
			getNow(status, item = {}, itemLi = {}) {
				console.log('status', status)
				this.visable = status
				if (!status) return
				this.activeItem = item
				this.activeItemLi = itemLi
			},
			tabClick(activeIndex) {
				console.log('父组件收到', activeIndex)
				this.initPage()
			},
			initPage() {
				uni.showLoading()
				if (this.tabActiveIndex === 0) return this.getGongfuList()
				this.getMyGongfuList()
			},
			async getGongfuList() {
				let res = await this.$API.getProjectList()
				this.gongfuList = res || []
			},
			async getMyGongfuList(loadMore) {
				this.isLoadMoreeing = true
				this.pageData.page = loadMore ? this.pageData.page : 1
				let res = await this.$API.getProjectOrderList(this.pageData)
				this.isLoadMoreeing = false
				if (!res) return
				let {
					total,
					list
				} = res
				list = list || []
				this.myGongfuList = loadMore ? this.myGongfuList.concat(list) : list
				this.total = total
			},
			// 购买项目
			async buyProject() {
				const that = this
				uni.showLoading()
				let res = await this.$API.buyProject({
					id: this.activeItem.id,
					pay_password: this.payPassword
				})

				if (!res) return
				this.visable = false
				this.$textToast('领取成功', 'success')
				setTimeout(function() {
					that.payPassword = ''
					that.initPage()
				}, 1000);

			},
			// 我的项目点领取
			async showExpireTime(status, day, id) {
				const that = this

				if (status == 1) return

				uni.showLoading()
				let res = await this.$API.drawProjectIncome({
					id: id,
					day: day
				})

				if (!res) return
				this.visable = false
				this.$textToast('领取成功', 'success')
				setTimeout(function() {
					that.initPage()
				}, 1000);

			},
		}
	}
</script>

<style scoped>
	@import url("/static/gongfu/style/84.257e98cc.css");
	@import url("/static/gongfu/style/500.b760da6b.css");
	@import url("/static/gongfu/style/688.41c4ba3c.css");
	@import url("/static/gongfu/style/761.54540821.css");

	.van-tabs__content {
		padding-top: 50px;
	}

	.van-sticky {
		z-index: 100;
		display: block;
		width: 100%;
		height: 55px;
		position: fixed;
		top: 0;
		left: 0;
		background: #ffffff;
	}
</style>