<template>
	<view>
		<view class="pr30 pl30">
			<view class="dis_flex aic ju_b ">
				<view class="">
					称号
				</view>
				<view class="fs12" style="color: #858589;">
					共9个称号>
				</view>
			</view>
			<view class="dis_flex aic mt10" style="margin-left: -10px;">
				<view class="cf fs12 ml10" v-for="item,index in 3" style="background-color: #3C3C43; padding: 1px 13px ; border-radius: 25px;">
					称号
				</view>
			</view>
			<view class="mt30 fw600">
				个人信息
			</view>
			<view class="mt10">
				来自上海市徐汇区，90后狮子座女生，喜欢萌<br/>物/王者荣耀，从事学生<br/>
				昵称：聚小游<br/>
				ID号：6886748<br/>
				年龄：23<br/>
				签名：这个人还没有签名
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
		background-color: #F3F3F3;
	}
</style>
