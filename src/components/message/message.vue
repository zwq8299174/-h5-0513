<template>
	<div class="message-wrapper" v-if="show">
		<div class="message-mask"></div>
		<div class="message-container">
			<div class="message-box">
				<div class="title">
					<img src="@/assets/img/message-title.png" alt="">
				</div>
				<div class="content">
					{{content}}
				</div>
				<div class="footer">
					<a class="btn-ok" @click="okClick($event)">ok</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Message',
		components:{

		},
		data() {
			return {
				content:'',
				show:false
			}
		},
		created() {

		},
		methods: {
			$MessageShow(opt){
				this.content = opt.content;
				this.show = true;
				if(opt.okClick){
					this.okClick = opt.okClick;
				}
			},
			$MessageHihe(){
				this.show = false;
			},
			okClick(){

			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../styles/message";
</style>
