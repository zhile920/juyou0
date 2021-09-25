<template>
	<view>
		<view class="mt15 ml15 mr15" v-for="(item,index) in 2" style="padding: 15px;border: 1px solid #333333;border-radius: 15px;">
			<view class="dis_flex aic ju_b">
				<view class="dis_flex aic">
					<image src="../../static/findTab0.png" mode="aspectFill" style="width: 50px;height: 50px;"></image>
					<view class="ml6">
						篮球
					</view>
				</view>
				<view class="">
					<view class="">
						3月16日 星期六
					</view>
					<view class="" style="text-align: end;">
						16:00
					</view>
					
				</view>
			</view>
			<view class="mt10">
				养生篮球，皮痒求锤，皮痒求锤，皮痒求锤。重要的事情说三遍！
			</view>
			<view class="dis_flex aic ju_b mt5" style="width: 48%;">
				<view class="" v-for="item,index in 5">
					<image src="../../static/findTab0.png" mode="aspectFill" style="width: 25px;height: 25px;"></image>
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
	page{
		width: 100%;
		height: 100vh;
		background-color: #f3f3f3;
	}
</style>
