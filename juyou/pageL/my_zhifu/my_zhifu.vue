<template>
	<view>
		<view class="bgcf mt10" style="padding: 39px;">
			<view class="dis_flex aic ju_c fs15 ml15">
				需支付金额（元）
			</view>
			<view class="dis_flex aic ju_c fw600 " style="font-size: 38px;">
				￥30.00
			</view>
		</view>
		<view class="mt15 fw600 ml15" style="color: #3C3C43;">
			请选择支付方式
		</view>
		<view class="">
			<radio-group @change="radioChange">
				<label class="dis_flex aic ju_b bgcf mt15" v-for="item,index in 2" style="padding: 8px 15px;">
					<view class="dis_flex aic">
						<view class="">
							<image src="../../static/findTab0.png" mode="aspectFill" style="width: 45px;height: 45px;">
							</image>
						</view>
						<view class="ml10 fw600">
							微信
						</view>
					</view>
					<radio value="微信" :checked="index == current" />
				</label>
			</radio-group>
		</view>
		
		<view class="cf  fs16 fw600 mt25 ml15 mr15 pt15 pb15 dis_flex aic ju_c" style="background-color: #9145FF;border-radius: 8px;">
			确认支付
		</view>
	</view>
</template>

<script>
	import api from '../../components/service.js';
	var that
	export default {
		data() {
			return {
				current: 0
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
			radioChange(e) {
				this.current = e.target.value
				// for (let i = 0; i < this.items.length; i++) {
				// 	if (current === evt.target.value) {
				// 		this.current = i;
				// 		break;
				// 	}
				// }
			}
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
