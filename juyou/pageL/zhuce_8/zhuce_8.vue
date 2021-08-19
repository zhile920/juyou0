<template>
	<view>
		<topbar bg_color="#f3f3f3" :have_top="true"></topbar>
		<view class="" style="margin-left: 50px;margin-top: 65px;">
			<view class="fs17 fw600" style="color: #9145FF;">
				Step 06
			</view>
			<view class="fs17 mt3" style="">
				选择1-3个你的兴趣
			</view>
			<view class="dis_flex aic ju_b ff" style="margin-top: 23px;margin-right: 50px;margin-left: -36px;">
				<view class="" v-for="item,index in 9" style="margin-left: 36px;margin-top: 37px;">
					<view class="">
						<image src="../../static/findTab0.png" mode="aspectFill" style="width: 50px;height: 50px;"></image>
					</view>
					<view class="dis_flex aic ju_c">
						运动
					</view>
				</view>
				
				
			</view>



		</view>
		<view class="dis_flex aic ju_c" style="margin-top:67px">
			<view class="cf fs15" style="background-color: #9145FF; border-radius: 45rpx ;padding: 10px 120px;"
				@click='tiaozhuan' data-url='/pageL/zhuce_9/zhuce_9' :data-shifou='false'>
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
	page {
		width: 100%;
		height: 100vh;
		background-color: #f3f3f3;
	}
</style>
