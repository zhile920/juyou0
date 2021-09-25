<template>
	<view class="">
		<view class="">
			<view class="width dis_flex aic" style="background-color: #9145ff;height: 190px;">
				<view class="fs30 ml35" style="color: #FFFFFF;">
					发  现
				</view>
			</view>
			<view class="width" style="border-radius: 15px 15px 0 0;background-color: #F3F3F3;margin-top: -20px;">
				<view class="">
					<view class="dis_flex aic ju_b ">
						<view class="fs15 ml30 mt20" style="font-weight: 600;">
							热门话题
						</view>
						<view class="dis_flex aic ju_b fs12"
							style="width: 60px; margin-top: 20px;color: #9145FF;margin-right: 10px;">
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
								<image src="../../static/findTab0.png" mode="aspectFill"
									style="width: 16px;height: 16px;"></image>
							</view>
							<view class="ml5">
								治愈人心的萌物
							</view>
						</view>
					</view>
					<view class="dis_flex aic ju_c mt15 mb20">
						<view style="width: 92%;height: 2px;background-color: #3C3C43;"></view>
					</view>

					<view class="mb30" v-for="item,index in 5" @click='tiaozhuan'  data-url='/pageL/find_xiangqing/find_xiangqing' :data-shifou='false'>



						<view class="ml30 dis_flex">
							<view class="">
								<image src="../../static/findTab0.png" mode="aspectFill"
									style="width: 50px;height: 50px;">
								</image>
							</view>
							<view class="ml10" style="display: block;margin: 0 auto;">
								<view class="mt5 fs17 fw600">
									聚小游
								</view>
								<view class="mt2 fs15 cf" style="">
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
							<view class="dis_flex aic ju_b" style="">
								<view class="" v-for="item,index in 3">
									<image src="../../static/findTab0.png" mode="aspectFill"
										style="width: 100px;height: 100px;"></image>
								</view>
							</view>
							<view class="fs12 dis_flex aic ju_c mt8"
								style="width: 108px;background-color: #d2d2d4;padding: 5rpx;border-radius: 25rpx;">
								#治愈人心的萌物
							</view>
							<view class="dis_flex aic ju_b mt10">
								<view class="fs12" style="color: #afafb1;">
									<view class="">
										上海市 黄浦区 人民广场
									</view>
									<view class="">
										2020-09-14
									</view>
								</view>
								<view class="dis_flex aic">
									<view class="">
										<image src="../../static/findTab0.png" mode="aspectFill"
											style="width: 21px;height: 21px;"></image>
									</view>
									<view class="ml5">
										10
									</view>
									<view class="ml10">
										<image src="../../static/findTab0.png" mode="aspectFill"
											style="width: 21px;height: 21px;"></image>
									</view>
									<view class="ml5">
										3
									</view>
								</view>
							</view>
						</view>
						<view class="dis_flex aic ju_c mt15 mb20">
							<view style="width: 92%;height: 2px;background-color: #3C3C43;"></view>
						</view>
					</view>
					<view class="dis_flex aic ju_c mt15 mb30">
						<view style="width: 92%;height: 2px;background-color: #3C3C43;"></view>
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
		}	
	}
</script>

<style>
	page {
		background-color: #f3f3f3;
		width: 100%;
		height: 100vh;
	}
</style>
