<template>
	<view>
		<topbar bg_color="#f3f3f3" :have_top="true"></topbar>
		<view class="" style="margin-left: 50px;margin-top: 65px;">
			<view class="fs17 fw600" style="color: #9145FF;">
				Step 04
			</view>
			<view class="fs17 mt3" style="">
				请上传你的头像
			</view>
			<view class="dis_flex aic ju_c">
				<view class="dis_flex aic" style="margin-top: 20px;">
					<view class="dis_flex aic ju_b" style="width: 263px;">
						<view class="">
							<image src="../../static/findTab0.png" mode="aspectFill" style="width: 232px;height: 232px;"></image>
						</view>
					</view>
				</view>
			</view>
			
			
				
		</view>
		<view class="dis_flex aic ju_c">
			<view class="cf fs15 mt15" style="background-color: #9145FF; border-radius: 45rpx ;padding: 10px 120px;"
				@click='tiaozhuan' data-url='/pageL/zhuce_6/zhuce_6' :data-shifou='false'>
				从相册选择
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

