import Vue from 'vue'
import App from './App'
import {router} from './router/index';
import store from './store';
import ajax from './libs/ajax';
import appApi from './libs/appApi';
import filter from './libs/filter';


import './styles/app.scss'


	
Vue.config.productionTip = false

Vue.mixin(ajax);
Vue.mixin(appApi);
Vue.mixin(filter);

new Vue({
	el: '#app',
	router: router,
	store: store,
	render: h => h(App)
})
