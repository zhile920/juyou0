//马东元

var IPurl = ''
var img_url = ''
var denrg
import store from '../store/index.js'
// 图片拼接路径
const getimg = function(imgs) {
	if (!imgs) {
		return
	}
	if (imgs.indexOf('://') == -1) {
		imgs = img_url + imgs
	}
	// console.log(imgs)
	return imgs
}

const wxlogin = function(deng) {
	// 单个请求
	// console.log(deng)
	wx.login({
		success(arr) {

			if (arr.code) {
				const value = uni.getStorageSync('user');
				var pass = uni.getStorageSync('pass');

				console.log(value)
				console.log(pass)
				var data = {
					mobile: value,
					password: pass,

				}

				if (deng == 1) {
					//弹出提示框
					uni.showLoading({
						title: '正在登录...',
						mask: true
					})
				}

				P_post('Member.Member/login', data).then(res => {
					console.log(res)
					if (res.status == 200) {
						uni.setStorage({
							key: 'token',
							data: res.token
						})
						uni.setStorageSync('userinfo', res.data)
						// console.log(res.data.userinfo)
						that.login(res.data);
						store.commit('login', res.data)
						uni.setStorageSync('rescode', arr.code)
						const rescode = uni.getStorageSync('rescode');
						console.log(rescode)
						var datas = {
							code: rescode
						}
						P_get('Member.Member/getWechatOpenid', datas).then(nus => {
							console.log(nus, 'opopopooopid')
							if (nus.status == 200) {
								uni.setStorageSync('code', nus.data)
							} else {
								if (!nus.msg) {
									uni.showToast({
										title: '失败',
										icon: 'none',
									});
								} else {
									uni.showToast({
										title: nus.msg,
										icon: 'none',
									});
								}

							}
						}).catch(e => {
							console.log(e)
						})
						if (deng == 1) {
							uni.showToast({
								title: '登录成功',
								icon: 'none',
							})
							setTimeout(function() {
								wx.navigateBack({
									delta: 1
								})
							}, 1000)
						}

					} else {
						if (!res.msg) {
							uni.showToast({
								title: '失败',
								icon: 'none',
							});
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none',
							});
						}

					}
				}).catch(e => {
					console.log(e)
				})
			} else {
				console.log('登录失败！' + arr.errMsg)
			}
		}
	})

}
// 跳转带参数
// var idadd = ids(type, userId) {
//  uni.navigateTo({
//   url: '?=' + type + '&=' + userId
//  })
// },
/**
 * @description    配置接口请求的公共方法
 * @example   
 * example   
 * @param {String} url = ''  接口请求地址  
 * @param {String} param = {}  接口请求参数  
 * @param {String} header = {}  接口请求头  
 * @param {String} method = [get|post] 可选值域包括get和post，get是直接请求，post是提交数据  
 * @author: wenxin  
 * @createTime: 2021-4-6 15:09:19  
 */
const http = ({
	url = '',
	param = {},
	method = '',
	header = {
		'content-type': 'application/x-www-form-urlencoded',
		'Authorization': uni.getStorageSync('token') || '',

		// 'userId':uni.getStorageSync('userId')||''
	},
} = {}) => {

	let timeStart = Date.now();
	return new Promise((resolve, reject) => {
		// console.log('请求url：' + getUrl(url));

		// console.log("请求头：", header)
		// console.log("param：", param)
		uni.request({
			url: getUrl(url),
			data: param,
			method: method,
			header: header,
			success(res) {
				uni.hideLoading()
				uni.stopPullDownRefresh()
				if (res.data.status == 101) {
					store.commit('logout')
					denrg = 0
					if (denrg == 1) {
						console.log(denrg)
						// uni.showToast({
						 // title: '请勿多次点击',
						 // icon: 'none',
						// })
						return
					} else {
						denrg = 1
						uni.showToast({
							title: '请重新登录',
							icon: 'none',
						});
						console.log('loginloginloginoigloingloingologin')
						setTimeout(function() {
							uni.navigateTo({
								url: '/pagesA/login/login'
							})
						}, 500)
						setTimeout(function() {
							denrg = 0
						}, 3000)
						console.log(denrg)
					}


					return
				}
				resolve(res.data)
			},
			fail(err) {
				uni.hideLoading()
				uni.stopPullDownRefresh()
				reject(err)
			},
			// complete: (res) => {
			//               if (res.code == 1) {
			//                                  resolve(res.data)
			//                              } else {
			//                                  reject(res)
			//                              }
			// }
		})
	})
}
// 获取url
const getUrl = (url) => {
	if (!url) {
		return url
	}
	if (url.slice(0, 1) == "/") {
		console.log(true);
		url = url.substr(1);
	}
	if (url.indexOf('://') == -1) {
		url = IPurl + url;
	}
	return url;
}
/**
 * @description    get方法
 * @example   
 * example   
 * @param {String} url = ''  接口请求地址  
 * @param {String} param = 请求参数  
 * @author: wenxin  
 * @createTime: 2021-4-6 15:07:33  
 */
const P_get = (url, param = {}) => {
	// if (!param.load_mode) {
	// 	wx.showLoading({
	// 		title: '请求中，请耐心等待...',
	// 	});
	// }
	return http({
		url,
		param,
		method: 'GET'
	})
}
/**
 * @description    post方法
 * @example   
 * example   
 * @param {String} url = ''  接口请求地址  
 * @param {String} param = 请求参数  
 * @author: wenxin  
 * @createTime: 2021-4-6 15:07:33  
 */
// const P_post = (url, param = {}) => {
// 	return http({
// 		url,
// 		param,
// 		method: "POST"
// 	})
// }
const P_post = (url, param = {}) => {
	return http({
		url,
		param,
		method: "POST"
	})
}
//跳转判断

const tiaozhuan = function(ee) {
		// console.log(ee, 'aaaa')
		if (ee.currentTarget.dataset.shifou == true) {
			if (ee.currentTarget.dataset.haslogin == false) {
				uni.showToast({
					title: '未登录，请先登录',
					icon: 'none',
				});
				setTimeout(function() {

					uni.navigateTo({
						url: '/pagesA/login/login'
					})
					// console.log('dnevv')

				}, 1000)
			} else {
				uni.navigateTo({
					url: ee.currentTarget.dataset.url
				})
			}
		} else {
			uni.navigateTo({
				url: ee.currentTarget.dataset.url
			})
		}

		// uni.navigateTo({
		// 	url: url + '?ids=' + id
		// })
	}
	// 合作洽谈
	const callphone = function(e,datau) {
		// console.log(e)
		var moder = e.currentTarget.dataset.moder
		var mo = moder+''
		uni.makePhoneCall({
			// 手机号
			phoneNumber: mo,
			// 成功回调 
			success: (res) => {
				// console.log('调用成功!')
				
				P_post('Article.ArticleNeed/touch',datau).then(res => {
					// console.log(res) 
					if (res.status == 200) {
					} else {
						if (!res.msg) {
							uni.showToast({
								title: '请求失败',
								icon: 'none',
							});
						} else {
							uni.showToast({
								title: res.msg,
								icon: 'none',
							});
						}
				
					}
				}).catch(e => {
					console.log(e)
				})
			},
			// 失败回调
			fail: (res) => {
				console.log('调用失败!')
				// this.call_phone();//重复调用一次
			}
		});
		
		
	}

export default {

	P_get,
	P_post,
	IPurl,
	img_url,
	getimg,
	wxlogin,
	callphone,
	tiaozhuan

}
// 打开分享页面**********************************************
// onShareAppMessage() {

// },
