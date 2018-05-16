import Vue from 'vue'
import App from './App'
import {router} from './router/index';
import store from './store';
import ajax from './libs/ajax';
import appApi from './libs/appApi';
import filter from './libs/filter';
import Utils from './libs/utils';
import oss from './libs/oss';
import Message from './components/message/index';


import clipper from '../static/clipper'

import './styles/app.scss'



Vue.config.productionTip = false

Vue.use(clipper);
Vue.use(Message);

Vue.mixin(ajax);
Vue.mixin(appApi);
Vue.mixin(filter);
Vue.mixin(oss);

let uri = encodeURI(window.location.href.replace(window.location.hash,''));
let openUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5ffdae5615d602f1&redirect_uri=${uri}&response_type=code&scope=snsapi_base&connect_redirect=1#wechat_redirect`;
console.log(uri);
console.log(openUrl);
if(navigator.userAgent.indexOf('MicroMessenger') > -1 && !Utils.getUrlVars().code){
	window.location.href = openUrl;
};

new Vue({
	el: '#app',
	router: router,
	store: store,
	render: h => h(App)
})
