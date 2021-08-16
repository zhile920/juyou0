<template>
	<view class="">
		<view class="">
			<view class="width" style="background-color: #9145ff;height: 190px;">
				<!-- <image src="../../static/findTab1.png" mode="aspectFill" class="width"></image> -->
			</view>
			<view class="width" style="border-radius: 15px 15px 0 0;background-color: #F3F3F3;margin-top: -20px;">
				<view class="">
					<view class="dis_flex aic ju_b ">
						<view class="fs15 ml30 mt20" style="font-weight: 600;">
							热门话题
						</view>
						<view class="dis_flex aic ju_b fs12" style="width: 60px; margin-top: 20px;color: #9145FF;margin-right: 10px;">
							<view class="">
								话题广场
							</view>
							<view class="">
								>
							</view>
						</view>
					</view>
					<view class="dis_flex aic ff">
						<view class="ml30 mt10 dis_flex aic fs12" v-for="item,index in 4">
							<view class="">
								<image src="../../static/findTab0.png" mode="aspectFill" style="width: 16px;height: 16px;"></image>
							</view>
							<view class="ml5">
								治愈人心的萌物
							</view>
						</view>
					</view>
					<view class="dis_flex aic ju_c mt15 mb20">
						<view  style="width: 92%;height: 2px;background-color: #3C3C43;"></view>
					</view>
					<view class="ml30 dis_flex">
						<view class="">
							<image src="../../static/findTab0.png" mode="aspectFill" style="width: 50px;height: 50px;"></image>
						</view>
						<view class="ml10" style="display: block;margin: 0 auto;">
							<view class="mt5 fs17 fw600">
								聚小游
							</view>
							<view class="mt2" style="">
								23
							</view>
						</view>
					</view>
					
				</view>
				
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
