<template>
	<div class="preview-page">
		<div class="img-wrapper" ref="imgWrapper">
			<img :src="$store.state.app.imgUrl" ref="mainImg" :style="imgStyle"/>
		</div>
		<div class="bottom-container">
			<div class="form-wrapper">
				<div class="form-line">
					<input type="text" v-model="formData.nickname" placeholder="请输入姓名" />
				</div>
				<div class="form-line">
					<input type="tel" v-model="formData.mobile" placeholder="请输入手机号" />
				</div>
				<div class="form-line code">
					<input type="number" v-model="formData.captcha" placeholder="请输入验证码" />
					<a class="get-code" @click="getCode">{{secondsText}}</a>
				</div>
			</div>
			<div class="btn-wrapper">
				<a class="btn-retry">
					<i class="icon" @click="again">&#xe612;</i>
					<span>重拍</span>
				</a>
				<a class="btn-sure" @click="attend">
					<i class="icon">&#xe607;</i>
					<span>确认</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'PreviewPage',
		data() {
			return {
				imgStyle:{},
				seconds:59,
				secondsText:'获取',
				clock:null,
				formData:{
					nickname:'',
					mobile:'',
					captcha:''
				}
			}
		},
		mounted(){
			this.setImgStyle();
		},
		methods:{
			attend(){
				let result = this.checkForm();
				if(result){
					this.API_attend(this.formData).then((d)=>{
						if(d.code!=200){
							alert(d.msg);
						};
						this.$router.push({
							name:'coupon'
						});
					});
				}
			},
			setImgStyle(){
				let wrapperHeight = this.$refs.imgWrapper.offsetHeight;
				let imgHeight = 0,imgTop = 0;
				let oImg = new Image();
        			oImg.src = this.$refs.mainImg.src;
        			oImg.onload = (e) => {
        				imgHeight = Math.round(750/oImg.width*oImg.height);
        				imgTop = Math.round((wrapperHeight - imgHeight)/2);
        				this.imgStyle = {
        					height:imgHeight+'px',
        					'margin-top':imgTop+'px'
        				};
        			};
			},
			getCode(){
				if(!this.check('mobile') || this.secondsText!='获取') return;
				this.API_getCode(this.formData.mobile).then((d)=>{
					this.clock = window.setInterval(()=>{
						if(this.seconds>0){
							this.secondsText = this.seconds+'s';
							this.seconds--;
						}else{
							this.secondsText = '获取';
							window.clearInterval(this.clock);
						}
					},1000);
				});
			},
			check(n){
				switch(n){
					case 'nickname': 
						if(this.formData.nickname==''){
							alert('请填写姓名');
							return false;
						}else{
							return true;
						}
					break;
					case 'mobile': 
						if(this.formData.mobile==''){
							alert('请填写手机号');
							return false;
						}else if(!this.formData.mobile.match(/^1[3|4|5|7|8|9][0-9]{9}$/)){
							alert('请正确填写手机号');
							return false;
						}else{
							return true;
						}
					break;
					case 'captcha': 
						if(this.formData.captcha==''){
							alert('请填写验证码');
							return false;
						}else{
							return true;
						}
					break;
					default: return true;
				}
			},
			checkForm(){
				let result = true;
				for(name in this.formData){
					if(!this.check(name)){
						result = false;
					}
				};
				return result;
			},
			again(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/preview";
</style>