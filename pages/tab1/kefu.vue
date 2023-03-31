<template>
	<view id="app">
		<view data-v-9d20c2a2="" class="iframe-kefu">
			<web-view data-v-9d20c2a2="" id="mainIframe" :src="url" frameborder="0" class="mainIframe">
			</web-view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			}
		},
		onLoad(option) {
			let {
				url
			} = option
			if (!url) return this.$textToast('链接无效')
			console.log('url', url)
			this.url = url
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>