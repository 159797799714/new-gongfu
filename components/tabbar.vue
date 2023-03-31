<template>
	<view class="tabs" style="background: #ffffff;">
		<view v-for="(item, index) in tablist" :key="index" class="tab-item"
			:style="`line-height: ${height};font-size: ${fontSize};`" @click="changeTab(item, index)">
			{{item.label}}
		</view>
		<view class="slipe" :style="`left: ${left};`"></view>
	</view>
</template>

<script>
	export default {
		name: "tabbar",
		data() {
			return {
				activeIndex: 0
			};
		},
		computed: {
			left() {
				const percent = (50 / this.tablist.length) * (Number(this.activeVal) * 2 + 1)
				return `${percent - 5.3}%`
			}
		},
		props: {
			height: {
				type: [String, Number],
				default: '55px',
			},
			fontSize: {
				type: [String, Number],
				default: '15px',
			},
			tablist: {
				type: Array,
				default: () => []
			},
			activeVal: {
				type: [String, Number],
				default: 0
			}
		},
		// created() {
		// 	console.log('show', this.activeIndex, this.activeVal)
		// 	this.activeIndex = this.activeVal
		// },
		methods: {
			changeTab(item, index) {
				console.log('点击了', item, index)
				// this.activeIndex = index
				this.$emit('update:activeVal', index)
				this.$emit('tabClick', index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabs {
		z-index: 2;
		position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.tab-item {
			flex: 1;
			text-align: center;
		}

		.slipe {
			position: absolute;
			bottom: 0;
			width: 10.6%;
			height: 3px;
			transition: 300ms;
			background: #ee0a24;
			border-radius: 3px;
		}
	}
</style>
