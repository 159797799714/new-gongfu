<template>
	<view id="app">
		<view class="Operation">
			<view class="peration-item van-cell-group van-cell-group--inset van-hairline--top-bottom">
				<view v-for="(item, index) in policyList" :key="index" role="button" tabindex="0"
					class="van-cell van-cell--clickable" @click="$goPages(`/pages/tab1/news/info?id=${item.id}`)">
					<text class="van-icon van-icon-fire" style="line-height: 45px; color: red; font-size: 2em;"></text>
					<view class="van-cell__title">
						<span class="custom-title">{{item.title}}</span>
					</view>
					<i class="van-icon van-icon-arrow" style="line-height: 40px; font-size: 20px;">

					</i>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				policyList: [],
				total: 1,
				pageData: {
					type: 2,
					page: 1,
					page_size: 10
				},
				isLoadMoreeing: false,
			}
		},
		onLoad() {
			this.getNewsList()
		},
		onReachBottom() {
			this.loadMore()
		},
		methods: {
			loadMore() {
				if (this.tabActiveIndex === 0) return
				if (this.isLoadMoreeing) return
				if (this.policyList.length >= this.total) return this.$textToast('亲，没有更多了')
				this.pageData.page = this.pageData.page + 1
				this.getNewsList(true)
			},

			async getNewsList() { // 新闻
				let res = await this.$API.getNewsList(this.pageData)
				const list = res ? res.list : []
				this.policyList = list
			},
		}
	}
</script>

<style scoped>
	@import url("/static/tab1/policy/style/29.7e543061.css");
	@import url("/static/tab1/policy/style/50.004499a9.css");
	@import url("/static/tab1/policy/style/84.257e98cc.css");
	@import url("/static/tab1/policy/style/197.c3d463d8.css");
	@import url("/static/tab1/policy/style/251.b4f461d6.css");
	@import url("/static/tab1/policy/style/312.396fad04.css");
	@import url("/static/tab1/policy/style//283.83a5cc6e.css");
	@import url("/static/tab1/policy/style/351.f071f8d9.css");
	@import url("/static/tab1/policy/style/497.2065aba0.css");
	@import url("/static/tab1/policy/style/500.b760da6b.css");
	@import url("/static/tab1/policy/style/app.2b4d12a5.css");
</style>
