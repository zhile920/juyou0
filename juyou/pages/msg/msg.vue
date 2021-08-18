<template>
	<view class="" style="padding-bottom: 35px;">
		<topbar bg_color="#f3f3f3">
			<view class="fs18 fw600 mt20 ml15">
				消息
			</view>
		</topbar>
		<view class="mb35">
			<view class="dis_flex aic mt20 bgcf" v-for="item,index in 9">
				<view class="dis_flex aic">
					<view class="" style="padding: 10px 15px;">
						<image src="../../static/findTab0.png" mode="aspectFill" style="width: 50px;height: 50px;"></image>
					</view>
					<view class="width pr15">
						<view class="dis_flex aic ju_b">
							<view class="fs17 fw600" style="color: #000000;">
								官方消息
							</view>
							<view class="fs15" style="color: #8a8a8e;">
								09-18
							</view>
						</view>
						<view class="oh1 mt2 fs15" style="color: #8a8a8e;">
							聚游生活馆盛大开张，巨多惊喜等你发掘...
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
	page{
		background-color: #f3f3f3;
		width: 100%;
		height: 100vh;
	}
</style>
