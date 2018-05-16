<template>
	<div id="app">
		<router-view/>
		<loader v-if="$store.state.app.loading" :loading="$store.state.app.loading" :progress="$store.state.app.progress" :showText="$store.state.app.showText"></loader>
		<!-- <message></message> -->
	</div>
</template>

<script>
	import  Utils from '@/libs/utils.js';
	import loader from '@/components/loader';
	export default {
		name: 'App',
		components: {
			loader
		},
		created(){
			console.log(Utils.getUrlVars().code);
			if(Utils.getUrlVars().code){
				this.$store.state.app.code = Utils.getUrlVars().code;
				this.API_getWxUserInfo().then((d)=>{
					console.log(d);
					this.$store.state.app.openid = d.result.openid;
					this.$store.state.app.nickname = d.result.nickname;
				});
			}
		}
	}
</script>
