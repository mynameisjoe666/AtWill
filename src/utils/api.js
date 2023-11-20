/* —————————————— API接口: uniapp版 ———————————————— */
/*
 * api接口配置，envs位环境变量，分别编译生产和开发环境的地址。
 * by JOE eml:124838235@qq.com
 */
// import envs from '@/envs.js'
let envs = 'aaa'
const baseUrl = envs.APP_API_HOST;
// const root = envs.APP_HOST;
const api = envs.APP_API;
export default {
	/* -----------[用户]----------- */

	// 2.工作流列表请求
	getWorkFlowList: baseUrl + "/task/getWorkFlowList",

	// 3.工作流详细
	getWorkFlowDetails: baseUrl + "/task/getWorkFlowDetails",

	/* -----------[业务提交]----------- */
	// 0.通用提交
	send: baseUrl + "/task/send",

	/* -----------[业务查询]----------- */

	// 1.我的申请
	geMyApply: baseUrl + "/task/geMyApply",

	// 2.我的待办
	getMyTasking: baseUrl + "/task/getMyTasking",

	// 2.我的已办
	getMyTaskDone: baseUrl + "/task/getMyTaskDone",

	/* -----------[查询详细]----------- */

	// 1.获取详情
	getByBusinessKey: baseUrl + "/task/getByBusinessKey",

	/* -----------[审批编辑]----------- */

	// 1.撤销
	revoke: api + "/act/process/ins/removeById",

	// 2.删除
	deletes: api + "/act/business/removeById",


	/* -----------[其他]----------- */


	// 5.补卡详情
	getKQ23ByBusinessKey: baseUrl + "/KQ23/getKQ23ByBusinessKey",

	// 7.请求格式化后的字典
	getWeChatDataByTreeDictId: baseUrl + "/infoModule/infoModule/getWeChatDataByTreeDictId",

	// 9.用户（首次）关联微信小程序
	getByUnionId: api + "/auth/getByUnionId",

	// 10.用户登录微信小程序
	weChatLogin: api + "/auth/weChatLogin",

	// 11.获取验证码（真实手机号）
	sendSms: api + "/infoModule/sms/sendSms",

	// 12.获取人员信息
	getWeChatUserInfo: api + "/infoModule/common/getWeChatUserInfo",

	// 13.退出登陆
	weChatLogout: api + "/auth/weChatLogout",

	// 15.通讯录
	addressList: baseUrl + "/personnel/weChatApplet/addressList",

	organStructureQuery: baseUrl + "/org/weChatApplet/organStructureQuery",

	/* -----------[字典]----------- */

	// 1.获取字典信息
	weChatGetByDictTypeId: api + "/system/commonDict/weChatGetByDictTypeId",

	// 2.获取人员信息列表
	getWeChatSendTaskUser: api + "/act/business/getWeChatSendTaskUser",

	// 3.获取假期类型
	getEffect: baseUrl + "/JQ01/getEffect",

	// 4.获取假期余额
	getJQ05ByZA0100: baseUrl + "/JQ05/getJQ05ByZA0100",

	// 5.获取请假时长
	getTimeDiff: baseUrl + "/Common/getTimeDiff",

};
