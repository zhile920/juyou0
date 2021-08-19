<template>
	<view>
		<view class="">
			<view class="" style="position: absolute;top: 0;left: 0;">
				<image src="../../static/findTab1.png" mode="aspectFill" style="width: 100vw;height: 100vh;"></image>
			</view>
			<view class="dis_flex aic ju_c">
				<view class="dis_flex aic ju_c" style="bottom: 50px;position: absolute;z-index: 9;">
					<view class="bgcf fs15" style="color: #9145FF; border-radius: 45rpx ;padding: 10px 140px;"
						@click='tiaozhuan' data-url='/pageL/zhuce_1/zhuce_1' :data-shifou='false'>
						开始
					</view>
				</view>
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

</style>
