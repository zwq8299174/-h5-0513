// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [{
		path: '/index',
		name: 'index',
		title: '主页',
		component: () =>
			import('@/pages/index.vue')
	},
	{
		path: '/take-picture',
		name: 'take-picture',
		title: '照相',
		component: () =>
			import('@/pages/take-picture.vue')
	},
	{
		path: '/preview',
		name: 'preview',
		title: '预览',
		component: () =>
			import('@/pages/preview.vue')
	},
	{
		path: '/vote',
		name: 'vote',
		title: '投票',
		component: () =>
			import('@/pages/vote.vue')
	},
	{
		path: '/rank',
		name: 'rank',
		title: '排行榜',
		component: () =>
			import('@/pages/rank.vue')
	},
	{
		path: '/rules',
		name: 'rules',
		title: '规则说明',
		component: () =>
			import('@/pages/rules.vue')
	},
	{
		path: '/coupon',
		name: 'coupon',
		title: '优惠券',
		component: () =>
			import('@/pages/coupon.vue')
	}

];

export const otherRouter = [{
		path: '/',
		name: 'home',
		title: '主页',
		redirect: '/index'
	},
	{
		path: '/*',
		name: 'other',
		title: '404页面',
		redirect: '/index'
	}
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
	...appRouter,
	...otherRouter
];