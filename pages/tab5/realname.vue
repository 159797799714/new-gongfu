<template>
	<view data-v-a8349a9a="" class="kh">
		<view data-v-a8349a9a="" style="width: 90vw; margin: 0px auto; display: flex; flex-direction: column;">
			<view data-v-a8349a9a="" class="kh-title-2" style="margin: 20px;">
				<view data-v-a8349a9a="" style="font-size: 18px; font-weight: 600;">身份信息安全认证</view>
				<view data-v-a8349a9a="" style="color: rgb(181, 184, 192); font-size: 14px; margin: 10px 0px;">
					为了您的资金安全，现在需要进行身份验证，填写的身份信息必须要真实有效</view>
			</view>
			<view data-v-a8349a9a="" style="margin: 20px 0px 30px;">
				<view data-v-a8349a9a="" class="van-cell-group van-cell-group--inset van-hairline--top-bottom">
					<view data-v-a8349a9a="" class="van-cell van-field">
						<view class="van-cell__value van-cell__value--alone van-field__value">
							<view class="van-field__body">
								<input type="text" v-model="FormData.nickname" placeholder="请输入本人姓名"
									class="van-field__control">
							</view>
						</view>
					</view>
				</view>
				<view data-v-a8349a9a=""
					class="mt15 van-cell-group van-cell-group--inset van-hairline--top-bottom">
					<view data-v-a8349a9a="" class="input-type van-cell van-field">
						<view class="van-cell__value van-cell__value--alone van-field__value">
							<view class="van-field__body">
								<input type="text" v-model="FormData.id_card" placeholder="请输入本人身份证号"
									class="van-field__control">
							</view>
						</view>
					</view>
				</view>
			</view>
			<view data-v-a8349a9a="" style="width: 100%; margin: 30px auto; text-align: center;">
				<button
					data-v-a8349a9a=""
					class="submit van-button van-button--primary van-button--normal van-button--block"
					style="color: white; background: rgb(225, 23, 23); border-color: rgb(225, 23, 23);"
					@click="submitAction">
					<view data-v-a8349a9a="" class="van-button__content"><span data-v-a8349a9a=""
							class="van-button__text">开始验证 </span></view>
				</button></view>
		</view>
		<view data-v-a8349a9a="" class="kf-bottom" @click="$goPages('/pages/tab1/kefu')"><span data-v-a8349a9a="" class="kf-text"><i data-v-a8349a9a=""
					class="van-icon van-icon-service">
					
				</i>我的客服</span></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				FormData: {
					nickname: '',
					id_card: ''
				}
			}
		},
		methods: {
			async submitAction() {
				const {nickname, id_card} = this.FormData
				if (!nickname) return this.$textToast('请输入本人真实姓名')
				if (!id_card || id_card.length < 10) return this.$textToast('请输入正确的身份证号')
				uni.showLoading()
				let res = await this.$API.realname(this.FormData)
				if (!res) return 
				this.$textToast('实名认证成功', 'success')
				uni.navigateBack({
					delta: 1
				});
				
			}
		}
	}
</script>

<style scoped>
@import url('/static/tab5/realname/style/50.004499a9.css');
@import url('/static/tab5/realname/style/482.181a18d0.css');
</style>
