<template>
	<view>
		<view class="">
			<view class="bgcf pl15 pr15 pb15">
				<view class="mt5">
					头像
				</view>
				<view class="mt5" style="background-color: #bec784; width: 165px;height: 165px;border-radius: 25px;">
					
				</view>
				<view class="mt5">
					形象照
				</view>
				<view class="dis_flex aic ju_b mt5">
					<view class="" v-for="(item,index) in 4" style="background-color: #dcdcde; width: 80px;height: 80px;border-radius: 10px;">
					</view>
				</view>
			</view>
			<view class="mt10 bgcf pr15 pl15">
				<view class="dis_flex aic ju_b" style="padding: 15px 0;border-bottom: 2px solid #eee;">
					<view class="">
						昵称
					</view>
					<view class="">
						>
					</view>
				</view>
				<view class="dis_flex aic ju_b" style="padding: 15px 0;border-bottom: 2px solid #eee;">
					<view class="">
						年龄/星座
					</view>
					<view class="">
						>
					</view>
				</view>
				<view class="dis_flex aic ju_b" style="padding: 15px 0;border-bottom: 2px solid #eee;">
					<view class="">
						居住地
					</view>
					<view class="">
						>
					</view>
				</view>
				<view class="dis_flex aic ju_b" style="padding: 15px 0;border-bottom: 2px solid #eee;">
					<view class="">
						签名
					</view>
					<view class="">
						>
					</view>
				</view>
				<view class="dis_flex aic ju_b" style="padding: 15px 0;border-bottom: 2px solid #eee;">
					<view class="">
						兴趣
					</view>
					<view class="">
						>
					</view>
				</view>
				<view class="dis_flex aic ju_b" style="padding: 15px 0;border-bottom: 2px solid #eee;">
					<view class="">
						职业
					</view>
					<view class="">
						>
					</view>
				</view>
				<view class="dis_flex aic ju_b" style="padding: 15px 0;">
					<view class="">
						学校
					</view>
					<view class="">
						>
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
	page{
		width: 100%;
		height: 100vh;
		background-color: #f3f3f3;
	}
</style>
