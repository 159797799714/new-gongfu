<template>

	<view data-v-62f27cb3="" class="PolicyInfo">
		<rich-text :nodes="newsDetail.content"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '', 
				newsDetail: {}
			}
		},
		onLoad(option) {
			let { id } = option
			if (!id) return this.$textToast('暂无数据', 'none')
			
			this.getNewsInfo(id)
		},
		methods: {
			async getNewsInfo(id) {
				uni.showLoading()
				let res = await this.$API.readMsg({ id })
				const data = res || {}
				this.newsDetail = data
				if (res && !res.content) return this.$textToast('暂无详情数据', 'none')
				
			}
		}
	}
</script>

<style>
	.PolicyInfo {
		padding: 1rem;
	}

	p {
		padding: 1rem 0;
	}

	img {
		width: 100%;
	}
</style>
