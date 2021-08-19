<template>
	<view>
		<topbar bg_color="#f3f3f3" :have_top="true"></topbar>
		<view class="" style="margin-left: 50px;margin-top: 65px;">
			<view class="fs17 fw600" style="color: #9145FF;">
				Step 03
			</view>
			<view class="fs17 mt3" style="">
				选择你的生日
			</view>
			<view class="ml20" style="margin-top: 40px;width: 150px;">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input cf dis_flex aic ju_c" style="background-color: #9145FF;padding: 10px 20px;">{{birth}}</view>
				</picker>
			</view>
			

		</view>
		<view class="dis_flex aic ju_c"  style="margin-top: 40px;">
			<view class="cf fs15 mt15" style="background-color: #9145FF; border-radius: 45rpx ;padding: 10px 120px;"
				@click='tiaozhuan' data-url='/pageL/zhuce_5/zhuce_5' :data-shifou='false'>
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
				date: '请选择',
				birth: '点击选择'
			}
		},
		onLoad() {

		},
		computed: {
			startDate() {
				return this.getDate('start');

			},
			endDate() {
				return this.getDate('end');
			},


		},
		methods: {
			getimg(img) {
				return api.getimg(img)
			},
			tiaozhuan(e) {
				return api.tiaozhuan(e)
			},
			bindDateChange: function(e) {
				this.birth = e.target.value
				console.log(this.birth)
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') { //validate
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
				this.day = day
				this.month = month
				this.year = year

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
