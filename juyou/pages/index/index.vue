<template>
	<view class="content">
		<topbar bg_color="#F3F3F3" :have_top="true">
			<view class="dis_flex aic">
				<view class="topDz"  @click='tiaozhuan'  data-url='/pageL/qidongye/qidongye' :data-shifou='false'>
					<view class="">
						<text class="iconfont icon-VIP"></text>
					</view>
					<view class="ml5">
						齐齐哈尔
					</view>
				</view>
				<view class=" dis_flex aic ju_c" style="width: 100vw;">
					<view class="topInput">
						<input type="text" class="" style="display: block;margin: 0 auto;" value=""
							placeholder="搜索用户/活动" />
							<image src="../../static/findTab0.png" mode="aspectFill" style="width: 15px;height: 15px;"></image>
					</view>
				</view>
				<view class="topFq" style="">
					发起
				</view>
			</view>
		</topbar>
		<view class="head">
			<view class="dis_flex aic ju_b" style="flex-flow: row wrap;padding: 0 30rpx;">
				<view class="dis_flex aic ju_c mt15" style="flex-flow: row wrap;width: 120rpx;"
					v-for="item,index in 10">
					<view class="" style="width: 70rpx;">
						<image src="../../static/findTab0.png" mode="aspectFill" style="width: 60rpx;height: 60rpx;">
						</image>
						<text class="mt5">运动</text>
					</view>
				</view>
			</view>
		</view>
		<view class="fjActivity">
			<view class="bg-black mt15 mr15 ml15 " style="border-radius: 20px;">
				<image src="../../static/findTab1.png" mode="aspectFill" style="height: 153px;width:345px; position: absolute;border-radius: 20px;"></image>
				<view class="cf fs17 fw600 ml15" style="padding-top: 40px;">附近有324热门活动</view>
				<view class="dis_flex aic ju_b pt25 ml15" style="width: 30%;">
					<view class="" v-for="item,index in 4">
						<image src="../../static/findTab0.png" mode="aspectFill" style="width: 20px;height: 20px;"></image>
					</view>
				</view>
				<view class="cf pt5 pb20 fs13 ml15">1200个用户在附近</view>
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
					<view class=""
						style="width: 165px;height: 220px; background-color: #FFFFFF;border-radius: 15rpx;overflow: hidden;">
						<view class="" style="background-color: #000000;">
							<image src="../../static/findTab1.png" mode="aspectFill"
								style="width: 165px;height: 150px;"></image>
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
								<image src="../../static/findTab0.png" mode="aspectFill"
									style="width: 23px;height: 23px;"></image>
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
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName', 'userinfo'])
		},
		onLoad() {
		
		},
		methods: {
			...mapMutations(['logout', 'login']),
			getimg(img) {
				return api.getimg(img)
			},
			tiaozhuan(e) {
				return api.tiaozhuan(e)
			},
		}	
	}
</script>

<style>
	page {
		width: 100%;
		height: 100vh;
		background-color: #F3F3F3;
		
	}

	.content {
		padding-bottom: 50px;
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

	.topDz {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 30rpx;
		font-size: 14rpx
	}

	.topInput {
		background-color: #f6f6f6;
		border-radius: 35rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 12rpx;
		color: #3C3C43;
		padding: 12rpx 24rpx;
	}

	.topFq {
		width: 87rpx;
		height: 44.5rpx;
		background-image: linear-gradient(rgb(179, 125, 236), rgb(145, 69, 255));
		border-radius: 25rpx;
		color: #FFFFFF;
		font-size: 12rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		right: 30rpx;
	}

	.hotActivity {
		margin-bottom: 20px;
	}
</style>
