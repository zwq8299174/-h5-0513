<template>
	<div class="preview-page">
		<div class="img-wrapper">
			<img :src="$store.state.app.imgUrl"/>
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
				
			}
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/preview";
</style>