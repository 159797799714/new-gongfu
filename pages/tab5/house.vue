<template>
	<view data-v-538ca52b="" class="kh">
		<view data-v-538ca52b="" style="width: 100%; margin: 0px auto; display: flex; flex-direction: column;">
			<view data-v-538ca52b="" style="margin: 20px 12px 30px;">
				<view data-v-538ca52b="" class="van-cell-group van-hairline--top-bottom">
					<view data-v-538ca52b="" class="inline-block">
						<view data-v-538ca52b="" class="inline-block-2 van-cell van-field">
							<view class="van-cell__title van-field__label"><text>申请姓名:</text></view>
							<view class="van-cell__value van-field__value">
								<view class="van-field__body"><input type="text" v-model="FormData.name" placeholder="请填写"
										class="van-field__control"></view>
							</view>
						</view>
					</view>
					<view data-v-538ca52b="" class="inline-block">
						<view data-v-538ca52b="" class="inline-block-2 van-cell van-field sex-box" style="overflow: visible;">
							<view data-v-538ca52b="" class="van-cell__title van-field__label"><text data-v-538ca52b="">性别:</text>
							</view>
							<uni-data-select :clear="false" classs="my-select" v-model="FormData.sex" placeholder="请选择性别"
								:localdata="sexRange">
							</uni-data-select>
						</view>
					</view>
				</view>
				<view data-v-538ca52b="" class="mt15 van-cell-group van-hairline--top-bottom">
					<view data-v-538ca52b="" class="inline-block">
						<view data-v-538ca52b="" class="inline-block-2 van-cell van-field">
							<view class="van-cell__title van-field__label"><text>出生年月:</text></view>
							<view class="van-cell__value van-field__value">
								<view class="van-field__body">
									<input type="text" v-model="FormData.birthday" placeholder="请填写" class="van-field__control">
								</view>
							</view>
						</view>
					</view>
					<view data-v-538ca52b="" class="inline-block">
						<view data-v-538ca52b="" class="inline-block-2 van-cell van-field">
							<view class="van-cell__title van-field__label"><text>民族:</text></view>
							<view class="van-cell__value van-field__value">
								<view class="van-field__body">
									<input v-model="FormData.nation" type="text" placeholder="请填写" class="van-field__control">
								</view>
							</view>
						</view>
					</view>
				</view>
				<view data-v-538ca52b="" class="mt15 van-cell-group van-hairline--top-bottom">
					<view data-v-538ca52b="" class="input-type van-cell van-field" style="overflow: visible;">
						<view data-v-538ca52b="" class="van-cell__title van-field__label"><text data-v-538ca52b="">证件类型:</text>
						</view>
						<uni-data-select :clear="false" classs="my-select" v-model="FormData.certificate_type" placeholder="请选择证件类型"
							:localdata="cardTypeRange" style="height: 24px;"></uni-data-select>
					</view>
				</view>
				<view data-v-538ca52b="" class="mt15 van-cell-group van-hairline--top-bottom">
					<view data-v-538ca52b="" class="input-type van-cell van-field">
						<view class="van-cell__title van-field__label"><text>身份证号码:</text></view>
						<view class="van-cell__value van-field__value">
							<view class="van-field__body"><input v-model="FormData.id_card" type="text" placeholder="请输入身份证号码"
									class="van-field__control"></view>
						</view>
					</view>
				</view>
				<view data-v-538ca52b="" class="mt15 van-cell-group van-hairline--top-bottom">
					<view data-v-538ca52b="" class="input-type van-cell van-field">
						<view class="van-cell__title van-field__label"><text>当前户籍所在地:</text></view>
						<view class="van-cell__value van-field__value">
							<view class="van-field__body"><input type="text" v-model="FormData.domicile" placeholder="请输入当前户籍所在地"
									class="van-field__control"></view>
						</view>
					</view>
				</view>
				<view data-v-538ca52b="" class="mt15 van-cell-group van-hairline--top-bottom">
					<view data-v-538ca52b="" class="input-type van-cell van-field">
						<view class="van-cell__title van-field__label"><text>联系方式:</text></view>
						<view class="van-cell__value van-field__value">
							<view class="van-field__body"><input v-model="FormData.contact_way" type="text" placeholder="请输入联系方式"
									class="van-field__control"></view>
						</view>
					</view>
				</view>
				<view data-v-538ca52b="" class="mt15 van-cell-group van-hairline--top-bottom">
					<view data-v-538ca52b="" class="input-type van-cell van-field">
						<view class="van-cell__title van-field__label"><text>联系地址:</text></view>
						<view class="van-cell__value van-field__value">
							<view class="van-field__body"><input v-model="FormData.contact_address" type="text" placeholder="请输入联系地址"
									class="van-field__control"></view>
						</view>
					</view>
				</view>
				<view data-v-538ca52b="" class="mt15 van-cell-group van-hairline--top-bottom">
					<view data-v-538ca52b="" class="input-type van-cell van-field">
						<view class="van-cell__title van-field__label"><text>申请城市:</text></view>
						<view class="van-cell__value van-field__value">
							<view class="van-field__body">
								<pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion">
									<view v-if="region.length > 0" class="col-black">
										{{`${FormData.apply_city}${FormData.apply_area}`}}
									</view>
									<view v-else>点击选择省市区</view>
								</pick-regions>
							</view>
						</view>
					</view>
				</view>
				<!-- <view data-v-538ca52b="" class="mt15 van-cell-group van-hairline--top-bottom">
					<view data-v-538ca52b="" style="margin: 15px 10px;">申请地区：</view>
					<view data-v-538ca52b="" role="radiogroup" class="van-radio-group"
						style="margin: 15px 10px; line-height: 28px;">
						<view data-v-538ca52b="" role="radio" tabindex="-1" aria-checked="false" class="van-radio">
							<view class="van-radio__icon van-radio__icon--round"><i class="van-icon van-icon-success">

								</i></view><text class="van-radio__label">丰台区</text>
						</view>
						<view data-v-538ca52b="" role="radio" tabindex="-1" aria-checked="false" class="van-radio">
							<view class="van-radio__icon van-radio__icon--round"><i class="van-icon van-icon-success">

								</i></view><text class="van-radio__label">海淀区</text>
						</view>
						<view data-v-538ca52b="" role="radio" tabindex="-1" aria-checked="false" class="van-radio">
							<view class="van-radio__icon van-radio__icon--round"><i class="van-icon van-icon-success">

								</i></view><text class="van-radio__label">怀柔区</text>
						</view>
						<view data-v-538ca52b="" role="radio" tabindex="-1" aria-checked="false" class="van-radio">
							<view class="van-radio__icon van-radio__icon--round"><i class="van-icon van-icon-success">

								</i></view><text class="van-radio__label">东城区</text>
						</view>
						<view data-v-538ca52b="" role="radio" tabindex="-1" aria-checked="false" class="van-radio">
							<view class="van-radio__icon van-radio__icon--round"><i class="van-icon van-icon-success">

								</i></view><text class="van-radio__label">西城区</text>
						</view>
						<view data-v-538ca52b="" role="radio" tabindex="-1" aria-checked="false" class="van-radio">
							<view class="van-radio__icon van-radio__icon--round"><i class="van-icon van-icon-success">

								</i></view><text class="van-radio__label">宣武区</text>
						</view>
						<view data-v-538ca52b="" role="radio" tabindex="-1" aria-checked="false" class="van-radio">
							<view class="van-radio__icon van-radio__icon--round"><i class="van-icon van-icon-success">

								</i></view><text class="van-radio__label">朝阳区</text>
						</view>
						<view data-v-538ca52b="" role="radio" tabindex="-1" aria-checked="false" class="van-radio">
							<view class="van-radio__icon van-radio__icon--round"><i class="van-icon van-icon-success">

								</i></view><text class="van-radio__label">新崇文区</text>
						</view>
					</view>
				</view> -->
			</view>
			<view data-v-538ca52b="" style="width: 88%; margin: 10px auto; text-align: center;">
				<button data-v-538ca52b="" class="submit van-button van-button--primary van-button--normal van-button--block"
					style="color: white; background: rgb(225, 23, 23); border-color: rgb(225, 23, 23);" @click="submit">
					<view data-v-538ca52b="" class="van-button__content"><text data-v-538ca52b="" class="van-button__text">立即申请
						</text></view>
				</button>
			</view>
			<view data-v-538ca52b="" class="kh-title-2" style="margin: 20px;">
				<view data-v-538ca52b="" style="font-size: 16px; font-weight: 600;">申请人须知</view>
				<view data-v-538ca52b="" style="color: rgb(255, 0, 6); font-size: 14px; margin: 10px 0px;">
					<p data-v-538ca52b="">1、申请人必须满18周岁及以上的中国合法公民；</p>
					<p data-v-538ca52b="">2、请正确填写相关信息，一经填写一个月内无法修改；</p>
					<p data-v-538ca52b="">3、提交申请后请耐心等待60个工作日；</p>
					<p data-v-538ca52b="">4、申请通过后，请保持电话畅通，会有中国共富专员联系您完成申请程序。</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pickRegions from '@/components/pick-regions/pick-regions.vue'
	export default {
		components: {
			pickRegions
		},
		data() {
			return {
				sexRange: [{
						value: 1,
						text: "男"
					},
					{
						value: 2,
						text: "女"
					},
				],
				cardTypeRange: [{
						value: 1,
						text: "大陆居民身份证"
					},
					{
						value: 2,
						text: "港澳居民身份证"
					},
					{
						value: 2,
						text: "台胞证"
					}
				],
				FormData: {
					name: '',
					sex: '',
					birthday: '',
					nation: '',
					certificate_type: '',
					id_card: '',
					domicile: '',
					contact_way: '',
					contact_address: '',
					apply_city: '',
					apply_area: ''
				},
				// 省市区
				region: [],
				defaultRegion: ['', '', ''],
				defaultRegionCode: '440113'

			}
		},
		computed: {
			regionName() {
				// 转为字符串
				return this.region.map(item => item.name).join(' ')
			}
		},
		methods: {
			// 获取选择的地区
			handleGetRegion(region) {
				console.log('region', region)
				this.region = region
				this.FormData.apply_city = region[0].name + region[1].name
				this.FormData.apply_area = region[2].name || '东城区'
			},
			async submit() {
				if (!this.FormData.name) return this.$textToast('请输入姓名')
				if (!this.FormData.sex) return this.$textToast('请选择性别')
				if (!this.FormData.birthday) return this.$textToast('请输入出生年月')
				if (!this.FormData.nation) return this.$textToast('请输入民族')
				if (!this.FormData.certificate_type) return this.$textToast('请选择证件类型')
				if (!this.FormData.id_card) return this.$textToast('请输入证件号码')
				if (!this.FormData.domicile) return this.$textToast('请输入户籍所在地')
				if (!this.FormData.contact_way) return this.$textToast('请输入联系方式')
				if (!this.FormData.apply_city) return this.$textToast('请选择申请城市')

				uni.showLoading({
					title: '正在提交',
					mask: true
				})
				let res = await this.$API.house(this.FormData)
				if (!res) return
				this.$textToast('申请成功', 'success')
				uni.navigateBack({
					delta: 1
				})

			}
		}
	}
</script>

<style scoped>
	@import url('/static/tab5/house/style/508.f0cf6622.css');
	@import url('/static/tab5/house/style/706.14a3ec79.css');

	.sex-box {
		height: 44px;
	}

	.uni-select {
		height: 24px !important;
	}
</style>