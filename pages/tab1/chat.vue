<template>
	<view id="app">
		<view data-v-45aa388e="" class="my">

			<view data-v-45aa388e="" class="flex-row my-top">
				<view data-v-45aa388e="" style="width: 100%; text-align: center; letter-spacing: 4px;"><span
						data-v-45aa388e="" class="m-font" style="font-size: 20px;">中国共富官方群聊</span></view>
			</view>
			<view data-v-45aa388e="" class="mt15"
				style="position: absolute; width: 100%; top: 92px; padding-bottom: 20px;">
				<view data-v-45aa388e="" class="van-cell-group van-cell-group--inset van-hairline--top-bottom"
					style="padding-top: 50px;">
					<view data-v-45aa388e="" class="van-cell van-cell--large">
						<view data-v-45aa388e="" class="van-cell__value van-cell__value--alone">
							<view data-v-45aa388e="" class="van-image van-image--round"
								style="width: 80%; height: auto; padding: 1px !important; background-color: rgb(255, 255, 255); text-align: center;">
								<image class="van-image__img" mode="widthFix" :src="config.group_chat_qrcode[0]" />
							</view>
						</view>
					</view>
					<view data-v-45aa388e="" class="van-cell van-cell--large">
						<view data-v-45aa388e="" class="van-cell__value van-cell__value--alone"><span
								data-v-45aa388e="">中国共富QQ官方群扫码进入</span></view>
					</view>
					<view data-v-45aa388e="" class="van-cell van-cell--large" style="margin-top: 0px;">
						<view data-v-45aa388e="" class="van-cell__value van-cell__value--alone">
							<view data-v-45aa388e="" class="van-image van-image--round"
								style="width: 80%; height: auto; padding: 1px !important; background-color: rgb(255, 255, 255); text-align: center;">
								<image class="van-image__img" mode="widthFix" :src="config.group_chat_qrcode[1]" />
							</view>
						</view>
					</view>
					<view data-v-45aa388e="" class="van-cell van-cell--large">
						<view data-v-45aa388e="" class="van-cell__value van-cell__value--alone"><span
								data-v-45aa388e="">中国共富QQ频道扫码进入</span></view>
					</view>
					<view data-v-45aa388e="" class="van-cell van-cell--large" style="padding-bottom: 50px;"></view>
				</view>
			</view>
			<view data-v-29e1e5e2="" data-v-45aa388e="" class="van-overlay" style="display: none;">
				<view data-v-29e1e5e2=""
					style="display: flex; align-items: center; justify-content: center; height: 100%; background-color: white;">
					<view data-v-29e1e5e2="" class="van-loading van-loading--circular van-loading--vertical"><span
							data-v-29e1e5e2="" class="van-loading__spinner van-loading__spinner--circular"
							style="color: rgb(0, 148, 255); width: 8rem; height: 8rem;"><svg data-v-29e1e5e2=""
								viewBox="25 25 50 50" class="van-loading__circular">
								<circle data-v-29e1e5e2="" cx="50" cy="50" r="20" fill="none"></circle>
							</svg></span><span data-v-29e1e5e2="" class="van-loading__text"
							style="color: rgb(0, 148, 255);">数据加载中</span></view>
				</view>
			</view>
		</view>
		<!---->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				config: {}
			}
		},
		onLoad() {
			this.getConfig()
		},
		methods: {
			async getConfig() {
				uni.showLoading()
				let res = await this.$API.indexCommon()
				if (!res) return
				this.config = res
			}
		}
	}
</script>

<style scoped>
	@import url('/static/tab1/chat/style/84.257e98cc.css');
	@import url('/static/tab1/chat/style/app.2b4d12a5.css');
</style>