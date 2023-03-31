<template>
	<view class="web">
		<web-view :src="url" webview-styles="width: 100%;height: 100%;"></web-view>
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
			if (!url) return this.$textToast('链接失效')
			console.log('url', url)
			this.url = url
		},
		methods: {

		}
	}
</script>

<style>
	.web {
		height: 100%;
		width: 100%;
	}
</style>
