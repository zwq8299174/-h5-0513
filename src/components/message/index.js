



export default {
	install(Vue) {
		Vue.prototype.$MessageShow = function(opt){
			if(!this.$CheckMessage()){
				this.$MessageInit(opt);
			}
		};
		Vue.prototype.$MessageInit = function(opt){
			console.log(opt);
			const MessageHtml = `
				<div class="message-mask"></div>
				<div class="message-container">
					<div class="message-box">
						<div class="title">
							<img src="./static/img/message-title.png" alt="">
						</div>
						<div class="content">
							${opt.content}
						</div>
						<div class="footer">
							<a class="btn-ok">ok</a>
						</div>
					</div>
				</div>
			`;
			this.messageWrapper = document.createElement('div');
			this.messageWrapper.className = 'message-wrapper';
			this.messageWrapper.innerHTML = MessageHtml;
			let body = document.getElementsByTagName('body')[0];
			this.messageWrapper.querySelector('.btn-ok').addEventListener('click',(e)=>{
				this.$MessageHide();
				if(opt.okClick){
					opt.okClick(e);
				}
			},false);
			body.appendChild(this.messageWrapper);
		};
		Vue.prototype.$MessageHide = function() {
			let body = document.getElementsByTagName('body')[0];
			body.removeChild(this.$CheckMessage());
		};
		Vue.prototype.$CheckMessage = function() {
			let body = document.getElementsByTagName('body')[0];
			console.log(body.querySelector('.message-wrapper'));
			return body.querySelector('.message-wrapper');
		};
	}
}
