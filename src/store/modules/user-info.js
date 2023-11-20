// import $_http from '@/utils/http'
// import $_api from '@/utils/api'

const userInfo = {
	state: {
		menuData:[],
		procDefKeyAgg: null, // 模板类型存储
		wxInfo: null, // 微信信息
		userInfo: null, // 用户信息
		token: '', // 用户token
		wxLoginStatus: false // 微信是否授权
	},
	mutations: {
		// 更新基础数据
		SET_MENUDATA(state, addrees) {
			state.menuData = addrees
		},
		// 更新过滤项目
		SET_PROCDEFKEYAGG(state, addrees) {
			state.procDefKeyAgg = addrees
		},
		// 获取微信信息
		GET_WXINFO(state, addrees) {
			state.wxInfo = addrees
		},
		// 获取首页基础信息
		GET_USERINFO(state, addrees) {
			state.userInfo = addrees
		},
		// 获取用户unionId
		GET_BYUNIONID(state, addrees) {
			state.pagaData = addrees
		},
		// 更新登陆状态
		UPDATA_WXLOGINSTATUS(state, addrees) {
			state.wxLoginStatus = addrees
		}
	},
	actions: {
		// 生成按钮信息
		setPprocDefKeyAgg: async function(state) {
			let info = await $_http.asyncPost($_api.getWorkFlowList,{},false)
			state.commit('SET_MENUDATA', info);
			let agg = {
				text: '审批',
				children:[]
			}
			for (let i in info) {
				agg.children.push({
					text: info[i].flowName, // 名称
					id: Number(i) + Number(2), // id，作为匹配选中状态的标识
					procDefKey: info[i].flowId,
					index:i
				})
			}
			state.commit('SET_PROCDEFKEYAGG', agg);
		},
		// 用户登陆
		getByUnionid: async function({ dispatch, commit, state }, obj) {
			commit('UPDATA_WXLOGINSTATUS', true)
			commit('GET_WXINFO', obj.wxInfo)
			let param = {
				code: obj.code.code,
				appid: obj.appid
			}
			let getByUnionId = await $_http.asyncPost($_api.getByUnionId, param,false);
			if(getByUnionId.userId) {
				commit('GET_USERINFO', getByUnionId)
				dispatch('setPprocDefKeyAgg')
				uni.reLaunch({
				    url: '/pages/tabBar/home/home'
				});
			}else if(!obj.heavyLoad) {
				uni.reLaunch({
				    url: '/pages/login/login'
				});
			}
		}
	}
}

export default userInfo
