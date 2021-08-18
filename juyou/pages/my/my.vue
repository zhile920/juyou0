<template>
	<view>
		<view class="" style="padding-bottom: 50px;">
			<view class="" style="position: relative;top: 0;left: 0;width: 100%;background-color: #9b55f8;">
				<view class="dis_flex aic ju_b" style="padding-top: 50px;">
					<view class="dis_flex aic ">
						<view class="ml30">
							<image src="../../static/findTab0.png" mode="aspectFill" style="width: 60px;height: 60px;">
							</image>
						</view>
						<view class="cf ml20">
							<view class="fs22">
								聚小游
							</view>
							<view class="fs13 mt3">
								ID 6886748
							</view>
						</view>

					</view>
					<view class="cf fs12 dis_flex aic mr30">
						<view class="">
							个人中心
						</view>
						<view class="ml5">
							>
						</view>
					</view>
				</view>
				<view class="mt30 mb30 ml30 mr30 dis_flex aic ju_b">
					<view class="cf" v-for="item,index in 4">
						<view class="fs18 dis_flex aic ju_c">
							234
						</view>
						<view class="fs12 dis_flex aic ju_c">
							关注
						</view>
					</view>
				</view>
				<view class="dis_flex aic ju_c">
					<image src="../../static/findTab1.png" mode="aspectFill" style="width: 85%;height: 50px;"></image>
				</view>
			</view>
			<view class="bgcf dis_flex aic ju_b" style="padding: 32px 60px 20px;border-radius: 0 0 20px 20px;">
				<view class="" v-for="item, index in 3">
					<view class="dis_flex aic ju_c">
						<image src="../../static/findTab0.png" mode="aspectFill" style="width: 32px;height: 32px;">
						</image>
					</view>
					<view class="mt5">
						我的活动
					</view>
				</view>
			</view>
			<view class="dis_flex aic ju_b" style="margin: 20px 81px ;">
				<view class="" v-for="item,index in 3">
					<view class="fs17">
						动态
					</view>
					<view class="" style="background-color: #9145FF;width: 34px;height: 2px;"></view>
				</view>
			</view>
			<view class="mt10 mb30" v-for="item,index in 3">
				<view class="ml30 dis_flex aic">
					<view class="">
						<image src="../../static/findTab0.png" mode="aspectFill" style="width: 50px;height: 50px;">
						</image>
					</view>
					<view class="ml15">
						<view class="">
							聚小游
						</view>
						<view class="mt5 fs15 cf" style="">
							<view class="dis_flex aic ju_c"
								style="padding: 3rpx 4rpx;background-color: #ed7586;border-radius: 25rpx;">
								<view class="dis_flex aic">
									<image src="../../static/findTab0.png" mode="aspectFill"
										style="width: 30rpx;height: 30rpx;"></image>
								</view>
								<view class="" style="margin-left: 5rpx;">
									23
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="ml30 mr30 mt10">
					<view class="fs13 oh3" style="line-height: 20px;">
						#治愈人心的萌物
						去年的暑假，因为前一个三年的申根旅游签到期，又成功地在德国签证中心拿到了一个五年的申根旅游签。虽然这是一个去过无数遍的国家，但作为启用五年申根签的第一次旅行，还是必须把德国作为主要目的地的。在德国地图上犹豫
					</view>
					<view class="fs15 mt5" style="color: #9145FF;">
						展开
					</view>
					<view class="dis_flex aic ju_b">
						<view class="" v-for="item,index in 3">
							<image src="../../static/findTab0.png" mode="aspectFill"
								style="width: 100px;height: 100px;"></image>
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
	page {
		width: 100%;
		height: 100vh;
		background-color: #f3f3f3;
	}
</style>
