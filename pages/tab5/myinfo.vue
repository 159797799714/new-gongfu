<template>
	<view id="app">
		<view data-v-6cb497ca="" class="MyInfo">
			<view data-v-6cb497ca="" class="van-cell-group van-cell-group--inset van-hairline--top-bottom">
				<view v-for="(item, index) in infoList" :key="index" data-v-6cb497ca="" class="van-cell">
					<view data-v-6cb497ca="" class="van-cell__title"><span data-v-6cb497ca="">{{item.label}}</span>
					</view>
					<view data-v-6cb497ca="" class="van-cell__value t-right"><span
							data-v-6cb497ca="">{{item.key(userInfo)}}</span>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				infoList: [{
					label: '姓名',
					key: userInfo => userInfo.nickname
				}, {
					label: '手机号',
					key: () => uni.getStorageSync('mobile')
				}, {
					label: '身份证号',
					key: userInfo => userInfo.id_card
				}, {
					label: '注册日期',
					key: userInfo => userInfo.createtime
				}, {
					label: '邀请码',
					key: userInfo => userInfo.invite_code
				}],
				userInfo: {}
			}
		},
		onLoad() {
			this.getUserInfo()
		},
		methods: {
			async getUserInfo() {
				uni.showLoading()
				let res = await this.$API.findUserInfo()
				this.userInfo = res || {}
			},
		}
	}
</script>

<style scoped>
	/* @import url('/static/tab5/bill/style//29.7e543061.css'); */
	/* 
	@import url('/static/tab5/bill/style/147.520bb24f.css');
	@import url('/static/tab5/bill/style/238.c11e87dc.css'); */
	/* 
	@import url('/static/tab5/bill/style/283.83a5cc6e.css');
	@import url('/static/tab5/bill/style/508.f0cf6622.css');
	@import url('/static/tab5/bill/style/534.15cc5e65.css'); */
	/* 
	@import url('/static/tab5/bill/style/688.41c4ba3c.css');
	@import url('/static/tab5/bill/style/app.2b4d12a5.css'); */

	.van-list__finished-text {
		text-align: center;
	}
</style>
