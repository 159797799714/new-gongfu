<template>
	<view id="app">
		<view data-v-de1b3d0e="" class="my">
			<view data-v-de1b3d0e="" class="flex-row my-top head-top">
				<view data-v-de1b3d0e="" class="my-top-content">
					<view data-v-de1b3d0e="" class="my-top-title">
						<view data-v-de1b3d0e="" class="van-uploader" @click="changeHeadImg">
							<view class="van-uploader__wrapper">
								<view class="van-uploader__input-wrapper">
									<view data-v-de1b3d0e="" class="van-image van-image--round" style="width: 4rem; height: 4rem; ">
										<image :src="userInfo.avatar" class="van-image__img">
									</view><input type="file" accept="image/*" class="van-uploader__input">
								</view>
							</view>
						</view>
						<view data-v-de1b3d0e="" class="fl ml15">
							<view data-v-de1b3d0e="" class="m-font" style="padding-left: 0px;">
								{{ hidePhone? showPhone: mobile }}
							</view>
							<view data-v-de1b3d0e="" class="s-font" style="padding-left: 0px;">
								<text data-v-363966a5="" style="display: inline-block; min-width: 65%;"
									@click="goRealName(userInfo.is_realname)">{{userInfo.is_realname ? userInfo.nickname: '点击去实名'}}</text>
								<text v-if="userInfo.is_realname > 0" data-v-363966a5=""
									:class="['van-icon', hidePhone? 'van-icon-closed-eye': 'van-icon-eye']" @click="changeNum"></text>
							</view>
						</view>

					</view>

					<view v-if="userInfo.level_id > 1" data-v-363966a5="" class=""
						style="background: rgb(204, 51, 68); color: rgb(173, 0, 0);">
						<div data-v-363966a5="" class="" @click="goHouse"
							style="display: block; color: rgb(255, 255, 255); text-align: center; font-size: 44px;">

							<image src="/static/mine/house.38b08442.png" style="margin: 0 auto;width: 40px; height: 40px;"
								class="van-image__img" mode="widthFix" />
						</div>
						<div data-v-363966a5="" class="level flex-line" @click="goPages('/pages/tab5/level')"
							style="background-color: rgb(204, 51, 68); color: rgb(255, 255, 255);">
							{{userInfo.level_name}}
						</div>
					</view>

					<view v-else data-v-de1b3d0e="" class="van-tag van-tag--default" @click="goPages('/pages/tab5/level')"
						style="background: rgb(204, 51, 68); color: rgb(173, 0, 0);">
						<view data-v-de1b3d0e="" class="level flex-line">
							<view data-v-de1b3d0e="" class="van-image van-image--round" style="width: 20px; height: 20px;">
								<image src="@/static/mine/logo-level.8f6e0a58.png" class="van-image__img">
							</view> {{userInfo.level_name}}
						</view>
					</view>
				</view>
				<view data-v-de1b3d0e="" class="my-top-money" @click="goPages('/pages/tab5/bill')"><span data-v-de1b3d0e=""
						class="m-font">账户余额</span><span data-v-de1b3d0e="" class="m-font money">
						{{allMoney}}
						元</span></view>
			</view>
			<view data-v-de1b3d0e="" class="money-list">
				<view data-v-de1b3d0e="" class="label-title" style="margin: 12px 0px 12px 20px;"><span data-v-de1b3d0e=""
						class="title-left"></span> 其他资金</view>
				<view data-v-de1b3d0e="" class="money-list-items money-list-items-2">
					<view data-v-de1b3d0e="" class="money-list-item money-list-item-2"
						@click="goPages('/pages/tab5/bill?type=cash_money%2Crecharge_money')"
						style="background-color: rgb(222, 93, 103);">
						<view data-v-de1b3d0e="" class="money">¥ {{allCashMoney}}</view>
						<view data-v-de1b3d0e="" class="money-label">现金</view>
					</view>
					<view data-v-de1b3d0e="" class="money-list-item money-list-item-2"
						style="background-color: rgb(226, 167, 107);"
						@click="goPages(`/pages/tab5/digitalwallet?money=${userInfo.figure_money}`)">
						<view data-v-de1b3d0e="" class="money"> ¥ {{userInfo.figure_money}} </view>
						<view data-v-de1b3d0e="" class="money-label">数字人民币</view>
					</view>
					<view data-v-de1b3d0e="" class="money-list-item money-list-item-2"
						@click="goPages('/pages/tab5/bill?type=fund_money')" style="background-color: rgb(122, 150, 224);">
						<view data-v-de1b3d0e="" class="money">¥ {{userInfo.fund_money}}</view>
						<view data-v-de1b3d0e="" class="money-label">圆梦基金<i data-v-de1b3d0e="" class="el-icon-success"></i></view>
					</view>
				</view>
			</view>
			<view data-v-de1b3d0e="" class="mt15" style="text-align: left;">
				<view data-v-de1b3d0e="" class="van-cell-group van-cell-group--inset van-hairline--top-bottom">
					<view data-v-de1b3d0e="" role="button" tabindex="0" @click="goPages('/pages/tab5/myinfo')"
						class="van-cell van-cell--clickable van-cell--large"><i data-v-de1b3d0e=""
							class="van-icon van-icon-user-o van-cell__left-icon">

						</i>
						<view data-v-de1b3d0e="" class="van-cell__title cell-title"><span data-v-de1b3d0e="">个人信息</span>
						</view>
						<view data-v-de1b3d0e="" class="van-cell__value t-right"><span data-v-de1b3d0e="">内容</span>
						</view><i data-v-de1b3d0e="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
					</view>
					<view data-v-de1b3d0e="" role="button" tabindex="0" @click="goPages('/pages/tab1/recharge/index')"
						class="van-cell van-cell--clickable van-cell--large"><i data-v-de1b3d0e=""
							class="van-icon van-icon-pending-payment van-cell__left-icon">

						</i>
						<view data-v-de1b3d0e="" class="van-cell__title cell-title"><span data-v-de1b3d0e="">账户充值</span>
						</view>
						<view data-v-de1b3d0e="" class="van-cell__value t-right"><span data-v-de1b3d0e="">点击即可充值</span>
						</view>
						<i data-v-de1b3d0e="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
					</view>
					<view data-v-de1b3d0e="" role="button" tabindex="0" class="van-cell van-cell--clickable"
						@click="goPages('/pages/tab5/withdrawal')"><i data-v-de1b3d0e=""
							class="van-icon van-icon-refund-o van-cell__left-icon">

						</i>
						<view data-v-de1b3d0e="" class="van-cell__title cell-title"><span data-v-de1b3d0e="">账户提现</span>
						</view>
						<view data-v-de1b3d0e="" class="van-cell__value t-right"><span data-v-de1b3d0e=""></span></view>
						<i data-v-de1b3d0e="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
					</view>
					<view data-v-de1b3d0e="" role="button" tabindex="0" class="van-cell van-cell--clickable"
						@click="goPages('/pages/tab5/zhuanzhang')"><i data-v-de1b3d0e=""
							class="van-icon van-icon-refund-o van-cell__left-icon">

						</i>
						<view data-v-de1b3d0e="" class="van-cell__title cell-title"><span data-v-de1b3d0e="">账户转账</span>
						</view>
						<view data-v-de1b3d0e="" class="van-cell__value t-right"><span data-v-de1b3d0e=""></span></view>
						<i data-v-de1b3d0e="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
					</view>
					<view data-v-de1b3d0e="" role="button" tabindex="0" class="van-cell van-cell--clickable"
						@click="goPages('/pages/tab5/bill')"><i data-v-de1b3d0e=""
							class="van-icon van-icon-gold-coin-o van-cell__left-icon">

						</i>
						<view data-v-de1b3d0e="" class="van-cell__title cell-title"><span data-v-de1b3d0e="">资金明细</span>
						</view>
						<view data-v-de1b3d0e="" class="van-cell__value t-right"><span data-v-de1b3d0e=""></span></view>
						<i data-v-de1b3d0e="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
					</view>
					<view data-v-de1b3d0e="" role="button" tabindex="0" class="van-cell van-cell--clickable"
						@click="goPages(`/pages/tab5/withdrawalaccount?isRealname=${userInfo.is_realname}`)"><i data-v-de1b3d0e=""
							class="van-icon van-icon-paid van-cell__left-icon">

						</i>
						<view data-v-de1b3d0e="" class="van-cell__title cell-title"><span data-v-de1b3d0e="">收款方式</span>
						</view>
						<view data-v-de1b3d0e="" class="van-cell__value t-right"><span data-v-de1b3d0e="">支付宝、银行卡</span>
						</view><i data-v-de1b3d0e="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
					</view>
					<view data-v-de1b3d0e="" role="button" tabindex="0" class="van-cell van-cell--clickable"
						@click="goPages(`/pages/tab1/kefu?url=${config.custom_service}`)"><i data-v-de1b3d0e=""
							class="van-icon van-icon-service-o van-cell__left-icon">

						</i>
						<view data-v-de1b3d0e="" class="van-cell__title cell-title"><span data-v-de1b3d0e="">我的客服</span>
						</view>
						<view data-v-de1b3d0e="" class="van-cell__value t-right"><span data-v-de1b3d0e="">在线咨询</span>
						</view><i data-v-de1b3d0e="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
					</view>
					<view data-v-de1b3d0e="" role="button" tabindex="0" class="van-cell van-cell--clickable"
						@click="goPages('/pages/tab5/accountSafe')"><i data-v-de1b3d0e=""
							class="van-icon van-icon-shield-o van-cell__left-icon">

						</i>
						<view data-v-de1b3d0e="" class="van-cell__title cell-title"><span data-v-de1b3d0e="">账户安全</span>
						</view>
						<view data-v-de1b3d0e="" class="van-cell__value t-right"><span data-v-de1b3d0e=""></span></view>
						<i data-v-de1b3d0e="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
					</view>
					<view data-v-de1b3d0e="" role="button" tabindex="0" class="van-cell van-cell--clickable"
						@click="goPages('/pages/tab5/aboutUs')"><i data-v-de1b3d0e=""
							class="van-icon van-icon-smile-comment-o van-cell__left-icon">

						</i>
						<view data-v-de1b3d0e="" class="van-cell__title cell-title"><span data-v-de1b3d0e="">关于我们</span>
						</view><i data-v-de1b3d0e="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
					</view>
					<view data-v-de1b3d0e="" role="button" tabindex="0" class="van-cell van-cell--clickable" @click="loginOut"><i
							data-v-de1b3d0e="" class="van-icon van-icon-revoke van-cell__left-icon">

						</i>
						<view data-v-de1b3d0e="" class="van-cell__title cell-title"><span data-v-de1b3d0e="">安全退出</span>
						</view>
						<view data-v-de1b3d0e="" class="van-cell__value t-right"><span data-v-de1b3d0e=""></span></view>
						<i data-v-de1b3d0e="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
					</view>
					<!-- <view data-v-de1b3d0e="" role="button" tabindex="0" class="van-cell van-cell--clickable"><i
							data-v-de1b3d0e="" class="van-icon van-icon-revoke van-cell__left-icon">

						</i>
						<view data-v-de1b3d0e="" class="van-cell__title cell-title"><span
								data-v-de1b3d0e="">系统语言：{{systemLocale}}切换语言</span>
						</view>
						<view v-for="(item, index) in locales" :key="index" @click="changeLang(item)">{{item.text}}
						</view>
						<view data-v-de1b3d0e="" class="van-cell__value t-right"><span data-v-de1b3d0e=""></span></view>
						<i data-v-de1b3d0e="" class="van-icon van-icon-arrow van-cell__right-icon">

						</i>
					</view> -->
				</view>
			</view>

			<view data-v-29e1e5e2="" data-v-de1b3d0e="" class="van-overlay" style="display: none;">
				<view data-v-29e1e5e2=""
					style="display: flex; align-items: center; justify-content: center; height: 100%; background-color: white;">
					<view data-v-29e1e5e2="" class="van-loading van-loading--circular van-loading--vertical"><span
							data-v-29e1e5e2="" class="van-loading__spinner van-loading__spinner--circular"
							style="color: rgb(0, 148, 255); width: 8rem; height: 8rem;"><svg data-v-29e1e5e2="" viewBox="25 25 50 50"
								class="van-loading__circular">
								<circle data-v-29e1e5e2="" cx="50" cy="50" r="20" fill="none"></circle>
							</svg></span><span data-v-29e1e5e2="" class="van-loading__text"
							style="color: rgb(0, 148, 255);">数据加载中</span></view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					avatar: '/static/mine/my.4fa040a4.png',
				},
				mobile: uni.getStorageSync('mobile'),
				hidePhone: true,

				systemLocale: '',
				applicationLocale: '',
				config: {}

			}
		},
		computed: {
			locales() {
				return [{
						text: this.$t('locale.en'),
						code: 'en'
					},
					{
						text: this.$t('locale.zh-hans'),
						code: 'zh-Hans'
					},
				]
			},
			showPhone() {
				if (!this.mobile) return '****'
				let arr = this.mobile.split('')
				arr.splice(3, 4, '****')
				return arr.join('')
			},
			allMoney() {
				let {
					cash_money = 0, figure_money = 0, fund_money = 0
				} = this.userInfo
				cash_money = Number(cash_money || 0)
				figure_money = Number(figure_money || 0)
				fund_money = Number(fund_money || 0)
				return (cash_money + figure_money + fund_money).toFixed(2)
			},
			allCashMoney() {
				let {
					cash_money = 0, recharge_money = 0
				} = this.userInfo
				cash_money = Number(cash_money || 0)
				recharge_money = Number(recharge_money || 0)
				return (cash_money + recharge_money).toFixed(2)
			}
		},
		onLoad() {
			let systemInfo = uni.getSystemInfoSync();
			this.systemLocale = systemInfo.language;
			this.applicationLocale = uni.getLocale();
			this.isAndroid = systemInfo.platform.toLowerCase() === 'android';
			uni.onLocaleChange((e) => {
				this.applicationLocale = e.locale;
			})
		},
		onShow() {
			this.getUserInfo()
			this.getConfig()
		},
		methods: {

			// 获取公共配置
			async getConfig() {
				uni.showLoading()
				let res = await this.$API.indexCommon()
				if (!res) return
				this.config = res
			},
			changeHeadImg() {
				uni.chooseImage({
					count: 1,
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.uploadFile({
							url: 'https://api.zggf2023.com/api/common/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								token: uni.getStorageSync('token'),
								lang: uni.getStorageSync('lang')
							},
							success: async (uploadFileRes) => {
								console.log(JSON.parse(uploadFileRes.data))
								let {
									code,
									data,
									msg
								} = JSON.parse(uploadFileRes.data)

								if (code == 1) {
									await this.$API.profile({
										avatar: data.url
									})
									this.$textToast('上传成功', 'success')
								} else {
									this.$textToast(msg || '上传失败')
								}
								this.getUserInfo()
							}
						});
					}
				});
			},
			// 显隐手机号
			changeNum() {
				this.hidePhone = !this.hidePhone
			},
			// 去实名
			goRealName(is_realname) {
				if (is_realname > 0) return
				this.goPages('/pages/tab5/realname')
			},
			async getUserInfo() {
				uni.showLoading()
				let res = await this.$API.findUserInfo()
				this.userInfo = res || {}
			},
			async getTeamList() {
				uni.showLoading()
				let res = await this.$API.getTeam()
				this.teamInfo = res || []
			},
			goPages(url) {
				uni.navigateTo({
					url
				})
			},
			goHouse() {
				if (this.userInfo.house_status == -1) return this.$goPages('/pages/tab5/house')
				if (this.userInfo.house_status == 0) return this.$textToast('安置房申请正在审核中请耐心等待')
				if (this.userInfo.house_status == 1) return this.$goPages('安置房审核成功')
				if (this.userInfo.house_status == 2) return this.$goPages('安置房审核失败')
			},
			loginOut() {
				this.$store.commit('loginOut')
			},
			// 切换语言
			changeLang(e) {
				if (this.isAndroid) {
					uni.showModal({
						content: this.$t('index.language-change-confirm'),
						success: (res) => {
							if (res.confirm) {
								uni.setLocale(e.code);
							}
						}
					})
				} else {
					uni.setLocale(e.code);
					this.$i18n.locale = e.code;
				}
			},
		}
	}
</script>

<style scoped>
	@import url("/static/mine/style/197.c3d463d8.css");
</style>