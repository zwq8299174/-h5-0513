import axios from 'axios';
import Qs from 'qs';



export default {
	data() {
		return {

		}
	},
	methods: {
		$request(config){
			const AJAX = new Promise((resolve, reject) => {
				axios(config).then((d) => {
					if (d.status == 200) {
						resolve(d.data);
					} else {
						alert(d.data.msg)
						reject(d);
					};
				}).catch((e) => {
					reject(e);
				});
			});
			return AJAX;
		},
		$post(path, data,opts) {
			let defaultData = {
				openid:this.$store.state.app.openId
			};
			let CancelToken = axios.CancelToken;
			let source = CancelToken.source();
			let defaults = {
				data: Object.assign(defaultData,data?data:{}),
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				baseURL: this.$store.state.app.baseUrl,
				method: 'post',
				url: path,
				timeout: 15 * 60 * 1000,
				cancelToken: source.token
			};
			let options = Object.assign(defaults,opts?opts:{});
			return this.$request(options);
		},
		$get(path, params) {
			let defaultData = {
				openid:this.$store.state.app.openId
			};
			let options = {
				params: Object.assign(defaultData,params?params:{}),
				headers: {
					'X-Requested-With': 'XMLHttpRequest'
				},
				baseURL: this.$store.state.app.baseUrl,
				method: 'get',
				url: path,
				timeout: 15 * 60 * 1000
			};
			return this.$request(options);
		}
	}

}
