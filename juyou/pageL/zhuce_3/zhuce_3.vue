<template>
	<view>
		<topbar bg_color="#f3f3f3" :have_top="true"></topbar>
		<view class="" style="margin-left: 50px;margin-top: 65px;">
			<view class="fs17 fw600" style="color: #9145FF;">
				Step 02
			</view>
			<view class="fs17 mt3" style="">
				你是男生还是女生?
			</view>
			<view class="dis_flex aic" style="margin-top: 54px;margin-right: 60px;margin-left: 10px;">
				<view class="dis_flex aic ju_b" style="width: 263px;">
					<view class="">
						<image src="../../static/findTab0.png" mode="aspectFill" style="width: 113px;height: 113px;"></image>
					</view>
					<view class="">
						<image src="../../static/findTab0.png" mode="aspectFill" style="width: 113px;height: 113px;"></image>
					</view>
				</view>
			</view>
			<view class="fs13" style="margin-top: 69px;">
				性别只有一次选择机会，注册的完成后不能修改
			</view>
		</view>
		<view class="dis_flex aic ju_c">
			<view class="cf fs15 mt15" style="background-color: #9145FF; border-radius: 45rpx ;padding: 10px 120px;"
				@click='tiaozhuan' data-url='/pageL/zhuce_4/zhuce_4' :data-shifou='false'>
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

