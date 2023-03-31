<template>
	<view id="app">
		<view data-v-18202c11="" class="Team  head-top">
			<view data-v-18202c11="" class="mt15">
				<view data-v-18202c11="" class="team-slogan">
					<view data-v-18202c11="" class="team-slogan-text">
						<view data-v-18202c11="" style="width: 80%; margin: 0px auto;"><span data-v-18202c11=""
								class="team-slogan-yinhao">“</span> 共同富裕等不来，也喊不出来必须自己拼出来，干出来的... </view>
						<view data-v-18202c11="" style="width: 80%; margin: 0px auto; text-align: right;"> ——国家发改委
							<span data-v-18202c11="" class="team-slogan-yinhao">”</span>
						</view>
					</view>
					<span data-v-18202c11="" class="tuiguang" @click="goShare"><i data-v-18202c11=""
							class="van-icon van-icon-share">

						</i>去推广</span>
				</view>
			</view>
			<view data-v-18202c11="">
				<view data-v-18202c11="" class="total-data">
					<view data-v-18202c11="" class="label-title" style="margin-top: 10px;"><span data-v-18202c11=""
							class="title-left"></span>总数据 </view>
					<view data-v-18202c11="" class="total-items mt10">
						<view data-v-18202c11="" class="total-item">
							<view data-v-18202c11="" class="money-content">{{teamInfo.all_total_people}}人</view>
							<view data-v-18202c11="" class="team-level">总人数</view>
						</view>
						<view data-v-18202c11="" class="total-item">
							<view data-v-18202c11="" class="money-content">¥{{teamInfo.all_total_money}}</view>
							<view data-v-18202c11="" class="team-level">总领取</view>
						</view>
					</view>
				</view>
				<view data-v-18202c11=""></view>
			</view>
			<view data-v-18202c11="" class="mt15" style="margin-bottom: 15px;">
				<view data-v-18202c11="" class="label-title" style="margin-top: 10px;"><span data-v-18202c11=""
						class="title-left"></span>数据详情 </view>
				<view data-v-18202c11="" class="team-items mt10">
					<view data-v-18202c11="" class="van-tabs van-tabs--line">
						<view class="van-tabs__wrap">
							<tabbar :tablist="tabbar" height="44px" :activeVal.sync="tabActiveIndex"
								@tabClick="tabClick" />
						</view>
						<view class="van-tabs__content">
							<view data-v-18202c11="" role="tabpanel" class="van-tab__pane" style="">
								<view data-v-18202c11="" class="team-item-list">
									<view data-v-18202c11="" role="feed" class="van-list">
										<view data-v-18202c11="" class="van-cell-group van-hairline--top-bottom">
											<view data-v-18202c11="" class="van-cell">
												<view data-v-18202c11="" class="van-cell__title"><span
														data-v-18202c11="">总人数:{{pageInfo.level_total_people}}</span></view>
												<view data-v-18202c11="" class="van-cell__value t-right"><span
														data-v-18202c11="">已实名人数:{{pageInfo.level_total_realname}}</span>
														</view>
											</view>
											<view data-v-18202c11="">
												<div v-for="(item, index) in pageInfo.list" :key="index" data-v-18202c11="" class="van-cell">
													<div data-v-18202c11="" class="van-image van-image--round"
														style="width: 3rem; height: 3rem;">
														<image :src="item.avatar" class="van-image__img"/>
													</div>
													<div data-v-18202c11="" class="van-cell__title">
														<div data-v-18202c11="" class="team-item-user"><span
																data-v-18202c11=""> {{item.mobile}} </span><span
																data-v-18202c11="" class="s-font"><i
																	data-v-18202c11=""
																	class="van-icon van-icon-medal"
																	style="color: rgb(230, 126, 34); font-size: 18px;">
																	
																</i>{{item.nickname}}</span></div>
													</div>
													<div data-v-18202c11="" class="van-cell__value">
														<div data-v-18202c11="" class="flex-row"
															style="align-items: end;"><span data-v-18202c11=""
																class="team-level">共富零级</span></div>
													</div>
												</div>
											</view>
										</view>
										<view class="van-list__finished-text">没有更多了</view>
										<view class="van-list__placeholder"></view>
									</view>
								</view>
							</view>
							<view data-v-18202c11="" role="tabpanel" class="van-tab__pane" style="display: none;">

							</view>
							<view data-v-18202c11="" role="tabpanel" class="van-tab__pane" style="display: none;">

							</view>
						</view>
					</view>
				</view>
			</view>
			<view data-v-18202c11=""
				style="position: fixed; width: 60%; top: 30%; left: 0px; right: 0px; margin: 0px auto; border-radius: 50%; display: none;">
				<image data-v-18202c11="" src="https://www.uxwuryv.cn:886/team" width="100%"
					style="border-radius: 50%;">
			</view>
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
					label: '一级'
				}, {
					label: '二级'
				}, {
					label: '三级'
				}],
				tabActiveIndex: 0,
				teamInfo: {}
			}
		},
		computed: {
			pageInfo() {
				return this.teamInfo[this.tabActiveIndex + 1] || {
					level_total_people: 0,
					level_total_realname: 0,
					list: []
				}
			}
		},
		onLoad() {
			this.getTeamList()
		},
		methods: {
			tabClick(activeIndex) {
				console.log('父组件收到', activeIndex)
				this.getTeamList()
			},
			goShare() {
				uni.navigateTo({
					url: '/pages/tab1/share'
				})
			},
			async getTeamList() {
				uni.showLoading()
				let res = await this.$API.getTeam()
				this.teamInfo = res || {}
			}
		}
	}
</script>

<style scoped>
	/* @import url("/static/team/style/29.7e543061.css");
	@import url("/static/team/style/50.004499a9.css");
	@import url("/static/team/style/84.257e98cc.css"); */

	/* @import url("/static/team/style/147.520bb24f.css");
	@import url("/static/team/style/283.83a5cc6e.css"); */
	/* @import url("/static/team/style/351.f071f8d9.css"); */
	@import url("/static/team/style/482.181a18d0.css");
	/* @import url("/static/team/style/497.2065aba0.css"); */
	/* @import url("/static/team/style/500.b760da6b.css"); */
	@import url("/static/team/style/534.15cc5e65.css");
	/* @import url("/static/team/style/688.41c4ba3c.css"); */
	/* @import url("/static/team/style/791.20153ef8.css"); */
	/*@import url("/static/team/style/app.2b4d12a5.css"); */

	.van-list__finished-text {
		text-align: center;
	}

	.team-slogan-text {
		font-size: 16px;
	}
</style>
