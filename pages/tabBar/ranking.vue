<template>
	<view data-v-061d752c="" class="ranking">
		<view data-v-061d752c="" class="ranking-items">
			<view data-v-061d752c="" class="van-tabs van-tabs--line">
				<view class="van-tabs__wrap sticky head-top">
					<tabbar :tablist="tabbar" :activeVal.sync="tabActiveIndex" @tabClick="tabClick" />
					<view data-v-061d752c="" class="van-cell">
						<view data-v-061d752c="" class="van-cell__title"><span data-v-061d752c="" class="s-font"><i
									data-v-061d752c="" class="van-icon van-icon-medal" style="color: rgb(230, 126, 34); font-size: 18px;">
								</i>会员名称</span></view>
						<view data-v-061d752c="" class="van-cell__value">
							<view data-v-061d752c="" class="flex-line" style="justify-content: space-between; align-items: flex-end;">
								<span data-v-061d752c="">会员名次</span><span data-v-061d752c="">{{tabActiveIndex ==1 ?'奖励金额': '已领取金额'}}<i
										data-v-061d752c="" class="van-icon van-icon-sort">

									</i></span>
							</view>
						</view>
					</view>
				</view>
				<view class="van-tabs__content">
					<view data-v-061d752c="" role="tabpanel" class="van-tab__pane  head-top" style="">
						<view data-v-061d752c="" class="ranking-item-list">
							<view data-v-061d752c="" role="feed" class="van-list">
								<view data-v-061d752c="" class="van-cell-group van-hairline--top-bottom">

									<view v-for="(item, index) in myList" :key="index" data-v-061d752c="" class="van-cell">
										<view data-v-061d752c="" class="van-cell__title">
											<view data-v-061d752c="" class="van-image van-image--round"
												style="width: 2.6rem; height: 2.6rem; display: inline-block;">
												<image :src="item.avatar" class="van-image__img">
											</view>
											<view data-v-061d752c="" class="flex-row"
												style="display: inline-block; line-height: 20px; align-items: flex-start;">
												<view data-v-061d752c="" class="s-font"> {{item.mobile}} </view>
												<view data-v-061d752c="" class="s-font">{{item.nickname}}</view>
											</view>
										</view>
										<view data-v-061d752c="" class="van-cell__value">
											<view data-v-061d752c="" class="flex-line"
												style="justify-content: space-between; align-items: center; line-height: 40px;">
												<span data-v-061d752c="" class="van-tag van-tag--danger"><span data-v-061d752c=""
														style="font-size: 16px; padding: 5px;">第{{index + 1}}名</span></span><span data-v-061d752c=""
													class="ex-people">{{tabActiveIndex ==1 ?item.draw_money: `￥${item.reward_money}`}}</span>
											</view>
										</view>
									</view>
								</view>
								<view class="van-list__placeholder"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view data-v-061d752c=""
			style="position: fixed; width: 60%; top: 30%; left: 0px; right: 0px; margin: 0px auto; border-radius: 50%; display: none;">
			<image data-v-061d752c="" src="https://www.uxwuryv.cn:886/ranking" width="200px" height="200px"
				style="border-radius: 50%;">
		</view>
	</view>
</template>

<script>
	import tabbar from '@/components/tabbar.vue'
	export default {
		components: {
			tabbar
		},
		data() {
			return {
				tabbar: [{
					label: '共富功臣'
				}, {
					label: '共富之星'
				}],
				tabActiveIndex: 0,
				inviteRankList: [],
				incomeRankList: [],
				total: 1,
				pageData: {
					page: 1,
					page_size: 10
				},
				isLoadMoreeing: false,
			}
		},
		computed: {
			myList(val) {
				return this.tabActiveIndex == 0 ? this.inviteRankList : this.incomeRankList
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
				if (this.tabActiveIndex === 1) return
				if (this.isLoadMoreeing) return
				if (this.inviteRankList.length >= this.total) return this.$textToast('亲，没有更多了')
				this.pageData.page = this.pageData.page + 1
				this.getGongfuList(true)
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
			async getGongfuList(loadMore) {
				this.isLoadMoreeing = true
				this.pageData.page = loadMore ? this.pageData.page : 1
				let res = await this.$API.getInviteRanking(this.pageData)
				this.isLoadMoreeing = false
				if (!res) return
				let {
					total,
					list
				} = res
				list = list || []
				this.inviteRankList = loadMore ? this.inviteRankList.concat(list) : list
				this.total = total
			},
			async getMyGongfuList() {
				let res = await this.$API.getIncomeRanking()
				this.incomeRankList = res || []
				this.incomeRankList = this.incomeRankList.concat(this.incomeRankList)
			},
		}
	}
</script>

<style scoped>
	@import url("/static/ranking/style/50.004499a9.css");
	@import url("/static/ranking/style/197.c3d463d8.css");
	@import url("/static/ranking/style/283.83a5cc6e.css");
	@import url("/static/ranking/style/app.2b4d12a5.css");

	.van-tabs__content {
		/* 
		margin-top: 0!important;
		padding-top: 104px; */
	}

	.van-tabs__wrap {
		position: fixed;
		top: 0;
		left: 0;
		height: auto !important;
		background: #fff;
	}
</style>