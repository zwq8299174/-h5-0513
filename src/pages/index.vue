<template>
	<div class="index-page">
		<a class="go-rules" @click="goRules">规则说明&raquo;</a>
		<div class="btn-wrapper">
			<a class="btn-vote" @click="goVote">投票</a>
			<a class="btn-join" @click="joinIn">立即参与</a>
		</div>
	</div>
</template>

<script>
	export default {
		name:'IndexPage',
		data() {
			return {

			}
		},
		methods:{
			goRules(){
				this.$router.push({
					name:'rules'
				})
			},
			joinIn(){
				this.checkAttend();
//				this.$router.push({
//					name:'take-picture'
//				});
			},
			goVote(){
				this.API_time().then((d)=>{
					let currenttime = d.result.currenttime;
					let starttime = d.result.starttime;
					let endtime = d.result.endtime;
					if(currenttime>starttime && currenttime<endtime){
						this.$router.push({
							name:'vote'
						});
					}else if(currenttime<starttime){
						alert('来早了,活动还未开始o(╥﹏╥)o');
					}else{
						this.$router.push({
							name:'rank'
						});
					}
				});
			},
			checkAttend(){
//				this.API_ossSign().then((d)=>{
//					console.log(d)
//				});
				this.API_checkAttend().then((d)=>{
					console.log(d);
					if(d.code==302){
						this.$router.push({
							name:'coupon'
						});
					}else{
						this.$router.push({
							name:'take-picture'
						});
					}
				});
//				this.API_listVote().then((d)=>{
//					console.log(d)
//				});
//				this.API_vote().then((d)=>{
//					console.log(d)
//				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/index";
</style>
