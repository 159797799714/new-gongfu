<template>
	<view id="app">
		<view data-v-c3054e98="">
			<view data-v-c3054e98="" class="van-cell-group van-hairline--top-bottom"
				@click="$goPages(`/pages/tab1/news/info?id=${systomMsg.news_id}`)">
				<view data-v-c3054e98="" role="button" tabindex="0" class="van-cell van-cell--clickable">
					<view data-v-c3054e98="" class="van-image" style="width: 2rem; height: 2rem; margin-right: 10px;">
						<image
							src="data:image/png;base64,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"
							class="van-image__img" />
					</view>
					<view data-v-c3054e98="" class="van-cell__title cell-title"><span data-v-c3054e98="">系统消息</span>
						<view data-v-c3054e98="" class="van-cell__label">{{systomMsg.content}}</view>
					</view>
					<view data-v-c3054e98="" class="van-cell__value t-right"><span
							data-v-c3054e98="">{{$DateFormat(systomMsg.createtime)}}</span>
					</view><i data-v-c3054e98="" class="van-icon van-icon-arrow van-cell__right-icon">

					</i>
				</view>
			</view>
			<view data-v-c3054e98="" role="feed" class="van-list">
				<view data-v-c3054e98="" class="van-cell-group van-hairline--top-bottom">
					<view v-for="(item, index) in msgList" :key="index" data-v-c3054e98="" class="van-cell">
						<view data-v-c3054e98="" class="van-image" style="width: 2rem; height: 2rem; margin-right: 10px;">
							<image
								src="data:image/png;base64,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"
								class="van-image__img" />
						</view>
						<view data-v-c3054e98="" class="van-cell__title">
							<view data-v-c3054e98="" class="flex-line" style="justify-content: space-between; width: 100%;">
								<view data-v-c3054e98="" class="flex-line" style="font-size: 18px;">
									<span data-v-c3054e98="" class="shouyi"></span>
									<span data-v-c3054e98="" class="one-line">{{item.content}}</span>
								</view>
								<span data-v-c3054e98="" class="shouyi-money shouyi-money"
									:style="item.money < 0 ? 'color: #05f429;': ''">
									{{item.money >= 0? `+${item.money}`: item.money}} </span>
							</view>
							<view data-v-c3054e98="" class="van-cell__label">
								<view data-v-c3054e98="" class="flex-line" style="justify-content: space-between; width: 100%;">
									<span data-v-c3054e98="" class="bill-title"> {{$DateFormat(item.createtime)}} </span>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="van-list__finished-text">没有更多了</view>
				<view class="van-list__placeholder"></view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				msgList: [],
				systomMsg: {
					content: '中国共富app操作手册',
					createtime: Date.now()
				},
				total: 1,
				pageData: {
					page: 1,
					page_size: 10
				},
				isLoadMoreeing: false,
			}
		},
		onLoad() {
			this.getMsgList()
		},
		onReachBottom() {
			this.loadMore()
		},
		methods: {
			loadMore() {
				if (this.isLoadMoreeing) return
				if (this.msgList.length >= this.total) return this.$textToast('亲，没有更多了', 'none')
				this.pageData.page = this.pageData.page + 1
				this.getMsgList(true)
			},
			async getMsgList(loadMore) {
				this.isLoadMoreeing = true
				this.pageData.page = loadMore ? this.pageData.page : 1
				let res = await this.$API.getMsgList(this.pageData)
				this.isLoadMoreeing = false
				if (!res) return
				let list = res || []

				this.msgList = loadMore ? this.msgList.concat(list) : list.slice(1)
				if (!loadMore && list.length) this.systomMsg = list[0]

				let total = this.msgList.length
				// 返回的列表是空或者少于每页数量则达到最多数量
				if (list.length === this.pageData.page_size) {
					total += 1
				}
				this.total = total
			},
		}
	}
</script>

<style>
	@import url('/static/tab1/notice/style/147.520bb24f.css');
	/* @import url('/static/tab1/notice/style/197.c3d463d8.css'); */
	@import url('/static/tab1/notice/style/283.83a5cc6e.css');
	@import url('/static/tab1/notice/style/312.396fad04.css');
	@import url('/static/tab1/notice/style/351.f071f8d9.css');
	@import url('/static/tab1/notice/style/482.181a18d0.css');
	@import url('/static/tab1/notice/style/500.b760da6b.css');
	@import url('/static/tab1/notice/style/534.15cc5e65.css');
	/* @import url('/static/tab1/notice/style/688.41c4ba3c.css'); */
	@import url('/static/tab1/notice/style/791.20153ef8.css');
	/* @import url('/static/tab1/notice/style/app.2b4d12a5.css'); */

	.van-list__finished-text {
		text-align: center
	}

	.van-image {
		flex-shrink: 0;
	}

	.flex-line {
		width: 100%;
		overflow: hidden;
	}

	.one-line {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.van-cell__title {
		flex: 1;
		overflow: hidden;
	}
</style>