<template>
	<view>
		<topbar bg_color="#f3f3f3" :have_top="true"></topbar>
		<view class="" style="margin-left: 50px;margin-top: 65px;">
			<view class="fs17 fw600" style="color: #9145FF;">
				Step 01
			</view>
			<view class="fs17 mt3" style="">
				请输入你的手机号码
			</view>
			<view class="dis_flex aic" style="margin-top: 50px;">
				<view class="" style="">
					<view class="fs17" style="color: #bcbcbe;">
						+86
					</view>
					<view class="mt5" style="background-color: #9145FF;height: 2px;width: 32px;"></view>
				</view>
				<view class="" style="margin-left: 17px;">
					<input type="text" value="" />
					<view class="mt5" style="background-color: #9145FF;height: 2px;width: 227px;"></view>
				</view>
			</view>
			<view class="cf fs15" style="position:absolute;bottom: 50px; background-color: #9145FF; border-radius: 45rpx ;padding: 10px 120px;"
				@click='tiaozhuan' data-url='/pageL/zhuce_2/zhuce_2' :data-shifou='false'>
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
