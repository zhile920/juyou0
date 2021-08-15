import Vue from 'vue'
import store from '../store/index.js'
const imgurl = 'http://jianyou365.com.a.800123456.vip/'; //https://cdn.51daiyan.cn/
const IPurl = imgurl + 'api/';
var header = {
	'content-type': 'application/x-www-form-urlencoded',
}

const pveimg = function(e) {
	var current = e.currentTarget.dataset.src
	var urls = e.currentTarget.dataset.array

	let urls1 = []
	if (urls) {
		urls1 = urls

	} else {
		urls1[0] = current
	}
	console.log(urls1)
	uni.previewImage({
		current: current, // 当前显示图片的http链接
		urls: urls1 // 需要预览的图片http链接列表
	})

}


/**
 * @description  跳转方法 
 * @example   
 * example   
 * @author: wenxin  
 * @createTime: 2021-6-7 12:01:06  
 */
const jump = function(e) {
	console.log(e.currentTarget.dataset.type)
	var datas = e.currentTarget.dataset
	if (datas.login) {
		console.log(datas.haslogin)
		if (!datas.haslogin) {
			uni.navigateTo({
				url: '/pagesA/login/login',
			});
			return
		}
	}
	if (datas.type == 'sp') {
		console.log(datas.spurl)
		store.commit('spurl_fuc', datas.spurl)
		uni.navigateTo({
			url: datas.url
		})
		return
	}
	if (datas.type == 2) {
		uni.switchTab({
			url: datas.url
		})
	} else {
		uni.navigateTo({
			url: datas.url
		})
	}
}
// 配置接口请求的公共方法
const http = ({
	url = '',
	param = {},
	method = '',
	header = header
} = {}) => {

	let timeStart = Date.now();
	return new Promise((resolve, reject) => {
		console.log('请求url：' + getUrl(url));

		console.log("请求头：", header)
		console.log("param：", param)
		wx.request({
			url: getUrl(url),
			data: param,
			method: method,
			header: header,
			success: (res) => {
				uni.hideLoading();
				uni.stopPullDownRefresh(); //慎用hideLoading,会关闭wx.showToast弹窗
				if (res.data.code == -1) {
					console.log('登出')
					store.commit('logout')
					uni.navigateTo({
						url: '/pagesB_mxx/login/login'
					})
					return
				} else if (res.data.code == 0 && res.msg == '请先登录账号~') {
					console.log('请先登录账号')
					uni.navigateTo({
						url: '/pagesB_mxx/login/login'
					})
					return
				} else if (res.data.code == 0) {
					if (res.data.msg) {

						uni.showToast({
							icon: 'none',
							title: res.data.msg
						})
					} else {

						uni.showToast({
							icon: 'none',
							title: '操作失败'
						})
					}
				}
				resolve(res.data)
			},
			fail: (err) => {
				uni.hideLoading()
				uni.stopPullDownRefresh()
				reject(err)
				console.log('失败')
			}
			// ,complete: (res) => {
			// 	uni.hideLoading();
			// 	uni.stopPullDownRefresh(); //慎用hideLoading,会关闭wx.showToast弹窗
			// 	console.log(`耗时${Date.now() - timeStart}`);
			// 	console.log(res)
			// 	if (res.statusCode == 200) { //请求成功

			// 		if (res.data.code == -1) {
			// 			store.commit('logout')
			// 			uni.navigateTo({
			// 				url: '/pages/login/login'
			// 			})
			// 			return
			// 		} else if (res.data.code == 0 && res.msg == '请先登录账号~') {
			// 			uni.navigateTo({
			// 				url: '/pages/login/login'
			// 			})
			// 			return
			// 		} else if (res.data.code == 0) {
			// 			if (res.data.msg) {

			// 				uni.showToast({
			// 					icon: 'none',
			// 					title: res.data.msg
			// 				})
			// 			} else {

			// 				uni.showToast({
			// 					icon: 'none',
			// 					title: '操作失败'
			// 				})
			// 			}
			// 		}
			// 		resolve(res.data)
			// 	} else {
			// 		reject(res);
			// 	}
			// }
		})
	})
}
// 获取url
const getUrl = (url) => {
	if (url.indexOf('://') == -1) {
		url = IPurl + url;
	}
	return url;
}

//暴露出去调用的方法


// get方法
const P_get = (url, param = {}) => {
	wx.showLoading({
		title: '请求中，请耐心等待...',
	});
	return http({
		url,
		param,
		method: 'GET'
	})
}

const P_post = (url, param = {},header={}) => {
	return http({
		url,
		param,
		header,
		method: "POST"
	})
}

const P_put = (url, param = {}) => {
	return http({
		url,
		param,
		method: 'put'
	})
}

const P_delete = (url, param = {}) => {
	return http({
		url,
		param,
		method: 'put'
	})
}

/**
 * @description 图片过滤  
 * @example   
 * getimg('/static/..')  
 * @author: wenxin  
 * @createTime: 2021-6-7 12:08:25  
 */
const getimg = function(img) {
	if (!img) return img
	// console.log(imgurl+img)
	if (img.indexOf('://') == -1) {
		img = imgurl + img
	}
	console.log(img)
	return img
}
/**
 * @description   
 * @example   
 * example   
 * @param {String} url = ''  接口请求地址  
 * @param {String} method = [get|post] 可选值域包括get和post，get是直接请求，post是提交数据  
 * @author: wenxin  
 * @createTime: 2021-6-21 11:33:26 ?F10: AM?  
 */
const getimgarr = function(imgs, type) {
	if (!imgs) return
	if (!type) {
		type = ','
	}
	imgs = imgs.split(type)
	// console.log(imgurl+img)
	var newimgs = []
	for (var i = 0; i < imgs.length; i++) {
		var img = imgs[i]
		if (img.indexOf('://') == -1) {
			img = imgurl + img
		}
		newimgs.push(img)
	}
	// console.log(newimgs)
	return newimgs
}

/**
 * @description 打电话  
 * @example   
 * example 
 * @author: wenxin  
 * @createTime: 2021-6-7 12:08:06  
 */

const call = function(e) {
	console.log(e)
	// return
	if (e.currentTarget.dataset.tel) {
		// wx.makePhoneCall({
		// 	phoneNumber: e.currentTarget.dataset.tel+''
		// })
		uni.showModal({
			title: '提示',
			content: '是否拨打' + e.currentTarget.dataset.tel + '?',
			success: function(res) {
				if (res.confirm) {
					wx.makePhoneCall({
						phoneNumber: e.currentTarget.dataset.tel + ''
					})
					console.log('用户点击确定');
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}
		});
	}
}





// 微信登录
const wxlogin = function(num) {
	var that = this
	if (num == 1) {
		uni.showLoading({
			mask: true,
			title: '正在登录'
		})
	}
	if (num == 'token') {
		var data = {
			token: uni.getStorageSync('token'),
			type: 4
		}

		uni.request({
			url: IPurl + '/login',
			data: data,
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			dataType: 'json',
			method: 'POST',
			success(res) {
				uni.hideLoading()
				console.log(res.data)
				if (res.data.code == -2) {
					if (num == 1) {
						uni.redirectTo({
							url: '/pages/login_tel/login_tel?nickname=' + uinfo.nickName +
								'&avatarurl=' + uinfo.avatarUrl
						})
					} else {
						uni.navigateTo({
							url: '/pages/login_tel/login_tel?nickname=' + uinfo.nickName +
								'&avatarurl=' + uinfo.avatarUrl
						})
					}
					return
				}
				if (res.data.code == 1) {
					console.log('登录成功')
					console.log(res.data)
					uni.setStorageSync('token', res.data.data.userToken)

					store.commit('logindata', res.data.data)
					store.commit('login', res.data.data.nickname)
					uni.setStorageSync('loginmsg', res.data.data)

				} else {
					uni.removeStorageSync('userInfo')
					uni.removeStorageSync('token')
					uni.showToast({
						icon: 'none',
						title: '登录失败',
					})
				}

			},
			fail() {
				uni.hideLoading()
				uni.showToast({
					icon: 'none',
					title: '登录失败'
				})
			}
		})
	} else {
		// #ifdef MP-WEIXIN
		var userInfo = uni.getStorageSync('userInfo')
		if (!userInfo) {

		} else {
			uni.login({
				success: function(res) {

					// 发送 res.code 到后台换取 openId, sessionKey, unionId
					var uinfo = userInfo
					let data = {
						code: res.code,
						nickname: uinfo.nickName,
						avatarurl: uinfo.avatarUrl,
						type: 1
					}
					if (num == 'token') {
						data = {
							token: uni.getStorageSync('token')
						}
					}
					let rcode = res.code
					console.log(res.code)
					uni.request({
						url: IPurl + '/login',
						data: data,
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						dataType: 'json',
						method: 'POST',
						success(res) {
							uni.hideLoading()
							console.log(res.data)
							if (res.data.code == -2) {
								uni.showToast({
									icon: 'none',
									title: '请绑定手机号'
								})
								// setTimeout(()=>{
								// 	if (num == 1) {
								// 		uni.redirectTo({
								// 			url: '/pages/login_tel/login_tel?nickname=' + uinfo.nickName + '&avatarurl=' + uinfo.avatarUrl
								// 		})
								// 	} else {
								// 		uni.navigateTo({
								// 			url: '/pages/login_tel/login_tel?nickname=' + uinfo.nickName + '&avatarurl=' + uinfo.avatarUrl
								// 		})
								// 	}
								// },1000)
								return
							}
							if (res.data.code == 1) {
								console.log('登录成功')
								console.log(res.data)
								uni.setStorageSync('token', res.data.data.userToken)

								store.commit('logindata', res.data.data)
								store.commit('login', res.data.data.nickname)
								uni.setStorageSync('loginmsg', res.data.data)

								// event.trigger({
								//     type:'test',
								//     page:'/pages/index/index',
								//     //obj和test是举的例子，随意啥都行，这个传过去在on中的args中都可以获取到
								//     obj:{

								//     },
								//     test:{
								// 			'loginmsg': res.data.data
								//     },
								//     success:function(data){
								//         //data为on中返回的数据
								//     }
								// });
								// im login



								if (num == 1) {
									uni.showToast({
										icon: 'none',
										title: '登录成功'
									})
									setTimeout(() => {
										// uni.navigateBack()
										uni.switchTab({
											url: '/pages/index/index'
										})
									}, 1000)
								}
							} else {
								uni.removeStorageSync('userInfo')
								uni.removeStorageSync('token')
								uni.showToast({
									icon: 'none',
									title: '登录失败',
								})
							}

						},
						fail() {
							uni.hideLoading()
							uni.showToast({
								icon: 'none',
								title: '登录失败'
							})
						}
					})
				}
			})
		}
		// #endif
	}
}

export default {
	IPurl,
	imgurl,
	P_get,
	P_post,
	jump,
	pveimg,
	getimg,
	getimgarr,
	call
}
