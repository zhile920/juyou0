<template>
	<view>
		<topbar bg_color="#f3f3f3" :have_top="true"></topbar>
		<view class="" style="margin-left: 50px;margin-top: 65px;">
			<view class="fs17 fw600" style="color: #9145FF;">
				Step 05
			</view>
			<view class="fs17 mt3" style="">
				起个名字吧
			</view>
			<view class="fs17" style="">
				让别的小伙伴认识你
			</view>
			<view class="" style="margin-top: 28px;">
				<view class="">
					<input type="text" value="" />
				</view>
				<view class="mt3" style="width: 275px;height: 2px;background-color: #9145FF;">
				</view>
				<view class="fs11 mt3" style="float: right;margin-right: 50px;color: #bcbcbe;">
					0/8
				</view>
			</view>



		</view>
		<view class="dis_flex aic ju_c" style="margin-top:67px">
			<view class="cf fs15" style="background-color: #9145FF; border-radius: 45rpx ;padding: 10px 120px;"
				@click='tiaozhuan' data-url='/pageL/zhuce_8/zhuce_8' :data-shifou='false'>
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
