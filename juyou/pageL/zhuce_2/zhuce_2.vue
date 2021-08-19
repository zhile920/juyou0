<template>
	<view>
		<topbar bg_color="#f3f3f3" :have_top="true">
			<view class="ml15" @click="back">
				<image src="../../static/findTab1.png" mode="aspectFill" style="width: 12px;height: 21px;"></image>
			</view>
		</topbar>
		<view class="" style="margin-left: 50px;margin-top: 65px;">
			<view class="fs17 fw600" style="color: #9145FF;">
				Step 01
			</view>
			<view class="fs17 mt3">
				请输入验证码
			</view>
			<view class="fs11 mt3" style="color: #bcbcbe;">
				短信验证码已发送到16666666666
			</view>
			<view class="dis_flex aic ju_b" style="margin-top: 50px;margin-left: -10px;margin-right: 50px;">
				<view class="" style="margin-left: 10px;" v-for="item,index in 4">
					<view class="dis_flex aic ju_c">
						<input type="text" value="" />
					</view>
					<view class="mt5" style="background-color: #9145FF;height: 2px;width: 50px;"></view>
				</view>
			</view>
			<view class="fs12" style="margin-top: 38px;color: #bcbcbe;">
				没有收到验证码？(29s)
			</view>
			
		</view>
		<view class="dis_flex aic ju_c">
			<view class="cf fs15" style="position:absolute;bottom: 50px; background-color: #9145FF; border-radius: 45rpx ;padding: 10px 120px;"
				@click='tiaozhuan' data-url='/pageL/zhuce_3/zhuce_3' :data-shifou='false'>
				下一步
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
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}	
	}
</script>

<style>
	page{
		width: 100%;
		height: 100vh;
		background-color: #f3f3f3;
	}
</style>
