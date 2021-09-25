<template>
	<view>
		<view class=""  v-if="IsYes">
			<view class="ml15 mr15 mt35">
				<image src="../../static/findTab0.png" mode="aspectFill"
					style="width: 345px;height: 120px;z-index: 1;position: absolute;"></image>
				<view class="dis_flex aic ju_b pt20 pb35" style=" z-index: 99;position: relative;">
					<view class="">
						<view class=" pl25" style="">
							押金金额（元）
						</view>
						<view class="pt15 pl30 dis_flex aic">
							<image src="../../static/findTab0.png" mode="aspectFill" style="width: 20px;height: 20px;">
							</image>
							<text class="fw600 fs30" style="margin-left: 5px;">6</text>
						</view>
					</view>
					<view class="pt5 pb5 pr15 pl15 mr25" style="border: 2px solid #000000;border-radius: 15px;"
						@click='tiaozhuan' data-url='/pageL/my_zhifu/my_zhifu' :data-shifou='false'>
						补足押金
					</view>
				</view>
			</view>
			<view class="fw600 fs14 ml15">
				押金明细
			</view>
			<view class="ml15 mr15 mt15" v-for="item,index in 3">
				<view class="dis_flex aic ju_b fs12">
					<view class="">
						充值-微信支付
					</view>
					<view class="">
						成功
					</view>
				</view>
				<view class="dis_flex aic ju_b">
					<view class="fs12" style="color: #3C3C43;">
						2020-9-15 18:20:12
					</view>
					<view class="fs17 fw600">
						+33
					</view>
				</view>
				<view class="mt15" style="background-color: #3C3C43;width: 345px;height: 2px;"></view>
			</view>
			<view class="dis_flex aic ju_c mt35">
				<image src="../../static/findTab0.png" mode="aspectFill" style="width: 170px;height: 170px;"></image>
			</view>
			<view class="dis_flex aic ju_c pb35" style="color: #3C3C43;margin-top: 50px;">
				押金全退 | 联系客服
			</view>
		</view>
		
		
		
		
		
		<view class="" v-else>
			<view class="ml15 mr15 mt35">
				<image src="../../static/findTab0.png" mode="aspectFill"
					style="width: 345px;height: 120px;z-index: 1;position: absolute;"></image>
				<view class="dis_flex aic pt20 pb35" style=" z-index: 99;position: relative;">
					<view class="">
						<view class=" pl25 cf" style="">
							押金金额（元）
						</view>
						<view class="pt15 pl30 dis_flex aic">
							<image src="../../static/findTab0.png" mode="aspectFill" style="width: 20px;height: 20px;">
							</image>
							<text class="fw600 fs30 cf" style="margin-left: 5px;">6</text>
						</view>
					</view>
					
				</view>
			</view>
			<view class="fw600 fs14 ml15">
				押金明细
			</view>
			<view class="ml15 mr15 mt15" v-for="item,index in 3">
				<view class="dis_flex aic ju_b fs12">
					<view class="">
						充值-微信支付
					</view>
					<view class="">
						成功
					</view>
				</view>
				<view class="dis_flex aic ju_b">
					<view class="fs12" style="color: #3C3C43;">
						2020-9-15 18:20:12
					</view>
					<view class="fs17 fw600">
						+33
					</view>
				</view>
				<view class="mt15" style="background-color: #3C3C43;width: 345px;height: 2px;"></view>
			</view>
			<view class="dis_flex aic ju_c mt35">
				<image src="../../static/findTab0.png" mode="aspectFill" style="width: 170px;height: 170px;"></image>
			</view>
			<view class="dis_flex aic ju_c pb35" style="color: #3C3C43;margin-top: 50px;">
				押金全退 | 联系客服
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
				IsYes:true
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
				console.log(e)
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
