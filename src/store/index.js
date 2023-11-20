import Vue from 'vue';
import Vuex from 'vuex';
// import userInfo from './modules/user-info'
import publicState from './modules/public-state'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules:{
		// userInfo,// 用户信息
		publicState, // 公共状态
	},
	state: {
	},
	mutations: {
	},
	actions: {
	}
});

export default store;
