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
					所在城市
				</view>
				<view class="topFq" style="position: absolute;right: 15px;">
					<text class="iconfont icon-VIP"></text>
				</view>
			</view>
		</topbar>
		<view class="">
			<map name="" style="width: 100vw;height: 100vh;"></map>
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

</style>
