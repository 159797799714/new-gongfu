<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			let {
				statusBarHeight = 20
			} = uni.getWindowInfo()
			this.$store.commit('setHeadHeight', statusBarHeight)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url('/static/chunk-vendors.57d1fa30.css');

	.t-right {
		text-align: right !important;
	}

	#app {
		font-size: 16rpx;
	}

	.head-top {
		/* padding-top: 30px; */
		padding-top: calc(var(--status-bar-height) + 10px);
	}

	.col-black {
		color: #000000;
	}

	uni-toast {
		z-index: 999999 !important;
	}

	/*每个页面公共css */
</style>