/**
 * 组件类别类型库
 * EDITCONTROLTYPES && TYPES
 * componentName(组件名)  ||  type(数据类型)  ||  mode(模式)  
 * 124838235@qq.com By joe
 * @ 用于组件匹配生成组件模型数据
 */

// 元数据中4类组件
export const EDITCONTROLTYPES = {
	0: {
		componentName: "textarea",
		mode: ""
	},
	1: {
		componentName: "input",
		type: "text"
	},
	2: {
		componentName: "picker",
		mode: "dateTime"
	},
	3: {
		componentName: "input",
		type: "number"
	},
	4: {
		componentName: "picker",
		mode: "selector"
	}
};

// 如果组件类型为0的话，匹配以下类型
export const TYPES = {
	0: {
		componentName: "input",
		type: "text"
	},
	1: {
		componentName: "picker",
		mode: "selector"
	},
	2: {
		componentName: "input",
		type: "number"
	},
	3: {
		componentName: "picker",
		mode: "date",
		fields: "year"
	},
	4: {
		componentName: "picker",
		mode: "date",
		fields: "month"
	},
	5: {
		componentName: "picker",
		mode: "date",
		fields: "day"
	},
	6: {
		componentName: "input",
		type: "text"
	},
	7: {
		componentName: "input",
		type: "text"
	},
	12: {
		componentName: "picker",
		type: "reference",
		mode: "selector"
	},
	14: {
		componentName: "textarea",
		mode: ""
	},
	17: {
		componentName: "input",
		type: "password"
	},
	18: {
		componentName: "picker",
		mode: "multiSelector",
		type: "TreeDict"
	},
	19: {
		componentName: "picker",
		mode: "multiSelector"
	},
	20: {
		componentName: "input",
		type: "text"
	},
	21: {
		componentName: "input",
		type: "text"
	},
	22: {
		componentName: "input",
		type: "number"
	},
	23: {
		componentName: "input",
		type: "number"
	},
	24: {
		componentName: "input",
		type: "text"
	}
}

export const IMGTYPE = [{
		title: '签名',
		desc: '请上传手写签名',
		type: 1,
		limit: 1,
		imgs: [],
		ZM0110: 0,
		ZM0111: '手写签名',
	}, {
		title: '身份证原件照片',
		desc: '请上传身份证正反面照片',
		type: 2,
		limit: 2,
		imgs: [],
		ZM0110: 1,
		ZM0111: '身份证原件照片',
	},
	{
		title: '身份证复印件',
		desc: '请上传身份证正反面复印件',
		type: 2,
		limit: 2,
		imgs: [],
		ZM0110: 2,
		ZM0111: '身份证复印件',
	},
	{
		title: '个人证件照',
		desc: '请上传最近一寸免冠照片',
		type: 2,
		limit: 1,
		imgs: [],
		ZM0110: 3,
		ZM0111: '个人证件照',
	},
	{
		title: '学历证明',
		desc: '请上传个人获得的学历学位证件照片或复印件',
		type: 2,
		limit: 1,
		imgs: [],
		ZM0110: 4,
		ZM0111: '学历证明',
	},
	{
		title: '工资银行卡',
		desc: '请上传工资卡，方便公司为您发放工资',
		type: 2,
		limit: 1,
		imgs: [],
		ZM0110: 5,
		ZM0111: '工资银行卡',
	},
	{
		title: '社保卡',
		desc: '请上传社保卡账号信息，方便公司帮您缴纳社保',
		type: 2,
		limit: 1,
		imgs: [],
		ZM0110: 6,
		ZM0111: '社保卡',
	},
	{
		title: '公积金卡',
		desc: '请上传公积金卡账号信息，方便公司帮您缴纳公积金',
		type: 2,
		limit: 1,
		imgs: [],
		ZM0110: 7,
		ZM0111: '公积金卡',
	},
	{
		title: '上家公司离职证明',
		desc: '请上传上家公司离职证明，确保您已与上家公司无劳动纠纷',
		type: 2,
		limit: 1,
		imgs: [],
		ZM0110: 8,
		ZM0111: '上家公司离职证明',
	}
]
