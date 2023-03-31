<template>
	<view id="app">
		<view data-v-c91ff3b4="" class="home">
			<view data-v-c91ff3b4="" style="position: relative;">
				<view data-v-c91ff3b4="" class="home-top head-top">
					<view data-v-c91ff3b4="">
						<view data-v-c91ff3b4="" class="home-top-msg">
							<view data-v-c91ff3b4="" class="flex-line-between">
								<view data-v-c91ff3b4="" class="m-font">
									<image data-v-c91ff3b4="" src="/static/index/logo-home.ce492b01.png" mode="widthFix"
										class="logo" />
								</view>
								<view data-v-c91ff3b4=""></view>
								<view data-v-c91ff3b4="" class="tips-content s-font" @click="clickMenu({
									url: '/pages/tab1/notice'
								})"><i data-v-c91ff3b4="" class="van-icon van-icon-chat-o" style="color: rgb(255, 255, 255); font-size: 20px;">
										<view data-v-c91ff3b4="" class="van-info van-info--dot"></view>
									</i><text data-v-c91ff3b4="" style="padding-left: 4px;">消息</text></view>
							</view>
						</view>
						<view data-v-c91ff3b4="" role="alert" class="van-notice-bar"
							style="color: rgb(255, 255, 255); background: rgba(222, 222, 222, 0.4); width: 87%; margin: 10px auto 0px; border-radius: 5px;" @click="$goPages(`/pages/tab1/news/info?id=${noticeId}`)">
							<i class="van-icon van-icon-volume van-notice-bar__left-icon">

							</i>
							<view role="marquee" class="van-notice-bar__wrap">
								<view class="van-notice-bar__content">{{noticeContent}}</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 轮播图 -->
				<view data-v-c91ff3b4="" class="swiper-content">
					<swiper class="swiper" style="z-index: 2;" circular :indicator-dots="indicatorDots"
						indicator-active-color="#ffffff" :interval="interval" :duration="duration" :autoplay="false">
						<swiper-item v-for="(item, index) in swiperList" :key="index">
							<image v-if="showPop" :src="item.image" class="video-item" />
							<view v-else class="swiper-item" v-html="item.content">
								<!-- <video v-else style="height:405rpx;width:712rpx;overflow: hidden;" :autoplay="false"
									:show-center-play-btn="false" object-fit="fill" :enable-progress-gesture="false"
									:show-mute-btn="true" class="video-item" id="myVideo" :src="item.video" />
								</video> -->
								<!-- <view v-else class="video"></view> -->

							</view>

						</swiper-item>
					</swiper>
				</view>
			</view>
			<!-- 菜单 -->
			<view data-v-c91ff3b4="" class="grid home-items">
				<view v-for="(item, index) in menuList" :key="index" data-v-c91ff3b4="" class="home-item"
					@click="clickMenu(item)">
					<view data-v-c91ff3b4="" class="home-item-img van-image">
						<image :src="item.imgUrl" class="van-image__img">
					</view><text data-v-c91ff3b4="">{{item.label}}</text>
				</view>
			</view>
			<!-- 新闻 -->
			<view data-v-c91ff3b4="">
				<view data-v-c91ff3b4="" class="label-title"><text data-v-c91ff3b4="" class="label-title-left"><text
							data-v-c91ff3b4="" class="title-left"></text>共富时要</text>
					<view data-v-c91ff3b4="" class="label-title-right" @click="$goPages('/pages/tab1/policy')">更多<text
							data-v-c91ff3b4="" class="van-icon van-icon-arrow van-cell__right-icon"></text>
					</view>
				</view>
				<view data-v-c91ff3b4="" class="mt15 van-cell-group van-cell-group--inset van-hairline--top-bottom"
					style="text-align: left;">

					<view v-for="(item, index) in newsList" :key="index" data-v-c91ff3b4="" role="button" tabindex="0"
						class="van-cell van-cell--clickable" @click="$goPages(`/pages/tab1/news/info?id=${item.id}`)">
						<view data-v-c91ff3b4="" class="van-cell__title cell-title">
							<text data-v-c91ff3b4="">{{item.title}}</text>
						</view>
						<view data-v-c91ff3b4="" class="van-cell__value t-right">
							<text data-v-c91ff3b4="">{{item.createtime}}</text>
						</view>
						<text data-v-c91ff3b4="" class="van-icon van-icon-arrow van-cell__right-icon" />

					</view>

				</view>
			</view>

			<uni-popup ref="popup" type="center" style="z-index: 999999999;">
				<view data-v-c91ff3b4="" role="dialog" aria-labelledby="" tabindex="0" class="van-dialog"
					style="z-index: 99999999;">
					<view class="van-dialog__header">中国共富</view>
					<view class="van-dialog__content">
						<view data-v-c91ff3b4="" class="notice-content">
							<rich-text :nodes="popContent"></rich-text>
						</view>
					</view>
					<view class="van-hairline--top van-dialog__footer">
						<button type="button" @click="closePop"
							class="van-button van-button--default van-button--large van-dialog__confirm">
							<view class="van-button__content">
								<text class="van-button__text">确认</text>
							</view>
						</button>
					</view>
				</view>

			</uni-popup>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				swiperList: [],

				noticeContent: '', // 滚动文字内容
				noticeId: '',

				popContent: '',

				menuList: [{
					label: '分享',
					imgUrl: '../../static/index/share.png',
					url: '/pages/tab1/share'
				}, {
					label: '充值',
					imgUrl: '../../static/index/recharge.png',
					url: '/pages/tab1/recharge/index'
				}, {
					label: '群聊',
					imgUrl: '../../static/index/chat.png',
					url: '/pages/tab1/chat'
				}, {
					label: '客服',
					imgUrl: '../../static/index/kefu.png',
					url: '/pages/tab1/kefu'
				}, {
					label: '政策',
					imgUrl: '../../static/index/policy.png',
					url: '/pages/tab1/policy'
				}, {
					label: '签到',
					imgUrl: '../../static/index/sign.png',
					url: '/pages/tab1/sign'
				}],
				newsList: [],
				showPop: true,
				config: {}
			}
		},
		onLoad() {
			console.log('-------')
			this.getSwier()
			this.getNewsList()
			this.getConfig()
		},
		onReady() {
			this.getPopCotent()
		},
		methods: {
			// 获取公共配置
			async getConfig() {
				uni.showLoading()
				let res = await this.$API.indexCommon()
				if (!res) return
				this.config = res
			},
			async getSwier() { // 轮播图
				let res = await this.$API.getBannerList()
				const list = res || []

				list.map(item => {
					item.content =
						`<video  src="${item.video}" style=" width:100%;height: 100%" controls="true" show-center-play-btn="true" object-fit="fill" enable-progress-gesture="true" show-mute-btn="true"></video>`
				})
				this.swiperList = list
				console.log('this.swiperList', this.swiperList)
			},
			async getNewsList() { // 新闻
				let res = await this.$API.getNewsList({
					type: 1,
					page: 1,
					page_size: 5
				})
				const list = res ? res.list : []
				this.newsList = list
				const firstId = list.length > 0 ? list[0]['id'] : ''

				this.getNewsInfo(firstId)
			},
			// 弹窗内容
			async getPopCotent() {
				let res = await this.$API.getNewsList({
					type: 3
				})
				const list = res ? res.list : []
				const firstId = list.length > 0 ? list[0]['id'] : ''

				this.popContent = await this.getNewsInfo(firstId)

				if (this.popContent) {
					this.showPop = true
					this.$refs.popup.open()
				}
			},
			async getNewsInfo(id) {
				if (!id) return
				uni.showLoading()
				let res = await this.$API.findNewsDetails({
					id
				})
				const data = res || {}
				this.noticeId = id
				this.noticeContent = data.content
				return data.content
			},
			clickMenu(item) {
				console.log('点击了菜单', item, this.config)
				if (item.label === '客服') item.url = `${item.url}?url=${this.config.custom_service}`
				uni.navigateTo({
					url: item.url,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			closePop() {
				this.showPop = false
				this.$refs.popup.close()
			}
		}
	}
</script>

<style>
	@import url("/static/index/style/688.41c4ba3c.css");
	@import url("/static/index/style/app.2b4d12a5.css");

	.logo {
		width: 85%;
	}

	.t-right {
		text-align: right;
	}

	.swiper-content {
		position: absolute;
		bottom: 20px;
		left: 0;
		right: 0;
		width: 95%;
		margin: 0 auto;
		height: 54vw;
		border-radius: 10px;
		z-index: 2;
		overflow: hidden;
	}

	.swiper {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.swiper-item {
		display: block;
		height: 100%;
		width: 95vw;
		overflow: hidden;
		line-height: 100%;
		text-align: center;
	}

	.video-item,
	.image-item {
		position: relative;
		z-index: 1;
		height: 54vw;
		width: 100%;
	}

	.van-notice-bar__content {
		animation-name: slipe; // 动画名称
		animation-direction: normal; // 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
		animation-timing-function: linear; // 动画执行方式，linear：匀速；ease：先慢再快后慢；ease-in：由慢速开始；ease-out：由慢速结束；ease-in-out：由慢速开始和结束；
		animation-delay: 0s; // 动画延迟时间
		animation-iteration-count: infinite; //  动画播放次数，infinite：一直播放
		animation-duration: 40s; // 动画完成时间
	}

	@keyframes slipe {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(-100%);
		}
	}

	.van-dialog {
		z-index: 999999;
	}

	.van-dialog__header {
		padding: 26px 0;
		font-size: 18px;
		font-weight: 500;
		line-height: 24px;
		text-align: center;
		background-color: #ffffff;
	}

	.ql-size-large {}

	.notice-content {
		overflow: hidden;
		overflow-y: auto;
	}

	.ql-align-justify {
		margin: 1rem 0;
	}
</style>