<template>
	<div class="preview-page">
		<div class="img-wrapper" ref="imgWrapper">
			<img :src="$store.state.app.imgUrl" ref="mainImg" :style="imgStyle"/>
		</div>
		<div class="bottom-bar">
			<!--<div class="btn-wrapper">-->
				<a class="btn-retry">
					<i class="icon">&#xe612;</i>
					<span>重拍</span>
				</a>
				<a class="btn-sure" @click="attend">
					<i class="icon">&#xe607;</i>
					<span>确认</span>
				</a>
			<!--</div>-->
		</div>
	</div>
</template>

<script>
	export default {
		name:'PreviewPage',
		data() {
			return {
				imgStyle:{},
			}
		},
		mounted(){
			this.setImgStyle();
		},
		methods:{
			attend(){
				this.API_attend().then((d)=>{
					console.log(d);
					if(d.code==200){
						this.$router.push({
							name:'vote'
						});
					}else{
						this.$router.push({
							name:'coupon'
						});
					}
				})
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/preview";
</style>