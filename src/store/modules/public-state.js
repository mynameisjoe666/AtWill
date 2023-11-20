const publicState = {
	state: {
		layoutModel: {
			mode: 'waterfallFlow',
			// 经典模式
			classic: {},
			// 瀑布流模式
			waterfallFlow: {}
		}
	},
	mutations: {
		// 修改主题状态
		SWITCH_LAYOUTMODEL(state,res) {
			state.layoutModel.mode = res
		}
	},
	actions: {
		switchIsOnShow:function({commit},res) {
			commit('SWITCH_ISONSHOW', res);
		}
	}
}

export default publicState
