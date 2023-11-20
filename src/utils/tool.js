/* —————————————— 工具集: uniapp版 ———————————————— */
/*
 * 该改版使用require方式引入moment || storage缓存使用uni api进行处理
 * by JOE eml:124838235@qq.com
 */
// 引入 moment 时间插件
const moment = require("./moment.js");
moment.locale("zh-cn");
import {EDITCONTROLTYPES} from './types.js'

export default {
	/**
	 * 返回符合循环组件的数据结构。
	 * @param Object
	 */
	componentDataConst: function(moduleMainTable) {
		let componentJson = [] // 定义用于返回的数据名称
		let groupType = []
		let group = 1
		for (let i in moduleMainTable) {
			let dataTypeId = moduleMainTable[i].dataTypeId // 自动匹配
			if(group !== moduleMainTable[i].groupClass) {
				group = moduleMainTable[i].groupClass
				groupType.push(true)
			} else {
				groupType.push(false)
			}
			componentJson.push({...EDITCONTROLTYPES[dataTypeId],marginTop:groupType[i]})
		}
		return componentJson
	},
	/**
	 * 获取微信授权是否。
	 * @param Object
	 */
	getSetting: function() {
		return new Promise(function(resolve, reject) {
			wx.getSetting({
				success: res => {
					resolve(res);
				},
				fail: res => {
					console.log('获取失败')
				}
			});
		})
	},
	/**
	 * # 删除 #
	 * 循环遍历查找数组中某一个标记列进行删除
	 * @arrs array
	 * @options array
	 */
	removeOptions: function(arrs, id, options = []) {
		for (let i in arrs) {
			if (options.indexOf(arrs[i][id]) != -1) {
				arrs.splice(i, 1);
			}
		}
		return arrs
	},
	/**
	 * # 删除数组对象 #
	 * 循环遍历查找数组对象匹配平外一个对象内的值进行删除
	 * @arrs array
	 * @options array
	 */
	removeArryObj: function(obj, id, options = []) {
		for (let i in options) {
			if (options[i][id] == obj['id']) {
				options.splice(i, 1);
			}
		}
		return options
	},
	/**
	 * # 判断是否存在相同的对象 #
	 * 循环遍历一个数组对象，判断是否存在相同组值
	 * @arrs array id
	 * @options Boolean
	 */
	difference: function(obj, id, options = []) {
		let temp = true
		for (let i in options) {
			if (options[i][id] == obj['id']) {
				temp = false
			}
		}
		return temp
	},
	/**
	 * # 格式化数组对象#
	 * 循环遍历一个数组对象，循环替换Key值
	 * @arrs array 
	 * @obj Object
	 */
	formatKey: function(arrs, obj) {
		let tempArrs = []
		arrs.forEach((res,index) => {
			let tempObj = {}
			for(let i in obj) {
				tempObj[obj[i]] = res[i]
			}
			tempArrs.push(tempObj)
		})
		return tempArrs
	},
	/**
	 * 微信登录。
	 * @param Object
	 */
	wxLogin: function() {
		return new Promise(function(resolve, reject) {
			uni.login({
				provider: "weixin",
				success: res => {
					let code = res.code;
					resolve(res);
				}
			});
		})
	},
	/**
	 * 获取微信用户信息。
	 * @param Object
	 */
	getWxUserInfo: function() {
		return new Promise(function(resolve, reject) {
			uni.getUserInfo({
				provider: 'weixin',
				lang: 'zh_CN',
				success: res => {
					if (res.userInfo) {
						resolve(res);
					}
				}
			});
		})
	},

	/**
	 * 数组序列之间互换位置。
	 * @param Object
	 */
	arrayTransposition: function(arr, index1, index2) {
		arr[index1] = arr.splice(index2, 1, arr[index1])[0]
		return arr
	},
	/**
	 * 当前页面是从哪个页面进入的。
	 * @param Object
	 */
	getRouterPath: function(param = {
		route: string,
		success: object,
		fail: object
	}) {
		let pages = getCurrentPages();
		let prevpage = pages[pages.length - 2] || {
			route: ''
		};
		if (prevpage.route == param.route) {
			param.success && param.success(prevpage)
		} else {
			param.fail && param.fail()
		}
	},
	/**
	 * 对象中是否存在值，不存在返回true
	 * @param Object
	 * @return Boolean
	 */
	existence: function(obj) {
		for (let i in obj) {
			return obj[i] && true;
		}
	},
	/**
	 * 对象中是否有空值
	 * @param Object
	 * @return Boolean
	 */
	objectAlignment: function(a, b = []) {
		let exclude = [];
		let params = a;
		let obj = Object.keys(params);
		let son = b;
		obj.map(item => {
			if (son.indexOf(item) == -1) {
				exclude.push(params[item]);
			}
		});
		return exclude.indexOf("") != -1;
	},
	/**
	 * 去掉某些值后，只要有一个值不为空就通过
	 * @param Array
	 * @return Boolean
	 */
	objectOnly: function(a, b = []) {
		let exclude = [];
		let params = a;
		let obj = Object.keys(params);
		let son = b;
		obj.map(item => {
			if (son.indexOf(item) == -1) {
				exclude.push(params[item]);
			}
		});
		for (let i in exclude) {
			if (exclude[i] != "") {
				return true
			}
		}
		return false
	},
	/**
	/**
	 * 数组中是否有空值
	 * @param Array
	 * @return Boolean
	 */
	objectOutput: function(a, b = []) {
		let exclude = [];
		let params = a;
		let obj = Object.keys(params);
		let son = b;
		obj.map(item => {
			if (son.indexOf(item) != -1) {
				exclude.push(params[item]);
			}
		});
		return exclude.indexOf("") != -1;
	},
	/**
	 * SessionStorage
	 * @param Key || Value || Sync同步方式->默认异步
	 */
	setSessionItem: function(key, value, sync = false) {
		if (key) {
			let jsonValue = JSON.stringify(value);
			if (sync == false) {
				uni.setStorage({
					key: key,
					data: jsonValue
				});
			} else {
				uni.setStorageSync(key, jsonValue);
			}
		}
	},
	getSessionItem: function(key) {
		if (key) {
			try {
				const value = JSON.parse(uni.getStorageSync(key));
				if (value) {
					console.log('存在该缓存')
					return value
				} else {
					console.log('不存在该缓存')
				}
			} catch (e) {
				console.log('取缓存错误了', e)
			}
		}
	},
	removeSessionItem: function(key, sync = false) {
		if (key) {
			if (sync == false) {
				uni.removeStorage({
					key: key
				});
			} else {
				uni.removeStorageSync(key);
			}
		}
	},
	clearSessionItem: function(key, sync = false) {
		if (sync == false) {
			uni.clearStorage();
		} else {
			uni.clearStorageSync();
		}
	},
	/**
	 * 电话正则
	 * @param phone
	 * @return String
	 */
	phoneRegExp: function(phone) {
		let phoneRe = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
		return phoneRe.test(phone);
	},
	/**
	 * 脱敏电话正则
	 * @param phone
	 * @return String
	 */
	phoneExp: function(phone) {
		let phoneRe = /^(\d{3}).*(\d{3})$/;
		return phoneRe.test(phone);
	},
	/**
	 * 姓名正则
	 * @param name
	 * @return String
	 */
	nameRegExp: function(name) {
		let nameRe = /[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/;
		return nameRe.test(name);
	},
	/**
	 * 身份证正则
	 * @param idCard
	 * @return String
	 */
	idCardRegExp: function(idCard) {
		let idCardRe =
			/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
		return idCardRe.test(idCard);
	},
	/**
	 * 汉字正则
	 * @param par
	 * @return String
	 */
	isChineseRegExp: function(par) {
		let chineseRe = /^[\u4E00-\u9FA5]+$/;
		return chineseRe.test(par);
	},
	/**
	 * 电子邮箱正则
	 * @param mail
	 * @return String
	 */
	mailExp: function(mail) {
		let mailRe = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return mailRe.test(mail);
	},
	/**
	 * 判断字符串是否以".html"结尾正则
	 * @param str
	 * @return String
	 */
	htmlExp: function(str) {
		let hrmlRe = /\.html$/;
		return hrmlRe.test(str);
	},
	/**
	 * 证件类型
	 * @param str
	 * @return Number
	 */
	typeOfCard: function(str) {
		if (/身份证|户口簿/.test(str)) {
			return 1;
		}
		if (/军|军官|军官证/.test(str)) {
			return 2;
		}
		if (/警|警察|警官|警官证/.test(str)) {
			return 3;
		}
		if (/香港/.test(str)) {
			return 4;
		}
		if (/澳门/.test(str)) {
			return 5;
		}
		if (/台湾/.test(str)) {
			return 6;
		}
		if (/外国人/.test(str)) {
			return 7;
		}
	},
	/**
	 * 身份证数据解析
	 * @param idCard身份证号, num类型
	 * @return string
	 */
	IdCard(idCard, num) {
		if (num == 1) {
			//获取出生日期
			var birth;
			birth = idCard.substring(6, 10) + "-" + idCard.substring(10, 12) + "-" + idCard.substring(12, 14);
			return birth;
		}
		if (num == 2) {
			//获取性别
			if (parseInt(idCard.substr(16, 1)) % 2 == 1) {
				//男
				return "男";
			} else {
				//女
				return "女";
			}
		}
		if (num == 3) {
			//获取年龄
			var myDate = new Date();
			var month = myDate.getMonth() + 1;
			var day = myDate.getDate();
			var age = myDate.getFullYear() - idCard.substring(6, 10) - 1;
			if (
				idCard.substring(10, 12) < month ||
				(idCard.substring(10, 12) == month && idCard.substring(12, 14) <= day)
			) {
				age++;
			}
			return age.toString();
		}
	},
	/**
	 * 获取地址栏参数
	 * @param name
	 * @return String
	 */
	getUrlKey: function(name) {
		return (
			decodeURIComponent(
				(new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.href) || [, ""])[1]
				.replace(/\+/g, "%20")
			) || null
		);
	},
	/**
	 * console || alert改造
	 * @return string
	 * @param obj
	 */
	// 打印对象快照
	log: function(obj) {
		console.log(JSON.parse(JSON.stringify(obj)));
	},
	alertwin: function(object = {}) {
		if (sessionStorage.Developer === "true") {
			alert(object);
		}
	},
	/**
	 * 日期格式化
	 * @对Date的扩展，将 Date 转化为指定格式的String
	 * @月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
	 * @年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
	 * @example：
	 * @ (new Date()).Format("YYYY-MM-DD hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
	 * @ (new Date()).Format("YYYY-M-D h:m:s.S")   ==> 2006-7-2 8:9:4.18
	 */
	FormatDate: function(date, fmt) {
		if (/(Y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		let o = {
			"M+": date.getMonth() + 1,
			"D+": date.getDate(),
			"h+": date.getHours(),
			"m+": date.getMinutes(),
			"s+": date.getSeconds()
		};
		for (let k in o) {
			if (new RegExp(`(${k})`).test(fmt)) {
				let str = o[k] + "";
				fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : this.padLeftZero(str));
			}
		}
		return fmt;
	},
	padLeftZero: function(str) {
		return ("00" + str).substr(str.length);
	},
	// 获取今天日期不包含时间
	getDate() {
		const date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();

		month = month > 9 ? month : '0' + month;
		day = day > 9 ? day : '0' + day;

		return `${year}-${month}-${day}`;
	},
	/**
	 * 转换时间戳
	 * @param format
	 * @return obj
	 */
	stamp(stampDate) {
		let time = new Date(stampDate)
		return time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() + " " + time.toTimeString()
			.substr(0,
				8);
	},
	/**
	 * 相互格式化YYYYMMDD <=> YYYY-MM-DD
	 * @param date 日期
	 * @param format 日期格式
	 * @return String
	 */
	formatYMD(date, format = "YYYYMMDD") {
		let transformDate;
		if (format === "YYYYMMDD") {
			transformDate = date.split("-").join("");
		} else if (format === "YYYY-MM-DD") {
			transformDate = date.substr(0, 4) + "-" + date.substr(4, 2) + "-" + date.substr(6, 2);
		}
		return transformDate;
	},
	//判断字符串是否以"http://或者https://"开头正则
	textExp: function(str) {
		let textRe = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)/;
		return textRe.test(str);
	},
	/**
	 * 判断是否过期
	 * @param 日期格式 "YYYY-MM-DD"
	 * @return Boolean
	 * */
	judgeOverdue(t1, t2) {
		if (this.formatYMD(t1) >= this.formatYMD(t2)) {
			return true;
		} else {
			return false;
		}
	},
	/**
	 * 获取区间，年
	 * @param 日期格式 "YYYY"
	 * @return Array
	 * */
	getYearSection(num = 0) {
		return moment().subtract(num, 'year').startOf('year').format('YYYY')
	},
	/**
	 * 获取区间，天
	 * @param 日期格式 "YYYY-MM-DD"
	 * @return Array
	 * */
	getDaySection(num = 0) {
		return moment().subtract(num, 'day').startOf('day').format('YYYY-MM-DD')
	},
	/**
	 * 格式互转
	 * @param 日期格式 "YYYY-MM-DD"
	 * @return Boolean
	 * */
	formatConversion: function(date,tab) {
		return moment(date).format(tab)
	},
	// 获取过去的天数
	getMoreDay(num) {
		let Arrays = []
		for (let i = 0; i < num; i++) {
			Arrays.push({
				week: moment().subtract(i, 'd').format("dddd"),
				dates: moment().subtract(i, 'd').format("MM-DD"),
				value: moment().subtract(i, 'd').format("YYYY-MM-DD")
			})
		}
		Arrays[0].week = '今天'
		return Arrays
		// alert(new Date(2006,0,121))
	},
	/**
	 * 补0
	 * @return String
	 * */
	foo(str) {
		str = '00' + str;
		return str.substring(str.length - 2, str.length);
	},
	/**
	 * 商值法计算0未正或负
	 * @return String
	 * */
	isNegativeZero(num) {  
	    return num === 0 && (1 / num < 0); // 1与+0的商为Infinite，1与-0的商为-Infinite
	},
	/**
	 * 获取三年内的全部天数并返回今天
	 * @return Array
	 * */
	nearlyThreeYears() {
		const day = moment().format('YYYY-MM-DD')
		const year = moment().format('YYYY')
		const lastYear = moment().subtract(1, 'year').startOf('year').format('YYYY')
		const hour = 24
		const minute = 60
		let index
		let Arrays = [
			[],
			[],
			[]
		]
		let s = 0
		for (let t = 0; t < 3; t++) {
			let a = moment(lastYear).add(t, 'year').isLeapYear()
			s += a ? 366 : 365
		}
		for (let i = 0; i < s; i++) {
			let moments = moment(lastYear).add(i, 'd')
			let w = moments.format("dddd")
			let y = moments.format("YYYY")
			let d = moments.format(y != year ? "YYYY-MM-DD" : "MM-DD")
			let k = moments.format("YYYY-MM-DD")
			if (k == day) {
				index = i
			}
			Arrays[0].push({
				text: d + w,
				value: k
			})
		}
		for (let h = 0; h < hour; h++) {
			Arrays[1].push({
				text: this.foo(h),
				value: this.foo(h)
			})
		}
		for (let h = 0; h < minute; h++) {
			Arrays[2].push({
				text: this.foo(h),
				value: this.foo(h)
			})
		}
		return {
			arr: Arrays,
			index: index
		}
	},
	/**
	 * 比对时间顺序
	 * @param 开始时间:start:<String> | 结束时间:end:<String>
	 * @return Boolena
	 * */
	isBefore(start,end) {
		return moment(start).isBefore(end)
	},
	/**
	 * 计算两个时间相差的小时返回保留一位小数的数值
	 * @param 开始时间:start:<String> | 结束时间:end:<String> | 一天小时数:v:<Number>
	 * @return Number
	 * */
	timeFn(start,end,v) {
		const a = moment(start);
		const b = moment(end);
		const c = b.diff(a, 'minute'); // 计算相差的分钟数
		const h = v ? c / 60 / 24 * v : c / 60; // 相差的小时数
		const mm = c % 60; // 计算相差小时后余下的分钟数
		return h.toFixed(0)
	}
};
