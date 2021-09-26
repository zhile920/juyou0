<template>
	<view>
		<topbar bg_color="#F3F3F3" :have_top="true">
			<view class="dis_flex aic ju_c" style="width: 100%;">
				<view class="" style="position: absolute;left: 15px;"  @click='back'>
					<view class="">
						<text class="iconfont icon-VIP"></text>
					</view>
				</view>
				<view class="" style="text-align: center;">
					运动
				</view>
			</view>
		</topbar>
		<view class="pr15 pl15 pt15">
			<view class="dis_flex aic ju_b">
				<view class="">
					距离
				</view>
				<view class="">
					日期
				</view>
				<view class="">
					条件筛选
				</view>
				<view class="">
					活动分类
				</view>
			</view>
			<view class="bgcf mt10" style="border-radius: 25px;">
				<view class="" style="border-radius: 25px 25px 0 0;">
					<image src="../../static/findTab0.png" mode="aspectFill" style="width: 345px;height: 345px;"></image>
				</view>
				<view class="pl20 pr20 pb20">
					<view class="dis_flex aic ju_b mt10">
						<view class="">
							3月16日  星期六 16：00
						</view>
						<view class="">
							66/人
						</view>
					</view>
					<view class="fs12 mt10" style="width: 108px; padding: 1px 8px; background-color: rgba(60, 60, 67, 0.18);border-radius: 25px;">
						#治愈人心的萌物
					</view>
					<view class="mt10" style="background-color: #eee;height: 1px;">
						
					</view>
					<view class="">
						
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
	page{
		background-color: #F3F3F3;
	}
</style>
