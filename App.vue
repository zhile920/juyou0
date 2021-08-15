<script>
	import Vue from 'vue'
	// import service from './service.js'
	// import amap from './common/amap-wx.js'; 
	import {
		mapState,
		mapMutations
	} from 'vuex'
	var that
	export default {
		onLaunch: function() {
			that = this
			console.log('App Launch');
			if(uni.getStorageSync('userInfo')){
				console.log('登录成功')
				this.login()
			}else{


			}
			uni.getSystemInfo({
				success: function(e) {
					
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif       
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onInit() {

		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			...mapMutations(['login', 'setadd']),
		},
	}
</script>
<style lang="scss">
	/*每个页面公共css */
	@import 'styles/base.scss';
	@import url("/common/iconfont.css");


	.uni-swiper-slides {
		height: 300rpx;
	}


	.hidden {
		display: none;
	}

	z-index8 {
		z-index: 8;
	}

	.zanwu {
		width: 100%;
		line-height: 240rpx;
		text-align: center;
		font-size: 28rpx;
		color: #999;
	}

	view {
		box-sizing: border-box;
		font-family: PingFang SC;
	}

	.dis_flex {
		/*  #ifndef APP-PLUS-NVUE  */
		display: flex;
		/*  #endif  */
	}

	.dis_flex_c {
		/*  #ifndef APP-PLUS-NVUE  */
		display: flex;
		/*  #endif  */
		flex-direction: column;
	}

	.aic {
		align-items: center;
	}

	.ais {
		align-items: stretch;
	}

	.aift {
		align-items: flex-start;
	}

	.aife {
		align-items: flex-end;
	}

	.ju_a {
		justify-content: space-around;
	}

	.ju_b {
		justify-content: space-between;
	}

	.ju_c {
		justify-content: center;
	}

	.flex_1 {
		flex: 1;
	}

	.flex_0 {
		flex: none;
	}

	.oh1 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}

	.oh2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;

	}

	view {
		word-break: break-all;

		word-wrap: break-word;
	}

	.oh3 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.oh4 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}

	.data_last {
		line-height: 100rpx;
		text-align: center;
		width: 100%;
		font-size: 24rpx;
		color: #666;
	}

	.data_null {
		width: 480upx;
		height: 480upx;
		margin-top: 260upx;
	}



	.xmfwb_box image,
	.xmfwb_box img,
	.xmfwb_box table,
	rich-text p,
	rich-text img,
	rich-text table {
		max-width: 100% !important;
	}

	.xcx_fwb_img {
		max-width: 100% !important;
	}

	.loading_def {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
	}

	.loading_def_img {
		width: 200rpx !important;
		height: 200rpx !important
	}

	.minh100 {
		width: 100%;
		min-height: 100vh;
		background: #fff;
		box-sizing: border-box;
	}


	.scroll_x {
		width: 100%;
		white-space: nowrap;
	}
</style>
