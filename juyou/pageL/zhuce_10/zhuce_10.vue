<template>
	<view>
		<topbar bg_color="#f3f3f3" :have_top="true">
			<view class="fs13" style="position: absolute;right: 18px;color: #8a8a8e;"  @click='goIndex'>
				跳过 >
			</view>
		</topbar>
		<view class="dis_flex aic ju_c" style="margin-top: 50px;">
			<view class="fs17">
				最后，让新朋友更好的认识你 (2/2)
			</view>
		</view>
		<view class="bgcf p20" style="height: 275px; margin-top: 24px;margin-left: 50px;margin-right: 50px;border-radius: 10px;">
			<view class="dis_flex aic">
				<view class="">
					<image src="../../static/findTab0.png" mode="aspectFill" style="width: 28px;height: 35px;"></image>
				</view>
				<view class="ml10 fs16">
					旅游
				</view>
			</view>
			<view class="mt15 fs17 fw600">
				你去过并最喜欢的一个国家
			</view>
			<view class="">
				<textarea class="mt15" type="text" value="" style="width: 235px;height: 100px;"/>
			</view>
			<view class="dis_flex aic ju_b" style="float: right;width: 85px;margin-top: 25px;">
				<view class="">
					<image src="../../static/findTab0.png" mode="aspectFill" style="width: 13px;height: 13px;"></image>
				</view>
				<view class="fs12" style="color:#8a8a8e;">
					换一个问题
				</view>
			</view>
		</view>
		<view class="dis_flex aic ju_c" style="margin-top:40px">
			<view class="cf fs15" style="background-color: #9145FF; border-radius: 45rpx ;padding: 10px 120px;"
				@click='goIndex'>
				完成
			</view>
		</view>
	</view>
</template>

<script>
	import api from '../../components/service.js';
	var that
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			getimg(img) {
				return api.getimg(img)
			},
			tiaozhuan(e) {
				return api.tiaozhuan(e)
			},
			goIndex(){
				uni.switchTab({
					url:'../../pages/index/index'
				})
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100vh;
		background-color: #f3f3f3;
	}
</style>
