<template>
	<view id="app">
		<view data-v-00a56f5f="" class="extension">
			<view data-v-00a56f5f="" class="extension-item"><text data-v-00a56f5f="" class="title"> 邀请您注册共富 </text>
				<view data-v-00a56f5f="" class="card">
					<view data-v-00a56f5f="" class="van-image"
						style="width: 160px; height: 160px; overflow: hidden; border-radius: 10px; z-index: 999;">
						<view class="qrimg">
							<tki-qrcode ref="qrcode" :val="codeContent" :size="160" unit="px" background="#ffffff"
								foreground="#000000" :onval="true" :loadMake="false" :showLoading="true"
								loadingText="正在加载"></tki-qrcode>
						</view>
					</view>
				</view>
				<view data-v-00a56f5f="" class="yaoqing">
					<view data-v-00a56f5f="">您的邀请码</view>
					<view data-v-00a56f5f="" style="margin-top: 32px;"><text data-v-00a56f5f=""
							class="yaoqing-code">{{userInfo.invite_code}}</text><button data-v-00a56f5f=""
							class="yaoqing-code-2 van-button van-button--primary van-button--small"
							@click="copy(userInfo.invite_code)">
							<view data-v-00a56f5f="" class="van-button__content"><text data-v-00a56f5f=""
									class="van-button__text">复制邀请码</text></view>
						</button></view>
				</view>
			</view>
			<view v-if="userInfo.level_id < 2" data-v-00a56f5f="" class="extension-item-2">
				<view data-v-00a56f5f="" class="van-cell" style="height: 80px; display: inline-block; text-align: center;">
					<view data-v-00a56f5f="" class="van-cell__title">
						<view data-v-00a56f5f=""
							style="height: 30px; line-height: 30px; font-size: 16px; font-weight: 600; text-align: center; color: rgb(200, 50, 66);">
							<text data-v-00a56f5f="">共富一级及以上才能进行邀请</text>
						</view>
					</view>
				</view>
			</view>

			<view v-else data-v-00a56f5f="" class="extension-item-2">
				<view data-v-00a56f5f="" class="van-cell" style="height: 80px; display: inline-block;">
					<view data-v-00a56f5f="" class="van-cell__title">
						<view data-v-00a56f5f=""
							style="height: 30px; line-height: 30px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
							<text data-v-00a56f5f="">邀请链接 :{{userInfo.invite_domain}}/register?code=2634999</text>
						</view>
					</view>
					<button data-v-00a56f5f="" class="van-button van-button--primary van-button--small"
						@click="copy(userInfo.invite_domain)">
						<view data-v-00a56f5f="" class="van-button__content"><text data-v-00a56f5f=""
								class="van-button__text">复制链接</text></view>
					</button>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	export default {
		components: {
			tkiQrcode
		},
		data() {
			return {
				codeContent: '', // 二维码内容
				userInfo: {}
			}
		},
		onReady() {
			// this.$refs.qrcode._makeCode()	
		},
		onLoad() {
			this.getUserInfo()
		},
		methods: {
			async getUserInfo() {
				uni.showLoading()
				let res = await this.$API.findUserInfo()
				if (!res) return
				this.userInfo = res || {}
				const {
					invite_domain = '', invite_code = ''
				} = this.userInfo
				this.codeContent = `${invite_domain}/register?code=${invite_code}`
				this.$nextTick(() => {
					this.$refs.qrcode._makeCode()
				})
			},
			copy(data) {
				if (this.userInfo.level_id < 2) return this.$textToast('共富一级及以上才能进行邀请')
				uni.setClipboardData({
					data: data,
					success: function() {
						uni.showToast({
							title: '复制成功'
						})
					}
				})
			}
		}
	}
</script>

<style scoped>
	@import url("/static/tab1/share/style/147.520bb24f.css");
	@import url("/static/tab1/share/style/351.f071f8d9.css");
	@import url("/static/tab1/share/style/482.181a18d0.css");
	@import url("/static/tab1/share/style/791.20153ef8.css");
	@import url("/static/tab1/share/style/app.2b4d12a5.css");

	.van-image {
		background: #fff;
		padding: 10px;
	}

	.title {
		font-size: 26px !important;
	}
</style>