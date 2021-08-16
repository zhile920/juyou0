<template>
	<view>
		<view class="dh_top" :class="bg_img?'cf':''" :style="style+'background-color:'+bg_color">
			<image v-if="bg_img" class="nav_bar_img" :src="bg_img" mode="widthFix"></image>
			<!-- <text class=""></text>
			<text>个人中心</text>
			<text class=""></text> --> 
			<view class="dh_top_box" :style="style1">
				<!-- {{bg_img}} -->
				<slot></slot>
			</view>
		</view>
		<view v-if="have_top" class="dh_top dh_top1" :style="'height: '+CustomBar+'px;background-color:'+bg_color"></view>
	</view>
</template>

<script>
	var that
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		name:"top_bar",
		props: {
			bg_img:{
				type: String,
				default: ''
			},
			bg_color:{
				type: String,
				default: ''
			},
			have_top:{
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
			};
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName','loginDatas','relation_phone']),
			
			style0() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var padd_top = CustomBar
				var style = `padding-top:${padd_top}px;`;
				
				return style
			},
			style() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
		
				return style
			},
			
			style1(){
				var StatusBar = this.StatusBar;
				var style = `top:${StatusBar}px;`;
				
				return style
			},
			style2(){
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var style = `padding-top:${CustomBar}px;`;
				
				return style
			}
		},
	}
</script>

<style scoped>
	.dh_top{
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 991;
		background-color: #fff;
		padding: var(--status-bar-height) 15upx 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;
		box-sizing: border-box;
	}
	.dh_top1{
		opacity: 0;
		position: relative;
		z-index: 100;
	}
	.dh_top_box{
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		height: 60rpx;
		font-size: 32rpx;
		/* line-height: 60rpx; */
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 15upx;
	}
	.dh_top>.nav_bar_img{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100vw;
		height: auto;
		z-index: 991;
	}
	.dh_top /deep/ text{
		position: relative;
		z-index: 	992;
		color: #333;
	}
	.cf  /deep/ text{
		color: #fff;
	}
</style>
