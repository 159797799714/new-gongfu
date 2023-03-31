<template>
	<view data-v-efef8222="" class="Zhuanzhang">
		<view data-v-efef8222="" class="mt15" style="width: 90%; margin: 0px auto;">
			<view data-v-efef8222="" class="van-cell van-field">
				<view class="van-cell__value van-cell__value--alone van-field__value">
					<view class="van-field__body"><input v-model="FormData.money" type="digit" inputmode="decimal"
							placeholder-style="font-size: 42rpx;" placeholder="请输入转账金额" class="van-field__control">
					</view>
				</view>
			</view>
		</view>
		<view data-v-efef8222="" class="mt15" style="width: 90%; margin: 0px auto;">
			<view data-v-efef8222="" class="van-cell van-field">
				<view class="van-cell__value van-cell__value--alone van-field__value">
					<view class="van-field__body"><input type="text" v-model="FormData.mobile"
							placeholder-style="font-size: 42rpx;" placeholder="请输入对方手机号" class="van-field__control">
					</view>
				</view>
			</view>
			<view data-v-efef8222="" class="van-cell">
				<view data-v-efef8222="" class="van-cell__title"><span data-v-efef8222="">收款人姓名:</span></view>
				<view data-v-efef8222="" class="van-cell__value"><span data-v-efef8222=""></span></view>
			</view>
		</view>
		<view data-v-efef8222="" class="pay-type"><span data-v-efef8222=""
				style="color: rgb(157, 165, 173); font-size: 20px; font-weight: 600;">请选择转账种类</span>
			<view data-v-efef8222="" role="radiogroup" class="van-radio-group">
				<view v-for="(item, index) in moneyList" :key="index" data-v-efef8222="" class="van-cell van-cell--large">
					<view data-v-efef8222="" class="van-cell__title">
						<view data-v-efef8222="" style="display: flex; justify-content: space-between; align-items: center;">
							<view data-v-efef8222="" style="display: flex; align-items: center;"><span data-v-efef8222=""
									style="color: rgb(169, 37, 50); font-size: 28px;"><i data-v-efef8222=""
										class="van-icon van-icon-gold-coin">

									</i></span>
								<view data-v-efef8222=""
									style="display: flex; flex-direction: column; font-size: 15px; margin-left: 1rem;">
									<span data-v-efef8222="">{{item.name}}</span>
								</view>
							</view>
							<view data-v-efef8222="" class="flex-line"><span data-v-efef8222=""
									style="text-align: left; padding-right: 8px; color: red;"> 可转
									{{userInfo[item.key] || '0.00'}}
								</span>
								<view data-v-efef8222="" role="radio" tabindex="0" aria-checked="true"
									@click="selectType = item.money_type" class="van-radio">
									<view
										:class="['van-radio__icon van-radio__icon--round', selectType === item.money_type ? 'van-radio__icon--checked': '']">
										<i class="van-icon van-icon-success">

										</i>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view data-v-efef8222="" class="van-submit-bar">
			<view data-v-efef8222="" class="van-submit-bar__bar"><button data-v-efef8222="" @click="transfer"
					class="van-button van-button--primary van-button--normal van-button--block"
					style="color: white; background: linear-gradient(to right, rgb(238, 10, 36), rgb(169, 37, 50)); border: 0px;">
					<view data-v-efef8222="" class="van-button__content"><span data-v-efef8222=""
							class="van-button__text">立即转账</span></view>
				</button></view>
		</view>
	</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 金额类型：cash_money=现金,figure_money=数字人民币,fund_money=圆梦基金
				userInfo: {},
				moneyList: [{
					money_type: 'recharge_money',
					name: '充值现金',
					key: 'recharge_money'
				}, {
					money_type: 'cash_money',
					name: '可提现金',
					key: 'cash_money'
				}, {
					money_type: 'fund_money',
					name: '圆梦基金',
					key: 'fund_money'
				}, {
					money_type: 'figure_money',
					name: '数字人民币',
					key: 'figure_money'
				}],
				selectType: '',
				FormData: {
					money: '',
					mobile: ''
				}
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
			async transfer() {

				if (!this.FormData.money) return this.$textToast('请输入转账金额')
				if (!this.FormData.mobile) return this.$textToast('请输入手机号码')
				if (!this.selectType) return this.$textToast('当前可转金额为0')
				uni.showLoading()
				let res = await this.$API.transfer(Object.assign(this.FormData, {
					money_type: this.selectType
				}))
				if (res) this.$textToast('转账成功')
			},

		}
	}
</script>

<style scoped>
	/* @import url('/static/tab5/zhuanzhang/style/29.7e543061.css'); */

	@import url('/static/tab5/zhuanzhang/style/197.c3d463d8.css');

	@import url('/static/tab5/zhuanzhang/style/392.020fd400.css');
	/* @import url('/static/tab5/zhuanzhang//style/664.423cda40.css'); */
</style>