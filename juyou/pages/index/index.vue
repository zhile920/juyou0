<template>
	<view class="content">
		<topbar bg_color="#F3F3F3" :have_top="true">
			<view class="dis_flex aic">
				<view class="topDz">
					<view class="">
						<text class="iconfont icon-VIP"></text>
					</view>
					<view class="ml5">
						齐齐哈尔
					</view>
				</view>
				<view class="topInput">
					<input type="text" class="" style="display: block;margin: 0 auto;" value="" placeholder="搜索用户/活动"/>
				</view>
				<view class="topFq" style="">
					发起
				</view>
			</view>
		</topbar>
		<view class="head">
			<view class="dis_flex aic ju_b" style="flex-flow: row wrap;padding: 0 30rpx;">
				<view class="dis_flex aic ju_c mt15" style="flex-flow: row wrap;width: 120rpx;" v-for="item,index in 10">
					<view class="" style="width: 70rpx;">
						<image src="../../static/findTab0.png" mode="aspectFill" style="width: 60rpx;height: 60rpx;"></image>
						<text class="mt5">运动</text>
					</view>
				</view>
			</view>
		</view>
		<view class="fjActivity">
			<view class="bg-black mt15 mr15 ml15" style="border-radius: 20px;">
				<image src="../../static/findTab1.png" mode="aspectFill" style="height: 150px;"></image>
			</view>
		</view>
		<view class="hotActivity">
			<view class="mt15 ml25">
				<view class="fs17" style="color: #000000;font-weight: bold;">
					热门活动
				</view>
			</view>
			<view class="dis_flex aic ju_b ff pr15 pl15">
				<view class="dis_flex aic ju_b mt10" v-for="item,index in 4">
					<view class="" style="width: 165px;height: 220px; background-color: #FFFFFF;border-radius: 15rpx;overflow: hidden;">
						<view class="" style="background-color: #000000;">
							<image src="../../static/findTab1.png" mode="aspectFill" style="width: 165px;height: 150px;"></image>
						</view>
						<view class="fs11 dis_flex aic ju_b ml5 mt5 mr10" style="color: #3C3C43;font-weight: 600;">
							<view class="">
								徐家汇
							</view>
							<view class="">
								周三 12:00
							</view>
						</view>
						<view class="ml5 mt15 dis_flex aic">
							<view class="" style="margin-left: 5rpx;" v-for="item,index in 5">
								<image src="../../static/findTab0.png" mode="aspectFill" style="width: 23px;height: 23px;" ></image>
							</view>
							
						</view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import api from '../../components/service.js';
	var that
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page{
		background-color: #F3F3F3;
	}
	.content {		
	}
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.topDz{
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 30rpx;
		font-size: 14rpx
	}
	.topInput{
		background-color: #f6f6f6;
		border-radius:35rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12rpx;
		color: #3C3C43;
		padding: 12rpx 24rpx;
	}
	.topFq{
		width:87rpx;
		height: 44.5rpx;
		background-image: linear-gradient(rgb(179, 125, 236),rgb(145, 69, 255));
		border-radius: 25rpx;
		color: #FFFFFF;
		font-size: 12rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		right: 30rpx;
	}
	.hotActivity{
		margin-bottom: 20px;
	}
</style>
