// /* —————————————— 网络请求: uniapp版 ———————————————— */
// /*
//  * 异步请求封装，提供get、post的异步函数
//  * by JOE eml:124838235@qq.com
//  */
// // HEADER 请求头配置
// let HEADER = { "Content-Type": "application/json;charset=utf-8" };
// let isGet = true // 防止如果出现错误多次提示
// // 模拟token
// // uni.setStorageSync('token', 'chenjixuantoken');
// // HTTP: GET/POST封装
// let http = {
// 	// Loading METHOD
// 	initload() {
// 		uni.showLoading({
// 			mask: true,
// 			title: '加载中'
// 		});
// 	},
// 	// GET METHOD
// 	get: function(url, param, loading = true, header = HEADER) {
// 		if (loading) this.initload(); // loading加载中
// 		if (!url) return 0; // url为空关闭函数
// 		return new Promise(function(resolve, reject) {
// 			if (uni.getStorageSync("token")) header.token = uni.getStorageSync("token"); // header注入token
// 			uni.request({
// 				url: url,
// 				data: param || {},
// 				header: header,
// 				method: "GET",
// 				success: (res) => {
// 					if (res.header["Set-Cookie"]) uni.setStorageSync('token', res.header["Set-Cookie"]);
// 					uni.hideLoading();
// 					if(res.data.code == 200 || res.data.code == 0) {
// 						resolve(res.data.data);
// 					}else {
// 						uni.showToast({
// 							title: res.data.msg || '网络错误',
// 							duration: 2000,
// 							icon: "none"
// 						});
// 					}
// 				},
// 				complete:(res) => {
// 				},
// 				fail: (err) => {
// 					uni.hideLoading();
// 					uni.showToast({
// 						title: '网络错误',
// 						duration: 2000
// 					});
// 					reject(err);
// 				}
// 			});
// 		});
// 	},
// 	// POST METHOD
// 	post: function(url, param, loading = true, header = HEADER) {
// 		if (loading) this.initload();
// 		if (!url) return 0;
// 		return new Promise(function(resolve, reject) {
// 			if (uni.getStorageSync("token")) header.token = uni.getStorageSync("token"); // header注入token
// 			uni.request({
// 				url: url,
// 				data: param || {},
// 				header: header,
// 				method: "POST",
// 				success: (res) => {
// 					if (res.data.data && res.data.data.token) uni.setStorageSync('token', res.data.data.token);
// 					uni.hideLoading();
// 					if(res.data.code == 200 || res.data.code == 0) {
// 						isGet = true
// 						resolve(res.data.hasOwnProperty('data') ? res.data.data : {});
// 					}else if (res.data.code == 350 || res.data.code == 401) {
// 						if(isGet) {
// 							isGet = false
// 							uni.showToast({
// 								title:'token过期请重新登录',
// 								duration: 2000,
// 								icon: "none"
// 							});
// 							setTimeout(()=>{
// 								uni.reLaunch({
// 								    url: '/pages/login/login?tokenInvalid=1'
// 								});
// 							},2000)
// 						}
// 					}
// 					else {
// 						resolve({error:res.data.code || 500});
// 						uni.showToast({
// 							title: res.data.msg || '请求错误',
// 							duration: 2000,
// 							icon: "none"
// 						});
// 					}
// 				},
// 				complete:(res) => {
// 				},
// 				fail: (err) => {
// 					uni.hideLoading();
// 					uni.showToast({
// 						title: '网络错误',
// 						duration: 2000
// 					});
// 					reject(err);
//
// 				}
// 			});
// 		});
// 	},
// 	asyncPost: function(url, param, loading) {
// 		return new Promise((resolve, reject) => {
// 			this.post(url, param,loading).then(res => {
// 				resolve(res)
// 			});
// 		});
// 	},
// 	asyncGet: function(url, param, loading) {
// 		return new Promise((resolve, reject) => {
// 			this.get(url, param, loading).then(res => {
// 				resolve(res);
// 			});
// 		});
// 	}
// };
//
// export default http;
