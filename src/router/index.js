import Vue from 'vue';
import VueRouter from 'vue-router';
import { routers } from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
	// mode: 'history',
	routes: routers,
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
};

export const router = new VueRouter(RouterConfig);