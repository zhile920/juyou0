<template>
	<view>
		<view class="">
			<image src="../../static/findTab1.png" mode="aspectFill" style="width: 100%;height:100vh;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			setTimeout(function(){
				uni.navigateTo({
					url:'../zhuce_0/zhuce_0'
				})
			},1000)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
