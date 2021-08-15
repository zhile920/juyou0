<template>
	<view class="content">
		<topbar bg_color="#F3F3F3" :have_top="true">
			<view class="dis_flex aic ju_c">
				<view class="topDz">
					<view class="">
						<text></text>
					</view>
					<view class="">
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
			
		</view>
		<view class="fjActivity">
			
		</view>
		<view class="hotActivity">
			
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
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
</style>
