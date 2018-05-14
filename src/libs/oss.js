


import * as $ from 'jquery';
import plupload from 'plupload';


export default {
	data() {
		return {
			apiUrl: this.$store.state.app.baseUrl + '/campaign/ossSign',
			host: '',
			policyBase64: '',
			accessid: '',
			signature: '',
			expire: 0,
			g_object_name: '',
			g_object_name_type: 'random_name', // 可选类型为 local_name 或 random_name
		}
	},
	methods: {
		$oss(objArr) {
			if(objArr.length) {
				objArr.forEach((item) => {
					let container = item.container,
						browserBtn = item.browserBtn,
						fileType = item.fileType ? item.fileType : '',
						beforeUpload = item.beforeUpload_fn,
						uploading = item.uploading_fn,
						success = item.success_fn,
						ossItem = {
							key:item.prefix ? item.prefix : '',
							dir:item.dir ? item.dir + '/' : ''
						};
					const uploader = new plupload.Uploader({
						runtimes: 'html5,flash,silverlight,html4',
						browse_button: browserBtn,
						container: container,
						flash_swf_url: '../assets/other/Moxie.swf',
						silverlight_xap_url: '../assets/other/Moxie.xap',
						url: 'http://oss.aliyuncs.com',
						filters: this.set_upload_filter(fileType),
						init: {
							PostInit: () => {
								container.querySelector('input').addEventListener('change',()=>{
									this.set_upload_param(uploader, '', false, ossItem);
								},false);
							},
							BeforeUpload: (up, file) => {
								this.set_upload_param(up, file.name, true, ossItem);
								beforeUpload();
							},

							UploadProgress: (up, file) => { //上传中，显示进度条
								if(uploading) {
									var percent = file.percent;
									uploading(percent);
								}
							},

							FileUploaded: (up, file, info)=> {
								if(info.status == 200) {
									let data = {};
									data.fileName = file.name;
									data.fileUrl = this.host + '/' + ossItem.dir + this.get_uploaded_object_name(file.name)
									success(data);
								} else {
									console.log(info.response);
								}
							},
							Error: (up, err) => {
								if(err.code == -600) {
									alert('\n文件大小超过限制！');
								} else if(err.code == -601) {
									alert('\n文件类型错误！');
								} else if(err.code == -602) {
									alert('\n这个文件已经上传过一遍了！');
								} else {
									console.log('\nError xml:' + err.response);
								}
								item.error_fn();
							}
						}
					});
					uploader.init();
				});
			}
		},
		ajax(params) {
			var defaults = {
				url: params.url,
				type: params.type ? params.type : 'post',
				contentType: false,
				processData: false,
				'Content-Type': 'multipart/form-data'
			};
	
			for(var key in defaults) {
				params[key] = defaults[key];
			}
			var _successFn = params.success;
			params.success = function(result, status, xhr) {
				if(false) {
	
				}
				_successFn(result, status, xhr)
			}
			if(typeof params.error !== 'function') {
				params.error = function(err) {
					console.log(err);
				}
			}
	
			$.ajax(params);
		},
		send_request() {
			let xmlhttp = null;
			if(window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else if(window.ActiveXObject) {
				xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
			}
			if(xmlhttp != null) {
				let data = null;
				oss.ajax({
					url: this.apiUrl,
					success: function(res) {
						data = res.data;
					},
					async: false
				});
				return data;
			} else {
				alert('Your browser does not support XMLHTTP.');
			}
		},
		get_signature() {
			//可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
//			var now = timestamp = Date.parse(new Date()) / 1000;
//			if(this.expire < now + 3) {
//				var obj = send_request();
//				this.host = obj.host;
//				this.policyBase64 = obj.policy
//				this.accessid = obj.accessid
//				this.signature = obj.signature
//				this.expire = parseInt(obj.expire)
//				return true;
//			}
//			return false;
			return this.API_ossSign();
		},
		random_string(len) {　　
			len = len || 32;　　
			var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';　　
			var maxPos = chars.length;　　
			var pwd = '';　　
			for(let i = 0; i < len; i++) {　　
				pwd += chars.charAt(Math.floor(Math.random() * maxPos));
			}
			pwd += new Date().getTime();
			return pwd;
		},
		get_suffix(filename) {
			let pos = filename.lastIndexOf('.');
			let suffix = '';
			if(pos != -1) {
				suffix = filename.substring(pos);
			}
			return suffix;
		},
		calculate_object_name(filename, ossItem) {
			if(this.g_object_name_type == 'local_name') {
				this.g_object_name += '${filename}'
			} else if(this.g_object_name_type == 'random_name') {
				let suffix = this.get_suffix(filename);
				this.g_object_name = ossItem.key + this.random_string(10) + suffix;
			}
			return '';
		},
		get_uploaded_object_name(filename) {
			if(this.g_object_name_type == 'local_name') {
				console.log(this.g_object_name);
				let tmp_name = this.g_object_name.replace('${filename}', filename);
				return tmp_name;
			} else if(this.g_object_name_type == 'random_name') {
				return this.g_object_name;
			}
		},
		set_upload_param(up, filename, ret, ossItem) {
			if(ret == false) {
				this.get_signature().then((d)=>{
					this.policyBase64 = d.result.policy;
					this.accessId = d.result.accessId;
					this.signature = d.result.signature;
					this.dir = d.result.dir;
					this.host = d.result.host;
					console.log(this.g_object_name);
					let new_multipart_params = {
						'policy': this.policyBase64,
						'OSSAccessKeyId': this.accessId,
						'success_action_status': '200', //让服务端返回200,不然，默认会返回204
						'signature': this.signature,
					};
					up.setOption({
						'url': this.host,
						'multipart_params': new_multipart_params
					});
					up.start();
				});
			}else{
				if(filename != '') {
					this.calculate_object_name(filename, ossItem);
				};
				console.log(this.g_object_name);
				let new_multipart_params = {
					'key': ossItem.dir+this.g_object_name,
					'policy': this.policyBase64,
					'OSSAccessKeyId': this.accessId,
					'success_action_status': '200', //让服务端返回200,不然，默认会返回204
					'signature': this.signature,
				};
				up.setOption({
					'url': this.host,
					'multipart_params': new_multipart_params
				});
				up.start();
			};
		},
		set_upload_filter(fileType) {
			let filters = {
				mime_types: [],
				prevent_duplicates: false   
			};
			let picture = {
				title: 'Image files',
				extensions: 'jpg,gif,png,bmp',
			};
			let video = {
				title: 'files',
				extensions: 'mp4',
			};
			let type = fileType ? fileType : 'picture';
			switch(type) {
				case 'picture':
					filters.mime_types.push(picture);
					filters.max_file_size = '10mb';
					break;
				case 'video':
					filters.mime_types.push(video);
					filters.max_file_size = '2gb';
					break;
				default:
					console.log('Wrong file type.')
					return;
			}
			return filters;
		}
	}
}