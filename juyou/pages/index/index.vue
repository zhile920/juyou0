<template>
	<view class="content">
		<topbar bg_color="#F43B31" :have_top="true">
			<view class="dis_flex aic">
				<view class="">
					齐齐哈尔
				</view>
				<view class="">
					<input type="text" value="" placeholder="搜索用户/活动"/>
				</view>
				<view class="">
					发起
				</view>
			</view>
		</topbar>
		<view class="head">
			
		</view>
		<view class="fjActivity">
			
		</view>
		<view class="hotActivity">
			
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
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
