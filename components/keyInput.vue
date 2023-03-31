<template>
	<form data-v-27860fe4="" class="mt15 passwdForm van-form" :style="visable? '': 'display: none;'" @touchend="touchend"
		@touchstart="touchstart">
		<view data-v-27860fe4="" class="van-cell-group van-cell-group--inset van-hairline--top-bottom">
			<view data-v-27860fe4="" class="van-password-input">
				<ul data-v-27860fe4="" height="90%" class="van-password-input__security">
					<li v-for="item in 6" :key="item" data-v-27860fe4=""
						class="van-password-input__item van-password-input__item--focus">
						<text v-show="item < focusIndex" data-v-27860fe4="" class="black-circle"></text>
						<view v-show="focusIndex == item" data-v-27860fe4="" class="van-password-input__cursor">
						</view>
					</li>
				</ul>
			</view>
		</view>
		<view data-v-27860fe4="" class="van-number-keyboard">
			<view class="van-number-keyboard__body">
				<view class="van-number-keyboard__keys">
					<view v-for="item in 9" :key="item" class="van-key__wrapper" @click="clickNum(item)">
						<view role="button" tabindex="0" class="van-key click-class">{{item}}</view>
					</view>
					<view class="van-key__wrapper" @click="close">
						<view role="button" tabindex="0" class="van-key click-class">
							<image src="/static/gongfu/jianpan.png" mode="widthFix" class="van-key__delete-icon" />
						</view>
					</view>
					<view class="van-key__wrapper" @click="clickNum(0)">
						<view role="button" tabindex="0" class="van-key click-class">0</view>
					</view>
					<view class="van-key__wrapper">
						<view role="button" tabindex="0" class="van-key van-key--delete click-class" @click="curtNum">
							<image src="/static/gongfu/delete.png" mode="widthFix" class="van-key__delete-icon" />
						</view>
					</view>
				</view>
			</view>
		</view>
		<view data-v-27860fe4="" style="margin: 16px;">
			<button data-v-27860fe4="" @click="buy" type="submit"
				class="van-button van-button--primary van-button--normal van-button--block van-button--round"
				style="color: white; background: linear-gradient(to right, rgb(255, 96, 52), rgb(238, 10, 36)); border: 0px;">
				<view data-v-27860fe4="" class="van-button__content">
					<text data-v-27860fe4="" class="van-button__text">
						确认 </text>
				</view>
			</button>
		</view>
	</form>
</template>

<script>
	export default {
		name: "keyInput",
		data() {
			return {
				startPageY: 0,
			}
		},
		props: {
			visable: {
				type: Boolean,
				default: false
			},
			payPassword: {
				type: [String, Number],
				default: ''
			}
		},
		watch: {
			payPassword(val) {
				console.log('val', val)
			}
		},
		computed: {
			focusIndex() {
				return this.payPassword.length > 0 ? this.payPassword.length + 1 : 1
			}
		},
		methods: {
			touchstart(e) {
				this.startPageY = e.changedTouches[0].pageY
			},
			touchend(e) {
				const numY = e.changedTouches[0].pageY - this.startPageY
				if (numY > 30) return this.close()
			},
			close() {
				this.$emit('update:visable', false)
				this.$emit('update:payPassword', '')
			},
			// 输入数字
			clickNum(num) {
				let pwdNow = this.payPassword.toString()
				let pwdArr = pwdNow.split('')
				if (pwdArr.length > 5) return
				pwdArr.push(num)
				this.$emit('update:payPassword', pwdArr.join(''))
			},
			// 删除
			curtNum() {
				let pwdNow = this.payPassword.toString()
				let pwdArr = pwdNow.split('')
				if (pwdArr.length < 0) return
				pwdArr.pop()
				this.$emit('update:payPassword', pwdArr.join(''))
			},
			buy() {
				this.$emit('submit')
			},

		}
	}
</script>

<style scoped>
	@import url("/static/gongfu/style/688.41c4ba3c.css");

	.black-circle {
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		width: 10px;
		height: 10px;
		background-color: #000;
		border-radius: 100%;
	}

	.van-password-input__item {
		margin-left: 10px;
	}

	.van-password-input__item:first-child {
		margin-left: 0;
	}

	.click-class:active {
		background-color: #ebedf0;
	}

	.passwdForm {
		z-index: 1000 !important;
	}
</style>