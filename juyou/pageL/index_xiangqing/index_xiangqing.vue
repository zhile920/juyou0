<template>
	<view>
		<view class="pr15 pl15" style="padding-bottom: 70px;">
			<view class="mt10" style="border-radius: 25px;">
				<view class="" style="border-radius: 25px 25px 0 0;">
					<image src="../../static/findTab0.png" mode="aspectFill" style="width: 345px;height: 345px;"></image>
				</view>
				<view class="pb10">
					<view class="dis_flex aic ju_b mt10">
						<view class="fs18 fw600">
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
					<view class="dis_flex aic ju_b">
						<view class="fs18 fw600">
							聚游生活馆新生活
						</view>
						<view class="dis_flex aic mt15">
							<view class="" style="border-radius: 25px 25px 0 0;">
								<image src="../../static/findTab0.png" mode="aspectFill" style="width: 15px;height: 15px;"></image>
							</view>
							<view class="ml5">
								1.2km
							</view>
						</view>
						
					</view>
					<view class="mt5 fs12">
						上海 乌鲁木齐南路111弄3号聚游商场4楼304室
					</view>
					<view class="mt10" style="background-color: #eee;height: 1px;">
						
					</view>
					<view class="dis_flex aic ju_b mt10">
						<view class="" v-for="item,index in 6">
							<image src="../../static/findTab0.png" mode="aspectFill" style="width: 45px;height: 45px;"></image>
						</view>
					</view>
					<view class="mt10" style="height: 8px; background-color: rgba(60, 60, 67, 0.18);">
						
					</view>
					<view class="mt10 fs18 fw600" style="margin-bottom: 35px;">
						猜你喜欢
					</view>
					
				</view>
				
			</view>
			
		</view>
		<view class="dis_flex aic ju_b bgcf pb35 pl20 pr15 pt5" style="position: fixed;bottom: 0;width: 100%;">
			<view class="">
				<text class="fs30">15</text>
				人感兴趣
			</view>
			<view class="dis_flex aic">
				<view class="cf dis_flex aic" style="padding: 9px 16px; background-color: #b677fe;border-radius: 15px 0 0 15px;">
					与他聊天
				</view>
				<view class="cf dis_flex aic" style="padding: 9px 16px;background-color: #954dfd;border-radius: 0 15px 15px 0;">
					立即加入
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import api from '../../components/service.js';
	var that
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName', 'userinfo'])
		},
		onLoad() {
		
		},
		methods: {
			...mapMutations(['logout', 'login']),
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
		background-color: #F3F3F3;
	}
</style>
