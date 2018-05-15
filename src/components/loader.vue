<template>
	<div class="loading-wrapper">
		<div class="loading-container">
			<bounce-loader :loading="loading"></bounce-loader>
			<p v-if="showText"><span>{{loadingText}}:&nbsp;&nbsp;{{progress}}</span></p>
		</div>
	</div>
</template>

<script>
	import BounceLoader from '@/components/bounce-loader';
	
	export default {
		name: 'loader',
		components:{
			BounceLoader
		},
		props: {
			loading: {
				type: Boolean,
				default: false
			},
			progress:{
				type: String,
				default: '0%'
			},
			loadingText:{
				type: String,
				default: '已上传'
			},
			showText:{
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				
			}
		},
		created() {
			
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.loading-wrapper{
		position: fixed;top:0;left:0;right: 0;bottom: 0;background-color: rgba(255,255,255,.8);display: flex;justify-content: center;align-items: center;z-index:9999;
		flex-wrap: wrap;
		p{line-height:80px;width: 100%;text-align: center;}
		.loading-container{
			display: flex;
    		flex-wrap: wrap;
    		justify-content: center;
		}
	}
</style>