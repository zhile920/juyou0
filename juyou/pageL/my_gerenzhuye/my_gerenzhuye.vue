<template>
	<view>
		<view class="">
			<view class="" style="background-color: #588255;height: 375px;">
				<view class="cf" style="position: absolute;right: 28px;top: 50px;" @click='tiaozhuan'  data-url='/pageL/my_bianjiziliao/my_bianjiziliao' :data-shifou='false'>
					编辑
				</view>
			</view>
			<view class="pr15 pl15" style="background-color: #f3f3f3;z-index: 999;margin-top: -20px;border-radius: 25px 25px 0 0;">
				<view class="dis_flex aic ju_b pt25">
					<view class="">
						<view class="">
							聚小游
						</view>
						<view class="">
							上海 50粉丝
						</view>
					</view>
					<view class="">
						关注
					</view>
				</view>
				<view class="dis_flex aic">
					<view class="dis_flex aic ju_c cf fs14 mt10" style="padding: 0 8px; background-color: #ed7586;border-radius: 20px;">
						23
					</view>
					<view class="dis_flex aic ju_c cf fs14 mt10 ml10" style="padding: 0 8px; background-color: #ed7586;border-radius: 20px;">
						狮子座
					</view>
					<view class="dis_flex aic ju_c cf fs14 mt10 ml10" style="padding: 0 8px; background-color: #ed7586;border-radius: 20px;">
						称号
					</view>
				</view>
				<view class="dis_flex aic ju_b mt10">
					<view class="">
						“这个人还没有签名”
					</view>
					<view class=""  @click='tiaozhuan'  data-url='/pageL/my_gengduoziliao/my_gengduoziliao' :data-shifou='false'>
						更多资料
					</view>
				</view>
				<view class="mt10" style="height: 1px;background-color: #3C3C43;">
					
				</view>
				<view class="">
					我的标签
				</view>
				<view class="dis_flex aic mt5">
					<view class="" style="padding: 0 5px;border: 1px solid #3C3C43;border-radius: 25px;">
						萌物
					</view>
					<view class="ml5" style="padding: 0 5px;border: 1px solid #3C3C43;border-radius: 25px;">
						王者荣耀
					</view>
				</view>
				<view class="mt10" style="height: 1px;background-color: #3C3C43;">
					
				</view>
				<view class="dis_flex aic mt10">
					<view class="">
						
					</view>
					<view class="">
						运动
					</view>
				</view>
				<view class="dis_flex aic ju_b ff">
					<view class="mt10" v-for="item,index in 4" style="width: 167px;height: 167px;border-radius: 25px;background-color: #bcc3cf;">
						
					</view>
				</view>
				<view class="dis_flex aic mt10">
					<view class="">
						
					</view>
					<view class="">
						棋牌
					</view>
				</view>
				<view class="dis_flex aic ju_b ff">
					<view class="mt10" v-for="item,index in 2" style="width: 167px;height: 167px;border-radius: 25px;background-color: #bcc3cf;">
						
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
		background-color: #f3f3f3;
	}
</style>
