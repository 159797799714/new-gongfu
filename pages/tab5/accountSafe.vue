<template>
	<view data-v-686c0400="">
		<view data-v-686c0400="" class="mt15" style="text-align: left;">
			<view data-v-686c0400="" class="van-cell-group van-cell-group--inset van-hairline--top-bottom">
				<view data-v-686c0400="" role="button" tabindex="0" @click="goPages('/pages/tab5/editPassword')"
					class="van-cell van-cell--clickable van-cell--large"><i data-v-686c0400=""
						class="van-icon van-icon-award-o van-cell__left-icon">

					</i>
					<view data-v-686c0400="" class="van-cell__title cell-title"><span data-v-686c0400="">登录密码</span>
					</view>
					<view data-v-686c0400="" class="van-cell__value"><span data-v-686c0400="">点击可设置</span></view>
					<i data-v-686c0400="" class="van-icon van-icon-arrow van-cell__right-icon">

					</i>
				</view>

				<view data-v-686c0400="" role="button" tabindex="0"
					@click="goPages(`/pages/tab5/editPassword?type=pay&isFirstSet=${isFirstSet}`)"
					class="van-cell van-cell--clickable van-cell--large"><i data-v-686c0400=""
						class="van-icon van-icon-gold-coin-o van-cell__left-icon">

					</i>
					<view data-v-686c0400="" class="van-cell__title cell-title"><span data-v-686c0400="">支付密码</span>
					</view>
					<view data-v-686c0400="" class="van-cell__value"><span data-v-686c0400="">点此可设置</span>
					</view>
					<i data-v-686c0400="" class="van-icon van-icon-arrow van-cell__right-icon">

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
				userInfo: {},
				isFirstSet: true
			}
		},
		onShow(option) {
			this.getUserInfo()
		},
		methods: {
			async getUserInfo() {
				uni.showLoading()
				let res = await this.$API.findUserInfo()
				const obj = res || {}
				this.userInfo = obj
				this.isFirstSet = obj.set_pay_password < 1 ? true : ''
			},
			goPages(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style>
</style>