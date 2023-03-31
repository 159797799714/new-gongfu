<template>
	<view class="PolicyInfo">
		<view v-html="noticeContent"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noticeContent: ''
			}
		},
		onLoad() {
			this.getNewsList()
		},
		methods: {
			async getNewsList() { // 新闻
				let res = await this.$API.getNewsList({
					type: 4,
					page: 1,
					page_size: 5
				})
				const list = res ? res.list : []
				const firstId = list.length > 0 ? list[0]['id'] : ''

				this.getNewsInfo(firstId)
			},
			async getNewsInfo(id) {
				if (!id) return
				uni.showLoading()
				let res = await this.$API.findNewsDetails({
					id
				})
				const data = res || {}
				this.noticeContent = data.content
				return data.content
			},
		}
	}
</script>

<style scoped>
	.PolicyInfo {
		padding: 20px;
	}
</style>