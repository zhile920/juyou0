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
			<view class="bgcf mt10" style="border-radius: 25px;" v-for="item,index in 3" @click='tiaozhuan'  data-url='/pageL/index_xiangqing/index_xiangqing' :data-shifou='false'>
				<view class="" style="border-radius: 25px 25px 0 0;">
					<image src="../../static/findTab0.png" mode="aspectFill" style="width: 345px;height: 345px;"></image>
				</view>
				<view class="pl20 pr20 pb10">
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
