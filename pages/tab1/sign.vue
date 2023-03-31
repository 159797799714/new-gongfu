<template>
	<view class="GongfuSign">
		<view style="width: 100%; height: 100%; ">
			<view class="van-calendar" style="height: 60vh;" @touchend="touchend" @touchstart="touchstart">
				<uni-calendar ref="calendar" class="uni-calendar--hook" :selected="info.selected" :showMonth="false"
					@change="change" />
			</view>
			<button class="van-button van-button--primary van-button--normal van-button--block" @click="signIn"
				style="width: 90%; margin: 30px auto; color: white; background: linear-gradient(to right, rgb(255, 96, 52), rgb(238, 10, 36)); border: 0px;">
				<view class="van-button__content"><text class="van-button__text">点击签到</text></view>
			</button>
		</view>
	</view>

</template>

<script>
	/**
	 * 获取任意时间
	 */
	function getDate(date, AddDayCount = 0) {
		if (!date) {
			date = new Date()
		}
		if (typeof date !== 'object') {
			date = date.replace(/-/g, '/')
		}
		const dd = new Date(date)

		dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期

		const y = dd.getFullYear()
		const m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1 // 获取当前月份的日期，不足10补0
		const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
		return {
			fullDate: y + '-' + m + '-' + d,
			year: y,
			month: m,
			date: d,
			day: dd.getDay()
		}
	}
	export default {
		components: {},
		data() {
			return {
				showCalendar: false,
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: []
				},
				startPageX: 0,
				startPageY: 0,
			}
		},
		onReady() {
			this.$nextTick(() => {
				this.showCalendar = true
			})
			// TODO 模拟请求异步同步数据
			// setTimeout(() => {
			// 	this.info.date = getDate(new Date(), -30).fullDate
			// 	this.info.startDate = getDate(new Date(), -60).fullDate
			// 	this.info.endDate = getDate(new Date(), 30).fullDate
			// 	this.info.selected = [{
			// 			date: getDate(new Date(), -3).fullDate,
			// 			info: '已签到'
			// 		},
			// 		{
			// 			date: getDate(new Date(), -2).fullDate,
			// 			info: '已签到',
			// 			// data: {
			// 			// 	custom: '自定义信息',
			// 			// 	name: '自定义消息头'
			// 			// }
			// 		},
			// 		{
			// 			date: getDate(new Date(), -1).fullDate,
			// 			info: '已签到'
			// 		}
			// 	]
			// }, 2000)
		},
		onLoad() {
			this.getSignList()
		},
		methods: {
			async getSignList() {
				uni.showLoading()
				let res = await this.$API.signInList()
				if (!res) return
				this.signList = res

				console.log('res', res)

				this.info.date = getDate(new Date(), -30).fullDate
				this.info.startDate = getDate(new Date(), -60).fullDate
				this.info.endDate = getDate(new Date(), 30).fullDate
				this.info.selected = (res || []).map(item => {
					return {
						date: getDate(new Date(item.createtime * 1000)).fullDate,
						info: '已签到'
					}
				})
			},
			change(e) {
				console.log('change 返回:', e)
				// 模拟动态打卡
				// if (this.info.selected.length > 5) return
				// this.info.selected.push({
				// 	date: e.fulldate,
				// 	info: '打卡'
				// })
			},
			async signIn() {
				const {
					fullDate
				} = getDate()
				uni.showLoading({
					title: '签到中',
					mask: true
				})
				let res = await this.$API.signin()
				if (!res) return
				this.info.selected.push({
					date: fullDate,
					info: '已签到'
				})
				this.$textToast('签到成功')
			},
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e)
			},
			touchstart(e) {
				this.startPageX = e.changedTouches[0].pageX
				this.startPageY = e.changedTouches[0].pageY
			},
			touchend(e) {
				const numX = e.changedTouches[0].pageX - this.startPageX
				const numY = e.changedTouches[0].pageY - this.startPageY
				console.log('numX', numX, 'numY', numY)
				console.log('this.$refs.calendar', this.$refs.calendar)
				if (numX < -30 || numY < -30) return this.$refs.calendar.next() // 下一个月
				if (numX > 30 || numY > 30) return this.$refs.calendar.pre() // 上个月

			}
		}
	}
</script>

<style lang="scss">
	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
	}

	.calendar-button {
		flex: 1;
		font-weight: bold;
		font-size: 32rpx;
	}
</style>
<style scoped>
	@import url('/static/tab1/sign/style/29.7e543061.css');
	@import url('/static/tab1/sign/style/50.004499a9.css');
	@import url('/static/tab1/sign/style/84.257e98cc.css');
	@import url('/static/tab1/sign/style/197.c3d463d8.css');
	@import url('/static/tab1/sign/style/251.b4f461d6.css');
	@import url('/static/tab1/sign/style/283.83a5cc6e.css');
	@import url('/static/tab1/sign/style/312.396fad04.css');
	@import url('/static/tab1/sign/style/497.2065aba0.css');
	@import url('/static/tab1/sign/style/500.b760da6b.css');
	@import url('/static/tab1/sign/style/app.2b4d12a5.css');
</style>